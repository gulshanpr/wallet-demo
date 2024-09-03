'use client'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

const walletConnetButtonProps = {
  buttonColor: "white",
  buttonTextColor: "black",
  subscribeStatus: false,
  initialText: "Wallet Connect",
  changeText: "Connected"
}



export default function Home() {
  const { address } = useWeb3ModalAccount()

  return (
    <div className='space-y-[60px]'>
      <div className="flex justify-center">
        <w3m-button />
      </div>
      <div className='flex justify-center'>
        {address && (
          <div>
            {address}
          </div>
        )}
      </div>
    </div>
  );
}
