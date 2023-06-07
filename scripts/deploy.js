const hre = require("hardhat")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

async function main() {
  // Setup accounts & variables
  const [deployer] = await ethers.getSigners()
  const NAME = "TokenMaster"
  const SYMBOL = "TM"

  // Deploy contract
  const TokenMaster = await ethers.getContractFactory("TokenMaster")
  const tokenMaster = await TokenMaster.deploy(NAME, SYMBOL)
  await tokenMaster.deployed()

  console.log(`Deployed TokenMaster Contract at: ${tokenMaster.address}\n`)

  // List 6 events
  const occasions = [
    {
      name: "The Weeknd After Hours til Dawn Tour",
      cost: tokens(3),
      tickets: 1100,
      date: "June 31",
      time: "7:00PM EST",
      location: "Rogers Centre - Toronto, FL"
    },
    {
      name: "Ottawa Senators",
      cost: tokens(1),
      tickets: 0,
      date: "Sep 14",
      time: "2:30PM EST",
      location: "Canadian Tire Centre - Ottawa, Canada"
    },
    {
      name: "ETH Dubai Hackathon",
      cost: tokens(0.25),
      tickets: 110,
      date: "Jun 9",
      time: "9:30AM UTC+4",
      location: "Dubai, United Arab Emirates"
    },
    {
      name: "Miami Heat vs. Denver Nuggets",
      cost: tokens(5),
      tickets: 0,
      date: "Jun 7",
      time: "8:30PM EST",
      location: "Kaseya center - Miami, FL"
    },
  ]

  for (var i = 0; i < occasions.length; i++) {
    const transaction = await tokenMaster.connect(deployer).list(
      occasions[i].name,
      occasions[i].cost,
      occasions[i].tickets,
      occasions[i].date,
      occasions[i].time,
      occasions[i].location,
    )

    await transaction.wait()

    console.log(`Listed Event ${i + 1}: ${occasions[i].name}`)
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});