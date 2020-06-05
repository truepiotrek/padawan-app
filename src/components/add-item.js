import React from 'react';

function AddItem(props) {
    return (
        <div className="add-item">
            <input type="text" placeholder="Nowa rzecz do zrobienia" className="new-item-input"/>
            <input type="button" value="Dodaj" className="button-add"/>
        </div>
    )
};

export default AddItem;