export function createViewing(
  e,
  data,
  props,
  setViewings,
  viewings,
  setFlash,
  setModal
) {
  e.preventDefault();
  if (!data) {
    setFlash([{ message: "Please enter all fields" }]);
  } else if (Object.keys(data).length === 4) {
    setModal(false);
    fetch("/createViewing", {
      method: "POST",
      body: JSON.stringify({
        data: data,
        user: props.user
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        setViewings([...viewings, json]);
      })
      .catch(err => console.log(err));
  } else {
    setFlash([{ message: "Please enter all fields" }]);
  }
}
