import React from 'react';
import classes from './LeftModal.css';
import Radium from 'radium';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';

import { ReactComponent as Transport} from '../../../assets/noir/arcep_picto_noir_transports.svg';
import { ReactComponent as Maison} from '../../../assets/noir/arcep_picto_noir_maison.svg';
import { ReactComponent as Concert} from '../../../assets/noir/arcep_picto_noir_events_concerts.svg';
import { ReactComponent as SmartCity} from '../../../assets/noir/arcep_picto_noir_smart_cities.svg';



const leftMdoal = (props) => {
    return (        
      <div className={classes.leftModal}>
          <div className={classes.Cross}>
            <Icon onClick={props.leftClose} icon={x} size={30} className={classes.crossStyle}/> 
          </div>
          <div className={classes.content}>
            <div className={classes.title}>
                <p>Découvrir nos thémathiques</p>
            </div>
            <div className={classes.allTheme}>
                <div className={classes.theme} onClick={() => {props.closeUnderCategorie(); props.setSpectreTopBarToOne(); props.theme(1); props.closeCategorie(); props.closeSpectre(); props.rightClose();}}>
                    <Maison  className={classes.logoUnderCat}/>
                    <p style={{margin: '20px 0px 20px 10px'}}>À la maison</p>
                </div>
                <div className={classes.theme} onClick={() => {props.closeUnderCategorie(); props.setSpectreTopBarToOne(); props.theme(2); props.closeCategorie(); props.closeSpectre(); props.rightClose();}}>
                    <Transport className={classes.logoUnderCat} />
                    <p style={{margin: '20px 0px 20px 10px'}}>Transports en commun</p>
                </div>
                <div className={classes.theme} onClick={() => {props.closeUnderCategorie(); props.setSpectreTopBarToOne(); props.theme(3); props.closeCategorie(); props.closeSpectre(); props.rightClose();}}>
                    <Concert className={classes.logoUnderCat} />
                    <p style={{margin: '20px 0px 20px 10px'}}>Concerts et évènements sportifs</p>
                </div>
                <div className={classes.theme} onClick={() => {props.closeUnderCategorie(); props.setSpectreTopBarToOne(); props.theme(4); props.closeCategorie(); props.closeSpectre(); props.rightClose();}}>
                    <SmartCity className={classes.logoUnderCat} />
                    <p style={{margin: '20px 0px 20px 10px'}}>Internet des objets / Smart cities</p>
                </div>
            </div>
          </div>
          <div className={classes.button}>
                <button onClick={() => {props.openSecond(); props.setSpectreTopBarToOne();}} className={classes.styleButton}>Plus de thèmes</button>
            </div>
      </div>
    );
}

export default Radium(leftMdoal);