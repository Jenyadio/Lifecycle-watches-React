import React from 'react';
import Clock from './Clock';

export default function Dashboard({ zones, onClickHandler }) {
    return (
      <div className="watches__display-wrapper">
        {zones.map((el) => {
          return <Clock zone={el} onClickHandler={onClickHandler} key={el.id} />
        })}
      </div>
    )
}
