export function ForwardMethod(img, imgArray) {
  const getCurrentImg = imgArray.filter(el => el.url === img);
  let nextImg, newImg;

  if (getCurrentImg[0].id === imgArray.length - 1) {
    nextImg = 0;
  } else {
    nextImg = getCurrentImg[0].id + 1;
  }
  return (newImg = imgArray[nextImg]);
}
