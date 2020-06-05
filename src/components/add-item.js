import React, {useState} from 'react';

function AddItem(props) {
    const [valueInput, setState] = useState('')

    function handleInputChange(event){
        setState(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.onAdd(valueInput);
        setState('');
    }

    // console.log(props);

    return (
        <div className="add-item">
            <input type="text" placeholder="Nowa rzecz do zrobienia" value={valueInput} className="new-item-input"
                   onChange={handleInputChange}/>
            <input type="button" value="Dodaj" className="button-add" onClick={handleSubmit}/>
        </div>
    )
};

export default AddItem;