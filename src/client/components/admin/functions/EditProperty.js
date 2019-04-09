export function editProperty(e, editData,props,setNewProp, setUser){
    e.preventDefault();
    fetch("/editProperty", {
      method: "PUT",
      body: JSON.stringify({
        data: editData,
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
}