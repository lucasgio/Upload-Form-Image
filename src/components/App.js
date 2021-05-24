import React from "react";
import { Grommet,grommet, Box } from "grommet";
import { FileInputApp } from "./FileInputApp";

export const App = () => {



  return (
    <Grommet theme={grommet}>
      <Box fill align="center" justify="start" pad="large">
        <FileInputApp/>
      </Box>
    </Grommet>
  );
};
