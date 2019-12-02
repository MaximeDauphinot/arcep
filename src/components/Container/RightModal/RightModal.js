import React from 'react';
import classes from './RightModal.css';
import Radium from 'radium';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';

let test = null;
let styleGrey = {
  opacitiy: ''
}

const rightMdoal = (props) => {

  if (props.rightModalChoice === 'Objets/IoT'){
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Objets/IoT')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Objets/IoT', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Implants médicaux actifs</option>
          <option value="2">Systèmes télématiques pour la circulation et le transport</option>
          <option value="3">Alarmes</option>
          <option value="4">Mesures</option>
          <option value="5">Commandes de modèles réduits</option>
          <option value="6">Applications à bande ultralarge (UWB)</option>
          <option value="7">Non-spécifique</option>
          <option value="8">Aides à l'audition</option>
          <option value="9">Application de radiorepérage</option>
          <option value="10">Applications inductives</option>
          <option value="11">RFID</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'Réseaux mobile et THD') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Réseaux mobile et THD')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Réseaux mobile et THD', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Réseaux mobiles ouverts au public</option>
          <option value="2">Boucle locale radio</option>
          <option value="3">Réseaux mobiles professionnels PMR</option>
          <option value="4">Systèmes de Terre permettant de fournir des services de communications électroniques</option>
          <option value="5">Transmission de données à large bande</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'Amateur') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Amateur')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Amateur', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Amateur</option>
          <option value="2">Amateur-satellite</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'PMSE') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('PMSE')
              props.openCategorie()
            } else {
              props.underCategorieHandler('PMSE', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Audio/multimédia sans fil</option>
          <option value="2">PMSE</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'Satellite') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Satellite')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Satellite', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Stations terriennes du service mobile par satellite</option>
          <option value="2">Stations terriennes du service fixe par satellite</option>
          <option value="3">Systèmes par satellite</option>
          <option value="4">AES</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'Faisceaux hertziens') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Faisceaux hertziens')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Faisceaux hertziens', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Faisceaux hertziens</option>
        </select>
      </div>
    )
  } else if (props.rightModalChoice === 'Autres') {
    test = (
      <div style={{flexDirection: 'column'}}>
        <p style={{marginLeft: '10px'}}>Filtre par sous-application</p>
        <select placeholder="Recherche par applications" onChange={(e) => {
            props.closeCategorie();
            props.closeUnderCategorie();
            props.closeTheme()
            if (e.target.value === '0'){
              props.categorie('Autres')
              props.openCategorie()
            } else {
              props.underCategorieHandler('Autres', parseInt(e.target.value, 10));
              props.openUnderCategorie();
            }
        }} className={classes.inputTwo}>
          <option value="0">Tous</option>
          <option value="1">Autres applications</option>
          <option value="2">DECT et autres téléphones sans fil</option>
        </select>
      </div>
    )
  }


    return (        
      <div className={classes.rightModal}>
          <div className={classes.Cross}>
            <Icon onClick={() => {props.rightClose();}} icon={x} size={30} className={classes.crossStyle}/> 
          </div>
          <div className={classes.firstInput} id="firstInputRM">
              <div className={classes.title}>
                <p>Recherche par fréquence</p>
              </div>
              <div className={classes.topInput}>
                <div className={classes.styleInputTop}>
                  <select className={classes.selectStyle} onChange={(e) => {
                    if (e.target.value !== ""){
                      props.frequenceChoiceHandler(parseInt(e.target.value, 10))
                      document.getElementById('greyRMSecond').style.opacity = '0.4';
                      document.getElementById('greyRMSecond').style.pointerEvents = 'none';
                      props.closeCategorie()
                      props.closeUnderCategorie()
                      props.closeTheme()
                      props.openSpectre()
                      props.categorie('')
                    } else {
                      props.frequenceChoiceHandler(0)
                      document.getElementById('greyRMSecond').style.opacity = '1';
                      document.getElementById('greyRMSecond').style.pointerEvents = 'auto';
                    }
                  }}>
                    <option value="">Tous</option>
                    <option value="1">0 - 100 000 KHz</option>
                    <option value="2">100 000 - 200 000 KHz</option>
                    <option value="3">200 000 - 300 000 KHz</option>
                    <option value="4">300 000 - 400 000 KHz</option>
                    <option value="5">400 000 - 500 000 KHz</option>
                    <option value="6">500 000 - 600 000 KHz</option>
                    <option value="7">600 000 - 700 000 KHz</option>
                    <option value="8">700 000 - 800 000 KHz</option>
                    <option value="9">800 000 - 900 000 KHz</option>
                    <option value="10">900 000 - 1 000 000 KHz</option>

                    <option value="11">1 000 000 - 100 000 000 MHz</option>
                    <option value="12">100 000 000 - 200 000 000 MHz</option>
                    <option value="13">200 000 000 - 300 000 000 MHz</option>
                    <option value="14">300 000 000 - 400 000 000 MHz</option>
                    <option value="15">400 000 000 - 500 000 000 MHz</option>
                    <option value="16">500 000 000 - 600 000 000 MHz</option>
                    <option value="17">600 000 000 - 700 000 000 MHz</option>
                    <option value="18">700 000 000 - 800 000 000 MHz</option>
                    <option value="19">800 000 000 - 900 000 000 MHz</option>
                    <option value="20">900 000 000 - 1 000 000 000 MHz</option>

                    <option value="21">1 000 000 000 - 30 000 000 000 GHz</option>
                    <option value="22">30 000 000 000 - 55 000 000 000 GHz</option>
                    <option value="23">55 000 000 000 - 85 000 000 000 GHz</option>
                    <option value="24">85 000 000 000 - 110 000 000 000 GHz</option>
                    <option value="25">110 000 000 000 - 135 000 000 000 GHz</option>
                    <option value="26">135 000 000 000 - 165 000 000 000 GHz</option>
                    <option value="27">165 000 000 000 - 190 000 000 000 GHz</option>
                    <option value="28">190 000 000 000 - 220 000 000 000 GHz</option>
                    <option value="29">220 000 000 000 - 250 000 000 000 GHz</option>
                    <option value="30">250 000 000 000 - 275 000 000 000 GHz</option>
                  </select>
                </div>
              </div>
          </div>
          <div className={classes.secondInput}>
            <div id="greyRMSecond" style={{flexDirection: 'column'}}>
            <div className={classes.title} id="greyRMSecond">
              <p>Filtre par application</p>
                <select placeholder="Recherche par applications" onChange={(e) => {
                    props.closeUnderCategorie();
                    props.closeCategorie();
                    props.closeSpectre();
                    props.closeTheme();
                    if (e.target.value === ''){
                      document.getElementById('firstInputRM').style.opacity = '1'
                      document.getElementById('firstInputRM').style.pointerEvents = 'auto'
                      document.getElementById('submit').style.opacity = '1'
                      document.getElementById('submit').style.pointerEvents = 'auto'
                      props.categorie('');
                      props.openSpectre();
                    } else {
                      document.getElementById('firstInputRM').style.opacity = '0.4'
                      document.getElementById('firstInputRM').style.pointerEvents = 'none'
                      document.getElementById('submit').style.opacity = '0.4'
                      document.getElementById('submit').style.pointerEvents = 'none'
                      props.categorie(e.target.value);
                      props.openCategorie();
                      props.changeRightModalChoiceHandler(e.target.value)
                      props.underCategorieHandler(e.target.value)
                    }
                }} className={classes.inputTwo}>
                  <option value="">Tous</option>
                  {props.rightModalChoice === 'Objets/IoT' ?            <option value="Objets/IoT" defaultValue>Objets/IoT</option> :                       <option value="Objets/IoT">Objets/IoT</option> }
                  {props.rightModalChoice === 'Réseaux mobile et THD' ? <option value="Réseaux mobile et THD" defaultValue>Réseaux mobile et THD</option> : <option value="Réseaux mobile et THD">Réseaux mobile et THD</option> }
                  {props.rightModalChoice === 'Amateur' ?               <option value="Amateur" defaultValue>Amateur</option> :                             <option value="Amateur">Amateur</option> }
                  {props.rightModalChoice === 'PMSE' ?                  <option value="PMSE" defaultValue>PMSE</option> :                                   <option value="PMSE">PMSE</option> }
                  {props.rightModalChoice === 'Satellite' ?             <option value="Satellite" defaultValue>Satellite</option> :                         <option value="Satellite">Satellite</option> }
                  {props.rightModalChoice === 'Faisceaux hertziens' ?   <option value="Faisceaux hertziens" defaultValue>Faisceaux hertziens</option> :     <option value="Faisceaux hertziens">Faisceaux hertziens</option> }
                  {props.rightModalChoice === 'Autres' ?                <option value="Autres" defaultValue>Autres</option> :                               <option value="Autres">Autres</option> }
                </select>
                
            </div>
            {props.rightModalChoice ?
            <div className={classes.title} id="greyRMSecondBot" style={{marginBottom: '-99px',flexDirection: 'column'}}>
                {test}
              </div> : null}
            </div>
            <div className={classes.Button} id="submit" >
              {props.frequenceChoice !== '' ?
                <button className={classes.styleButton}  onClick={() => {
                  if (props.frequenceChoice !== ""){
                    props.closeCategorie()
                    props.closeUnderCategorie()
                    props.closeTheme()
                    props.openSpectre()
                    props.changeSpectreTopBarWithScroll(props.frequenceChoice)
                    document.getElementById('scrollLeft').scrollLeft = window.innerWidth * (props.frequenceChoice - 1)
                  }
                }}>Explorer</button>
               : <button className={classes.styleButton}  onClick={() => {
                  if (props.frequenceChoice !== ""){
                    props.closeCategorie()
                    props.closeUnderCategorie()
                    props.closeTheme()
                    props.openSpectre()
                    props.changeSpectreTopBarWithScroll(props.frequenceChoice)
                  }
              }}>Explorer</button> }
            </div>
            <div className={classes.alignLink}>
              <a href="https://docs.google.com/spreadsheets/d/1ybqASEa3W1i2VnRYexsb79FDg8nBzxBk6wf8cRpjApQ/edit?usp=sharing" className={classes.bddLink}>Télécharger la base de données</a>
            </div>
          </div>
      </div>
    );
}

export default Radium(rightMdoal);