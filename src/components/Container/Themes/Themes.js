import React from 'react';
import Modal from 'react-modal';
import classes from './Themes.css';
import Radium from 'radium';
import drone from '../../../assets/drone.png';
import capteur from '../../../assets/capteur.png';
import voiture from '../../../assets/voiture-connecte.png';
import puce from '../../../assets/puce.png';
import * as d3 from 'd3';

import { ReactComponent as Transport} from '../../../assets/noir/arcep_picto_noir_transports.svg';
import { ReactComponent as Maison} from '../../../assets/icon-maison.svg';
import { ReactComponent as Concert} from '../../../assets/noir/arcep_picto_noir_events_concerts.svg';
import { ReactComponent as SmartCity} from '../../../assets/noir/arcep_picto_noir_smart_cities.svg';

import { ReactComponent as Manette} from '../../../assets/arcep_picto_blanc_console_de_jeux.svg';
import { ReactComponent as Bracelet} from '../../../assets/arcep_picto_blanc_bracelet_connecte.svg';
import { ReactComponent as ReseauxPublics} from '../../../assets/arcep_picto_blanc_reseaux_mobiles_publics.svg';
import { ReactComponent as Cuisson} from '../../../assets/arcep_picto_blanc_plaque_de_cuisson.svg';

import { ReactComponent as ReseauxPublicMobile} from '../../../assets/reseaux-mobiles-public.svg';
import { ReactComponent as Talki} from '../../../assets/arcep_picto_blanc_talkie_walkie_2.svg';
import { ReactComponent as Pmse} from '../../../assets/arcep_picto_blanc_PMSE.svg';

import { ReactComponent as Carte} from '../../../assets/arcep_picto_blanc_carte_de_transport_verso.svg';
import { ReactComponent as Trottinette} from '../../../assets/arcep_picto_blanc_trottinette_electrique_2.svg';
import { ReactComponent as Velib} from '../../../assets/arcep_picto_blanc_velo_en_libre_service.svg';
import { ReactComponent as Train} from '../../../assets/arcep_picto_blanc_train_connecte.svg';

// let themeChoice = null;
let squareModalTheme = null;

let logoTheme = null;

let modalButton = "< Accès a l'outil"

let modalThemeTitle = {
    firstTitle: '',
    secondTitle: '',
}

let modalThemeContent = null;

const modalStyle = { 
    overlay: {
      width: '300px',
      height: '380px',
      zIndex: '1',
      marginTop: '245px',
      marginLeft: '',
      borderRadius: '8px',
      boxShadow: '2px 2px 5px #29574D',
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
      border: '0px',
      borderRadius: '8px'
    }
  }

let style = {
    firstContainer: {
        
    },
    secondContainer: {

    },
    thirdContainer: {
        
    },
    fourthContainer: {
        
    }
}

let styleModal = {
    themeOne: {
        visibility: 'visible',
    },
    themeTwo: {
        visibility: 'visible',
    },
    themeThree: {
        visibility: 'visible',
    },
    themeFour: {
        visibility: 'visible',
    },
}

let title = {
    black: '',
    grey: ''
}



let firstContainer = null;
let secondContainer = null;
let thirdContainer = null;
let fourthContainer = null;

// let styleTheme = {
//     height: ((65 * window.innerHeight) / 100) - 60
// }

const themes = (props) => {
    if (props.theme === 1){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '28%',
            },
            secondContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '19%',
            },
            thirdContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '28%',
            },
            fourthContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            }
        }
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest').raise()
        d3.selectAll('#topTest2').raise()
        if (props.modalThemeIsOpen){
            if (props.wichTheme === 1){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > WIFI'
                modalThemeTitle.secondTitle = '2,4 - 2,4835 GHz / 5,150 - 5,350 GHz / 5,470 - 5,725 GHz'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Un réseau Wifi permet de relier par ondes radio plusieurs appareils au sein d'un réseau afin de permettre la transmission de données entre eux. La portée peut atteindre plusieurs dizaines de mètres en intérieur s'il n'y a aucun obstacle gênant. Le Wifi utilise historiquement une bande de fréquences libre autour de 2,4 GHz. Depuis 2008, et pour faire face à la saturation croissante dans la bande 2,4 GHz et aux risques d'interférences avec les autres types d'usages dans la bande (Bluetooth, fours à micro-ondes...), le Wifi peut également utiliser les bandes de fréquences autour de 5 GHz. Pour l'avenir, des travaux sont en cours afin d'ouvrir la bande 6 GHz pour le Wifi."
                // themeChoice = 1
                modalStyle.overlay.marginLeft = 'calc(28% - 20px)'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            } else if (props.wichTheme === 2){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > Bluetooth'
                modalThemeTitle.secondTitle = '2,4 - 2,4835 GHz'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Le Bluetooth permet l’échange de données sur une très courte distance en utilisant des ondes radio sur la bande de fréquences des 2,4 GHz. Son objectif : remplacer les câbles entre un smartphone et une bracelet connecté par exemple. Par rapport au Wifi, le bluetooth se caractérise notamment par une consommation énergétique plus faible et des débits plus restreints."
                // themeChoice = 2
                modalStyle.overlay.marginLeft = 'calc((47% + 4px) - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            } else if (props.wichTheme === 3){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > 2G, 3G, 4G, 5G'
                modalThemeTitle.secondTitle = 'Bandes de fréquences attribuées aux opérateurs mobiles'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Le réseau GSM (pour Global System for Mobile Communications) est une norme de seconde génération (2G) pour la téléphonie mobile. Il permet de téléphoner, d’envoyer des SMS et des MMS. Cette norme a évolué avec l'arrivée de la technologie EDGE (Enhanced Data Rates for GSM Evolution) qui offre une amélioration des débits. Le réseau UMTS (Universal Mobile Telecommunication System) est une évolution de la norme GSM de téléphonie mobile, correspondant à la 3ème génération (3G). Cette norme généralise le transfert de données et l'accès à internet par les téléphones portables. Le réseau LTE (pour Long Term Evolution) est une technologie plus récente, plus connu sous le nom de '4G'. "
                // themeChoice = 3
                modalStyle.overlay.marginLeft = 'calc((75% + 8px) - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            } else if (props.wichTheme === 4){
                modalThemeTitle.firstTitle = 'Objets/iOT > Induction'
                modalThemeTitle.secondTitle = 'Bande Applications inductives'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "Une plaque à induction est constituée de bobines traversées par un courant électrique alternatif. Ceci a pour effet de créer des ondes  électromagnétiques  (tout comme les communications électroniques) qui vont chauffer le récipient adapté présent sur la plaque."
                // themeChoice = 4
                modalStyle.overlay.marginLeft = 'calc(75% - 280px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'

            }
            
        } else {
            // themeChoice = 0
            modalStyle.overlay.marginLeft = '0px'
            styleModal.themeTwo.visibility = 'visible'
            styleModal.themeThree.visibility = 'visible'
            styleModal.themeFour.visibility = 'visible'
            styleModal.themeOne.visibility = 'visible'
            style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
            style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            style.fourthContainer.backgroundColor = 'rgb(55, 86, 157)'
        }
        title = {
            black: 'À la maison,',
            grey: ' qu’est-ce qui m’entoure dans mon appartement ?'
        }
        logoTheme = (<Maison style={{width: '40px', alignSelf: 'center'}}/>)
        firstContainer = (
            <div style={style.firstContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(1)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeOne}>
                    <Manette style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Wifi appartement</p>
                    <p className={classes.text}>Les assistants vocaux, les ordinateurs portables, les tablettes, les smartphones, les consoles de jeu... peuvent être connectés à Internet via le signal Wifi de la box internet.  </p>
                </div>
            </div>
        )
        secondContainer = (
            <div style={style.secondContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(2)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeTwo}>
                    <Bracelet style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Objets connectés</p>
                    <p className={classes.text}>Le Bluetooth permet l’échange de données sur une très courte distance.</p>
                </div>
            </div>
        )
        thirdContainer = (
            <div style={style.thirdContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(3)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeThree}>
                    <ReseauxPublics style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Réseaux mobiles publics</p>
                    <p className={classes.text}>Pour l'avenir, les réseaux mobiles pourront utiliser la technologie 5G, qui doit permettre un saut de performance en termes de débit, de délai de transmission et de fiabilité de la communication. </p>
                </div>
            </div>
        )
        fourthContainer = (
            <div style={style.fourthContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(4)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeFour}>
                    <Cuisson style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Plaques de cuisson à induction</p>
                    <p className={classes.text}>Une plaque à induction est constituée de bobines traversées par un courant électrique alternatif.</p>
                </div>
            </div>
        )
    } else if (props.theme === 2){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '28%',
            },
            secondContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '19%',
            },
            thirdContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '28%',
            },
            fourthContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            }
        }
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest').raise()
        d3.selectAll('#topTest2').raise()
        title = {
            black: 'Transports en commun,',
            grey: ' quelles technologies m\'accompagnent dans mes déplacements ?'
        }
        logoTheme = (<Transport style={{width: '30px', alignSelf: 'center'}}/>)
        if (props.modalThemeIsOpen){
            if (props.wichTheme === 1){
                modalThemeTitle.firstTitle = 'Objets/iOT > RFID > NFC'
                modalThemeTitle.secondTitle = '500 kHz, 13,5 MHz (NFC), 865 MHz et 2,4 GHz'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "Le RFID (pour Radio Frequency Identification) est une technologie développée pour mémoriser et récupérer des données à distance, jusqu’à une dizaine de mètres. Pour cela, il faut une antenne associée à une puce électronique pour recevoir et répondre à des requêtes. Cette technologie utilise plusieurs types de fréquences autour de 500 kHz, 13,5 MHz, 865 MHz et 2,4 GHz. Les applications utilisant le RFID sont nombreuses : badges d’accès, antivol, traçabilité des produits et des marchandises, passeports, titres de transport en commun, paiement sans contact… "
                // themeChoice = 1
                modalStyle.overlay.marginLeft = 'calc(28% - 20px)'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 2){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > Bluetooth, Wifi, réseaux mobiles…'
                modalThemeTitle.secondTitle = ''
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Les trottinettes (notamment électriques) connectées, en partage ou individuelles, peuvent utiliser les technologies suivantes :- par le bluetooth ou le Wifi, via le smartphone de l'utilisateur ;- par les réseaux mobiles des opérateurs, si la trottinette est équipée d'une carte SIM.De plus, elles peuvent être équipées d'un GPS pour déterminer leur localisation."
                // themeChoice = 2
                modalStyle.overlay.marginLeft = 'calc((47% + 4px) - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.firstContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.thirdContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 3){
                modalThemeTitle.firstTitle = 'Objets/iOT > RFID > NFC et Zigbee'
                modalThemeTitle.secondTitle = 'Zigbee : 868 - 868,6 MHz et 2,4 - 2,4835 GHz RFID > NFC : idem ci-dessus'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "Le vélo se déverrouillera grâce à une carte de transport utilisant la technologie NFC. Le vélo transmet aussi des informations au serveur central de gestion de flotte. Pour cela, il est connecté à une station grâce à la technologie ZigBee qui permet des communications à courtes distances, comme le permet la technologie Bluetooth [lien vers explication du Bluetooth]."
                // themeChoice = 3
                modalStyle.overlay.marginLeft = 'calc((75% + 8px) - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.firstContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 4){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > GSM-R'
                modalThemeTitle.secondTitle = '876 - 880 MHz et 921 - 925 MHz'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Le GSM-R (Global System for Mobile communications - Railways) permet les communications mobiles (voix et données) spécifiquement dans le milieu ferroviaire. Grâce à cette technologie, les trains peuvent communiquer avec les postes de régulation du trafic ferroviaire, les agents de conduite, de circulation et de maintenance peuvent effectuer des appels de groupe... La technologie GSM-R est basée sur la technologie GSM, une norme pour la téléphonie mobile.  [lien vers le contenu GSM]."
                // themeChoice = 4
                modalStyle.overlay.marginLeft = 'calc(75% - 280px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.firstContainer.backgroundColor = 'rgb(44, 69, 126)'

            }
            
        } else {
            // themeChoice = 0
            modalStyle.overlay.marginLeft = '0px'
            styleModal.themeTwo.visibility = 'visible'
            styleModal.themeThree.visibility = 'visible'
            styleModal.themeFour.visibility = 'visible'
            styleModal.themeOne.visibility = 'visible'
            style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
            style.thirdContainer.backgroundColor = 'rgb(55, 86, 157)'
            style.fourthContainer.backgroundColor = 'rgb(127, 190, 174)'
        }
        firstContainer = (
            <div style={style.firstContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(1)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeOne}>
                    <Carte style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Carte de transport</p>
                    <p className={classes.text}>Les cartes de transport, comme le pass Navigo, utilisent la "Communication en champ proche" ou NFC, qui est l'une des technologie RFID, pour échanger des informations concernant votre forfait avec les portiques ou bornes de sécurité.  </p>
                </div>
            </div>
        )
        secondContainer = (
            <div style={style.secondContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(2)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeTwo}>
                    <Trottinette style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Trottinette électrique</p>
                    <p className={classes.text}>Les trottinettes connectées, peuvent utiliser les technologies suivantes : le bluetooth ou le Wifi, via le smartphone de l'utilisateur; ou les réseaux mobiles des opérateurs, si la trottinette est équipée d'une carte SIM.</p>
                </div>
            </div>
        )
        thirdContainer = (
            <div style={style.thirdContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(3)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeThree}>
                    <Velib style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Vélo en libre-service type "Vélib"</p>
                    <p className={classes.text}>Le vélo transmet des informations au serveur central de gestion de flotte. Pour cela, il est connecté à une station grâce à la technologie ZigBee.</p>
                </div>
            </div>
        )
        fourthContainer = (
            <div style={style.fourthContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(4)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeFour}>
                    <Train style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Connectivité des trains</p>
                    <p className={classes.text}>Grâce à cette technologie, les trains peuvent communiquer avec les postes de régulation du trafic ferroviaire, les agents de conduite, de circulation et de maintenance peuvent effectuer des appels de groupe...</p>
                </div>
            </div>
        )
    } else if (props.theme === 3){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            },
            secondContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            },
            thirdContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            },
            fourthContainer: {
                backgroundColor: 'rgb(127, 190, 174)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '25%',
            }
        }
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest2').style('fill', 'rgb(127, 190, 174)')
        d3.selectAll('#topTest2').raise()
        logoTheme = (<Concert style={{width: '30px', alignSelf: 'center'}}/>)
        if (props.modalThemeIsOpen){
            if (props.wichTheme === 1){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > Tetra, LTE'
                modalThemeTitle.secondTitle = '400 MHz, 446 MHz, 2,6 GHz TDD'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Ces réseaux mobiles professionnels sont utilisés par des entreprises de tailles très diverses (depuis le professionnel indépendant jusqu'aux grands groupes) et de différents secteurs d'activités tels que : les transports (entreprises de transports routiers, sociétés de bus, de taxis, services aéroportuaires, sociétés d'autoroutes, ambulanciers…), la sécurité et le gardiennage, le bâtiment et les travaux publics, l'énergie (sociétés de distribution d'électricité),  l'industrie, des associations dans le cadre d'activités sportives ou de loisirs, certains services de l'Etat, des hôpitaux, des collectivités locales, ainsi que certains établissements publics."
                // themeChoice = 1
                modalStyle.overlay.marginLeft = 'calc(25% - 20px)'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 2){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > Tetra'
                modalThemeTitle.secondTitle = '400 MHz, 446 MHz, autres bandes libres'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Les talkies walkies sont des terminaux permettant des communications locales, indépendants des réseaux mobiles des opérateurs, qui peuvent offrir des fonctionnalités spécifiques (possibilité de passer des appels de groupe, appels instantannés…). Ils peuvent être utilisés à des fins de loisirs ou pour un usage professionnel."
                // themeChoice = 2
                modalStyle.overlay.marginLeft = 'calc(50% - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 3){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > Wi-Fi'
                modalThemeTitle.secondTitle = '2,4 - 2,4835 GHz et 5,150 - 5,350 GHz / 5,470 - 5,725 GHz'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Les drones amateurs légers, qui peuvent être utililisés pour de la prise d'image lors d'évènements sportifs ou culturels, sont généralement pilotés en liaison directe, via le Wifi. Des travaux sont en cours pour déterminer des bandes de fréquences dédiées aux drones professionnels."
                // themeChoice = 3
                modalStyle.overlay.marginLeft = 'calc(75% - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.fourthContainer.backgroundColor = 'rgb(102, 152, 138)'

            } else if (props.wichTheme === 4){
                modalThemeTitle.firstTitle = 'Réseaux mobiles & THD > 2G, 3G, 4G, 5G'
                modalThemeTitle.secondTitle = 'Bandes de fréquences attribuées aux opérateurs mobiles'
                squareModalTheme = 'rgb(127, 190, 174)'
                modalThemeContent = "Pour faire face aux pics de trafic lors d'évènements particuliers, les opérateurs mobiles peuvent déployer des antennes-relais supplémentaires et ainsi désaturer le réseau [cf. supra]"
                // themeChoice = 4
                modalStyle.overlay.marginLeft = 'calc(75% - 280px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.thirdContainer.backgroundColor = 'rgb(102, 152, 138)'
                style.firstContainer.backgroundColor = 'rgb(102, 152, 138)'

            }
            
        } else {
            // themeChoice = 0
            modalStyle.overlay.marginLeft = '0px'
            styleModal.themeTwo.visibility = 'visible'
            styleModal.themeThree.visibility = 'visible'
            styleModal.themeFour.visibility = 'visible'
            styleModal.themeOne.visibility = 'visible'
            style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
            style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            style.fourthContainer.backgroundColor = 'rgb(127, 190, 174)'
        }
        title = {
            black: 'Concerts et évènements sportifs,',
            grey: ' quels dispositifs sont utilisés pour enregistrer et transmettre des events ?'
        }
        firstContainer = (
            <div style={style.firstContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(1)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeOne}>
                    <ReseauxPublicMobile style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Réseaux mobiles professionnels</p>
                    <p className={classes.text}>Les réseaux mobiles professionnels (souvent rassemblés sous le sigle PMR pour " professionnal mobile radio ") sont des réseaux mobiles d'ampleur généralement locale ou régionale, exploités pour des usages professionnels.</p>
                </div>
            </div>
        )
        secondContainer = (
            <div style={style.secondContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(2)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeTwo}>
                    <Talki style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Talkie-walkie</p>
                    <p className={classes.text}>Les talkies walkies sont des terminaux permettant des communications locales, indépendants des réseaux mobiles des opérateurs.</p>
                </div>
            </div>
        )
        thirdContainer = (
            <div style={style.thirdContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(3)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeThree}>
                    <img src={drone} alt="logo trottinette" className={classes.logo}/>
                    <p className={classes.title}>Drone</p>
                    <p className={classes.text}>Les drones amateurs légers, qui peuvent être utililisés pour de la prise d'image lors d'évènements sportifs ou culturels, sont généralement pilotés en liaison directe, via le Wifi. </p>
                </div>
            </div>
        )
        fourthContainer = (
            <div style={style.fourthContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(4)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeFour}>
                    <Pmse style={{height: '25%', width: 'auto'}}/>
                    <p className={classes.title}>Réseaux mobiles publics</p>
                    <p className={classes.text}>Pour faire face aux pics de trafic lors d'évènements particuliers, les opérateurs mobiles peuvent déployer des antennes-relais supplémentaires et ainsi désaturer le réseau.</p>
                </div>
            </div>
        )
    } else if (props.theme === 4){
        style = {
            firstContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '33.333%',
            },
            secondContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '33.333%',
            },
            thirdContainer: {
                backgroundColor: 'rgb(55, 86, 157)',
                margin: '0px 2px',
                height: (60 * window.innerHeight) / 100,
                width: '33.333%',
            },
            fourthContainer: {
                display: 'none',
            }
        }
        d3.selectAll('#topTest3').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest4').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest5').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest6').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest7').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').style('fill', 'rgb(55, 86, 157)')
        d3.selectAll('#topTest2').style('fill', 'rgb(255, 255, 255)')
        d3.selectAll('#topTest').raise()
        logoTheme = (<SmartCity style={{width: '30px', alignSelf: 'center'}}/>)
        if (props.modalThemeIsOpen){
            if (props.wichTheme === 1){
                modalThemeTitle.firstTitle = 'Objets/iOT > Wize, LoRa, Sigfox'
                modalThemeTitle.secondTitle = '169 MHz, 434 MHz, 868 MHz…'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "Certains besoins nouveaux de l’internet des objets ont entrainé l’émergence de nouvelles technologies de connectivité mobile. Celles-ci permettent d’atteindre des coûts de terminaux très bas et de très faibles consommations énergétiques et sont souvent regroupées sous le terme LPWAN (Low Power Wide Area Network). Les usages visés sont par exemple la traçabilité des bagages, le suivi des chaînes de production, la remontée d'informations provenant de capteurs en ville (remplissage des poubelles, paramètres atmosphériques, suivi des réseaux d'eau ou d'énergie). Plusieurs technologies se distinguent au niveau mondial dans ce domaine et on peut citer Sigfox, LoRa, Wize, Qowisio, ou encore Ingenu. "
                // themeChoice = 1
                modalStyle.overlay.marginLeft = 'calc(33.333% - 20px)'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.thirdContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            } else if (props.wichTheme === 2){
                modalThemeTitle.firstTitle = 'Objets/iOT > ITS-G5, LTE-V2X'
                modalThemeTitle.secondTitle = '5,9 GHz'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "L’émergence de nouveaux services de mobilité laisse supposer des besoins croissants de connectivité. La connexion de l’infrastructure routière aux véhicules et des véhicules entre eux ouvre la voie à de nombreuses applications. Les messages peuvent être générés automatiquement par les véhicules à partir de leurs capteurs embarqués (route glissante, freinage d’urgence...) ou transmis par les gestionnaires d’infrastructures routières (chantiers, viabilité hivernale, conditions de trafic…). "
                // themeChoice = 2
                modalStyle.overlay.marginLeft = 'calc(66.666% - 20px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeThree.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.firstContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.thirdContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            } else if (props.wichTheme === 3){
                modalThemeTitle.firstTitle = 'Objets/iOT > RFID'
                modalThemeTitle.secondTitle = '500 kHz, 13,5 MHz (NFC), 865 MHz et 2,4 GHz'
                squareModalTheme = 'rgb(55, 86, 157)'
                modalThemeContent = "Plusieurs industries, par exemple l’automobile, l’aéronautique ou la grande distribution, utilisent des étiquettes sans contact (RFID) pour assurer, par exemple, leur logistique"
                // themeChoice = 3
                modalStyle.overlay.marginLeft = 'calc(66.666% - 280px)'
                styleModal.themeOne.visibility = 'hidden'
                styleModal.themeTwo.visibility = 'hidden'
                styleModal.themeFour.visibility = 'hidden'
                style.secondContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.firstContainer.backgroundColor = 'rgb(44, 69, 126)'
                style.fourthContainer.backgroundColor = 'rgb(44, 69, 126)'

            }
            
        } else {
            // themeChoice = 0
            modalStyle.overlay.marginLeft = '0px'
            styleModal.themeTwo.visibility = 'visible'
            styleModal.themeThree.visibility = 'visible'
            styleModal.themeOne.visibility = 'visible'
            style.secondContainer.backgroundColor = 'rgb(55, 86, 157)'
            style.thirdContainer.backgroundColor = 'rgb(55, 86, 157)'
            style.fourthContainer.backgroundColor = 'rgb(55, 86, 157)'
        }
        title = {
            black: 'Internet des objets / Smart cities,',
            grey: ' qu\'est ce qu\'on retrouve dans une smart city ?'
        }
        firstContainer = (
            <div style={style.firstContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(1)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeOne}>
                    <img src={capteur} alt="logo trottinette" className={classes.logo}/>
                    <p className={classes.title}>Capteur</p>
                    <p className={classes.text}>Certains besoins nouveaux de l’internet des objets, ont entrainé l’émergence de nouvelles technologies de connectivité mobile. </p>
                </div>
            </div>
        )
        secondContainer = (
            <div style={style.secondContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(2)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeTwo}>
                    <img src={voiture} alt="logo trottinette" className={classes.logo}/>
                    <p className={classes.title}>Voiture connectée</p>
                    <p className={classes.text}>L’émergence de nouveaux services de mobilité laisse supposer des besoins croissants de connectivité. Pour y répondre, différentes technologies existent, s’appuyant sur différents réseaux. </p>
                </div>
            </div>
        )
        thirdContainer = (
            <div style={style.thirdContainer} onMouseOver={() => {props.closeModalTheme(); props.openModalTheme(3)}} onMouseOut={() => {
                styleModal.themeTwo.visibility = 'visible'
                styleModal.themeThree.visibility = 'visible'
                styleModal.themeFour.visibility = 'visible'
                styleModal.themeOne.visibility = 'visible'
                style.secondContainer.backgroundColor = 'rgb(127, 190, 174)'
                style.thirdContainer.backgroundColor = 'rgb(127, 190, 174)'
            }}>
                <div className={classes.alignContainer} style={styleModal.themeThree}>
                    <img src={puce} alt="logo trottinette" className={classes.logo}/>
                    <p className={classes.title}>Logistique chaînes de production</p>
                    <p className={classes.text}>Plusieurs industries, par exemple l’automobile, l’aéronautique ou la grande distribution, utilisent des étiquettes sans contact (RFID) pour assurer, par exemple, leur logistique.</p>
                </div>
            </div>
        )
        fourthContainer = null;
    }
    let styleContainer = {
        pointerEvent: '',
        height: ((65 * window.innerHeight) / 100) - 60
    }
    props.modalThemeIsOpen ? styleContainer.pointerEvent = 'none' : styleContainer.pointerEvent = 'auto'
    return (        
      <div className={classes.themes}>
          <div className={classes.modalMiddle}>
            <div className={classes.sectionTitle}>
            {logoTheme}<p style={{color: 'rgb(147, 147, 147)', fontWeight: 'bold', alignSelf: 'center'}}><span style={{color: 'black'}}>{title.black}</span>{title.grey}</p>
            </div>
            <div className={classes.fullWidthContainer} style={styleContainer} onMouseLeave={props.closeModalTheme}>
                <Modal 
                    isOpen={props.modalThemeIsOpen}
                    onRequestClose={props.closeModalTheme}
                    ariaHideApp={false}
                    style={modalStyle}
                    >
                    <div className={classes.modaleTheme} onMouseOut={props.closeModalTheme}>
                        <div className={classes.modalThemeTitle}>
                            <div style={{flexDirection: 'row',alignItems: 'center'}}><div style={{minHeight: '14px', minWidth: '14px', backgroundColor: squareModalTheme, marginRight: '5px'}}></div><p style={{fontWeight: 'bold',fontSize: '14px', margin: '2.5px 1px'}}>{modalThemeTitle.firstTitle}</p></div>
                            <p style={{fontSize: '10px', margin: '2.5px 1px', color: 'grey'}}>{modalThemeTitle.secondTitle}</p>
                        </div>
                        <div className={classes.modalThemeContent}>
                            <p>{modalThemeContent}</p>
                        </div>
                        <div className={classes.modalThemeFooter}>
                            <span style={{color: 'black', fontSize: '14px', pointerEvents: 'auto', cursor: 'pointer'}} onClick={() => {props.closeTheme(); props.openSpectre(); }}>{modalButton}</span>
                        </div>
                    </div>
                </Modal>
                {firstContainer}
                {secondContainer}
                {thirdContainer}
                {fourthContainer}
            </div>
        </div>
      </div>
    );
}

export default Radium(themes);