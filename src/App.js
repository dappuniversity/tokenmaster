import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Sort from './components/Sort'
import Card from './components/Card'
import SeatChart from './components/SeatChart'

// ABIs
import TokenMaster from './abis/TokenMaster.json'

// Config
import config from './config.json'

function App() {

  return (
    <div>
      <header>

        <h2 className="header__title"><strong>Welcome to Tokenmaster</strong></h2>
      </header>

    </div>
  );
}

export default App;