import React from 'react';

import classes from './SearchBar.module.css';

export interface SearchBarProps {
    autocompleteItems?: string[];
    onInputChange: React.FormEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<SearchBarProps> = ({
    autocompleteItems,
    onInputChange,
}) => {
    let suggestions: React.ReactNode | null = null;
    if (autocompleteItems) {
        suggestions = (
            <ul className={classes.Suggestions}>
                {autocompleteItems.map((item, index) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
        );
    }
    return (
        <div className={classes.SearchBar}>
            <input type='text' onChange={onInputChange} />
            {suggestions}
        </div>
    );
};

export default SearchBar;
