import React, { useState } from 'react';
import { defaultIcon } from '@/utils/tools';

function IconImg(props) {

  const { style, className, src, alt } = props;
  const [imgSrc, setImgSrc] = useState(src);

  function handleError() {
    setImgSrc(defaultIcon)
  }

  return (
    <img 
      style={style} 
      className={className} 
      src={imgSrc} 
      alt={alt}
      onError={()=> handleError()}
    />
  );
}

export default IconImg;