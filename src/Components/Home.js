import React from 'react'

class Home extends React.Component {
    
    render() {
        return (
            <div className='w-full' style={{
                backgroundImage: `url('/Images/home_background.png')`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='px-3.5rem md:px-4rem xl:pl-8rem xl:pr-4.5rem' style={{
                    backgroundColor: 'rgba(246, 18, 126, 0.13)',
                    paddingTop: '10rem',
                }}>
                    <div className='h-full flex flex-col pb-8 space-x-0 space-y-8 place-items-center md:space-y-12 lg:pb-0 lg:place-items-stretch lg:flex-row lg:space-x-5 lg:space-y-0'>
                        <div className='flex flex-col h-auto w-auto pt-0 space-y-10 lg:pt-4rem lg:w-1/2 lg:h-full md:space-y-16'>
                            <h1 className='text-white text-4xl font-bold fontFamily-ZenDot sm:text-5xl md:text-6xl lg:text-6xl'>
                                Unleashing the TopWolves
                            </h1>
                            <p className='text-white fontFamily-IBMPlex-Medium leading-loose'>
                                Unleashing the Top Wolves, with great instinctive powers and intelligence they will hunt down and navigate through the NFT Forest together. Specially designed for conquering the wild and equipped with traits to win, they will sense Apes and Kongs miles away and set up the perfect ambush
                            </p>
                            <div className='button-pink rounded-full w-max hidden lg:block'>
                                <a className="text-md font-bold px-4 py-3 block cursor-pointer" href="https://discord.gg/4n8Dz23bVR" target="_blank" rel="noopener noreferrer">Join Our Discord</a>
                            </div>
                        </div>

                        <div className='relative w-auto lg:w-1/2'>
                            <img className='object-contain' src='/Images/main_character.png' alt='main_character'></img>
                        </div>
                        <div className='button-pink rounded-full w-max block lg:hidden'>
                            <a className="text-md font-bold px-4 py-3 block cursor-pointer" href="https://discord.gg/4n8Dz23bVR" target="_blank" rel="noopener noreferrer">Join Our Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home