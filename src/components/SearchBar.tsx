import * as React from 'react';

import classes from './SearchBar.module.css';

export interface SearchBarProps {
    autocompleteItems?: string[];
    onInputChange: React.FormEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
    autocompleteItems,
    onInputChange,
}) => {
    let autocomplete: React.ReactNode | null = null;
    if (autocompleteItems) {
        autocomplete = <div></div>;
    }
    return (
        <div className={classes.SearchBar}>
            <input type='text' onChange={onInputChange} />
            {autocomplete}
        </div>
    );
};

export default SearchBar;
