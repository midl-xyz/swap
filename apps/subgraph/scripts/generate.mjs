#!/usr/bin/env node
import corePackageJson from "@v60swap/core/package.json" with { type: "json" };
import mustache from "mustache";
import path from "path";
import fs from "fs";
import arg from 'arg';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const args = arg({
  '--version': String,
  '--network': String,
  '-v': '--version',
  '-n': '--network',
});

let version = args.version ?? "latest";
let network = args.network ?? "goerli"


if (version === "latest") {
  version = corePackageJson.version;
}

/**
 * @type {import("@v60swap/core/deployments/1.0.0/goerli/UniswapV2Factory.json")}
 */
const Factory = (await import(
  `@v60swap/core/deployments/${version}/${network}/UniswapV2Factory.json`
  , {
    with: {
      type: "json"
    }
  })).default;


const templatePath = path.join(__dirname, "..", "subgraph.template.yaml");

const templateOptions = {
  address: Factory.address,
  startBlock: Factory.receipt.blockNumber,
  network
};

const template = fs.readFileSync(templatePath, "utf8");

const output = mustache.render(template, templateOptions);

const outputPath = path.join(__dirname, "..", `subgraph.${network}.yaml`);

fs.writeFileSync(outputPath, output);