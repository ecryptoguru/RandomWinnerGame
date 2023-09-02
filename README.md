# RandomWinnerGame
Full-stack Nextjs dapp RandomWinner made using LinkVRF and GraphQL

# Random winner using Chainlink VRF 

Requirements

We will build a lottery game today
Each game will have a max number of players and an entry fee
After max number of players have entered the game, one winner is chosen at random
The winner will get maxplayers*entryfee amount of ether for winning the game

Openzeppelin libraries and chainlink contracts have been used in a Hardhat Development Environment.

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
# Frontend using Next.js version 12

Web3modal, ethersV5 and axios have been used

```bash
npx create-next-app@12
cd my-app
npm run dev
npm install web3modal
npm i ethers@5
npm i axios
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


