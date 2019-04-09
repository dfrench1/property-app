import Cookies from 'universal-cookie';
export function fetchLogin(e, data, window, props, setFlash){
    e.preventDefault();
    if (data){
        fetch("/login", {
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
                const cookies = new Cookies();
                cookies.set('cookie-data', json.token);
                props.setUser(json.user)
                props.history.push('/')
            }
        })
        .catch(err => console.log(err)); 
    } else {
        setFlash([{message: 'form is empty'}])
    }
}