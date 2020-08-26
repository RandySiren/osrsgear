import React from 'react';
import classes from './SearchBar.module.css';

export interface AutoCompleteProps {
    suggestions: string[] | undefined;
    active: number;
}

const AutoComplete: React.SFC<AutoCompleteProps> = ({
    suggestions,
    active,
}) => {
    let element: React.ReactNode | null = null;
    if (suggestions) {
        element = (
            <ul className={classes.Suggestions}>
                {suggestions.map((item, index) => {
                    let listItem = <li key={index}>{item}</li>;

                    if (index === active)
                        listItem = (
                            <li key={index} className={classes.Active}>
                                {item}
                            </li>
                        );
                    return listItem;
                })}
            </ul>
        );
    }
    return <div>{element}</div>;
};

export default AutoComplete;
