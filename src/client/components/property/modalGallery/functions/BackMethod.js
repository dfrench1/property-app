export function BackMethod(img, imgArray) {
  const getCurrentImg = imgArray.filter(el => el.url === img);
  let prevImg, newImg;

  if (getCurrentImg[0].id === 0) {
    prevImg = imgArray.length - 1;
  } else {
    prevImg = getCurrentImg[0].id - 1;
  }
  return (newImg = imgArray[prevImg]);
}
