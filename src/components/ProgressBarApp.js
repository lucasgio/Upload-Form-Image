import React, { useEffect, useState } from 'react';
import {Meter} from 'grommet'


export const ProgressBarApp = () => {

    const [percent, setPercent] = useState(0);  

    useEffect(() => {
        setTimeout(() => {
            setPercent( percent + 10);
        }, 100);
    }, [percent])



    return (
        <Meter 
        alignSelf="center"
        type="bar" 
        value={percent} 
        max='100' 
        color="blue" 
        size="xlarge"
      /> 
    )
}
