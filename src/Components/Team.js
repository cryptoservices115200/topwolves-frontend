import React from 'react'
import constants from '../Constants/Constant'

class Team extends React.Component {

    render() {
        const { teamAdapter } = constants

        return (
            <div className='flex flex-col place-items-center container-team px-2rem lg:px-6rem xl:px-9rem' id='team' style={{
                padding: '3rem'
            }}>
                <h1 className='text-white text-3xl font-bold fontFamily-ZenDot sm:text-4xl lg:text-5xl'>Our Team</h1>
                <div className='flex flex-wrap flex-col space-y-6 lg:space-y-0 lg:flex-row lg:justify-between w-full py-10'>
                    {teamAdapter.map((data, i) => {
                        return (
                            <div className='flex flex-col w-full grow place-items-center lg:w-1/3' key={i}>
                                <div className='mb-5' style={{
                                }}>
                                    <div className='relative w-auto h-auto team-card-container'>
                                        <img className='object-conver w-auto h-max-32rem sm:h-32rem lg:h-auto' src={ data.image } alt='avatar'></img>    
                                        {/* <div className='w-full h-full absolute top-0 flex flex-col justify-end place-items-center team-card'>
                                            <div className='flex space-x-5 pb-2'>
                                                <div className='w-7 h-7 bg-white bg-opacity-30 rounded-full text-center place-items-center'>
                                                    <span className='text-white text-lg cursor-pointer'>
                                                        <i className='fab fa-twitter'></i>
                                                    </span>
                                                </div>
                                                <div className='w-7 h-7 bg-white bg-opacity-30 rounded-full text-center place-items-center'>
                                                    <span className='text-white text-lg cursor-pointer'>
                                                        <i className='fab fa-discord'></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <h1 className='fontFamily-ZenDot text-white'>{ data.name }</h1>
                                <p className='fontFamily-IBMPlex-Regular text-white text-xs'>
                                    { data.detail }
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Team