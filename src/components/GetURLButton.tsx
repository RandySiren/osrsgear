import * as React from 'react';

import classes from './GetURLButton.module.css';
import GetURLButtonImage from '../assets/images/GetURLButton.png';

export interface GetURLButtonProps {}

const GetURLButton: React.FC<GetURLButtonProps> = (props) => {
    return (
        <img
            className={classes.GetURLButtonImage}
            src={GetURLButtonImage}
            alt='alt'
        />
    );
};

export default GetURLButton;
