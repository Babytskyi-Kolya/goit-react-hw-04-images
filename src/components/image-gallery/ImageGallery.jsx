import React from "react";
import { ImageItem } from "components/image-item/ImageItem";
import { UlList } from "./ImageGallery.Styled";

export const ImageGallery = ({images, openModal}) => {

  return(
        
    <UlList >
      {images.map(img => (
         <ImageItem
            key={img.id}
            url={img.webformatURL}
            alt={img.tags}
            openModal={() => openModal(img)}
         />
      ))}
      
      
    </UlList>

  )
}