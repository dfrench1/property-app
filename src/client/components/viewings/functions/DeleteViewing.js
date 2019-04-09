export function deleteViewing(item, props, setViewings){
    fetch('/deleteViewing', {
        method: 'DELETE',
        body: JSON.stringify({
          data: item,
          user: props.user
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(json => {
        setViewings(json)
    })
    .catch(err => console.log(err))
}