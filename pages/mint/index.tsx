import type { NextPage } from 'next'
import { ethers } from 'ethers'

import MintLayout from '../../components/layout/mint'
import Tickets from '../../components/tickets/Tickets'

const Mint: NextPage = () => {

  // Get ETH as small number ("0.01" => "10000000000000000")
  const bigNumberify = (amt: string) => ethers.utils.parseEther(amt)
  // Get ETH as small number ("10000000000000000" => "0.01")
  const smolNumberify = (amt:string, decimals:number = 18) => 
      parseFloat(ethers.utils.formatUnits(amt, decimals))

  const ethGa = '0.01'
  const ethVip = '0.02'
  const ethGaHex = bigNumberify(ethGa)._hex
  const ethVipHex = bigNumberify(ethVip)._hex

  const tickets = [
    {
      type: "ga",
      event: "ConsenSys 2022",
      description: "General Admission Ticket",
      price: ethGa,
      priceHexValue: ethGaHex // '0x2386f26fc10000' *eserialize.com
    },{
      type: "vip",
      event: "ConsenSys 2022",
      description: "VIP Ticket",
      price: ethVip,
      priceHexValue: ethVipHex // '0x470de4df820000' *eserialize.com
    }
  ]

  return (
    <MintLayout>
      {/* {!address
        ? <div>Not Connected to Ethereum</div> 
        :  */}
          <div className="flex-row">
            <div className="flex-col">
              <Tickets tickets={tickets} />
            </div>
            <div className="flex-col">
              <span>right</span>
            </div>
          </div>
      {/* } */}
    </MintLayout>
  )
}

export default Mint