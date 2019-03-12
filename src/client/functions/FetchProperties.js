export function fetchProperties(setData){
    fetch(process.env.API + "propertiess")
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.log(err));
}