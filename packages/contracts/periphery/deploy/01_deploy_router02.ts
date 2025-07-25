import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import packageJSON from "../package.json";

const getUniswapV2FactoryAddress = async (chain: string, version: string) => {
  const deployment = await import(
    `@midl-swap/core/deployments/${version}/${chain}/UniswapV2Factory.json`
  );

  return deployment.address;
};

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();

  await hre.deployments.deploy("UniswapV2Router02", {
    from: deployer,
    args: [
      await getUniswapV2FactoryAddress(hre.network.name, packageJSON.version),
      process.env.WETH_ADDRESS,
      process.env.ADDRESS_REGISTRY,
    ],
    log: true,
  });
};

deploy.tags = ["core"];

export default deploy;
