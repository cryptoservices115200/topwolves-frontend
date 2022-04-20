import React from 'react';
import Web3 from 'web3';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eventBus from './Components/EventBus';
import contractInfo from './contractInfo'

import NavBar from './Layouts/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Mint from './Components/Mint.js';
import Roadmap from './Components/Roadmap';
// import NFTList from './Components/NFTList';
import Team from './Components/Team';
import Trailer from './Components/Trailer';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import './App.css';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

let flag = true;
let web3, contract, contractAddress;

class Container extends React.Component {

  constructor() {
    super()

    this.state = {
      address: '',
      balance: 0,
      isConnected: false
    }

    this.mintNFT = this.mintNFT.bind(this)
    this.connectWallet = this.connectWallet.bind(this)
    this.scanConnectedWallet = this.scanConnectedWallet.bind(this)
    this.displayNotification = this.displayNotification.bind(this)
    this.fetchMintSettings = this.fetchMintSettings.bind(this)
  }

  connectWallet(action) {

    if (window.ethereum) {
      (async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }]
        });

        let accounts = await web3.eth.getAccounts();
        let balanceOfNative = await web3.eth.getBalance(accounts[0]);
        
        this.setState({
          address: accounts[0],
          balance: balanceOfNative,
          isConnected: action
        })
        
        eventBus.dispatch('isConnected', { data: { 'account': accounts[0], 'isConnected': action, 'balance': balanceOfNative } });
      })()
    } else {
      alert('Install Metamask please.');
    }
  }

  scanConnectedWallet() {

    if(this.state.isConnected === true) return;

    web3.eth.getAccounts(async (err, accounts) => {
        if (err != null) {
            console.error("An error occurred: " + err)
        } else if (accounts.length !== 0 ) {
            let balanceOfNative = await web3.eth.getBalance(accounts[0]);

            this.setState({
              address: accounts[0],
              balance: balanceOfNative,
              isConnected: true
            })

            eventBus.dispatch('isConnected', { data: { 'account': accounts[0], 'isConnected': true, 'balance': balanceOfNative } });
        }
    })
  }

  async mintNFT(mintCount, mintPrice) {

    let address = this.state.address
      let mintState = await contract.methods.getSetting().call()
      
      axios.post('http://localhost:5000/api/getProof', {
        address: address
      })
      .then((res) => {
        
        // console.log(res.data.hexProof)
        let mintStep = parseInt(mintState[0]);
        let proof, isWhitelistMember, price;

        proof = res.data.hexProof;
        isWhitelistMember = res.data.isWhitelistMember;
        price = mintCount * mintPrice;

        if(mintStep === 1) {
          if(isWhitelistMember === false) {
            this.displayNotification('info', 'You are not allowed to mint now.')
            return
          }
          contract.methods.mintPresale(mintCount, proof).send({
            from: address,
            to: contractAddress,
            value: price
          })
          .then(() => {
            this.displayNotification('success', 'You have minted successfully.')
          })
          .catch((err) => {
            console.log(err)
            this.displayNotification('warning', 'Transaction error. Please check all again.')
          })
        }

        if(mintStep === 2) {
          contract.methods.mintPublic(mintCount).send({
            from: address,
            to: contractAddress,
            value: price
          })
          .then(() => {
            this.displayNotification('success', 'You have minted successfully.')
          })
          .catch((err) => {
            console.log(err)
            this.displayNotification('warning', 'Transaction error. Please check all again.')
          })
        }

        if(mintStep === 3) {
          this.displayNotification('info', 'Mint is not available anymore.')
          return
        }

        if(mintStep === 4) {
          this.displayNotification('info', "Mint doesn't start yet.")
          return
        }
      })
  }

  displayNotification(appearance, text) {

    switch(appearance) {
        case 'warning':
            toast.warn(text)
            break
        case 'info':
            toast.info(text)
            break
        case 'error':
            toast.error(text)
            break
        case 'success':
            toast.success(text)
            break
        default:
            break
    }
  }

  async fetchMintSettings() {
    let mintState = await contract.methods.getSetting().call()
    let mintPrice, mintStep
    
    mintStep = parseInt(mintState[0])
    if(mintStep === 1) {
      mintPrice = parseInt(mintState[2])
    }
    else {
      mintPrice = parseInt(mintState[1])
    }
    eventBus.dispatch('updateMintPrice', { price: mintPrice})
  }

  componentDidMount() {
    if(window.ethereum) {
      web3 = new Web3(window.ethereum);
      contractAddress = contractInfo.address;
      contract = new web3.eth.Contract(contractInfo.abi, contractInfo.address);

      this.scanConnectedWallet();
    }

    if(flag === true) {
      this.fetchMintSettings()
      flag = false
    }

    this.timeId = setInterval(() => {
      this.fetchMintSettings()
    }, 60000);

    eventBus.on('connect', (_event) => {
      this.connectWallet(_event.action)
    })
    eventBus.on('mint', (_event) => {
      this.mintNFT(_event.mintCount, _event.mintPrice)
    })
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  render() {
    return (
      <div className="relative bg-primary">
        <ToastContainer />
        <NavBar />
        <Home />
        <About />
        <Mint />
        <Roadmap />
        <Team />
        <Trailer />
        <Faq />
        <Footer />
      </div>
    )
  }
}

function App() {

  return (
    <Container>
    </Container>
  );
}

export default App;
