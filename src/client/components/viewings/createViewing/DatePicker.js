import React, {Component} from 'react';
import Datetime from 'react-datetime';

const DatePicker = ({setData, data, setFlash}) => {
    let yesterday = Datetime.moment().subtract(1, 'day');
    let valid = function( current ){
        return current.isAfter( yesterday );
    };
    return (
    <Datetime 
      input={true} 
      isValidDate={ valid }
      onChange={(e)=>{
        let check = Datetime.moment.isMoment(e)
        if (check){
          setData({ ...data, date: e._d });
          setFlash(null)
        } else setFlash([{message:'Date format incorrect'}])
      }}
    />
    )
}

export default DatePicker