import React, {useState} from 'react';

function AddItem(props) {
    const [valueInput, setState] = useState('')

    function handleInputChange(event){
        setState(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(valueInput === ''){
            console.log('Nie podano nowej rzeczy do zrobienia, uzupełnij proszę')
        } else {
            if (typeof props.onAdd === 'function') {
                props.onAdd(valueInput);
            }
            setState('');
        }
    }

    return (
        <div className="add-item">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nowa rzecz do zrobienia" value={valueInput} className="new-item-input"
                       onChange={handleInputChange}/>
                <input type="button" value="Dodaj" className="button-add" onClick={handleSubmit}/>
            </form>
        </div>
    )
};

export default AddItem;