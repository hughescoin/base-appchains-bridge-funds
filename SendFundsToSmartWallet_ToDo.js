import { createSmartAccounts } from './config.js';
import { account } from './config.js';
import { createWalletClient, http, parseEther } from 'viem';

//TODO: Update the wallet client with the correct account and rpc url
const walletClientAppchain = createWalletClient({
  account: '', //Account created in config.js using your private key
  transport: '', //rpc url for the appchain
});
const amountOfEther = ''; //Amount of ether to send to the smart wallet

const value = parseEther(amountOfEther);

//TODO: Create the smart account then send the funds to it using the wallet client
async function sendFundsToSmartWallet() {
  const smartAccounts = await createSmartAccounts();
  const smartAccountAddress = smartAccounts['Smart Account 1'].address;

  try {
    const tx = await walletClientAppchain.sendTransaction({
      account: '', //Account created in config.js using your private key
      to: '', //Smart account address
      value: value, //Amount of ether to send to the smart wallet
    });
    console.log(`Transaction sent: ${tx}`);
  } catch (error) {
    console.error(`Error sending transaction: ${error}`);
  }
}

sendFundsToSmartWallet();
