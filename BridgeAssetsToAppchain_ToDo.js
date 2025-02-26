import 'dotenv/config';
import { createWalletClient, http, createPublicClient, parseEther } from 'viem';
import { account1 } from './config_ToDo.js';
import { baseSepolia } from 'viem/chains';

const BRIDGE_ADDRESS = process.env.BRIDGE_ADDRESS;
const amountOfEther = ''; //Amount of ether to send to the bridge

//Establish the wallet client for the originating chain
export const walletClient = createWalletClient({
  account: '', //account from config file
  chain: '', //originating chain (ex. Base Sepolia)
  transport: '', //http(RPC URL for the originating chain)
});

//Establish a public client for the originating chain
const baseSepoliaClient = createPublicClient({
  chain: '', //originating chain (ex. Base Sepolia)
  transport: '', //http(RPC URL for the originating chain)
});

export async function sendFundsToBridge(walletClient, bridgeAddress, amount) {
  const accounts = await walletClient.getAddresses();
  const balance = await baseSepoliaClient.getBalance({
    address: accounts[0],
  });
  console.log(
    `Sending ${parseEther(
      amount
    )} to this appchain bridge contract: ${bridgeAddress}`
  );

  try {
    const tx = await walletClient.sendTransaction({
      to: '', //bridge address of the appchain
      value: parseEther(amount),
    });
    console.log(`Transaction sent: ${tx}`);
  } catch (error) {
    console.error(`Error sending transaction: ${error}`);
  }
}

sendFundsToBridge(walletClient, BRIDGE_ADDRESS, amountOfEther);
