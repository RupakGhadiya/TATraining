const { Web3 } = require("web3");
require("dotenv").config();

const rpcPolygonMumbai = "https://rpc.ankr.com/polygon_mumbai";
const web3 = new Web3(rpcPolygonMumbai);
const privateKey = process.env.YOUR_PRIVATE_KEY;
console.log(privateKey);
const contractAddress = "0x77F12c9a2149CE3EacE7fC617Cd2915Bc85de234";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalSupply",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contract = new web3.eth.Contract(contractABI, contractAddress);
async function transferTokens(senderAddress, recipientAddress, amount) {
  try {
    const data = contract.methods
      .transfer(recipientAddress, amount)
      .encodeABI();
    const gas = await web3.eth.estimateGas({
      to: contractAddress,
      data: data,
      from: senderAddress,
    });
    const gasPrice = "1500000015";
    // Get the latest nonce for the sender's address
    const nonce = await web3.eth.getTransactionCount(senderAddress);
    // Transaction object
    const txObject = {
      to: contractAddress,
      data: data,
      gas: gas,
      gasPrice: gasPrice,
      nonce: nonce,
    };
    const signedTx = await web3.eth.accounts.signTransaction(
      txObject,
      privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log("Transaction receipt:", receipt);
  } catch (error) {
    console.error("Error transferring tokens:", error);
  }
}
const senderAddress = "0xb66a4424b8Fcd3C0b53F5f93875Da93C98e29003"; 
const recipientAddress = "0xC27db73b85C525739D082E9ea47a498795b2329a"; 
const amount = 100;
transferTokens(senderAddress, recipientAddress, amount);