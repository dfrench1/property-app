export function deleteImage(el, editData, props, delImg){
    let arr = [...el]
    fetch(`/deletePropImage`, {
        method: 'DELETE',
        body: JSON.stringify({
          img: arr,
          property: editData,
          user: props.user
        }),
        headers: {
           'Content-Type': "application/json"
        }
      })
      .then(res => res.json())
      .then(json => {
        delImg(json)
      })
      .catch(err => console.log(err))
}