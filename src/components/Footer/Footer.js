import React from 'react';
import classes from './Footer.css';
import Radium from 'radium';
import TextFooter from './TextFooter/TextFooter';

const footer = () => {
    return (        
      <div className={classes.footer}>
          <div className={classes.footerAlign}>
            <TextFooter text="Mentions légales"/>
            <TextFooter text="@2019 Agence multimédia sorbonne"/>
          </div>
      </div>
    );
}

export default Radium(footer);