import React, { useState } from 'react';
import AutoComplete from './AutoComplete';

import classes from './SearchBar.module.css';

export interface SearchBarProps {
    suggestions?: string[];
    onInputChange: React.FormEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
    suggestions,
    onInputChange,
}) => {
    const [active, setActive] = useState<number>(-1);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestions) {
            // Key Up
            if (e.keyCode === 38 && active > 0) {
                setActive(active - 1);
            }
            // Key Down
            if (e.keyCode === 40 && active < suggestions?.length - 1) {
                setActive(active + 1);
            }
        }
    };

    return (
        <div className={classes.SearchBar}>
            <input type='text' onChange={onInputChange} onKeyDown={onKeyDown} />
            <AutoComplete suggestions={suggestions} active={active} />
        </div>
    );
};

export default SearchBar;
