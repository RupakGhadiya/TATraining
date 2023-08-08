const {Web3} = require('web3');
require("dotenv").config();

const rpcPolygonMumbai = 'https://rpc.ankr.com/polygon_mumbai';

const web3 = new Web3(rpcPolygonMumbai);

const privateKey = process.env.YOUR_PRIVATE_KEY;

// let tokenAddress = '0x09Bda767862520B9b21B4E8A11B87Db27C674348'; 

let toAddress = '0xa0C17d95a05D5C5440728ffD36Fc38988c80120a'; 

let fromAddress = '0xC27db73b85C525739D082E9ea47a498795b2329a'; 

// let contractABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "_to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transfer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "_name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "_symbol",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "_totalSupply",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	}
// ]

// let contract = new web3.eth.Contract(contractABI, tokenAddress);

// // let amount = 3000;

// let data = contract.methods.transfer(toAddress, 30000).encodeABI();

sendErcToken();

async function sendErcToken() {
  try {
    let txObj = {
      gas : 50000,
      gasPrice: 1500000015,
      to: toAddress,
      value: '1000000000000000000',
    //   data: data,
      from: fromAddress,
    };

    let signedTx = await web3.eth.accounts.signTransaction(txObj, privateKey);
    let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log('Transaction Hash:', result.transactionHash);
    console.log('Transaction Receipt:', result);
  } catch (error) {
    console.error('Error transferring tokens:', error);
  }
}