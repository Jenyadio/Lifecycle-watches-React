import React from 'react'
import ClockDisplay from './ClockDisplay';

export default function Clock({zone, onClickHandler}) {

    const handleDelte = (e) => {
        onClickHandler(e.target.id);
    };

    return (
        <div className="watches__display">
          <div>
            <h2 className="watches__display-title">{zone.name}</h2>
            <button className="watches__display-button" onClick={handleDelte} id={zone.id}></button>
          </div>
          <ClockDisplay zone={zone} />
        </div>
    )
}
