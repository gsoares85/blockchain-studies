import { expect } from "chai";
import { ethers } from "hardhat";

describe("Authenticity", function () {
  async function deploy() {
    const [contractOwner] = await ethers.getSigners();

    const Authenticity = await ethers.getContractFactory("Authenticity");
    const authenticity = await Authenticity.deploy();

    return { authenticity, contractOwner };
  }

  describe("Deployment", function () {
    it("Should be deployed", async function () {
      const { authenticity } = await deploy();

      expect(await authenticity.getAddress).to.exist;
    });
  });
});
