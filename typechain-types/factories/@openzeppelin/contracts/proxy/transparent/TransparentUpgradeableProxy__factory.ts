/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162000dcf38038062000dcf833981016040819052620000269162000424565b828162000036828260006200004d565b50620000449050826200007f565b50505062000557565b6200005883620000f1565b600082511180620000665750805b156200007a5762000078838362000133565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000c160008051602062000d88833981519152546001600160a01b031690565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000ee8162000162565b50565b620000fc8162000200565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200015b838360405180606001604052806027815260200162000da86027913962000297565b9392505050565b6001600160a01b038116620001cd5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b8060008051602062000d888339815191525b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381163b6200026f5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001c4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc620001df565b6060600080856001600160a01b031685604051620002b6919062000504565b600060405180830381855af49150503d8060008114620002f3576040519150601f19603f3d011682016040523d82523d6000602084013e620002f8565b606091505b5090925090506200030c8683838762000316565b9695505050505050565b606083156200038a57825160000362000382576001600160a01b0385163b620003825760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001c4565b508162000396565b6200039683836200039e565b949350505050565b815115620003af5781518083602001fd5b8060405162461bcd60e51b8152600401620001c4919062000522565b80516001600160a01b0381168114620003e357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156200041b57818101518382015260200162000401565b50506000910152565b6000806000606084860312156200043a57600080fd5b6200044584620003cb565b92506200045560208501620003cb565b60408501519092506001600160401b03808211156200047357600080fd5b818601915086601f8301126200048857600080fd5b8151818111156200049d576200049d620003e8565b604051601f8201601f19908116603f01168101908382118183101715620004c857620004c8620003e8565b81604052828152896020848701011115620004e257600080fd5b620004f5836020830160208801620003fe565b80955050505050509250925092565b6000825162000518818460208701620003fe565b9190910192915050565b602081526000825180602084015262000543816040850160208701620003fe565b601f01601f19169190910160400192915050565b61082180620005676000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100855780635c60da1b146100985780638f283970146100c9578063f851a440146100e95761005d565b3661005d5761005b6100fe565b005b61005b6100fe565b34801561007157600080fd5b5061005b6100803660046106b3565b610118565b61005b6100933660046106ce565b610155565b3480156100a457600080fd5b506100ad6101bc565b6040516001600160a01b03909116815260200160405180910390f35b3480156100d557600080fd5b5061005b6100e43660046106b3565b6101ed565b3480156100f557600080fd5b506100ad61020d565b61010661022e565b6101166101116102c3565b6102cd565b565b6101206102f1565b6001600160a01b0316330361014d5761014a81604051806020016040528060008152506000610324565b50565b61014a6100fe565b61015d6102f1565b6001600160a01b031633036101b4576101af8383838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610324915050565b505050565b6101af6100fe565b60006101c66102f1565b6001600160a01b031633036101e2576101dd6102c3565b905090565b6101ea6100fe565b90565b6101f56102f1565b6001600160a01b0316330361014d5761014a8161034f565b60006102176102f1565b6001600160a01b031633036101e2576101dd6102f1565b6102366102f1565b6001600160a01b031633036101165760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f78792074617267606482015261195d60f21b608482015260a4015b60405180910390fd5b60006101dd6103a3565b3660008037600080366000845af43d6000803e8080156102ec573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b61032d836103cb565b60008251118061033a5750805b156101af57610349838361040b565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6103786102f1565b604080516001600160a01b03928316815291841660208301520160405180910390a161014a81610437565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610315565b6103d4816104e0565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606061043083836040518060600160405280602781526020016107c560279139610574565b9392505050565b6001600160a01b03811661049c5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084016102ba565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80546001600160a01b0319166001600160a01b039290921691909117905550565b6001600160a01b0381163b61054d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016102ba565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6104bf565b6060600080856001600160a01b0316856040516105919190610775565b600060405180830381855af49150503d80600081146105cc576040519150601f19603f3d011682016040523d82523d6000602084013e6105d1565b606091505b50915091506105e2868383876105ec565b9695505050505050565b6060831561065b578251600003610654576001600160a01b0385163b6106545760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102ba565b5081610665565b610665838361066d565b949350505050565b81511561067d5781518083602001fd5b8060405162461bcd60e51b81526004016102ba9190610791565b80356001600160a01b03811681146106ae57600080fd5b919050565b6000602082840312156106c557600080fd5b61043082610697565b6000806000604084860312156106e357600080fd5b6106ec84610697565b9250602084013567ffffffffffffffff8082111561070957600080fd5b818601915086601f83011261071d57600080fd5b81358181111561072c57600080fd5b87602082850101111561073e57600080fd5b6020830194508093505050509250925092565b60005b8381101561076c578181015183820152602001610754565b50506000910152565b60008251610787818460208701610751565b9190910192915050565b60208152600082518060208401526107b0816040850160208701610751565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220352c9d6da7816f2bfe852aeeba2e720abc95c98964a11e2d99f2bc3e97022f5964736f6c63430008130033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
