/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { VoteLock } from "./VoteLock";

export class VoteLockFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _bond: string,
    _cv: string,
    _treasury: string,
    overrides?: Overrides
  ): Promise<VoteLock> {
    return super.deploy(_bond, _cv, _treasury, overrides || {}) as Promise<
      VoteLock
    >;
  }
  getDeployTransaction(
    _bond: string,
    _cv: string,
    _treasury: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_bond, _cv, _treasury, overrides || {});
  }
  attach(address: string): VoteLock {
    return super.attach(address) as VoteLock;
  }
  connect(signer: Signer): VoteLockFactory {
    return super.connect(signer) as VoteLockFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VoteLock {
    return new Contract(address, _abi, signerOrProvider) as VoteLock;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bond",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cv",
        type: "address",
      },
      {
        internalType: "address",
        name: "_treasury",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "balanceAtTs",
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
    ],
    name: "balanceOf",
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
        name: "to",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "lock",
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
    name: "lockCreatorBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "totalVotingPowerAtTs",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620014863803806200148683398181016040528101906200003791906200012a565b826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506969e10de76676d0800000600381905550505050620001ce565b6000815190506200012481620001b4565b92915050565b6000806000606084860312156200014057600080fd5b6000620001508682870162000113565b9350506020620001638682870162000113565b9250506040620001768682870162000113565b9150509250925092565b60006200018d8262000194565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001bf8162000180565b8114620001cb57600080fd5b50565b6112a880620001de6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80636f121578116100715780636f1215781461016457806370a082311461016e57806371ef76631461019e578063b6b55f25146101ba578063cbf8eda9146101d6578063dd46706414610206576100a9565b80632082b4d1146100ae5780632e1a7d4d146100cc578063417edd4d146100e857806350f3282b146101185780635c19a95c14610148575b600080fd5b6100b6610222565b6040516100c39190611134565b60405180910390f35b6100e660048036038101906100e19190610e36565b610475565b005b61010260048036038101906100fd9190610dd1565b610708565b60405161010f9190611134565b60405180910390f35b610132600480360381019061012d9190610e36565b610864565b60405161013f9190611134565b60405180910390f35b610162600480360381019061015d9190610da8565b61086b565b005b61016c61086e565b005b61018860048036038101906101839190610da8565b610870565b6040516101959190611134565b60405180910390f35b6101b860048036038101906101b39190610dd1565b610883565b005b6101d460048036038101906101cf9190610e36565b610887565b005b6101f060048036038101906101eb9190610dd1565b610c43565b6040516101fd9190611134565b60405180910390f35b610220600480360381019061021b9190610e36565b610c57565b005b60008062093a80635f8cd70042038161023757fe5b049050606481111561024857606490505b6000610274826904a89f54ef0121c00000026a01d1de3d2d5c712f000000610c5a90919063ffffffff16565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016102f49190610fee565b60206040518083038186803b15801561030c57600080fd5b505afa158015610320573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103449190610e5f565b905060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016103c49190610fee565b60206040518083038186803b1580156103dc57600080fd5b505afa1580156103f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104149190610e5f565b905061046c60035461045e8361045086610442896a084595161401484a000000610c5a90919063ffffffff16565b610c5a90919063ffffffff16565b610c5a90919063ffffffff16565b610c5a90919063ffffffff16565b94505050505090565b600081116104b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104af906110f4565b60405180910390fd5b60006104c333610870565b905081811015610508576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ff90611114565b60405180910390fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000818054905090506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060018303815481106105a357fe5b9060005260206000209060030201905060006105cc868360010154610c5a90919063ffffffff16565b905042826000015414156105e857808260010181905550610652565b8360405180606001604052804281526020018381526020018460020154815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101556040820151816002015550505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33886040518363ffffffff1660e01b81526004016106ad929190611069565b602060405180830381600087803b1580156106c757600080fd5b505af11580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff9190610e0d565b50505050505050565b600080600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905060008180549050148061077c57508060008154811061076757fe5b90600052602060002090600302016000015483105b1561078b57600091505061085e565b600080600183805490500390508281815481106107a457fe5b90600052602060002090600302016000015485106107e4578281815481106107c857fe5b906000526020600020906003020160010154935050505061085e565b5b8181111561083a5760006002600184840101816107fe57fe5b0490508584828154811061080e57fe5b9060005260206000209060030201600001541161082d57809250610834565b6001810391505b506107e5565b82828154811061084657fe5b90600052602060002090600302016001015493505050505b92915050565b6000919050565b50565b565b600061087c8242610708565b9050919050565b5050565b600081116108ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c1906110f4565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33306040518363ffffffff1660e01b8152600401610928929190611009565b60206040518083038186803b15801561094057600080fd5b505afa158015610954573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109789190610e5f565b9050818110156109bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b4906110d4565b60405180910390fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000818054905090506000811415610a7c578160405180606001604052804281526020018681526020014281525090806001815401808255809150506001900390600052602060002090600302016000909190919091506000820151816000015560208201518160010155604082015181600201555050610b8d565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001830381548110610acb57fe5b906000526020600020906003020190504281600001541415610b0b57610afe858260010154610ca490919063ffffffff16565b8160010181905550610b8b565b826040518060600160405280428152602001610b34888560010154610ca490919063ffffffff16565b81526020018360020154815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000155602082015181600101556040820151816002015550505b505b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330876040518463ffffffff1660e01b8152600401610bea93929190611032565b602060405180830381600087803b158015610c0457600080fd5b505af1158015610c18573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3c9190610e0d565b5050505050565b6000610c4f8383610708565b905092915050565b50565b6000610c9c83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610cf9565b905092915050565b600080828401905083811015610cef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce6906110b4565b60405180910390fd5b8091505092915050565b6000838311158290610d41576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d389190611092565b60405180910390fd5b5060008385039050809150509392505050565b600081359050610d638161122d565b92915050565b600081519050610d7881611244565b92915050565b600081359050610d8d8161125b565b92915050565b600081519050610da28161125b565b92915050565b600060208284031215610dba57600080fd5b6000610dc884828501610d54565b91505092915050565b60008060408385031215610de457600080fd5b6000610df285828601610d54565b9250506020610e0385828601610d7e565b9150509250929050565b600060208284031215610e1f57600080fd5b6000610e2d84828501610d69565b91505092915050565b600060208284031215610e4857600080fd5b6000610e5684828501610d7e565b91505092915050565b600060208284031215610e7157600080fd5b6000610e7f84828501610d93565b91505092915050565b610e91816111b3565b82525050565b610ea08161116b565b82525050565b6000610eb18261114f565b610ebb818561115a565b9350610ecb8185602086016111e9565b610ed48161121c565b840191505092915050565b6000610eec601b8361115a565b91507f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006000830152602082019050919050565b6000610f2c60198361115a565b91507f546f6b656e20616c6c6f77616e636520746f6f20736d616c6c000000000000006000830152602082019050919050565b6000610f6c601d8361115a565b91507f416d6f756e74206d7573742062652067726561746572207468616e20300000006000830152602082019050919050565b6000610fac60148361115a565b91507f496e73756666696369656e742062616c616e63650000000000000000000000006000830152602082019050919050565b610fe8816111a9565b82525050565b60006020820190506110036000830184610e97565b92915050565b600060408201905061101e6000830185610e88565b61102b6020830184610e97565b9392505050565b60006060820190506110476000830186610e88565b6110546020830185610e97565b6110616040830184610fdf565b949350505050565b600060408201905061107e6000830185610e88565b61108b6020830184610fdf565b9392505050565b600060208201905081810360008301526110ac8184610ea6565b905092915050565b600060208201905081810360008301526110cd81610edf565b9050919050565b600060208201905081810360008301526110ed81610f1f565b9050919050565b6000602082019050818103600083015261110d81610f5f565b9050919050565b6000602082019050818103600083015261112d81610f9f565b9050919050565b60006020820190506111496000830184610fdf565b92915050565b600081519050919050565b600082825260208201905092915050565b600061117682611189565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006111be826111c5565b9050919050565b60006111d0826111d7565b9050919050565b60006111e282611189565b9050919050565b60005b838110156112075780820151818401526020810190506111ec565b83811115611216576000848401525b50505050565b6000601f19601f8301169050919050565b6112368161116b565b811461124157600080fd5b50565b61124d8161117d565b811461125857600080fd5b50565b611264816111a9565b811461126f57600080fd5b5056fea2646970667358221220bef5b409291635e534246789426275ac9f8018ba6e4efa9f1826b5b39bcfb7d064736f6c63430007030033";
