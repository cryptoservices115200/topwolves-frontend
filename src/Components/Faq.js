import React from 'react'
import constants from '../Constants/Constant'

class Faq extends React.Component {

    constructor() {
        super()

        this.setActive = this.setActive.bind(this)
    }

    setActive(i) {
        let newAccordion = this.state.accordion

        newAccordion[i].isOpen = !newAccordion[i].isOpen
        this.setState({
            accordion: newAccordion
        })
    }

    componentWillMount() {
        let accordion = constants.FAQ
        
        accordion.map((data) => {
            return (
                {
                    title: data.title,
                    detail: data.detail,
                    isOpen: false
                }
            )
        })
        this.setState({
            accordion
        })
    }

    render() {
        const FAQ = this.state.accordion
        return (
            <div className='flex flex-col place-items-center w-full space-y-16 px-2rem py-6rem lg:px-7rem xl:px-11rem lg:pt-12rem' id='faq'>
                <h1 className='text-white text-3xl font-bold fontFamily-ZenDot sm:text-4xl lg:text-5xl text-center'>Frequently Asked Questions</h1>
                <div className='w-full lg:w-85% space-y-3'>
                    {FAQ.map((data, i) => {
                        let styleArrow = {
                            backgroundColor: 'rgba(246, 18, 126)',
                            transition: 'all .5s'
                        }
                        let styleContainer = {
                            backgroundColor: 'rgba(246, 18, 126, 0.1)',
                            transitionDuration: '1.5s'
                        }

                        if(data.isOpen === true) {
                            styleArrow = {
                                backgroundColor: 'white',
                                transition: 'all .5s'
                            }
                            styleContainer = {
                                backgroundColor: 'rgba(246, 18, 126, 0.8)',
                                transitionDuration: '1.5s'
                            }
                        }

                        return (
                            <div className='w-full h-auto flex flex-col transition-colors' key={ i } style={ styleContainer }>
                                <button className="relative w-full fontFamily-ZenDot text-left overflow-hidden pr-16 text-white text-sm md:text-md lg:text-lg px-8 py-6 bg-transparent"
                                    onClick={ () => this.setActive(i) }
                                >
                                    <div className='absolute right-6' style={ styleArrow }>
                                        <div className={data.isOpen === true
                                            ? '-rotate-90 transition-all duration-700 text-pink'
                                            : 'transition-all duration-700'}>
                                            <i className='fa fa-angle-down mx-2 mt-1'></i>
                                        </div>
                                    </div>
                                    { data.title }
                                </button>

                                <div className={data.isOpen === true
                                    ? 'max-h-96 overflow-hidden transition-all duration-1000'
                                    : 'max-h-0 overflow-hidden transition-all duration-1000'
                                }>
                                    <p className='fontFamily-IBMPlex-Regular text-white text-md pl-6 pr-16 pb-6 leading-loose'>
                                        { data.detail }
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

export default Faq