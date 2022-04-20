import React from 'react'
import constants from '../Constants/Constant'

class Roadmap extends React.Component {

    render() {
        const { roadmapAdapter } = constants
        return (
            <div className='flex flex-col place-items-center space-y-20 w-full px-4rem py-4rem md:px-5rem lg:py-5rem xl:px-10rem' id='roadmap'>
                <h1 className='text-white text-3xl font-bold fontFamily-ZenDot sm:text-4xl lg:text-5xl'>Roadmap</h1>
                <div className='w-full space-y-16'>
                    {roadmapAdapter.map((data, i) => {
                        i = i + 1
                        return (
                            <div className='w-full space-y-7' key={i}>
                                <div className={
                                    i % 2 
                                    ?'w-full flex space-x-28 place-items-center my-2'
                                    :'w-full flex flex-row-reverse space-x-reverse space-x-32 place-items-center my-2'
                                }>
                                    <div className={i % 2?'timeline-dot-left':'timeline-dot-right'}></div>
                                    <h1 className='text-white text-4xl fontFamily-ZenDot'>
                                        { i.toString().length === 1?'0'+i:i }
                                    </h1>
                                </div>
                                
                                <div className={
                                    i % 2
                                    ?'timeline-content-left rounded-lg space-y-5'
                                    :'timeline-content-right rounded-lg space-y-5 flex flex-col place-items-end'
                                }>
                                    <h1 className='text-white text-2xl fontFamily-ZenDot'>{ data.title }</h1>
                                    <p className='text-white fontFamily-IBMPlex-Regular leading-7'>
                                        { data.content }
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Roadmap