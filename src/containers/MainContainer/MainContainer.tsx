import React, { useState, useEffect } from 'react';
import classes from './MainContainer.module.css';
import { getURL } from '../../api/index';

import AutoComplete from '../../components/AutoComplete';

export interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
    const [input, setInput] = useState<string>(''); // Search bar input state
    const [items, setItems] = useState<string[]>([]); // All items
    const [item, setItem] = useState<any>(''); // Current item selected
    const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions array

    // When input element is changed
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        if (item) {
            console.log(item);
        }
    }, [item]);

    // When input state is changed
    useEffect(() => {
        if (input.length > 0) {
            const filteredSuggestions = items.filter((item) => {
                return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
            });
            setSuggestions(filteredSuggestions);
        }
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
            <AutoComplete
                onInputChange={onInputChange}
                suggestions={suggestions}
                itemReceived={(item: any) => setItem(item)}
            />
        </div>
    );
};

export default MainContainer;
