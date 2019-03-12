import * as JWT from 'jwt-decode'

export function verifyToken(window, setUser){
    let token = window.sessionStorage.getItem('jwtToken');
    if (token){
      fetch(`${process.env.API}/verifyToken`, {
        method: 'POST',
        body: JSON.stringify({token:token}),
        headers:{
            'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
         let userVal = JWT(data.token)
         setUser(userVal)
      })
      .catch(err => {
        console.log(err, 'token invalid')
      })
    }
}