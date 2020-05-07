import React from 'react';
import './card-list.style.css'; // provide the grid format

import { Card } from '../card/card.component'

export const CardList = (props) => {
// console.log("card-list.component.jsx: =======");
// console.log(props.monsters);

    return (
        <div className='card-list'>    

            {props.monsters.map( monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        
        </div>
    );

    // the key is for React, which is hidden!

} //CardList