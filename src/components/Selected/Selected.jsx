import PropTypes from 'prop-types';

import Select from '../Select/Select';


const Selected = ({show, playerSelected, handleSelect, handleDelete}) => {
    


    return (
        <div className={`h-screen mt-12 ${show === 'btn-1' ? 'hidden' : "" }`}>


            {
                playerSelected.map(playerSelect => <Select key={playerSelect.id} playerSelect={playerSelect} handleDelete={handleDelete}></Select>)
            }

            <button className='btn mt-8 bg-[#E7FE29] border border-black' onClick={() => {handleSelect('btn-1')}}>Add More Player</button>
        
        </div>
    );
};


Selected.propTypes ={
  show : PropTypes.string.isRequired,
  playerSelected: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default Selected;