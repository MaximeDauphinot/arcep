import React from 'react';
import classes from './Pastille.css';
import { Icon } from 'react-icons-kit';
import {list} from 'react-icons-kit/feather/list';
import {search} from 'react-icons-kit/feather/search';
import Radium from 'radium';

const pastille = (props) => {
    return (
        <div className={classes.pastille} id="pastille">
            <div onClick={props.leftOpen} className={classes.pastilleLeft} id="pastilleLeft">
                <Icon style={{marginTop: '40px'}} icon={list} size={60} className={classes.iconLeft}/>
                <p className={classes.paragraphe}>Thèmes</p>
            </div>
            <div onClick={props.rightOpen} className={classes.pastilleRight} id="pastilleRight">
                <Icon style={{marginTop: '40px'}} icon={search} size={60} className={classes.iconRight}/>
                <p className={classes.paragraphe}>Recherche</p>
            </div>    
        </div>
    );
}

export default Radium(pastille);