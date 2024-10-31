// import { useState } from 'react'
// import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Foooter from './components/Footer/Footer'
import { useEffect, useState } from 'react'


// import { FaBeer } from 'react-icons/fa';

{/* <FaBeer /> */}

function App() {

  const [show, setShow] = useState('btn-1');

  const [selected, setSelected] = useState('btn-1');

  const [coin, setCoin] = useState(0);

  
  const [cards, setCards] = useState([]);

  const [playerSelected, setPlayerSelected] = useState([]);

  useEffect(() => {

      fetch('./players.json')
      .then(res => res.json())
      .then(data => setCards(data))

  }, [])

  const added = () => {
    toast.success('100000$ coin added', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }

   const remove = () => {
    toast.warn('The Player has been removed ', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }

  const handleCoin = () => {
    const newCoin = coin + 100000;
    setCoin(newCoin);
    added();
}

const handleBuy = (player) => {
  const newCoin = coin - player.price;
  setCoin(newCoin);
}



  const handleShow = (btn) => {
    setShow(btn);
  }

  const handleSelect = (btn) => {
    setSelected(btn);
    handleShow(btn);
 }


 const handleDelete = (player) => {
    console.log('ply', playerSelected);
    const newPlayerSelected = playerSelected.filter(p => p.id !== player.id)
    setPlayerSelected(newPlayerSelected);
    console.log(newPlayerSelected);
    remove();
 }



  return (
    <>

      <div className='mt-4 w-11/12 md:w-10/12 mx-auto'>
        <Header selected={selected} handleSelect={handleSelect} coin={coin} handleCoin={handleCoin} playerSelected={playerSelected}></Header>
        <Main show={show} handleSelect={handleSelect} coin={coin} cards={cards} handleBuy={handleBuy} playerSelected={playerSelected} setPlayerSelected={setPlayerSelected} handleDelete={handleDelete}></Main>

      </div>
      <Foooter></Foooter>

      <ToastContainer />
    </>
  )
}

// App.propTypes ={
//   app : PropTypes.array.isRequired
// }

export default App
