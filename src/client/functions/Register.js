export function register(e, data, setFlash, window, props){
    e.preventDefault();
    if (data){
    fetch("/register", {
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
                props.history.push('/login')
            }
        })
        .catch(err => console.log(err)); 
    } else {
        setFlash([{message: 'form is empty'}])
    }
}