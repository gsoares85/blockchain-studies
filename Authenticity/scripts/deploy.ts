import { ethers } from "hardhat";

async function main() {
  const Authenticity = await ethers.getContractFactory("Authenticity");
  const authenticity = await Authenticity.deploy();

  await authenticity.waitForDeployment();

  const address = await authenticity.getAddress();

  console.log(`Authenticity deployed, address ${address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
