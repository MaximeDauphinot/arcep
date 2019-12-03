import React, { Component } from 'react';
import classes from './Container.css';
import Radium from 'radium';
import Pastille from './Pastille/Pastille';
import Modal from 'react-modal';
import LeftModal from './LeftModal/LeftModal';
import RightModal from './RightModal/RightModal';
import SecondLeftModal from './SecondLeftModal/SecondLeftModal';
import Themes from './Themes/Themes';
import BarChart from './BarChart/BarChart';
import Categorie from './Categorie/Categorie';
import BottomBar from './BottomBar/BottomBar';
import UnderCategories from './underCategories/underCategories';
import * as d3 from "d3";

const leftModalStyle = { 
  overlay: {
    width: '340px',
    flexGrow: '1',
    zIndex: '1',
    boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.15)',
    marginTop: (9 * window.innerHeight) / 100,
  }, 
  content: {
    backgroundColor: 'wihte',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0',
    justifyContent: 'flex-end',
    border: '0px',
    borderRadius: '0px'
  }
}

const leftSecondModalStyle = { 
  overlay: {
    width: '100%',
    height: '100vh',
    flexGrow: '1',
    zIndex: '1',
    boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.15)',
    marginTop: '9vh',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  }, 
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0',
    justifyContent: 'flex-end',
    border: '0px',
    borderRadius: '0px'
  }
}

const rightModalStyle = { 
  overlay: {
    width: '340px',
    flexGrow: '1',
    zIndex: '1',
    boxShadow: '1px 0px 1px rgba(0, 0, 0, 0.15)',
    marginTop: (9 * window.innerHeight) / 100,
    alignSelf: 'flex-end',
    left: 'auto'
  }, 
  content: {
    backgroundColor: 'wihte',
    width: '100%',
    height: '100%',
    top: '0',
    bottom: '0',
    left: 'auto',
    right: '0',
    padding: '0',
    justifyContent: 'flex-end',
    border: '0px',
    borderRadius: '0px'
  }
}


class container extends Component {
    state = {
        theme: '',
        categorie: '',
        underCategorie: '',
        whichUnder: 0,
        modalThemeIsOpen: false,
        wichTheme: 0,
        rightModalChoice: '',
        frequenceChoice: '',
        link: null
    }

    changeThemeHandler = (theme) => {
      this.props.openTheme();
      this.setState({theme: theme})
      this.props.closeThird();
    }

    changeRightModalChoiceHandler = (choice) => {
      this.setState({rightModalChoice: choice})
    }

    changeLinkChoiceHandler = (choice) => {
      this.setState({link: choice})
    }

    changeRightModalFrenquenceChoiceHandler = (choice) => {
      this.setState({frequenceChoice: choice})
      
    }

    openModalTheme = (i) => {
      this.setState({modalThemeIsOpen: true})
      this.setState({wichTheme: i})
    }

    closeModalTheme = () => {
      this.setState({modalThemeIsOpen: false})
      this.setState({wichTheme: 0})
    }

    changeCategorieHandler = (categorie) => {
      this.setState({categorie: categorie})
      this.setState({rightModalChoice: categorie})
      this.setState({frequemceChoice: ''})
      if (categorie === 'Objets/IoT'){
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').raise()
      } else if (categorie === 'Réseaux mobile et THD'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').raise()
      }  else if (categorie === 'Amateur'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').raise()
      } else if (categorie === 'PMSE'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').raise()
      } else if (categorie === 'Satellite'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').raise()
      } else if (categorie === 'Faisceaux hertziens'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').raise()
      } else if (categorie === 'Autres'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
        d3.selectAll('#topTest7').raise()
      } else {
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
        d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
        d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
        d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
        d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
        d3.selectAll("#topTest").raise();
        d3.selectAll("#topTest2").raise();
        d3.selectAll("#topTest6").raise();
        d3.selectAll("#topTest5").raise();
        d3.selectAll("#topTest3").raise();
        d3.selectAll("#topTest4").raise();
      }
  }

    changeUnderCategorieHandler = (underCategorie, wichUnder) => {
      this.setState({underCategorie: underCategorie})
      this.setState({wichUnder: wichUnder})
      if (underCategorie === 'Objets/IoT'){
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').raise()
      } else if (underCategorie === 'Réseaux mobile et THD'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').raise()
      }  else if (underCategorie === 'Amateur'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').raise()
      } else if (underCategorie === 'PMSE'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').raise()
      } else if (underCategorie === 'Satellite'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').raise()
      } else if (underCategorie === 'Faisceaux hertziens'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').raise()
      } else if (underCategorie === 'Autres'){
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
        d3.selectAll('#topTest7').raise()
      } else {
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest3').style('fill', 'rgb(194, 44, 119)')
        d3.selectAll('#topTest4').style('fill', 'rgb(210, 47, 47)')
        d3.selectAll('#topTest5').style('fill', 'rgb(75, 172, 208)')
        d3.selectAll('#topTest6').style('fill', 'rgb(242, 157, 75)')
        d3.selectAll('#topTest7').style('fill', 'rgb(240, 237, 231)')
        d3.selectAll("#topTest").raise();
        d3.selectAll("#topTest2").raise();
        d3.selectAll("#topTest6").raise();
        d3.selectAll("#topTest5").raise();
        d3.selectAll("#topTest3").raise();
        d3.selectAll("#topTest4").raise();
      }
    }

    render (){
       this.changeThemeHandler = this.changeThemeHandler.bind(this);
       this.changeCategorieHandler = this.changeCategorieHandler.bind(this);
       this.changeUnderCategorieHandler = this.changeUnderCategorieHandler.bind(this);
       this.openModalTheme = this.openModalTheme.bind(this)
       this.closeModalTheme = this.closeModalTheme.bind(this)
       this.changeRightModalChoiceHandler = this.changeRightModalChoiceHandler.bind(this)
       this.changeRightModalFrenquenceChoiceHandler = this.changeRightModalFrenquenceChoiceHandler.bind(this)
       this.changeLinkChoiceHandler = this.changeLinkChoiceHandler.bind(this);


        return (        
        <div className={classes.container}>
          { this.props.theme ? 
          <Themes 
            theme={this.state.theme}
            modalThemeIsOpen={this.state.modalThemeIsOpen}
            openModalTheme={this.openModalTheme}
            closeModalTheme={this.closeModalTheme}
            wichTheme={this.state.wichTheme}
            openSpectre={this.props.openSpectre}
            closeTheme={this.props.closeTheme}/> : null}
            { this.props.spectre ? 
              <div className={classes.testSpectre} id="scrollLeft" onScroll={(e) => {
                this.props.changeScrollSpectreTopBar(document.getElementById('scrollLeft').scrollLeft);
              }}>
                <div className={classes.testSpectreSD} id="spectre" >
                  <BarChart 
                    width={window.innerWidth * 10} 
                    height={(65 * window.innerHeight) / 100}
                    folder="#spectre"
                    xScale={true}
                    wichCategorie={this.state.categorie}
                    categorie={this.changeCategorieHandler}
                    openCategorie={this.props.openCategorie}
                    changeSpectreTopBarWithScroll={this.props.changeSpectreTopBarWithScroll}
                    closeSpectre={this.props.closeSpectre}
                    screenResponsive={this.props.screenResponsive}
                    openUnderCategorie={this.props.openUnderCategorie}
                    underCategorie={this.changeUnderCategorieHandler}
                    changeLinkChoiceHandler={this.changeLinkChoiceHandler}/>
                </div>
              </div> : null}
            { this.props.categorie ? 
                <Categorie 
                  categorie={this.state.categorie} 
                  closeCategorie={this.props.closeCategorie} 
                  openSpectre={this.props.openSpectre}
                  nameSpectre={this.props.nameSpectre}
                  openUnderCategorie={this.props.openUnderCategorie}
                  closeUnderCategorie={this.props.closeUnderCategorie}
                  underCategorie={this.changeUnderCategorieHandler}
                  leftClose={this.props.closeThird}
                  rightClose={this.props.close}
                  changeCategorie={this.changeCategorieHandler}/> : null}
             { this.props.underCategorie ? 
                <UnderCategories
                  categorie={this.changeCategorieHandler}
                  theme={this.props.theme}
                  openCategorie={this.props.openCategorie}
                  closeTheme={this.props.closeTheme}
                  categorieIsOpen={this.props.categorie} 
                  underCategorie={this.state.underCategorie}
                  closeUnderCategorie={this.props.closeUnderCategorie}
                  nameSpectre={this.props.nameSpectre}
                  openSpectre={this.props.openSpectre}
                  wichUnder={this.state.wichUnder}
                  setSpectreTopBarToOne={this.props.setSpectreTopBarToOne}
                  closeCategorie={this.props.closeCategorie} 
                  leftClose={this.props.closeThird}
                  rightClose={this.props.close}
                  changeCategorie={this.changeCategorieHandler}
                  changeScrollSpectreTopBar={this.props.changeScrollSpectreTopBar}
                  link={this.state.link}
                  changeLinkChoiceHandler={this.changeLinkChoiceHandler}/> : () => {this.changeLinkChoiceHandler(null)} }
          <BottomBar 
            categorie={this.changeCategorieHandler}
            theme={this.props.theme}
            openCategorie={this.props.openCategorie}
            closeTheme={this.props.closeTheme}
            categorieIsOpen={this.props.categorie}
            underCategorieIsOpen={this.props.underCategorie}
            nameSpectre={this.props.nameSpectre}
            setSpectreTopBarToOne={this.props.setSpectreTopBarToOne}
            closeSpectre={this.props.closeSpectre}
            closeUnderCategorie={this.props.closeUnderCategorie}/>
          <Modal 
            isOpen={this.props.modalThird}
            onRequestClose={this.props.closeThird}
            ariaHideApp={false}
            style={leftModalStyle}
            >
              <LeftModal 
                leftClose={this.props.closeThird}
                rightClose={this.props.close}
                openSecond={this.props.openSecond}
                closeSecond={this.props.closeSecond}
                theme={this.changeThemeHandler}
                closeSpectre={this.props.closeSpectre}
                closeCategorie={this.props.closeCategorie}
                nameSpectre={this.props.nameSpectre}
                setSpectreTopBarToOne={this.props.setSpectreTopBarToOne}
                closeUnderCategorie={this.props.closeUnderCategorie}/>
            </Modal>
            <Pastille
              leftOpen={this.props.openThird}
              rightOpen={this.props.open}
              />
            <Modal 
              isOpen={this.props.modal}
              onRequestClose={this.props.close}
              ariaHideApp={false}
              style={rightModalStyle}
              >
              <RightModal 
                rightClose={this.props.close}
                closeUnderCategorie={this.props.closeUnderCategorie}
                closeCategorie={this.props.closeCategorie}
                closeSpectre={this.props.closeSpectre}
                closeTheme={this.props.closeTheme}
                openCategorie={this.props.openCategorie}
                categorie={this.changeCategorieHandler}
                leftClose={this.props.closeThird}
                rightModalChoice={this.state.rightModalChoice}
                changeRightModalChoiceHandler={this.changeRightModalChoiceHandler}
                openUnderCategorie={this.props.openUnderCategorie}
                underCategorieHandler={this.changeUnderCategorieHandler}
                wichUnder={this.state.wichUnder}
                underCategorie={this.state.underCategorie}
                categorieRM={this.state.categorie}
                openSpectre={this.props.openSpectre}
                frequenceChoice={this.state.frequenceChoice}
                frequenceChoiceHandler={this.changeRightModalFrenquenceChoiceHandler}
                changeSpectreTopBarWithScroll={this.props.changeSpectreTopBarWithScroll}/>
            </Modal>
            <Modal 
              isOpen={this.props.modalSecond}
              onRequestClose={this.props.closeSecond}
              ariaHideApp={false}
              style={leftSecondModalStyle}
              >
                <SecondLeftModal
                  close={this.props.closeSecond}
                  theme={this.changeThemeHandler}
                  closeSpectre={this.props.closeSpectre}
                  closeCategorie={this.props.closeCategorie}
                  closeUnderCategorie={this.props.closeUnderCategorie}/>
            </Modal>
        </div>
        );
    }
}

export default Radium(container);