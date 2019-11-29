import React from 'react';
import classes from './RightMenu.css';
import Radium from 'radium';
import { Icon } from 'react-icons-kit';
import {chevronRight} from 'react-icons-kit/feather/chevronRight'
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'
import {search} from 'react-icons-kit/feather/search';
import {menu} from 'react-icons-kit/feather/menu'

const rightMenu = (props) => {
     let modal = null;
      if (props.modal === true){
        modal = props.close;
      } else {
        modal = props.open;
      }
    return (        
      <div className={classes.RightMenu}>
          <div className={classes.width + ' ' + classes.left}>
            <Icon className={classes.iconLeft} onClick={() => {
              if (props.scrollSpectreTopBar && props.spectre){
                props.changeScrollSpectreTopBar(props.scrollSpectreTopBar - window.innerWidth);
                document.getElementById('scrollLeft').scrollLeft -= window.innerWidth;
              }
              }} 
              size={40} icon={chevronLeft}></Icon>
            <Icon className={classes.iconLeft} onClick={() => {
              if (props.scrollSpectreTopBar < ((window.innerWidth * 10) * 3) - (window.innerWidth) && props.spectre){
                props.changeScrollSpectreTopBar(props.scrollSpectreTopBar + window.innerWidth);
                document.getElementById('scrollLeft').scrollLeft += window.innerWidth
              }
              }} 
              size={40} icon={chevronRight}></Icon>
          </div>
          <div className={classes.width + ' ' + classes.mid}>
            <Icon onClick={modal} className={classes.iconLeft} size={35} icon={search}></Icon>
            <Icon onClick={props.menu} className={classes.iconLeft} size={40} icon={menu}></Icon>
          </div>
      </div>
    );
}

export default Radium(rightMenu);