# Ethereum Social Explorer

[![Discord](https://discordapp.com/api/guilds/417146776974262273/widget.png)](https://discord.gg/h6vsEuw)
[![Build Status](https://travis-ci.org/ethereumsocial/explorer.svg?branch=master)](https://travis-ci.org/ethereumsocial/explorer)
[![dependencies Status](https://david-dm.org/ethereumsocial/explorer/status.svg)](https://david-dm.org/ethereumsocial/explorer)

<b>Live Version: [explorer.ethereumsocial.kr](https://explorer.ethereumsocial.kr)</b>

## Local installation

Clone the repo

`git clone https://github.com/ethereumsocial/explorer`

Download [Nodejs and npm](https://docs.npmjs.com/getting-started/installing-node "Nodejs install") if you don't have them

Install dependencies:

`npm install`

Install mongodb:

MacOS: `brew install mongodb`

Ubuntu: `sudo apt-get install -y mongodb-org`

## Populate the DB

This will fetch and parse the entire blockchain.

Setup your configuration file: `cp config.example.json config.json`

Edit `config.json` as you wish

Basic settings:
```json
{
    "nodeAddr":     "localhost",
    "gethPort":     8545,
    "startBlock":   0,
    "endBlock":     "latest",
    "quiet":        true,
    "syncAll":      true,
    "patch":        true,
    "patchBlocks":  100,
    "settings": {
        "symbol": "ETSC",
        "name": "Ethereum Social",
        "title": "Ethereum Social Block Explorer",
        "author": "Ethereum Social Community",
        "miners": {
           "0x666c8a0d7219320f06907faa3bbaa400063d6b78": "pool.ethereumsocial.kr",
           "0xb5e9b00fc2b3eba36c26c8c81f0b6bb41f40354d": "etsc.reversegainz.info",
           "0x776808e7688432755b9e91a838410d29e532c624": "etscpool.gominer.cn",
           "0xf35074bbd0a9aee46f4ea137971feec024ab704e": "etsc.solopool.org",
           "0x11905bd0863ba579023f662d1935e39d0c671933": "comining.io",
           "0x468fc6329d2825bf28c44aa1bc6d40a4dda96f65": "etsc.altpool.pro",
           "0x814399490a89438e3faa342f8b908f1aeaeddd73": "etsc.mole-pool.net"
        }
    }
}

```

```nodeAddr```    Your node API RPC address.

```gethPort```    Your node API RPC port.

```startBlock```  This is the start block of the blockchain, should always be 0 if you want to sync the whole ETSC blockchain.

```endBlock```    This is usually the 'latest'/'newest' block in the blockchain, this value gets updated automatically, and will be used to patch missing blocks if the whole app goes down.

```quiet```       Suppress some messages. (admittedly still not quiet)

```syncAll```     If this is set to true at the start of the app, the sync will start syncing all blocks from lastSync, and if lastSync is 0 it will start from whatever the endBlock or latest block in the blockchain is.

```patch```       If set to true and below value is set, sync will iterated through the # of blocks specified

```patchBlocks``` If `patch` is set to true, the amount of block specified will be check from the latest one.


### Run:
If you run

  `npm start`

it will also start sync.js and start syncing the blockchain based on set parameters. NOTE running app.js will always start sync.js keep listening and syncing the latest block.

You can leave sync.js running without app.js and it will sync and grab blocks based on config.json parameters
`node ./tools/sync.js`
