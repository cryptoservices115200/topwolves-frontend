import React from 'react'

class About extends React.Component {

    render() {
        return (
            <div className='w-full px-3.5rem py-4rem md:px-4rem lg:py-5rem xl:px-8.125rem xl:py-6rem' id='about'>
                <div className='flex flex-col space-y-10 lg:space-y-0 place-items-center lg:flex-row'>
                    <h1 className='text-white text-4xl font-bold fontFamily-ZenDot block sm:text-5xl md:text-6xl lg:text-7xl lg:hidden'>About Us</h1>

                    <div className='flex flex-col space-y-10 lg:space-y-0 place-items-center lg:flex-row lg:space-x-12'>
                        <div className='relative flex justify-center w-full lg:justify-start lg:w-1/2'>
                            <img className='object-contain max-h-32rem h-auto lg:h-32rem' src='/Images/NFT2.png' alt='NFT_character'></img>
                        </div>

                        <div className='flex flex-col justify-center space-y-0 w-full lg:space-y-8 lg:w-1/2'>
                            <h1 className='text-white text-4xl font-bold fontFamily-ZenDot hidden sm:text-5xl md:text-6xl lg:text-6xl lg:block'>About Us</h1>
                            <p className='text-white fontFamily-IBMPlex-Regular leading-loose lg:text-left'>
                                Legends describe this game is like no other where the possibilities are endless and the money you can make is unlimited, a game so rare, only the most prestigious will have access. Whether you are a lone wolf or wish to hunt in a pack only 5555 suave wolves who embody instinctive powers and intelligence have found the key to access this game. Today this legend becomes a reality, claim your wolf to immerse yourself in our unrivalled gaming experience.
                            </p>
                            <div className='button-pink rounded-full w-max hidden'>
                                <a className="text-md font-bold px-7 py-2 block cursor-pointer" href="/">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About