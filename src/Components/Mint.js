import React from 'react'
import Countdown, { zeroPad } from "react-countdown";
import eventBus from '../Components/EventBus';

const date1 = 1651732561000;   //Date.now() + 5000

// const date1 = new Date(2018, 01, 24, 10, 33, 30, 0);
class Mint extends React.Component {

    constructor() {
        super()

        this.state = {
            mintCount: 1,
            address: '',
            balance: 0,
            isConnected: false,
            mintPrice: 0,
            countdown: false
        }

    }

    componentDidMount() {
        this.setState({countdown:false});

        eventBus.on('updateMintPrice', (_event) => {
            this.setState({
                ...this.state,
                mintPrice: _event.price
            })
        })

        eventBus.on('isConnected', (_event) => {
            this.setState({
                ...this.state,
                address: _event.data.account,
                balance: _event.data.balance,
                isConnected: _event.data.isConnected,
            })
        })
    }

    // const CoundownRenderer = ({ days, hours, minutes, seconds }) => (
    //     <>
    //       {days} d {hours} h, {minutes} m, {seconds} s
    //     </>
    //   )
    CoundownRenderer({ days, hours, minutes, seconds, completed  }) {
        // console.log(completed);
        // if(completed)
        //     {
        //         return(<></>);
        //     }

        return (
            <>
                <h1 className='text-white text-2xl font-bold fontFamily-ZenDot sm:text-3xl md:text-4xl lg:text-5xl mb-30 shadow'
                    // style={{color:'#f6127e96'}}
                > Count Down
                </h1>

                <div className='w-full flex flex-row mb-30'>
                    <div className = "timeContainer">
                        <p className="timeRegion">{zeroPad(days)}</p>
                        <p className="timeUnit">Days</p>
                    </div>
                    <div className = "timeContainer">
                        <p className="timeRegion">{zeroPad(hours)}</p>
                        <p className="timeUnit">Hours</p>
                    </div>
                    <div className = "timeContainer">
                        <p className="timeRegion">{zeroPad(minutes)}</p>
                        <p className="timeUnit">Minutes</p>
                    </div>
                    <div className = "timeContainer">
                        <p className="timeRegion">{zeroPad(seconds)}</p>
                        <p className="timeUnit">Seconds</p>
                    </div>
                </div>

            </>
          );
    }

    onCompleted() {
        this.setState({countdown:true})
    }

    render() {
        return (
            <div className='py-1' style={{
                backgroundImage: 'linear-gradient(90deg, rgba(246, 18, 126, 0.9), rgba(246, 18, 126, 0.5), rgba(246, 18, 126, 0.2), transparent)'
            }}>

                <div className='flex flex-wrap justify-center py-5rem lg:py-7rem' style={{
                    backgroundColor: '#080216'
                }}>
                    {/* <div className='text-white flex flex-wrap justify-center py-5rem lg:py-7rem'>

                    </div> */}
                    
                    <div className='flex flex-col w-1/2 space-y-12'>
                        {!this.state.countdown && (
                            <div className='flex flex-col w-full space-y-5 text-center'>
                                <div className='text-white' >
                                    <Countdown date={date1} renderer={this.CoundownRenderer} onComplete={() => this.onCompleted()} />
                                </div>

                                
                            </div>
                        )}
                        {this.state.countdown && (
                            <div className='w-1/2 justify-center flex flex-col space-y-5 m0auto text-center'>
                                <h1 className='text-white text-2xl font-bold fontFamily-ZenDot
                                                    sm:text-3xl md:text-4xl lg:text-5xl'
                                    >
                                        Mint Topwolves
                                    </h1>
                                    <p className='text-white fontFamily-IBMPlex-Regular leading-loose'>
                                        Each TopWolves NFT is available to mint for {this.state.mintPrice / (10**18)}ETH.
                                    </p>
                                <input
                                    className='bg-transparent border-2 rounded-full px-4 py-2 text-white focus:outline-none'
                                    style={{
                                        borderColor: '#f6127e96'
                                    }}
                                    type='text'
                                    id='txt_price'
                                    value={ this.state.address ? (this.state.mintPrice * this.state.mintCount / (10**18)): '0'} readOnly>
                                </input>
                                <input
                                    className='bg-transparent border-2 rounded-full px-4 py-2 text-white focus:outline-none'
                                    style={{
                                        borderColor: '#f6127e96'
                                    }}
                                    type='number'
                                    id='number'
                                    defaultValue={1}
                                    min={1}
                                    max={3}
                                    onChange={(e) => this.setState({
                                        ...this.state,
                                        mintCount: parseInt(e.target.value)
                                    })}>
                                </input>
                                <button
                                    className='bg-white w-full py-2 rounded-full hover:bg-pink hover:text-white'
                                    // {...this.state.countdown == 1? '':'disabled'}
                                    disabled = {this.state.countdown? "true": "false"}
                                    onClick={() => eventBus.dispatch('mint', { mintCount: this.state.mintCount, mintPrice: this.state.mintPrice })}>Mint Now</button>
                            </div>
                            )}
                    </div>
                        
                </div>
            </div>
        )
    }
}

export default Mint
