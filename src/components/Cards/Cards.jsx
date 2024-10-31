
import PropTypes from 'prop-types';
import Card from "../Card/Card";


import 'react-toastify/dist/ReactToastify.css';

const Cards = ({show, handlePlayerSelection, cards}) => {




    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 xl:gap-7 mt-12 ${show === 'btn-2' ? 'hidden' : "" }`}>

            {
                cards.map(card => <Card key={card.id} card={card} handlePlayerSelection={handlePlayerSelection}></Card>)
            }


            
        </div>
    );
};

Cards.propTypes ={
    show : PropTypes.string.isRequired,
    handlePlayerSelection: PropTypes.func.isRequired,
    cards: PropTypes.array.isRequired
  }

export default Cards;