// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  let token = ""; //must be entered
  let vestingStart =  Math.round(Date.now() / 1000) + 2 * 60;
  let vestingDuration = 10000;
  let eligibleUsers = [""]; //must be entered
  let chainID =[97];
  let interactionAddress = [""]; //must be entered
  let totalTokens = 1000000;
  let anycallProxyContract = "0x965f84D915a9eFa2dD81b653e3AE736555d945f4";
  let anycallFeeContract = "0x7EA2be2df7BA6E54B1A9C70676f668455E329d29";
  const TokenVesting = await hre.ethers.getContractFactory("TokenVesting");
  const tokenVesting = await TokenVesting.deploy(token, vestingStart, vestingDuration, eligibleUsers, chainID, interactionAddress, totalTokens, anycallProxyContract, anycallFeeContract);

  await tokenVesting.deployed();

  console.log(
    `Deployed to ${tokenVesting.address}`
  );

  await hre.run("verify:verify", {
    address: tokenVesting.address,
    constructorArguments: [token, vestingStart, vestingDuration, eligibleUsers, chainID, interactionAddress, totalTokens, anycallProxyContract, anycallFeeContract],
});
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
