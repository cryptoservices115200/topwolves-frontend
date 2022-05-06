const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

const addresses = require('./addresses.json');
const hashedAddresses = addresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortPairs: true });
const rootHash = merkleTree.getRoot().toString('hex');
console.log(rootHash);
module.exports = function(address) {

  const claimingAddress = keccak256(address);
  const hexProof = merkleTree.getHexProof(claimingAddress);
  const isWhitelistMember = merkleTree.verify(hexProof, claimingAddress, rootHash);
  return {
        hexProof,
        isWhitelistMember
  };
}
