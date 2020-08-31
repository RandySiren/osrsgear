import React, { useState, useEffect } from 'react';

import classes from './GearInterface.module.css';
import { Slot } from '../util/SlotTypes';

import image1 from '../assets/images/EquipmentBackground.png';

export interface GearInterfaceProps {
    onSlotChange: (arg0: Slot) => void;
}

const GearInterface: React.FC<GearInterfaceProps> = ({ onSlotChange }) => {
    const [activeSlot, setActiveSlot] = useState<Slot>('null');
    const slots = [
        ['head', classes.HeadSlot],
        ['cape', classes.CapeSlot],
        ['neck', classes.NeckSlot],
        ['ammo', classes.AmmoSlot],
        ['weapon', classes.WeaponSlot],
        ['body', classes.BodySlot],
        ['shield', classes.ShieldSlot],
        ['legs', classes.LegsSlot],
        ['hands', classes.HandsSlot],
        ['feet', classes.FeetSlot],
        ['ring', classes.RingSlot],
    ];

    const clicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const element = e.target as HTMLButtonElement;
        if (element.classList.contains(classes.active)) {
            onSlotChange('null');
            return setActiveSlot('null');
        }
        setActiveSlot(element.id as Slot);
        onSlotChange(element.id as Slot);
    };

    useEffect(() => {}, [activeSlot]);

    return (
        <div className={classes.GearInterface}>
            <img className={classes.GearBackground} src={image1} alt='' />
            {slots.map((slot) => {
                return (
                    <button
                        className={[
                            slot[1],
                            slot[0] === activeSlot
                                ? classes.active
                                : classes.inactive,
                        ].join(' ')}
                        id={slot[0]}
                        key={slot[0]}
                        onClick={clicked}
                    ></button>
                );
            })}
        </div>
    );
};

export default GearInterface;
