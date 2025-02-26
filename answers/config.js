import 'dotenv/config';
import { defineChain, createPublicClient, http } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { toCoinbaseSmartAccount } from 'viem/account-abstraction';

//EOA Accounts
const PRIVATE_KEY_1 = process.env.PRIVATE_KEY_1;
export const account1 = privateKeyToAccount(PRIVATE_KEY_1);

//Appchain Config
const RPC_URL = process.env.RPC_URL;
const BLOCKEXPLORER_URL = process.env.BLOCKEXPLORER_URL;
const CHAIN_ID = process.env.CHAIN_ID;
const CHAIN_NAME = process.env.CHAIN_NAME;

//Definte a chain using the desired appchain specifications
export const appchain = defineChain({
  id: CHAIN_ID,
  name: CHAIN_NAME,
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: RPC_URL,
  },
  blockExplorerUrls: {
    default: BLOCKEXPLORER_URL,
  },
});

//Create a public client for the appchain
export const appchainPublicClient = createPublicClient({
  chain: appchain,
  transport: http(RPC_URL),
});

let smartAccount; //Smart account placeholder

export async function createSmartAccounts() {
  try {
    console.log(`Creating smart account 1 with ${account1.address}`);
    smartAccount = await toCoinbaseSmartAccount({
      client: appchainPublicClient,
      owners: [account1],
    });

    console.log(`Smart accounts created successfully`);
    console.log(`Smart account 1: ${smartAccount.address}`);
  } catch (error) {
    console.log(error);
  }

  return { 'Smart Account 1': smartAccount };
}
