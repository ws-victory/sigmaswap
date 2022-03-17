import React from 'react'
import { usePreSaleContract } from 'hooks/useContract'
import Page from 'components/layout/Page'
import Hero from './components/Hero'
import PresaleContribute from './components/PresaleContribute'

const Presale = () => {
  // presale contract address
  const address = '0xd70E46a518E6a2608f4e12ac2e368743e6701Cfa'
  // token address
  const currencyAddress = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'
  const contract = usePreSaleContract(address)
  return (
    <>
      <Page>
        <Hero />
        <PresaleContribute
          address={address}
          currency="USDC"
          currencyAddress={currencyAddress}
          tokenDecimals={6}
          contract={contract}
        />
      </Page>
    </>
  )
}

export default Presale
