export function register(e, data, setFlash, window, props){
    e.preventDefault();
    if (data){
    fetch("http://localhost:3000/api/register", {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            if (json.errors){
                setFlash(json.errors)
            } else {
                window.sessionStorage.setItem('jwtToken', json.token)
                props.history.push('/')
            }
        })
        .catch(err => console.log(err)); 
    } else {
        setFlash([{message: 'form is empty'}])
    }
}