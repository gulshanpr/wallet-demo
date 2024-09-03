'use client'
import { useWeb3ModalAccount } from '@web3modal/ethers/react'

export default function Home() {
  const { address } = useWeb3ModalAccount()

  return (
    <div className='space-y-[60px] mt-[100px]'>
      <div className="flex justify-center">
        <w3m-button />
      </div>
      <div className='flex justify-center text-xs sm:text-sm md:text-base lg:text-lg'>
        {address && (
          <div className='break-all text-center'>
            {address}
          </div>
        )}
      </div>

    </div>
  );
}
