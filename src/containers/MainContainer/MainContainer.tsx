import * as React from 'react';
import classes from './MainContainer.module.css';

import SearchBar from '../../components/SearchBar';

export interface MainContainerProps {}

const MainContainer: React.SFC<MainContainerProps> = () => {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        <div className={classes.MainContainer}>
            <SearchBar
                onInputChange={onInputChange}
                autocompleteItems={['1', '2', '3', '4', '5']}
            />
        </div>
    );
};

export default MainContainer;
