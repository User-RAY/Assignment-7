import PropTypes from 'prop-types';
import Cards from "../Cards/Cards";
import Selected from '../Selected/Selected'


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = ({show, handleSelect, coin, cards, handleBuy, playerSelected, setPlayerSelected, handleDelete}) => {


   
   const success = (player) => {
    toast.success(`Congrats, ${player.name} has been added`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

        });
   }

   const warn = () => {
    toast.warn('Sorry, the Player has already been added', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }

   const full = () => {
    toast.warn('Sorry, the Team is Full', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }

   const fullAdd = () => {
    toast.warn('Sorry, the Team is Full and the Player is already added', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }

   const error = () => {
    toast.error('Sorry, Not Enough Coins', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
   }


   const handlePlayerSelection = (player) =>{


    const playerCheck = playerSelected.find(p => p.id === player.id);
    const coinCheck = coin > player.price ? true : false;
    const totalPlayer = playerSelected.length < 6 ? true : false;

    if(!playerCheck && coinCheck && totalPlayer){
    const newPlayerSelected = [...playerSelected, player]
    setPlayerSelected(newPlayerSelected);
    handleBuy(player);
    success(player);
    } else if(playerCheck && !totalPlayer){
        fullAdd();
    } 
    else if(!totalPlayer){
        full();
    } else if(playerCheck){
        warn();
    } else if(coin <= player.price){
        error();
    }
}

//    console.log(playerSelected);

    return (
        <main className='mb-8'>

            <Cards show={show} handlePlayerSelection={handlePlayerSelection} cards={cards}></Cards>

            <Selected show={show} playerSelected={playerSelected} handleSelect={handleSelect} handleDelete={handleDelete}></Selected>

        </main>
    );
};

Main.propTypes ={
  show : PropTypes.string.isRequired,
  handleSelect: PropTypes.func.isRequired,
  coin: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  handleBuy: PropTypes.func.isRequired,
  playerSelected: PropTypes.array.isRequired,
  setPlayerSelected: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired

}

export default Main;