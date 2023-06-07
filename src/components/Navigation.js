import { ethers } from 'ethers'

const Navigation = ({ query, setQuery, occasions, account, setAccount }) => {

  const connectHandler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)
  }
  
  return (
    <nav>
      <div className='nav__brand'>
        <h1>tokenmaster</h1>

        <input onChange={e=>{setQuery(e.target.value)}} 
        className='nav__search' 
        type="text" 
        placeholder='Find millions of experiences' 
        />

        <ul className='nav__links'>
          <li><a href="/">Concerts</a></li>
          <li><a href="/">Sports</a></li>
          <li><a href="/">Arts & Theater</a></li>
          <li><a href="/">More</a></li>
        </ul>
      </div>

      {account ? (
        <button
          type="button"
          className='nav__connect'
        >
          {account.slice(0, 6) + '...' + account.slice(38, 42)}
        </button>
      ) : (
        <button
          type="button"
          className='nav__connect'
          onClick={connectHandler}
        >
          Connect
        </button>
      )}
    </nav>
  );
}

export default Navigation;