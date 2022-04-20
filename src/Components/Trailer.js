import React from 'react'

class Trailer extends React.Component {

    render() {
        return (
            <div className='flex flex-col place-items-center space-y-7 px-2rem py-1rem sm:py-3rem lg:px-6rem xl:px-9rem'>
                <h1 className='text-white text-3xl font-bold fontFamily-ZenDot sm:text-4xl lg:text-5xl'>Trailer</h1>
                <div className='relative w-full bg-gray-400 text-center flex justify-center' style={{
                        width: '100%',
                        maxHeight: '28rem'
                }}>
                    <video src='' className='w-full' controls>
                    </video>
                    <h1 className='absolute top-1/3 text-white text-2xl sm:text-4xl md:text-6xl lg:text-8xl uppercase'>Coming Soon</h1>
                </div>
            </div>
        )
    }
}

export default Trailer