import { expect } from 'chai';
import { ethers } from 'hardhat';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { IERC165, IRMRKMultiAsset, IRMRKMultiAssetAutoIndex, IOtherInterface } from '../interfaces';
import { RMRKMultiAssetAutoIndexMock } from '../../typechain-types';

import { bn } from '../utils';

// --------------- FIXTURES -----------------------

async function multiAssetAutoIndexFixture() {
  const factory = await ethers.getContractFactory('RMRKMultiAssetAutoIndexMock');
  const token = await factory.deploy('Chunky', 'CHNK');
  await token.deployed();

  return token;
}

describe('RMRKMultiAssetAutoIndexMock', async function () {
  let token: RMRKMultiAssetAutoIndexMock;
  let owner: SignerWithAddress;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    token = await loadFixture(multiAssetAutoIndexFixture);
  });

  it('can support IERC165', async function () {
    expect(await token.supportsInterface(IERC165)).to.equal(true);
  });

  it('can support IRMRKMultiAsset', async function () {
    expect(await token.supportsInterface(IRMRKMultiAsset)).to.equal(true);
  });

  it('can support IRMRKMultiAssetAutoIndex', async function () {
    expect(await token.supportsInterface(IRMRKMultiAssetAutoIndex)).to.equal(true);
  });

  it('does not support other interfaces', async function () {
    expect(await token.supportsInterface(IOtherInterface)).to.equal(false);
  });
});
