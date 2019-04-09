export function getViewings(setLoading,setViewings){
    setLoading(true)
    fetch('/api/viewings')
    .then(res => res.json())
    .then(json => {
        setViewings(json)
        setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
}