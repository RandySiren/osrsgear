import React, { useState } from 'react';
import Suggestions from './Suggestions';

import classes from './AutoComplete.module.css';

export interface SearchBarProps {
    suggestions?: string[];
    onInputChange: React.FormEventHandler<HTMLInputElement>;
    itemReceived: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
    suggestions,
    onInputChange,
    itemReceived,
}) => {
    const [active, setActive] = useState<number>(-1);
    const [visible, setVisible] = useState<boolean>(true);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestions && suggestions.length > 0) {
            if (e.keyCode === 38 && active > 0) {
                // Key Up
                setActive(active - 1);
            } else if (e.keyCode === 40 && active < suggestions?.length - 1) {
                // Key Down
                setActive(active + 1);
            } else if (
                // Key Enter
                e.keyCode === 13 &&
                active >= 0 &&
                active < suggestions?.length
            ) {
                // Handle selection
                const element = document.getElementsByClassName(classes.Active);
                if (element) {
                    setVisible(false);
                    itemReceived(element[0].innerHTML);
                }
            } else {
                // Any other key, reset active and let it be visible
                setVisible(true);
                setActive(-1);
            }
        }
    };

    const onMouseHover = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        setActive(parseInt(element.id));
    };

    const onMouseClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        // Handle selection
        const element = e.target as HTMLElement;
        setVisible(false);
        itemReceived(element.innerHTML);
    };

    return (
        <div className={classes.SearchBar}>
            <input type='text' onChange={onInputChange} onKeyDown={onKeyDown} />
            {visible ? (
                <Suggestions
                    suggestions={suggestions}
                    active={active}
                    onMouseHover={onMouseHover}
                    onMouseClick={onMouseClick}
                />
            ) : null}
        </div>
    );
};

export default SearchBar;
