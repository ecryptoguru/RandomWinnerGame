# Random winner using Chainlink VRF 

Requirements

We will build a lottery game today

Each game will have a max number of players and an entry fee

After max number of players have entered the game, one winner is chosen at random

The winner will get maxplayers*entryfee amount of ether for winning the game

Try running some of the following tasks:

```shell
mkdir hardhat-tutorial
cd hardhat-tutorial
npm init --yes
npm install --save-dev hardhat
npx hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox
npm install @openzeppelin/contracts
npm install --save @chainlink/contracts
npm install dotenv
npx hardhat compile
npx hardhat run scripts/deploy.js --network mumbai

```
