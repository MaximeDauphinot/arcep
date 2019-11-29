import React, {Component} from 'react';
import classes from './SpectreTopBar.css';
import Radium from 'radium';
import BarChart from '../../Container/BarChart/BarChart';

let posCursor = null;

class SpectreTopBar extends Component {

    dragElement() {
      var pos1 = 0, pos2 = 0, elmnt = document.getElementById('drag');

      const dragMouseDown = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos2 = e.clientX;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
    
      const elementDrag = (e) => {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos2 - e.clientX;
        pos2 = e.clientX;
        if (elmnt.offsetLeft - pos1 < (((14 * window.innerWidth) / 100) * 3) - (((14 * window.innerWidth) / 100) * 3) / 30 && elmnt.offsetLeft - pos1 >= 0){
          elmnt.style.marginLeft = (elmnt.offsetLeft - pos1) + "px";
          document.getElementById('scrollLeft').scrollLeft = elmnt.offsetLeft * ((window.innerWidth * 10) * 3) / (((14 * window.innerWidth) / 100) * 3) 
        }
      }
    
      const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
      }

      if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
      } else {
        elmnt.onmousedown = dragMouseDown;
      }
    }

    render() {
      posCursor = (this.props.scrollSpectreTopBar * (((14 * window.innerWidth) / 100) * 3) / ((window.innerWidth * 10) * 3))
      
      return (        
        <div className={classes.SpectreTopBar}>
          <div className={classes.spectreImg} id="spectreImage" >
              <span id='drag' 
                onMouseOver={this.dragElement} 
                className={classes.curseur} 
                style={{marginLeft: posCursor,cursor: 'pointer', pointerEvents: this.props.spectre ? 'auto' : 'none', width: (((14 * window.innerWidth) / 100) * 3) / 30, height: (7 * window.innerHeight) / 100}}></span>
             <BarChart 
                width={(14 * window.innerWidth) / 100} 
                height={(5 * window.innerHeight) / 100}
                folder="#spectreImage"
                xScale={false}
                categorie={this.changeCategorieHandler}
                openCategorie={this.props.openCategorie}
                nameSpectre={this.props.nameSpectre}
                changeSpectreTopBarWithScroll={this.props.changeSpectreTopBarWithScroll}
                closeSpectre={this.props.closeSpectre}
                screenResponsive={this.props.screenResponsive}/>
          </div>
        </div>
      );
    }
  }

export default Radium(SpectreTopBar);