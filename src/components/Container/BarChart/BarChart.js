import React, {Component} from 'react';
import * as d3 from "d3";
// import datas from '../../../assets/baseddarcep.json';
import datas from '../../../assets/Realbddarcep.json';

// LES SOUS CATEGORIES NE CORRESPONDENT PAS A LA MAQUETTE 


class BarChart extends Component {

    drawChart() {
        // graphique n 1
        let xscaleHeight = 0

        if (this.props.xScale){
            xscaleHeight = 20
        }

        const test = ["0", "100", "200", "300", "400", "500", "600", "700", "800", "900", "1,000"] 

        const test2 = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1,000"] 

        const test3 = ["20", "40", "60", "80", "100", "120", "140", "160", "180", "200", "220", "240", "260", "280"] 

        const xscale = d3.scaleLinear();
                xscale.domain([0, 1000000]);
                xscale.range([0, this.props.width]);

        const xAxis = d3.axisBottom()
                        .scale(xscale)
                        .tickFormat((d, i) => {return test[i] + " KHz"});

        const svg = d3.select(this.props.folder)
                        .append("svg")
                        .attr("width", this.props.width)
                        .attr("height", this.props.height + xscaleHeight)
                    svg.selectAll("rect")
                        .data(datas)
                        .enter()
                        .append("rect")
                        .attr("id", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                if (this.props.xScale)
                                    return 'test'
                                else
                                    return 'topTest'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                 if (this.props.xScale)
                                    return 'test2'
                                else
                                    return 'topTest2'
                            }  else if (d.Catégorie === 'Amateur'){
                                 if (this.props.xScale)
                                    return 'test3'
                                else
                                    return 'topTest3'
                            } else if (d.Catégorie === 'PMSE'){
                                 if (this.props.xScale)
                                    return 'test4'
                                else
                                    return 'topTest4'
                            } else if (d.Catégorie === 'Satellite'){
                                 if (this.props.xScale)
                                    return 'test5'
                                else
                                    return 'topTest5'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                 if (this.props.xScale)
                                    return 'test6'
                                else
                                    return 'topTest6'
                            } else if (d.Catégorie === 'Autres'){
                                 if (this.props.xScale)
                                    return 'test7'
                                else
                                    return 'topTest7'
                            }
                        })
                        .on('mouseover',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(63, 98, 179)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(141, 212, 194)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(243, 69, 156)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(245, 110, 110)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(91, 199, 239)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(255, 187, 122)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on('mouseout',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(55, 86, 157)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(127, 190, 174)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(194, 44, 119)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(210, 47, 47)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(75, 172, 208)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(242, 157, 75)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on("click", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Implants médicaux actifs'){
                                    this.props.underCategorie('Objets/IoT', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes télématiques pour la circulation et le transport'){
                                    this.props.underCategorie('Objets/IoT', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Alarmes'){
                                    this.props.underCategorie('Objets/IoT', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Mesures'){
                                    this.props.underCategorie('Objets/IoT', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Commandes de modèles réduits'){
                                    this.props.underCategorie('Objets/IoT', 5)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications à bande ultralarge (UWB)'){
                                    this.props.underCategorie('Objets/IoT', 6)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Non-spécifique'){
                                    this.props.underCategorie('Objets/IoT', 7)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === "Aides à l'audition"){
                                    this.props.underCategorie('Objets/IoT', 8)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Application de radiorepérage'){
                                    this.props.underCategorie('Objets/IoT', 9)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications inductives'){
                                    this.props.underCategorie('Objets/IoT', 10)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'RFID'){
                                    this.props.underCategorie('Objets/IoT', 11)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Réseaux mobiles ouverts au public'){
                                    this.props.underCategorie('Réseaux mobile et THD', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Boucle locale radio'){
                                    this.props.underCategorie('Réseaux mobile et THD', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Réseaux mobiles professionnels PMR'){
                                    this.props.underCategorie('Réseaux mobile et THD', 3)
                                    this.props.openUnderCategorie()
                                }  else if (d.Application === 'Systèmes de Terre permettant de fournir des services de communications électroniques'){
                                    this.props.underCategorie('Réseaux mobile et THD', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Transmission de données à large bande'){
                                    this.props.underCategorie('Réseaux mobile et THD', 5)
                                    this.props.openUnderCategorie()
                                }
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Amateur'){
                                    this.props.underCategorie('Amateur', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Amateur-satellite'){
                                    this.props.underCategorie('Amateur', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Audio/multimédia sans fil'){
                                    this.props.underCategorie('PMSE', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'PMSE'){
                                    this.props.underCategorie('PMSE', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Stations terriennes du service mobile par satellite'){
                                    this.props.underCategorie('Satellite', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Stations terriennes du service fixe par satellite'){
                                    this.props.underCategorie('Satellite', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes par satellite'){
                                    this.props.underCategorie('Satellite', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'AES'){
                                    this.props.underCategorie('Satellite', 4)
                                    this.props.openUnderCategorie()
                                } 
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Faisceaux hertziens (FH)'){
                                    this.props.underCategorie('Faisceaux hertziens', 1)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Autres applications'){
                                    this.props.underCategorie('Autres', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'DECT et autres téléphones sans fil'){
                                    this.props.underCategorie('Satellite', 4)
                                    this.props.openUnderCategorie()
                                }
                            }
                        })
                        .attr("x", (d, i) => {return xscale(d.Fréquencebasse)})
                        .attr("y", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (25 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (9 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (70 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (55 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (5 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return 0
                            }
                        })
                        .attr("width", (d, i) => {
                                if (xscale(d.Fréquencehaute - d.Fréquencebasse) < 1)
                                    if (!this.props.xScale)
                                        return 1
                                    else
                                        return 10
                                else 
                                    return xscale(d.Fréquencehaute - d.Fréquencebasse)
                        })
                        .attr("height", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (50 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (28 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (60 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return this.props.height;
                            }
                        })
                        .attr("name", (d, i) => d.Catégorie + '|' + d.Application + '|' + i)
                        .attr("fill", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                // d3.selectAll("#test").raise();
                                // d3.selectAll("#topTest").raise();
                                return 'rgb(55, 86, 157)'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                d3.selectAll("#test2").raise();
                                d3.selectAll("#topTest2").raise();
                                return 'rgb(127, 190, 174)'
                            }  else if (d.Catégorie === 'Amateur'){
                                return 'rgb(194, 44, 119)'
                            } else if (d.Catégorie === 'PMSE'){
                                return 'rgb(210, 47, 47)'
                            } else if (d.Catégorie === 'Satellite'){
                                return 'rgb(75, 172, 208)'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                d3.selectAll("#test6").raise();
                                d3.selectAll("#topTest6").raise();
                                d3.selectAll("#test5").raise();
                                d3.selectAll("#topTest5").raise();
                                d3.selectAll("#test3").raise();
                                d3.selectAll("#topTest3").raise();
                                return 'rgb(242, 157, 75)'
                            } else if (d.Catégorie === 'Autres'){
                                return 'rgb(240, 237, 231)'
                            }
                        })
                        .attr("style", () => {
                            if (this.props.xScale){
                                return "cursor: pointer;"
                            }})
                        if (this.props.xScale){
                            svg.append("g")
                            .attr("transform", "translate(0, " + this.props.height +")")
                            .call(xAxis)
                            d3.select(this.parentNode).raise()
                        }


                // graph n 2

                const xscale2 = d3.scaleLinear();
                xscale2.domain([1000000, 1000000000]);
                xscale2.range([0, this.props.width]);

        const xAxis2 = d3.axisBottom()
                        .scale(xscale2)
                        .tickFormat((d, i) => {return test2[i] + " MHz"});
                    
        const svg2 = d3.select(this.props.folder)
                        .append("svg")
                        .attr("width", this.props.width)
                        .attr("height", this.props.height + xscaleHeight)
                    svg2.selectAll("rect")
                        .data(datas)
                        .enter()
                        .append("rect")
                        .attr("id", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                if (this.props.xScale)
                                    return 'test'
                                else
                                    return 'topTest'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                 if (this.props.xScale)
                                    return 'test2'
                                else
                                    return 'topTest2'
                            }  else if (d.Catégorie === 'Amateur'){
                                 if (this.props.xScale)
                                    return 'test3'
                                else
                                    return 'topTest3'
                            } else if (d.Catégorie === 'PMSE'){
                                 if (this.props.xScale)
                                    return 'test4'
                                else
                                    return 'topTest4'
                            } else if (d.Catégorie === 'Satellite'){
                                 if (this.props.xScale)
                                    return 'test5'
                                else
                                    return 'topTest5'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                 if (this.props.xScale)
                                    return 'test6'
                                else
                                    return 'topTest6'
                            } else if (d.Catégorie === 'Autres'){
                                 if (this.props.xScale)
                                    return 'test7'
                                else
                                    return 'topTest7'
                            }
                        })
                        .on('mouseover',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(63, 98, 179)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(141, 212, 194)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(243, 69, 156)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(245, 110, 110)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(91, 199, 239)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(255, 187, 122)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on('mouseout',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(55, 86, 157)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(127, 190, 174)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(194, 44, 119)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(210, 47, 47)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(75, 172, 208)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(242, 157, 75)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on("click", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Implants médicaux actifs'){
                                    this.props.underCategorie('Objets/IoT', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes télématiques pour la circulation et le transport'){
                                    this.props.underCategorie('Objets/IoT', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Alarmes'){
                                    this.props.underCategorie('Objets/IoT', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Mesures'){
                                    this.props.underCategorie('Objets/IoT', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Commandes de modèles réduits'){
                                    this.props.underCategorie('Objets/IoT', 5)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications à bande ultralarge (UWB)'){
                                    this.props.underCategorie('Objets/IoT', 6)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Non-spécifique'){
                                    this.props.underCategorie('Objets/IoT', 7)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === "Aides à l'audition"){
                                    this.props.underCategorie('Objets/IoT', 8)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Application de radiorepérage'){
                                    this.props.underCategorie('Objets/IoT', 9)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications inductives'){
                                    this.props.underCategorie('Objets/IoT', 10)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'RFID'){
                                    this.props.underCategorie('Objets/IoT', 11)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Réseaux mobiles ouverts au public'){
                                    this.props.underCategorie('Réseaux mobile et THD', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Boucle locale radio'){
                                    this.props.underCategorie('Réseaux mobile et THD', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Réseaux mobiles professionnels PMR'){
                                    this.props.underCategorie('Réseaux mobile et THD', 3)
                                    this.props.openUnderCategorie()
                                }  else if (d.Application === 'Systèmes de Terre permettant de fournir des services de communications électroniques'){
                                    this.props.underCategorie('Réseaux mobile et THD', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Transmission de données à large bande'){
                                    this.props.underCategorie('Réseaux mobile et THD', 5)
                                    this.props.openUnderCategorie()
                                }
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Amateur'){
                                    this.props.underCategorie('Amateur', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Amateur-satellite'){
                                    this.props.underCategorie('Amateur', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Audio/multimédia sans fil'){
                                    this.props.underCategorie('PMSE', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'PMSE'){
                                    this.props.underCategorie('PMSE', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Stations terriennes du service mobile par satellite'){
                                    this.props.underCategorie('Satellite', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Stations terriennes du service fixe par satellite'){
                                    this.props.underCategorie('Satellite', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes par satellite'){
                                    this.props.underCategorie('Satellite', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'AES'){
                                    this.props.underCategorie('Satellite', 4)
                                    this.props.openUnderCategorie()
                                } 
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Faisceaux hertziens (FH)'){
                                    this.props.underCategorie('Faisceaux hertziens', 1)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Communications mobiles à bord des navires'){
                                    this.props.underCategorie('Autres', 1)
                                    this.props.openUnderCategorie()
                                }
                            }
                        })
                        .attr("x", (d, i) => {return xscale2(d.Fréquencebasse)})
                        .attr("y", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (25 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (9 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (70 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (55 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (5 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return 0
                            }
                        })
                        .attr("width", (d, i) => {
                                if (xscale2(d.Fréquencehaute - d.Fréquencebasse) < 1)
                                    if (!this.props.xScale)
                                        return 1
                                    else
                                        return 10
                                else 
                                    return xscale2(d.Fréquencehaute - d.Fréquencebasse)
                        })
                        .attr("height", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (50 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (28 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (60 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return this.props.height
                            }
                        })
                        .attr("name", (d, i) => d.Catégorie + '|' + d.Application + '|' + i)
                        .attr("fill", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                // d3.selectAll("#test").raise();
                                // d3.selectAll("#topTest").raise();
                                return 'rgb(55, 86, 157)'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                d3.selectAll("#test2").raise();
                                d3.selectAll("#topTest2").raise();
                                return 'rgb(127, 190, 174)'
                            }  else if (d.Catégorie === 'Amateur'){
                                return 'rgb(194, 44, 119)'
                            } else if (d.Catégorie === 'PMSE'){
                                return 'rgb(210, 47, 47)'
                            } else if (d.Catégorie === 'Satellite'){
                                return 'rgb(75, 172, 208)'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                d3.selectAll("#test6").raise();
                                d3.selectAll("#topTest6").raise();
                                d3.selectAll("#test5").raise();
                                d3.selectAll("#topTest5").raise();
                                d3.selectAll("#test3").raise();
                                d3.selectAll("#topTest3").raise();
                                return 'rgb(242, 157, 75)'
                            } else if (d.Catégorie === 'Autres'){
                                return 'rgb(240, 237, 231)'
                            }
                        })
                        .attr("style", () => {
                            if (this.props.xScale){
                                return "cursor: pointer;"
                            }})
                        if (this.props.xScale){
                            svg2.append("g")
                                .attr("transform", "translate(0, " + this.props.height +")")
                                .call(xAxis2)
                        }

                // graph n3

                const xscale3 = d3.scaleLinear();
                xscale3.domain([1000000000, 275000000000]); 
                xscale3.range([0, this.props.width]);

        const xAxis3 = d3.axisBottom()
                        .scale(xscale3)
                        .tickFormat((d, i) => {return test3[i] + " GHz"});
                    
        const svg3 = d3.select(this.props.folder)
                        .append("svg")
                        .attr("width", this.props.width)
                        .attr("height", this.props.height + xscaleHeight)
                    svg3.selectAll("rect")
                        .data(datas)
                        .enter()
                        .append("rect")
                        .attr("id", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                if (this.props.xScale)
                                    return 'test'
                                else
                                    return 'topTest'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                 if (this.props.xScale)
                                    return 'test2'
                                else
                                    return 'topTest2'
                            }  else if (d.Catégorie === 'Amateur'){
                                 if (this.props.xScale)
                                    return 'test3'
                                else
                                    return 'topTest3'
                            } else if (d.Catégorie === 'PMSE'){
                                 if (this.props.xScale)
                                    return 'test4'
                                else
                                    return 'topTest4'
                            } else if (d.Catégorie === 'Satellite'){
                                 if (this.props.xScale)
                                    return 'test5'
                                else
                                    return 'topTest5'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                 if (this.props.xScale)
                                    return 'test6'
                                else
                                    return 'topTest6'
                            } else if (d.Catégorie === 'Autres'){
                                 if (this.props.xScale)
                                    return 'test7'
                                else
                                    return 'topTest7'
                            }
                        })
                        .on('mouseover',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(63, 98, 179)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(141, 212, 194)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(243, 69, 156)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(245, 110, 110)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(91, 199, 239)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(255, 187, 122)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on('mouseout',(d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                d3.selectAll("#test").style("fill", "rgb(55, 86, 157)")
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                d3.selectAll("#test2").style("fill", "rgb(127, 190, 174)")
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                d3.selectAll("#test3").style("fill", "rgb(194, 44, 119)")
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                d3.selectAll("#test4").style("fill", "rgb(210, 47, 47)")
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                d3.selectAll("#test5").style("fill", "rgb(75, 172, 208)")
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                d3.selectAll("#test6").style("fill", "rgb(242, 157, 75)")
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                d3.selectAll("#test7").style("fill", "rgb(240, 237, 231)")
                            }
                        })
                        .on("click", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Implants médicaux actifs'){
                                    this.props.underCategorie('Objets/IoT', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes télématiques pour la circulation et le transport'){
                                    this.props.underCategorie('Objets/IoT', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Alarmes'){
                                    this.props.underCategorie('Objets/IoT', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Mesures'){
                                    this.props.underCategorie('Objets/IoT', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Commandes de modèles réduits'){
                                    this.props.underCategorie('Objets/IoT', 5)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications à bande ultralarge (UWB)'){
                                    this.props.underCategorie('Objets/IoT', 6)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Non-spécifique'){
                                    this.props.underCategorie('Objets/IoT', 7)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === "Aides à l'audition"){
                                    this.props.underCategorie('Objets/IoT', 8)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Application de radiorepérage'){
                                    this.props.underCategorie('Objets/IoT', 9)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Applications inductives'){
                                    this.props.underCategorie('Objets/IoT', 10)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'RFID'){
                                    this.props.underCategorie('Objets/IoT', 11)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Réseaux mobile et THD' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Réseaux mobiles ouverts au public'){
                                    this.props.underCategorie('Réseaux mobile et THD', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Boucle locale radio'){
                                    this.props.underCategorie('Réseaux mobile et THD', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Réseaux mobiles professionnels PMR'){
                                    this.props.underCategorie('Réseaux mobile et THD', 3)
                                    this.props.openUnderCategorie()
                                }  else if (d.Application === 'Systèmes de Terre permettant de fournir des services de communications électroniques'){
                                    this.props.underCategorie('Réseaux mobile et THD', 4)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Transmission de données à large bande'){
                                    this.props.underCategorie('Réseaux mobile et THD', 5)
                                    this.props.openUnderCategorie()
                                }
                            }  else if (d.Catégorie === 'Amateur' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Amateur'){
                                    this.props.underCategorie('Amateur', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Amateur-satellite'){
                                    this.props.underCategorie('Amateur', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'PMSE' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Audio/multimédia sans fil'){
                                    this.props.underCategorie('PMSE', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'PMSE'){
                                    this.props.underCategorie('PMSE', 2)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Satellite' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Stations terriennes du service mobile par satellite'){
                                    this.props.underCategorie('Satellite', 1)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Stations terriennes du service fixe par satellite'){
                                    this.props.underCategorie('Satellite', 2)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'Systèmes par satellite'){
                                    this.props.underCategorie('Satellite', 3)
                                    this.props.openUnderCategorie()
                                } else if (d.Application === 'AES'){
                                    this.props.underCategorie('Satellite', 4)
                                    this.props.openUnderCategorie()
                                } 
                            } else if (d.Catégorie === 'Faisceaux hertziens' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Faisceaux hertziens (FH)'){
                                    this.props.underCategorie('Faisceaux hertziens', 1)
                                    this.props.openUnderCategorie()
                                }
                            } else if (d.Catégorie === 'Autres' && this.props.xScale){
                                this.props.closeSpectre();
                                if (d.Application === 'Communications mobiles à bord des navires'){
                                    this.props.underCategorie('Autres', 1)
                                    this.props.openUnderCategorie()
                                }
                            }
                        })
                        .attr("x", (d, i) => {return xscale3(d.Fréquencebasse)})
                        .attr("y", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (25 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (9 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (70 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (55 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (5 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return 0
                            }
                        })
                        .attr("width", (d, i) => {
                                if (xscale3(d.Fréquencehaute - d.Fréquencebasse) < 1)
                                    if (!this.props.xScale)
                                        return 1
                                    else
                                        return 10
                                else 
                                    return xscale3(d.Fréquencehaute - d.Fréquencebasse)
                        })
                        .attr("height", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                return (50 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                return (33 * this.props.height) / 100;
                            }  else if (d.Catégorie === 'Amateur'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'PMSE'){
                                return (20 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Satellite'){
                                return (28 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                return (60 * this.props.height) / 100;
                            } else if (d.Catégorie === 'Autres'){
                                return this.props.height
                            }
                        })
                        .attr("name", (d, i) => d.Catégorie + '|' + d.Application + '|' + i)
                        .attr("fill", (d, i) => {
                            if (d.Catégorie === 'Objets/IoT'){
                                // d3.selectAll("#test").raise();
                                // d3.selectAll("#topTest").raise();
                                return 'rgb(55, 86, 157)'
                            } else if (d.Catégorie === 'Réseaux mobile et THD'){
                                d3.selectAll("#test2").raise();
                                d3.selectAll("#topTest2").raise();
                                return 'rgb(127, 190, 174)'
                            }  else if (d.Catégorie === 'Amateur'){
                                return 'rgb(194, 44, 119)'
                            } else if (d.Catégorie === 'PMSE'){
                                return 'rgb(210, 47, 47)'
                            } else if (d.Catégorie === 'Satellite'){
                                return 'rgb(75, 172, 208)'
                            } else if (d.Catégorie === 'Faisceaux hertziens'){
                                d3.selectAll("#test6").raise();
                                d3.selectAll("#topTest6").raise();
                                d3.selectAll("#test5").raise();
                                d3.selectAll("#topTest5").raise();
                                d3.selectAll("#test3").raise();
                                d3.selectAll("#topTest3").raise();
                                return 'rgb(242, 157, 75)'
                            } else if (d.Catégorie === 'Autres'){
                                return 'rgb(240, 237, 231)'
                            }
                        })
                        .attr("style", () => {
                            if (this.props.xScale){
                                return "cursor: pointer;"
                            }})
                        if (this.props.xScale){    
                            svg3.append("g")
                                .attr("transform", "translate(0, " + this.props.height +")")
                                .call(xAxis3)
                        }

    }
    
    componentDidMount() {
        this.drawChart();
    }

    componentWillMount() {
        this.drawChart();
    }

    render (){
        return <div id={"#" + this.props.id}  style={{cursor: 'pointer'}} onClick={this.test}></div>
    }
}

export default BarChart;