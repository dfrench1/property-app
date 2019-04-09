export function addProperty(e, data, props, setNewProp, setUser, setFlash, setNewModal, setAdded){
  e.preventDefault();
  if (data && Object.keys(data).length < 5){
    return setFlash([{message: 'Please enter all fields...'}])
  } else if (data && Object.values(data).find(el => el == '' || el == null)){
    return setFlash([{message: 'Please enter all fields...'}])
  }
   else if (data) {
    fetch("/addProperty", {
      method: "POST",
      body: JSON.stringify({
        data: data,
        user: props.user
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        //setNewProp(json);
        setUser(json)
      })
      .catch(err => console.log(err));
    setNewModal(false);
    setAdded([{message: 'Property Added...'}])
  } else {
    return setFlash([{message: 'Please enter all fields...'}])
  }
    
}