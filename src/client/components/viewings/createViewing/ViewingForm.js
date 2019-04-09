import React from "react";
import {FormStyle, DateWrap} from './styled'
import DatePicker from './DatePicker'

const ViewingForm = ({ handleCreateViewing, data, setData, props, reduxUser, setFlash }) => {
  const checkUser = () => (
    reduxUser ? reduxUser : props.user
  )
  return (
      <FormStyle onSubmit={handleCreateViewing}>
       <section>
       <DateWrap>
          <label htmlFor="date">date: </label>
          <DatePicker 
            id="date"
            setData={setData}
            data={data}
            setFlash={setFlash}
          />
        </DateWrap>
        <select
          onChange={e => {
            if (e.target.value !== "") {
              setData({ ...data, property: e.target.value });
            }
          }}
          className="formselect"
        >
          {" "}
          <React.Fragment>
            <option value="">
              property
            </option>
            {checkUser() &&
              checkUser().properties.map(el => (
                <option 
                  value={el._id}
                  key={el._id}
                >
                  {el.title}
                </option>
              ))}
          </React.Fragment>
        </select>
        <input
          placeholder="title"
          className="forminput"
          onChange={e => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <input
          placeholder="description"
          onChange={e => {
            setData({ ...data, description: e.target.value });
          }}
          className="forminput"
        />
      
        <button id="submit">Create Viewing</button>
        </section>
      </FormStyle>
  )
}

export default ViewingForm;
