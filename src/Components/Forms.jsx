import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Forms({ onSubmit }) {
    const [data, setData] = useState({
        name: '',
        timeZone: '',
    })

    const onSubmitHandler = (e) => {
      e.preventDefault();
      const  payload = {
        ...data,
        id: uuidv4(),
      }
      onSubmit(payload);
      setData({
        name: '',
        timeZone: '',
      })
    }

    const onChangeHandler = (e) => {
      const {name, value} = e.target;
      setData(prevState => ({...prevState, [name]: value}));
    }

    return (
         <form className="watches__form-wrapper" onSubmit={onSubmitHandler}>
            <div className="watches__form">
              <label htmlFor='name' className="watches__form-title">Название города</label>
              <input 
                type="text" 
                placeholder="Введите текст"
                className="watches__form-input" 
                value={data.name} 
                onChange={onChangeHandler}
                id='name' 
                name='name'
              />
            </div>
            <div className="watches__form">
              <label htmlFor='timeZone' className="watches__form-title">Временная зона</label>
              <input 
                type="number" 
                className="watches__form-input" 
                placeholder="В минутах, +60, +120"
                value={data.timeZone}
                onChange={onChangeHandler}
                id='timeZone' 
                name='timeZone'
              />
            </div>
            <div className="watches__form-button">
              <button type='submit' className="button">Добавить</button>
            </div>
          </form>
    )
}

export default Forms

