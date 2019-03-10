export function fetchProperties(setData){
    fetch("http://localhost:3000/api/properties")
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.log(err));
}