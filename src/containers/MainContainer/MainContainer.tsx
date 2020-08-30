import React, { useState, useEffect } from 'react';
import classes from './MainContainer.module.css';
import { getURL } from '../../api/index';

import AutoComplete from '../../components/AutoComplete';
import GearInterface from '../../components/GearInterface';
import GetURLButton from '../../components/GetURLButton';

export interface MainContainerProps {
    visible: boolean;
    setVisible: Function;
}

const MainContainer: React.FC<MainContainerProps> = ({
    visible,
    setVisible,
}) => {
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
        } else {
            setSuggestions([]);
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
            <h1>OSRS Gear</h1>
            <AutoComplete
                onInputChange={onInputChange}
                suggestions={suggestions}
                itemReceived={(item: any) => setItem(item)}
                visible={visible}
                setVisible={setVisible}
            />
            <GearInterface />
            <GetURLButton />
        </div>
    );
};

export default MainContainer;
