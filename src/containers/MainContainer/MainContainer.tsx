import React, { useState } from 'react';
import classes from './MainContainer.module.css';

import SearchBar from '../../components/SearchBar';

export interface MainContainerProps {}

const MainContainer: React.SFC<MainContainerProps> = () => {
    const [input, setInput] = useState<string | null>(null); // Search bar input state
    const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions array

    // Search bar input change handler
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        setInput(inputValue);

        if (inputValue) {
            const newSuggestions: string[] = inputValue.split('');
            setSuggestions(newSuggestions);
        }
    };

    return (
        <div className={classes.MainContainer}>
            <SearchBar
                onInputChange={onInputChange}
                autocompleteItems={suggestions}
            />
        </div>
    );
};

export default MainContainer;
