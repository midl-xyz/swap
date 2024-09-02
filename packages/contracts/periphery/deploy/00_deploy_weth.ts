import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  await hre.deployments.deploy("WPROM9", {
    from: deployer,
    args: [],
    log: true,
  });
};

deploy.tags = ["weth"];

export default deploy;
