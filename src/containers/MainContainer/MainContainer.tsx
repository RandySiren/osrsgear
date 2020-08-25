import * as React from 'react';
import classes from './MainContainer.module.css';

export interface MainContainerProps {}

const MainContainer: React.SFC<MainContainerProps> = () => {
    return <div className={classes.MainContainer}>Hi</div>;
};

export default MainContainer;
