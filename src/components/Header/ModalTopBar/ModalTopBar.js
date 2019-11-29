import React from 'react';
import classes from './ModalTopBar.css';
import { Icon } from 'react-icons-kit';
import {x} from 'react-icons-kit/feather/x';
import Radium from 'radium';
import * as d3 from "d3";

const modalTopBar = (props) => {
    return (
        <div className={classes.contentModal}>
            <div className={classes.closeCrosse}>
                <Icon onClick={props.close} icon={x} size={50} style={{color: 'white', cursor: 'pointer'}}/>
            </div>
            <div className={classes.modal}>
                <p className={classes.parag} onClick={() => {
                    props.closeTheme(); 
                    props.close(); 
                    props.closeCategorie(); 
                    props.closeUnderCategorie(); 
                    props.openSpectre();
                    document.getElementById('scrollLeft') ? document.getElementById('scrollLeft').scrollLeft = 0 : document.getElementById('scrollLeft');
                    d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
                    d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
                    d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
                    d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
                    d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
                    d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
                    d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')}}>Accueil</p>
                <p className={classes.parag} onClick={() => {props.openSpectre(); props.closeTheme(); props.closeCategorie(); props.close(); props.openModalVideo(); props.videoIsPlaying(); props.closeSecond();}}>Présentation de l'outil</p>
                <p className={classes.parag} onClick={() => {props.close(); props.openSecond();}}>Découvrir nos thématiques</p>
                <p className={classes.parag}><a href="https://www.arcep.fr">À propos de l'Arcep</a></p>
            </div>
        </div>
    );
}

export default Radium(modalTopBar);