import Cookies from 'universal-cookie';
export function newPassword(e, data, props, token, setFlash){
    e.preventDefault();
    if (data){
        fetch("/new-password", {
            method: 'POST',
            body: JSON.stringify({data: data, token: token}),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            props.setRedirectFlash('Password updated')
            props.history.push('/login')
        })
        .catch(err => console.log(err)); 
    } else {
        setFlash([{message: 'form is empty'}])
    }
}