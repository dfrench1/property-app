export function fetchProperties(setData){
    fetch(process.env.API + "/api/properties")
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.log(err));
}