import MetaMaskSDK from '@metamask/sdk'
import { useState, useEffect } from 'react'
import { giveBackInstance } from '../lib/metamask'

const Logo = () => {
  const [chain, setChain] = useState('')
  const [account, setAccount] = useState('')
  const [response, setResponse] = useState('')

  const connect = () => {
    const sdk = giveBackInstance()
    const myProvider = sdk?.getProvider()
    console.log(myProvider)
    // window.ethereum
    //   .request({ method: 'eth_requestAccounts', params: [] })
    //   .then((res) => {
    //     setAccount(res[0]);
    //   })
    //   .then((res) => console.log('request accounts', res))
    //   .catch((e) => console.log('request accounts ERR', e))
  }

  useEffect(() => {
    window.ethereum.on('accountsChanged', (accounts) => {
      console.log(accounts);
      setAccount(accounts?.[0]);
    });
  }, []);

  return (
    <div className={`logo`}>


      {account && `Connected account: ${account}`}
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        {account ? 'Connected' : 'Connect'}
      </button>
    </div>
  )
}

export default Logo