export function fetchProperty(props, setData){
    console.log('aaa', props)
    const param = props.match.params.id;
    fetch(`http://localhost:3000/api/properties?id=${param}`)
    .then(res => res.json())
    .then(json => setData(json))
    .catch(err => console.log(err));
}