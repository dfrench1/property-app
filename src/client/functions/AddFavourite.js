export function addFavourite(data, setFave, user){
    data.user = user
    fetch(process.env.API + "/api/favourites", {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
          'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => {
      setFave(json)
    })
    .catch(err => console.log(err))
}