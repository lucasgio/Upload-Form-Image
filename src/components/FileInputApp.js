import React, { useState } from "react";
import { FileInput, FormField , Image, Box } from "grommet";
import { uploadImage } from "../helper/uploadImage";
import { ProgressBarApp } from "./ProgressBarApp";



export const FileInputApp = () => {

  
  const [img, setImg] = useState('https://www.taekwondoitf.es/invictusmalaga/wp-content/uploads/sites/4/2017/12/no-image.png');
  const [show, setShow] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const fileDone = await uploadImage(file);
    setShow(false);
    setTimeout(() => {
      setImg(fileDone);
    }, 1000);
  };


  return (
    <FormField>
      <FileInput
        name="imageFile"
        onChange={handleSubmit}
      />
    <Box pad="small">

    {
      !show && <ProgressBarApp/>
    }
      
    <Image
          fit="cover"
          style={{paddingTop: "30px",}}
          src={img}
      />  
      </Box>
    </FormField>
  );
};
