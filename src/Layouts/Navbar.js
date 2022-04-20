import React from 'react'
import eventBus from '../Components/EventBus'

class Navbar extends React.Component {

    constructor() {
        super()

        this.state = {
            navbarOpen: false,
            address: '',
            balance: 0,
            isConnected: false
        }
    }

    convertAddresstoName(address) {
        const len = address.length
        return address.slice(0, 4) + '...' + address.slice(len - 4, len) + ' | ' + (this.state.balance / 1e18).toFixed(2) + 'ETH'
    }
    
    componentDidMount() {
        eventBus.on('isConnected', (_event) => {
            this.setState({
                ...this.state,
                address: _event.data.account,
                balance: _event.data.balance,
                isConnected: _event.data.isConnected,
            })
        })
    }

    render() {
        return (
            <nav className='absolute w-full flex flex-wrap justify-between place-items-center z-20  px-3rem md:px-4rem py-1.5rem xl:px-6rem' style={{
            }}>
                <div className='flex flex-grow justify-between w-full relative xl:w-auto xl:justify-start'>
                    <div><img src='/Images/logo.png' alt='logo_image'></img></div>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block xl:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => this.setState({ navbarOpen: !this.state.navbarOpen })}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <div className={
                    'bg-primary rounded-lg space-y-5 w-full p-5 place-items-center xl:space-y-0 xl:space-x-10 xl:bg-transparent xl:flex xl:w-auto xl:p-0' + 
                    (this.state.navbarOpen ? ' flex flex-col' : ' hidden')
                }>
                    <ul className="flex flex-col place-items-center list-none w-full font-bol text-center xl:font-normal xl:flex-row xl:w-auto xl:ml-auto relative text-white text-md xl:space-x-6">
                        <li className='xl:float-left xl:text-base xl:w-auto xl:p-auto xl:hover:bg-transparent p-3 w-full text-2xl cursor-pointer hover:bg-gray-900'><a href='#about'>Who we are</a></li>
                        <li className='xl:float-left xl:text-base xl:w-auto xl:p-auto xl:hover:bg-transparent p-3 w-full text-2xl cursor-pointer hover:bg-gray-900'><a href='#roadmap'>Roadmap</a></li>
                        <li className='xl:float-left xl:text-base xl:w-auto xl:p-auto xl:hover:bg-transparent p-3 w-full text-2xl cursor-pointer hover:bg-gray-900'><a href='#team'>Our Team</a></li>
                        <li className='xl:float-left xl:text-base xl:w-auto xl:p-auto xl:hover:bg-transparent p-3 w-full text-2xl cursor-pointer hover:bg-gray-900'><a href='#faq'>FAQ</a></li>
                        <li className='xl:float-left xl:text-base xl:w-auto xl:p-auto xl:hover:bg-transparent p-3 w-full text-2xl cursor-pointer hover:bg-gray-900'><a href='https://app.gitbook.com/invite/MpxPCvm0SK6usCdstFbe/jumJIz5GxQT608yNVxWL' target="_blank" rel="noopener noreferrer">Whitepaper</a></li>
                    </ul>
                    <div className='space-x-6 flex flex-grow'>
                        <a href='https://twitter.com/TopWolvesNFT' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-twitter'></i>
                            </span>
                        </a>
                        <a href='https://discord.gg/4n8Dz23bVR' target="_blank" rel="noopener noreferrer">
                            <span className='text-white text-xl cursor-pointer'>
                                <i className='fab fa-discord'></i>
                            </span>
                        </a>
                    </div>
                    <div className='button-pink rounded-full'>
                        <button
                            className="text-md font-bold px-4 py-3 block cursor-pointer"
                            onClick={() => eventBus.dispatch('connect', {action : true})}>
                            { this.state.isConnected === false
                              ? 'Connect wallet'
                              : this.convertAddresstoName(this.state.address)
                            }
                        </button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar