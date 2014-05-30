                            var chart;
                            var chart2;

                            var chartData = {};

                            chartData.temp = [
                                { Year: 2010, Matches: 3882.1},
                                { Year: 2006, Matches: 2653.1},
                                { Year: 2002, Matches: 3278.3},
                                { Year: 1998, Matches: 610.5},
                                { Year: 1994, Matches: 740.3}];

                        var can = [
                            {
                              "Year": "1986",
                              "Team": "Canada",
                              "ISO": "CA",
                              "Goals for": "0",
                              "Goals against": "5",
                              "Penalties": "0",
                              "Matches": "3",
                              "Shots on goal": "0",
                              "Shots wide": "0",
                              "Free kicks": "0",
                              "Offside": "0",
                              "Corners": "0",
                              "Won": "0",
                              "Drawn": "0",
                              "Lost": "3",
                              "Host": "",
                              "latitude": "",
                              "longtitude": "",
                              "_id": "5357e09501037be2090000d9"
                            },
                            {
                              "Year": "1990",
                              "Team": "Canada",
                              "ISO": "CA",
                              "Goals for": "3",
                              "Goals against": "2",
                              "Penalties": "7",
                              "Matches": "3",
                              "Shots on goal": "0",
                              "Shots wide": "0",
                              "Free kicks": "0",
                              "Offside": "0",
                              "Corners": "0",
                              "Won": "0",
                              "Drawn": "0",
                              "Lost": "3",
                              "Host": "",
                              "latitude": "",
                              "longtitude": "",
                              "_id": "5357e09501037be2090000d9"
                            },
                            {
                              "Year": "1994",
                              "Team": "Canada",
                              "ISO": "CA",
                              "Goals for": "10",
                              "Goals against": "15",
                              "Penalties": "10",
                              "Matches": "3",
                              "Shots on goal": "0",
                              "Shots wide": "0",
                              "Free kicks": "0",
                              "Offside": "0",
                              "Corners": "0",
                              "Won": "0",
                              "Drawn": "0",
                              "Lost": "3",
                              "Host": "",
                              "latitude": "",
                              "longtitude": "",
                              "_id": "5357e09501037be2090000d9"
                            },
                            {
                              "Year": "1998",
                              "Team": "Canada",
                              "ISO": "CA",
                              "Goals for": "8",
                              "Goals against": "3",
                              "Penalties": "2",
                              "Matches": "3",
                              "Shots on goal": "0",
                              "Shots wide": "0",
                              "Free kicks": "0",
                              "Offside": "0",
                              "Corners": "0",
                              "Won": "0",
                              "Drawn": "0",
                              "Lost": "3",
                              "Host": "",
                              "latitude": "",
                              "longtitude": "",
                              "_id": "5357e09501037be2090000d9"
                            }
                          ];
                        // add all your code to this method, as this will ensure that page is loaded
			AmCharts.ready(function() {

                            // PIE CHART ************************************************************************
                            chart = new AmCharts.AmPieChart();

                            chart.backgroundAlpha = 0.0;
                            chart.backgroundColor = "#FFFFFF";
                            chart.dataProvider = chartData.temp;
                            chart.titleField = "Year";
                            chart.valueField = "Matches";
                            chart.sequencedAnimation = true;
                            chart.startEffect = "elastic";
                            chart.labelsEnabled = true;
                            chart.labelText = "[[title]]";
                            chart.startDuration = 2;
                            chart.labelRadius = 10;

                            // WRITE                                 
                            chart.write("test1");
                            
                            // SERIEL CHART ************************************************************************
                            chart2 = new AmCharts.AmSerialChart();
                            
                            chart2.type = "serial";
                            chart2.theme = "none";
                            chart2.pathToImages = "http://www.amcharts.com/lib/3/images/";
                            chart2.legend = {
                                "equalWidths": false,
                                "periodValueText": "total: [[value.sum]]",
                                "position": "top",
                                "valueAlign": "left",
                                "valueWidth": 100
                            };
                            chart2.dataProvider = can ;
                            
                            chart2.valueAxes = [{
                                "stackType": "regular",
                                "gridAlpha": 0.07,
                                "position": "left",
                                "title": "Total Games Played"
                            }];
                            chart2.graphs = [{
                                "balloonText": "<img src='http://davidg.io/~dg253/is217/learning/public/images/loss.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                                "fillAlphas": 0.6,
                                "hidden": false,
                                "lineAlpha": 0.4,
                                "title": "Games Lose",
                                "valueField": "Lost"
                            }, 
                            {
                                "balloonText": "<img src='http://davidg.io/~dg253/is217/learning/public/images/draw.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                                "fillAlphas": 0.6,
                                "lineAlpha": 0.4,
                                "title": "Games Drawn",
                                "valueField": "Drawn"
                            },
                            {
                                "balloonText": "<img src='http://davidg.io/~dg253/is217/learning/public/images/win.png' style='vertical-align:bottom; margin-right: 10px; width:28px; height:21px;'><span style='font-size:14px; color:#000000;'><b>[[value]]</b></span>",
                                "fillAlphas": 0.6,
                                "lineAlpha": 0.4,
                                "title": "Games Won",
                                "valueField": "Won"
                            }
                            
                            ];
                            chart2.plotAreaBorderAlpha = 0;
                            chart2.marginTop = 10;
                            chart2.marginLeft = 0;
                            chart2.marginBottom = 0;
                            chart2.chartScrollbar = {};
                            chart2.chartCursor = {
                                "cursorAlpha": 0
                            };
                            chart2.categoryField = "Year", /* This is for each object title*/
                            chart2.categoryAxis = {
                                "startOnAxis": true,
                                "axisColor": "#DADADA",
                                "gridAlpha": 0.07,
                                "guides": [{
                                    category: "2001",
                                    toCategory: "2003",
                                    lineColor: "#CC0000",
                                    lineAlpha: 1,
                                    fillAlpha: 0.2,
                                    fillColor: "#CC0000",
                                    dashLength: 2,
                                    inside: true,
                                    labelRotation: 90,
                                    label: "fines for speeding increased"
                                }, {
                                    category: "2007",
                                    lineColor: "#CC0000",
                                    lineAlpha: 1,
                                    dashLength: 2,
                                    inside: true,
                                    labelRotation: 90,
                                    label: "motorcycle fee introduced"
                                }]
                            };
                            chart2.exportConfig = {
                                "menuTop": "10px",
                                "menuRight": "10px",
                                "menuItems": [{
                                    "icon": '/lib/3/images/export.png',
                                    "format": 'png'
                                }]
                            };
                            
                            
                            chart2.write("winlose");
                            
                            
                                                                                                   
                                           
			    // create AmMap object ******************************************************************
			    var map = new AmCharts.AmMap();
			    // set path to images
			    map.pathToImages = "./scripts/ammap/images/";
			    
			    /* create data provider object
			     mapVar tells the map name of the variable of the map data. You have to
			     view source of the map file you included in order to find the name of the 
			     variable - it's the very first line after commented lines.
			     
			     getAreasFromMap indicates that amMap should read all the areas available
			     in the map data and treat them as they are included in your data provider.
			     in case you don't set it to true, all the areas except listed in data
			     provider will be treated as unlisted.
			    */
			    var dataProvider = {
			        mapVar: AmCharts.maps.worldLow,
			        getAreasFromMap:true                    
			    }; 
			    // pass data provider to the map object
			    map.dataProvider = dataProvider;
			
			    /* create areas settings
			     * autoZoom set to true means that the map will zoom-in when clicked on the area
			     * selectedColor indicates color of the clicked area.
			     */
			    map.areasSettings = {
                                color: "#74b73e",
                                autoZoom: true,
			        selectedColor: "#fec804",
                                rollOverOutlineColor: "#303030"
                                
			    };
                            map.zoomOnDoubleClick = false;
                            map.mouseWheelZoomEnabled = false;
                            //Print out object                           
                            console.log(map);
                            
                            map.addListener("clickMapObject", function (event) {
                                
                                //My Javascript
                                
                                var newData = callDBobj.apicall(event.mapObject.title);
                                if (newData !== false){
                                    
                                   
                                    //console.log('Are these the Same???? ');
                                    console.log(newData);

                                    chart.dataProvider = newData;
                                    //chart.clearLabels();
                                    //chart.addLabel("0", "!20", event.mapObject.title, "center", 16);
                                    chart.validateData();
                                    
                                    chart2.dataProvider = newData;
                                    //chart2.clearLabels();
                                    //chart2.addLabel("0", "!20", event.mapObject.title, "center", 16);
                                    chart2.validateData();
                                }
                                //updateBarChart();
                                TransitionClick(event.mapObject.title);
                                
                            });
                            
			
			    // let's say we want a small map to be displayed, so let's create and add it to the map
			    map.smallMap = new AmCharts.SmallMap();
			
			    // write the map to container div
			    map.write("mapdiv");               
			    
			});