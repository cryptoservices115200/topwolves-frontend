import React from 'react'

class Trailer extends React.Component {

    render() {
        return (
            <div className='flex flex-col place-items-center space-y-7 px-2rem py-1rem sm:py-3rem lg:px-6rem xl:px-9rem'>
                <h1 className='text-white text-3xl font-bold fontFamily-ZenDot sm:text-4xl lg:text-5xl'>Trailer</h1>
                <div className='relative w-full bg-gray-400 text-center flex justify-center' style={{
                    maxWidth: '49rem',
                    maxHeight: '28rem'
                }}>
                    <video src='/Images/wolves.mp4' className='w-full' controls>
                    </video>
                </div>
            </div>
        )
    }
}

export default Trailer
