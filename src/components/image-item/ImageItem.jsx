import React from "react";
import { LiItem, ItemImg } from "./ImageItem.Styled";




export const ImageItem = ({ url, alt, openModal}) => {

    return(
<LiItem className="gallery-item">
  <ItemImg src={url} alt={alt} onClick={openModal}/>
</LiItem>  
    )
}


