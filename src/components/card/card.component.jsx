import React from 'react';

import "./card.style.css";


export const Card = (props) => {
// console.log("card.component.jsx: =======");
//  console.log(props.monster.id);
//  console.log(props.key); // key is for React! it is hidden from the props!

    // Format the image url - I don't need the $ sign!
    let imgURL = 'https://robohash.org/' + props.monster.id + '?set=set2&size=180x180';

    return (

        <div className='card-container' >
            <img alt="monster" src={'https://robohash.org/' + props.monster.id + '?set=set2&size=180x180'} />
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>

    )

}

// robohash.org/1?set=set2
//<img alt="monster" src={imgURL} /> working
//<img alt="monster" src={'https://robohash.org/' + props.monster.id + '?set=set2&size=180x180'} /> working without $