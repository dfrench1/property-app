export function fetchBookings(props, setBookings){
    fetch('/bookings', {
        method: 'POST',
        body: JSON.stringify({
            user: props.user
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(json => {
          setBookings(json)
      })
      .catch(err => {
        console.log(err)
      })
}