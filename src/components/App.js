import React from "react";
import { Grommet,grommet, Box } from "grommet";
import { FileInputApp } from "./FileInputApp";
import { ImageShowApp } from "./ImageShowApp";

export const App = () => {



  return (
    <Grommet theme={grommet}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
            <FileInputApp/>
            <ImageShowApp/>
        </Box>
      </Box>
    </Grommet>
  );
};
