import React from 'react';
import classes from './Suggestions.module.css';

import { nanoid } from 'nanoid';

export interface AutoCompleteProps {
    suggestions: string[] | undefined;
    active: number;
    onMouseHover: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    onMouseClick: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
    refProp: React.MutableRefObject<any>;
    refProp2: React.MutableRefObject<any>;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    suggestions,
    active,
    onMouseHover,
    onMouseClick,
    refProp,
    refProp2,
}) => {
    let element: React.ReactNode | null = null;
    if (suggestions) {
        element = (
            <ul ref={refProp2} className={classes.Suggestions}>
                {suggestions.map((item, index) => {
                    let classString: string = '';

                    if (index === active) classString = classes.Active;
                    return (
                        <li
                            id={index + ''}
                            ref={
                                classString.indexOf(classes.Active) !== -1
                                    ? refProp
                                    : null
                            }
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
