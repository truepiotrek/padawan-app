import React from 'react';

function List(props) {
    return (
        <div className="list">
            {props.data.map(function(arrayItem, index) {
                return (<div className='list-item' key={index + ' ' + arrayItem}>{arrayItem}</div>);
                // dodać dodatkowy button, który będzie odpowiedzialny za usuięcie części z tablicy o wskazanym powyżej index
            })}
        </div>
    )
};

export default List;
