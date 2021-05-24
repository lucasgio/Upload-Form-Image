import React, { useState } from "react";
import { Meter, Image } from "grommet";
import { useUploadImage } from "../hook/useUploadImage";

export const ImageShowApp = () => {

    

    const [img, setImg] = useState('https://www.taekwondoitf.es/invictusmalaga/wp-content/uploads/sites/4/2017/12/no-image.png');  
    const [percent, setPercent] = useState(0);    



  return (
    <>
       <Meter type="bar" value={percent} max='100' color="blue" />

      <Image
        opacity='strong'
        style={{paddingTop: "20px",}}
        src={img}
      />
    </>
  );
};
