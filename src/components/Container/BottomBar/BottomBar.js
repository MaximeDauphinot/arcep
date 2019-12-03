import React from 'react';
import classes from './BottomBar.css';
import Radium from 'radium';

let style = {
    width: '100%',
    marginTop: '644px'
}

const bottomBar = (props) => {
    if (props.theme){
        style.marginTop = (5 * window.innerHeight) / 100
    } else {
        if (props.categorieIsOpen || props.underCategorieIsOpen)
            style.marginTop = (5 * window.innerHeight) / 100
        else
            style.marginTop =  (70 * window.innerHeight) / 100
    }
    return (
        <div className={classes.bottomBar} style={style} id="margintop">
           <div className={classes.categorie}>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Objets/IoT'); 
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(55, 86, 157)'}}>
                    </div>
                    <p>Objets/IOT</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Réseaux mobile et THD');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(127, 190, 174)'}}>
                    </div>
                    <p>Réseaux mobile et THD</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Amateur');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(194, 44, 119)'}}>
                    </div>
                    <p>Amateur</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('PMSE');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(210, 47, 47)'}}>
                    </div>
                    <p>PMSE</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Satellite');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(75, 172, 208)'}}>
                    </div>
                    <p>Satellite</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Faisceaux hertziens');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(242, 157, 75)'}}>
                    </div>
                    <p>Faisceaux hertziens</p>
               </div>
               <div className={classes.categorieIndividuel} onClick={() => {
                   props.closeSpectre();
                   props.closeUnderCategorie();
                   props.setSpectreTopBarToOne();
                   props.closeTheme();
                   props.categorie('Autres');
                   props.openCategorie(); 
                   props.changeLinkChoiceHandler(null);
                   document.getElementById('margintop').style.marginTop = (5 * window.innerHeight) / 100;}}>
                    <div className={classes.squar} style={{backgroundColor: 'rgb(240, 237, 231)'}}>
                    </div>
                    <p>Autres</p>
               </div>
           </div>
        </div>
    );
}

export default Radium(bottomBar);