export function cancelBooking(item, props, setBookings){
    fetch('/deleteBooking', {
        method: 'DELETE',
        body: JSON.stringify({
          data: item,
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
      .catch(err => console.log(err))
}