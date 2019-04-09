export function uploadImage(images, currentData, setSuccess, setError, setNewImg, setUser){
    const formData = new FormData();
    Object.values(images).forEach(file => {
      formData.append("file", file);
    });
    fetch(`/addPropImages?id=${currentData._id}`, {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(json => {
      if (json.error){
        return setError(true)
      }
      setNewImg(json)
      setSuccess(true)

    })
    .catch(err => {
      console.log('err', err)
      setError(true)
    })
}