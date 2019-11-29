import React from 'react';
import classes from './TextFooter.css';
import Radium from 'radium';

const textFooter = (props) => {
    return (        
      <div className={classes.TextFooter}>
          <p>{props.text}</p>
      </div>
    );
}

export default Radium(textFooter);