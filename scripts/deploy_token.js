// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  let anycallProxyContract = "0x965f84D915a9eFa2dD81b653e3AE736555d945f4";
  const VestedERC20 = await hre.ethers.getContractFactory("VestedERC20");
  const vestedERC20 = await VestedERC20.deploy(1000000000, anycallProxyContract);

  await vestedERC20.deployed();

  console.log(
    `Deployed to ${vestedERC20.address}`
  );

  await hre.run("verify:verify", {
    address: vestedERC20.address,
    constructorArguments: [1000000000, anycallProxyContract],
});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
