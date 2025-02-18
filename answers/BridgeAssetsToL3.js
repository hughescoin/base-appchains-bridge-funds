import 'dotenv/config';
import { createWalletClient, http, createPublicClient, parseEther } from 'viem';
import { account1 } from './config.js';
import { baseSepolia } from 'viem/chains';

const BRIDGE_ADDRESS = process.env.BRIDGE_ADDRESS;
const amountOfEther = ''; //Amount of ether to send to the bridge

export const walletClient1 = createWalletClient({
  account: account1,
  chain: baseSepolia,
  transport: http(process.env.BASE_SEPOLIA_RPC_URL),
});

const baseSepoliaClient = createPublicClient({
  chain: baseSepolia,
  transport: http(process.env.BASE_SEPOLIA_RPC_URL),
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
      to: bridgeAddress,
      value: parseEther(amount),
    });
    console.log(`Transaction sent: ${tx}`);
  } catch (error) {
    console.error(`Error sending transaction: ${error}`);
  }
}

sendFundsToBridge(walletClient1, BRIDGE_ADDRESS, amountOfEther);
