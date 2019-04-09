export function fetchProperty(props, setData){
    const param = props.match.params.id;
    fetch("/properties?id=" + param)
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.log(err));
}