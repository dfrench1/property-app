import React from 'react'
import {FileWrap, ImgInput} from './styled'
import {Done} from 'styled-icons/material/Done'
import {ErrorCircle} from 'styled-icons/boxicons-regular/ErrorCircle'

 const AddImages = ({setCurrentData, el, setImages, setImgIndex, success, error, imgIndex}) => (
    <React.Fragment>
    <FileWrap>
    <ImgInput
      type="file"
      id="files"
      name="name"
      multiple
      accept='image/*'
      onChange={e => {
        if (e.target.files.length > 0){
          setCurrentData(el)
          setImages(e.target.files);
          setImgIndex(el._id)
        }
      }}
    />
    </FileWrap>
    {success && imgIndex == el._id && <Done size={20} color="green" style={{marginTop:'0.5em'}}/>}
    {error && imgIndex == el._id && <ErrorCircle size={20} color="red" style={{marginTop:'0.5em'}}/>}
  </React.Fragment>
)

export default AddImages