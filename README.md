# Bridging ETH to a Base Appchain

## Overview

Base Appchains empowers onchain builders, both crypto-native and web2, to deploy their L3 on Base in minutes. Key benefits include fast and seamless integration with Base's developer tools and Coinbase's retail platform, along with rapid deposit/withdrawal mechanics and support for pre-deployed contracts.

To make funds available for a smart account, one must first bridge using an EOA then establish a smart account on the destination chain. Let's dive in on how to do this.

## Usage

This repo is part of a Base tutorial, _Depositing to ETH to a Smart Wallet on an Appchain_ . You may follow along with the tutorial from our site.

If you are just interested in running the scripts instead of following along you may
use the completed scripts in the [answers](./answers/) directory.

## Prerequisites

- Node.js v18 or higher
- An Externally Owned Account (EOA) with ETH for bridging
- Access to a Base Appchain RPC URL
- Basic knowledge of JavaScript and blockchain concepts

## Installation

### Clone this repository

```bash
git clone https://github.com/hughescoin/base-appchains-bridge-funds.git
```

### Change into the directory:

```bash
cd base-appchains-bridge-funds
```

### Install dependencies

```bash
npm install
```

### Create an `.env` file to store your private key by running the following:

```bash
mv .env.example .env
```

### Update your `.env` file with Appchain Configuration details

- Your EOA private key
- The RPC URL of the desired Appchain
- The block explorer URL
- Name of the chain
- RPC URL of the originating chain (ex. Base Sepolia)

You are now set up to follow along with the tutorial or run any of the scripts in the `/answers` directory.
