import React, { useEffect, useState } from "react";
import initialClockDisplay from "../utils/initial";

function ClockDisplay({ zone }) {

  const [time, setTime] = useState(initialClockDisplay(zone.timeZone));

  useEffect(() => {
    const timerID = setTimeout(() => {
      setTime(initialClockDisplay(zone.timeZone));
    }, 1000);
    return () => {
      clearTimeout(timerID);
    };
  });

  return (
      <>
        <div className="watches__display-clock">
             <div className="hour_hand"
             style={{transform : `rotateZ(${time.hours}deg)`}}>
             </div>
             <div className="min_hand"
             style={{transform : `rotateZ(${time.minutes}deg)`}}>
             </div>
             <div className="sec_hand"
             style={{transform : `rotateZ(${time.seconds}deg)`}}>
             </div>
             <span className="twelve">12</span>
             <span className="one">1</span>
             <span className="two">2</span>
             <span className="three">3</span>
             <span className="four">4</span>
             <span className="five">5</span>
             <span className="six">6</span>
             <span className="seven">7</span>
             <span className="eight">8</span>
             <span className="nine">9</span>
             <span className="ten">10</span>
             <span className="eleven">11</span>
         </div>
      </>
  );
}

export default ClockDisplay
