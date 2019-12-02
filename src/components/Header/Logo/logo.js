import React from 'react';
import logo from '../../../assets/logo.png';
import classes from './Logo.css';
import Radium from 'radium';
import * as d3 from "d3";

const logoSpectre = (props) => {
    return (
        <div className={classes.logoAlign}>
            <img onClick={() => {
                props.closeUnderCategorie();
                props.closeTheme(); 
                props.closeCategorie(); 
                props.openSpectre();
                // document.getElementById('scrollLeft') ? document.getElementById('scrollLeft').scrollLeft = 0 : document.getElementById('scrollLeft');
                d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
                d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
                d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
                d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
                d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
                d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
                d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
                d3.selectAll("#topTest4").raise();}} src={logo} className={classes.logo} alt="logo"/>
        </div>
    );
}

export default Radium(logoSpectre);