import React, { useState } from "react";
import { FileInput, FormField } from "grommet";
import { useUploadImage } from "../hook/useUploadImage";


export const FileInputApp = () => {

  const [file, setFile] = useState();
  useUploadImage(file);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <FileInput
        name="imageFile"
        style={{
          paddingBottom: "20px",
        }}
        onChange={handleSubmit}
      
      />
    </FormField>
  );
};
