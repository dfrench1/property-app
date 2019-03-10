export function checkProperty(localStorage, props, setData, setFlash){
        let check = localStorage.getItem('property');
        if (check){
          let parse = JSON.parse(check);
          if (props.history.location.data && parse._id !== props.history.location.data._id){
            localStorage.setItem('property', JSON.stringify(props.history.location.data))
            setData(props.history.location.data)
          } else {
            if (props.history.location.pathname.includes(parse.title.replace(/\s/g, '-'))){
             setData(parse)
            } else {
             setFlash('Property unavailable')
            }
          }
        } else {
          localStorage.setItem('property', JSON.stringify(props.history.location.data))
          setData(props.history.location.data)
        }
}