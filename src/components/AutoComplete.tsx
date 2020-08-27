import React from 'react';
import classes from './SearchBar.module.css';

export interface AutoCompleteProps {
    suggestions: string[] | undefined;
    active: number;
    onMouseHover:
        | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
        | undefined;
    onMouseClick:
        | ((event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void)
        | undefined;
}

const AutoComplete: React.SFC<AutoCompleteProps> = ({
    suggestions,
    active,
    onMouseHover,
    onMouseClick,
}) => {
    let element: React.ReactNode | null = null;
    if (suggestions) {
        element = (
            <ul className={classes.Suggestions}>
                {suggestions.map((item, index) => {
                    let classString: string = '';
                    if (index === active) classString = classes.Active;
                    return (
                        <li
                            id={index + ''}
                            key={index}
                            className={classString}
                            onMouseOver={onMouseHover}
                            onClick={onMouseClick}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        );
    }
    return <>{element}</>;
};

export default AutoComplete;
