export function deleteProperty(el, props, setNewProp, setUser){
    fetch(`/deleteProp`, {
        method: 'DELETE',
        body: JSON.stringify({
          id: el._id,
          user: props.user
        }),
        headers: {
           'Content-Type': "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        //setNewProp(json);
        setUser(json)
      })
      .catch(err => console.log(err))
}