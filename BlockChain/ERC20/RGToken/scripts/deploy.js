const hre = require("hardhat");

async function main() {
  const RGToken = await hre.ethers.getContractFactory("RGToken");
  const rGToken = await RGToken.deploy(100000000, 50);

  await rGToken.deployed();

  console.log("RGToken deployed: ", rGToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});