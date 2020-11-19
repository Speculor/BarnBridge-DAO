/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BarnMock } from "./BarnMock";

export class BarnMockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BarnMock> {
    return super.deploy(overrides || {}) as Promise<BarnMock>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BarnMock {
    return super.attach(address) as BarnMock;
  }
  connect(signer: Signer): BarnMockFactory {
    return super.connect(signer) as BarnMockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BarnMock {
    return new Contract(address, _abi, signerOrProvider) as BarnMock;
  }
}

const _abi = [
  {
    inputs: [],
    name: "bondCirculatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lockCreatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockCreatorBalanceHasBeenCalled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "setBondCirculatingSupply",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "setVotingPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "votingPowerAtTs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102de806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632082b4d114610067578063274b91a9146100855780633f4bab02146100d35780634ec6eef41461010157806371ef766314610121578063cbf8eda91461016f575b600080fd5b61006f6101d1565b6040518082815260200191505060405180910390f35b6100d16004803603604081101561009b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506101da565b005b6100ff600480360360208110156100e957600080fd5b8101908080359060200190929190505050610222565b005b61010961022c565b60405180821515815260200191505060405180910390f35b61016d6004803603604081101561013757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061023f565b005b6101bb6004803603604081101561018557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061025e565b6040518082815260200191505060405180910390f35b60008054905090565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b8060008190555050565b600260009054906101000a900460ff1681565b6001600260006101000a81548160ff0219169083151502179055505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509291505056fea26469706673582212209db76a5c7021a233a3e6f7287a24d1314883bfc60f54124bef356a8aee6229d564736f6c63430007030033";