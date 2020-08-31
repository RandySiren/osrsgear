import React, { useState, useEffect } from 'react';
import classes from './MainContainer.module.css';
import { getURL } from '../../api/index';

import AutoComplete from '../../components/AutoComplete';
import GearInterface from '../../components/GearInterface';
import GetURLButton from '../../components/GetURLButton';

import { Slot } from '../../util/SlotTypes';

export interface MainContainerProps {
    visible: boolean;
    setVisible: Function;
}

const MainContainer: React.FC<MainContainerProps> = ({
    visible,
    setVisible,
}) => {
    const [input, setInput] = useState<string>(''); // Search bar input state
    const [item, setItem] = useState<any>(''); // Current item selected
    const [suggestions, setSuggestions] = useState<string[]>([]); // Autocomplete suggestions array
    const [itemData, setItemData] = useState<{ [unit: string]: string[] }>({});
    const [activeSlot, setActiveSlot] = useState<Slot>('null');
    const [activeItems, setActiveItems] = useState<{ [unit: string]: Slot }>({
        head: 'null',
        cape: 'null',
        neck: 'null',
        ammo: 'null',
        weapon: 'null',
        body: 'null',
        shield: 'null',
        legs: 'null',
        hands: 'null',
        boots: 'null',
        ring: 'null',
    });

    // When input element is changed
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const onSlotChange = (slot: Slot) => {
        setActiveSlot(slot);
        const element = document.getElementsByTagName('input')[0];
        if (element !== null && !element.disabled) {
            element.value = '';
        }
    };

    useEffect(() => {
        setInput('');
    }, [activeSlot]);

    useEffect(() => {
        if (item) {
            setActiveItems({ ...activeItems, [activeSlot]: item });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item]);

    // When input state is changed
    useEffect(() => {
        if (input.length >= 1 && activeSlot !== 'null') {
            const filteredSuggestions = itemData[activeSlot].filter((item) => {
                return item.toLowerCase().indexOf(input.toLowerCase()) > -1;
            });
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    }, [input, activeSlot, itemData]);

    // Initial load of data
    useEffect(() => {
        (async () => {
            const x = await getURL();
            setItemData(x);
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
                enable={activeSlot !== 'null'}
            />
            <GearInterface
                onSlotChange={onSlotChange}
                activeItems={activeItems}
            />
            <GetURLButton />
        </div>
    );
};

export default MainContainer;
