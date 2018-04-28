# Callisto Explorer

[![Build Status](https://travis-ci.org/chainkorea/clo-explorer.svg?branch=master)](https://travis-ci.org/chainkorea/clo-explorer)
[![dependencies Status](https://david-dm.org/chainkorea/clo-explorer/status.svg)](https://david-dm.org/chainkorea/clo-explorer)

<b>Live Version: [cloexplorer.org](https://cloexplorer.org)</b>

## Local installation

Clone the repo

`git clone https://github.com/chainkorea/clo-explorer`

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
        "symbol": "CLO",
        "name": "Callisto Network",
        "title": "Callisto Network Blockchain Explorer",
        "author": "Callisto Network Community",
        "miners": {
           "0xed15b7b7b5dc81daae277a081b47a04c3a8bea1b": "clopool.pro",
           "0xd125b3b146d21d058edac7a5b5f7481a571e4c46": "clo.epool.io",
           "0xe683de43ccfbef16424ecb577f288cf343dfbc5a": "coinfoundry.org",
           "0x0073cf1b9230cf3ee8cab1971b8dbef21ea7b595": "clo.2miners.com",
           "0x40b67778d97a7d15a519d907ed991948e8ea486c": "pool.baikalmine.com",
           "0x8845ee5cae61b807678415bb8a68773df9d48f8e": "callistopool.org",
           "0x52f0458c70af5cdeb555cad800add5f82c3e59f7": "callisto-pool.com",
           "0xd06bb917c099acf24d43552b5aa760aeef7cd4aa": "callistopool.io",
           "0xf35074bbd0a9aee46f4ea137971feec024ab704e": "clo.solopool.org",
           "0xd144e30a0571aaf0d0c050070ac435deba461fab": "clona.ru",
           "0x8057c50c6d72f4399862fefbc8d3b8a8757cde57": "clopool.net",
           "0xfbf679d6ed0cb9747e05e7e8ae06e890e6bf2b66": "clo.europool.me",
           "0x11905bd0863ba579023f662d1935e39d0c671933": "comining.io",
           "0xe4f3cab1f11d5a917ac73c80927e64ee4b1a445a": "clo.pool.sexy",
           "0xae83a3e136e6714e6c1e5483950936d7872fb999": "clo.mobilla.io",
           "0x39ec1c88a7a7c1a575e8c8f42eff7630d9278179": "clo.topmining.co.kr",
           "0xd6d27255eaef8c3fcb5433acb5494bf04cb5f2c3": "clo.gonspool.com"
        }
    }
}

```

```nodeAddr```    Your node API RPC address.

```gethPort```    Your node API RPC port.

```startBlock```  This is the start block of the blockchain, should always be 0 if you want to sync the whole CLO blockchain.

```endBlock```    This is usually the 'latest'/'newest' block in the blockchain, this value gets updated automatically, and will be used to patch missing blocks if the whole app goes down.

```quiet```       Suppress some messages. (admittedly still not quiet)

```syncAll```     If this is set to true at the start of the app, the sync will start syncing all blocks from lastSync, and if lastSync is 0 it will start from whatever the endBlock or latest block in the blockchain is.

```patch```       If set to true and below value is set, sync will iterated through the # of blocks specified

```patchBlocks``` If `patch` is set to true, the amount of block specified will be check from the latest one.


### Run:
If you run

`npm start`

Leave this running in the background to continuously fetch new blocks.

`node app.js`

Leave this running in the background to view the front end: Opened on http://127.0.0.1:3000 for default.

### Stats

it will also start sync.js and start syncing the blockchain based on set parameters. NOTE running app.js will always start sync.js keep listening and syncing the latest block.

`./tools/stats.js`
