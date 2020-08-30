import React, { useState, useRef } from 'react';
import Suggestions from './Suggestions';

import classes from './AutoComplete.module.css';
import suggestionClasses from './Suggestions.module.css';

export interface SearchBarProps {
    suggestions?: string[];
    onInputChange: React.FormEventHandler<HTMLInputElement>;
    itemReceived: Function;
    visible: boolean;
    setVisible: Function;
}

const SearchBar: React.FC<SearchBarProps> = ({
    suggestions,
    onInputChange,
    itemReceived,
    visible,
    setVisible,
}) => {
    const [active, setActive] = useState<number>(-1);
    const myRef = useRef<any>(null);
    const myRef2 = useRef<any>(null);

    const executeScroll = (ref: any, ref2: any) => {
        ref2.current.scrollTo(0, ref.current.offsetTop);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (suggestions && suggestions.length > 0) {
            if (e.keyCode === 38 && active > 0) {
                // Key Up
                setActive(active - 1);
                if (myRef.current !== null && myRef2.current !== null)
                    executeScroll(myRef, myRef2);
            } else if (e.keyCode === 40 && active < suggestions?.length - 1) {
                // Key Down
                setActive(active + 1);
                if (myRef.current !== null && myRef2.current !== null)
                    executeScroll(myRef, myRef2);
            } else if (e.keyCode === 13) {
                // Key Enter
                if (active >= 0 && active < suggestions?.length) {
                    // Handle selection
                    const element = document.getElementsByClassName(
                        suggestionClasses.Active
                    );
                    if (element) {
                        setVisible(false);
                        /**
                         * RETURN SELECTED ITEM
                         */
                        itemReceived(element[0].innerHTML);
                    }
                } else {
                    setVisible(false);
                    setActive(-1);
                }
            } else if (e.keyCode === 27) {
                // Key Escape
                setVisible(false);
                setActive(-1);
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
        /**
         * RETURN SELECTED ITEM
         */
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
                    refProp={myRef}
                    refProp2={myRef2}
                />
            ) : null}
        </div>
    );
};

export default SearchBar;
