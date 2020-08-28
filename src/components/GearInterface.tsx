import React from 'react';

import classes from './GearInterface.module.css';

import image from '../assets/images/EquipmentBackground.png';

export interface GearInterfaceProps {}

const GearInterface: React.FC<GearInterfaceProps> = () => {
    return (
        <div className={classes.GearInterface}>
            <img src={image} alt='Equipment Background' />
        </div>
    );
};

export default GearInterface;
