import { createSmartAccounts } from './config.js';
import { account1 } from './config.js';
import { createWalletClient, http, parseEther } from 'viem';

const walletClientL3 = createWalletClient({
  account: account1,
  transport: http(process.env.RPC_URL),
});

const value = parseEther('0.000125');

async function sendFundsToSmartWallet() {
  const smartAccounts = await createSmartAccounts();
  const smartAccountAddress = smartAccounts['Smart Account 1'].address;

  try {
    const tx = await walletClientL3.sendTransaction({
      account: account1,
      to: smartAccountAddress,
      value: value,
    });
    console.log(`Transaction sent: ${tx}`);
  } catch (error) {
    console.error(`Error sending transaction: ${error}`);
  }
}

sendFundsToSmartWallet();
