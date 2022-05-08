import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <div className='flex flex-col place-items-center space-y-20 px-3rem lg:px-8rem'>
                <div className='w-full h-full flex flex-col space-y-6 p-8 justify-between place-items-center md:p-16 lg:flex-row lg:space-y-0' style={{
                    backgroundColor: 'rgba(246, 18, 126, 0.8)'
                }}>
                    <div className='flex flex-col space-y-8'>
                        <h1 className='fontFamily-ZenDot text-2xl md:text-3xl lg:text-4xl text-white'>Join Our Community</h1>
                        <div className='space-x-6'>
                            <a href='https://twitter.com/TopWolvesNFT' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-twitter'></i>
                                </span>
                            </a>
                          <a href='https://discord.gg/K7g4Wp3HzZ' target="_blank" rel="noopener noreferrer">
                                <span className='text-white text-xl cursor-pointer'>
                                    <i className='fab fa-discord'></i>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className='button-pink text-black rounded-full w-max h-max hidden lg:block'>
                        <a className="text-2xl font-bold fontFamily-ZenDot px-12 py-2 block cursor-pointer" href="https://discord.gg/K7g4Wp3HzZ" target="_blank" rel="noopener noreferrer">Join The Pack</a>
                    </div>
                </div>

                <div className='w-full flex flex-col place-items-center text-center'>
                    <div key="logo-symbol">
                        <img src='/Images/logo.png' alt='logo_image'></img>
                    </div>
                    <p className='fontFamily-IBMPlex-Regular max-w-full text-white text-md md:max-w-1/2 leading-loose'>
                        A unique collection of 1111 detailed, hand drawn 3D wolves inspired by highly successful personas across the world.
                    </p>
                </div>

                <div className='w-full border-t-2 border-white border-opacity-10 py-5 space-y-3 flex flex-col justify-between md:flex-row md:space-y-0 place-items-center'>
                    <h1 className='fontFamily-IBMPlex-Regular text-white text-xs'>Copyright@2022.All right reverved</h1>
                    <h1 className='fontFamily-IBMPlex-Regular text-white text-xs'>Privacy Policy</h1>
                </div>
            </div>
        )
    }
}

export default Footer
