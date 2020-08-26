import React, { useState, useEffect } from 'react';
import classes from './MainContainer.module.css';
import { getURL } from '../../api/index';

import SearchBar from '../../components/SearchBar';

export interface MainContainerProps {}

const MainContainer: React.SFC<MainContainerProps> = () => {
    const [input, setInput] = useState<string>(''); // Search bar input state
    const [items, setItems] = useState<string[]>([]); // All items
    const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions array

    // When input element is changed
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    // When input state is changed
    useEffect(() => {
        const filteredSuggestions = items.filter((item) => {
            return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
        });
        setSuggestions(filteredSuggestions);
    }, [input, items]);

    // Initial load of data
    useEffect(() => {
        (async () => {
            const data = await getURL();
            setItems(data);
        })();
    }, []);

    return (
        <div className={classes.MainContainer}>
            <SearchBar
                onInputChange={onInputChange}
                suggestions={suggestions}
            />
        </div>
    );
};

export default MainContainer;
