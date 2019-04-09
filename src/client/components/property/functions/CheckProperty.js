export function checkProperty(localStorage, props, setData, setFlash) {
  let check = localStorage.getItem("property");
  if (props.location.state){
    localStorage.setItem(
      "property",
      JSON.stringify(props.location.state.data)
    );
    setData(props.location.state.data);
  } else if (check){
    let parse = JSON.parse(check);
    setData(parse);
  }
    else {
      setFlash("Property unavailable");
    }
  }
