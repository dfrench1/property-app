export function updateProps(newImg, delImg, checkUser) {
  if (newImg || delImg){
    let img = newImg ? newImg : delImg
    let updateProperty = checkUser().properties.find(x => x._id == img._id)
    updateProperty.images = img.images
    return checkUser().properties
  }
  else {
    return checkUser().properties;
  }
}
