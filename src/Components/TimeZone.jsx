import React from 'react'
import { useState } from "react";
import Forms from './Forms';
import Dashboard from './Dashboard';
import * as moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

function TimeZone() {
    
    const [zones, setTimezone] = useState([{
      name: 'Москва',
      timeZone: moment().utcOffset(),
      id: '0',
      },
      {
        name: 'Берлин',
        timeZone: +120,
        id: '1',
      },
      { name: 'Абу-Даби', 
        timeZone: +240, 
        id: '2' 
      },
    ]);

    const onSubmitHandler = (data) => {
      setTimezone(prevState => [...prevState, data])
    }

    const onClickHandler = (id) => {
      const removeId = id;
      const newTimezone = zones.filter((el) => el.id !== removeId);
      setTimezone(newTimezone);
    };

    return (
      <div className="watches__container">
        <h1 className="watches__title">Мировые часы</h1>
        <div className="watches__content">
          <Forms onSubmit={onSubmitHandler} />
          <Dashboard zones={zones} onClickHandler={onClickHandler} />
        </div>
      </div>
    )
}

export default TimeZone
