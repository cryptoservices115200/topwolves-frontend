import React from 'react'

class NFTList extends React.Component {

    render() {
        return (
            <div className='flex flex-col space-y-10 place-items-center pt-5rem pb-5rem lg:flex-row lg:space-x-16 lg:pt-6rem lg:pr-3rem lg:pb-12rem lg:pl-15.5rem xl:pt-8rem xl:pr-9rem xl:pb-12rem xl:pl-21.5rem'>
                <div className='relative w-1/2 hidden lg:block'>
                    <div className='w-2/3 h-auto'>
                        <img className='object-fill' src='/Images/NFT2.png' alt='NFT2_avatar'></img>
                    </div>
                    <div className='absolute top-1/4 right-2/3 w-2/3 h-auto'>
                        <img src='/Images/NFT1.png' alt='NFT1_avatar'></img>
                    </div>
                </div>
                <div className='relative w-1/2 hidden lg:block'>
                    <div className='absolute top-1/4 right-2/3 w-2/3 h-auto'>
                        <img className='object-fill' src='/Images/NFT3.png' alt='NFT3_avatar'></img>
                    </div>
                    <div className='w-2/3 h-auto'>
                        <img src='/Images/NFT4.png' alt='NFT4_avatar'></img>
                    </div>
                </div>

                <div className='relative w-4/5 flex space-x-10 md:space-x-20 lg:hidden'>
                    <div className='w-1/2'>
                        <img className='object-contain' src='/Images/NFT1.png' alt='NFT1_avatar'></img>
                    </div>
                    <div className='w-1/2'>
                        <img className='object-contain' src='/Images/NFT2.png' alt='NFT2_avatar'></img>
                    </div>
                </div>
                <div className='relative w-4/5 flex space-x-10 md:space-x-20 lg:hidden'>
                    <div className='w-1/2'>
                        <img className='object-contain' src='/Images/NFT4.png' alt='NFT4_avatar'></img>
                    </div>
                    <div className='w-1/2'>
                        <img className='object-contain' src='/Images/NFT3.png' alt='NFT3_avatar'></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default NFTList