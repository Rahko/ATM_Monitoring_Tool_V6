GroupedBarChart();
        GroupedBarChart1();
        DonutChart();
        DonutChart2();

        setMainContentTop();
        


        function setMainContentTop() {
            var globalHeaderHeight = $( 'header.global-header' ).height();
            $( 'div.main-content' ).css( {
                'padding-top': globalHeaderHeight
            } );
            $( 'nav.global-nav' ).css( {
                'top': globalHeaderHeight
            } );
            $( '.sub-nav' ).css( {
                'top': globalHeaderHeight
            } );
            $( '.bm-notification' ).css( {
                'top': globalHeaderHeight
            } );
        };


        // grouped bar function start
        function GroupedBarChart() {
            var rdata= {
                labels: ["J","K","L","M","N","O","P","Q","R"],
                datasets: [
                     {
                        label: "Transacted ATMs",
                        backgroundColor: "rgb(74, 188, 85)",
                        data: [2,3, 5, 2 , 2 , 3 , 10, 4, 4]
                    },
                ]
            };

            var ctx = document.getElementById('grouped-bar').getContext('2d');
            var groupedBar = new Chart(ctx, {
                type: 'bar',
                data: rdata,
                options: {
                    scales: {
                        xAxes: [{
                            stacked: false,
                            barPercentage: 0.3,
                            barPercentage:0.8,
                            categoryPercentage: 0.35,
                            scaleLabel: {
                                display: true,
                                // labelString: ' ',
                                fontStyle: "bold",
                                fontSize:14,
                                fontColor:'#000',
                            },
                            ticks: {
                            fontSize:12,               
                            // autoSkip: false,
                            // maxRotation: 0,
                            // minRotation: 0
                          }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Transactions / Day',
                                fontStyle: "bold",
                                fontSize:14,
                                fontColor:'#000',
                            },    
                            ticks: {
                                beginAtZero: true,
                                
                            }
                        }]
                    },
                    legend: {
                        position: 'bottom',
                         
                    }
                }
            });
        }
        // grouped bar function end

         // grouped bar function start
         function GroupedBarChart1() {
            var rdata= {
                labels: ["J","K","L","M","N","O","P","Q","R"],
                datasets: [
                     {
                        label: "Failed ATMs",
                        backgroundColor: "rgb(226, 116, 116)",
                        data: [2,3, 5, 2 , 2 , 3 , 10, 4, 4]
                    },
                ]
            };

            var ctx = document.getElementById('grouped-bar2').getContext('2d');
            var groupedBar = new Chart(ctx, {
                type: 'bar',
                data: rdata,
                options: {
                    scales: {
                        xAxes: [{
                            stacked: false,
                            barPercentage: 0.3,
                            barPercentage:0.8,
                            categoryPercentage: 0.35,
                            scaleLabel: {
                                display: true,
                                // labelString: ' ',
                                fontStyle: "bold",
                                fontSize:14,
                                fontColor:'#000',
                            },
                            ticks: {
                            fontSize:12,               
                            // autoSkip: false,
                            // maxRotation: 0,
                            // minRotation: 0
                          }
                        }],
                        yAxes: [{
                            scaleLabel: {
                                display: true,
                                labelString: 'Transactions / Day',
                                fontStyle: "bold",
                                fontSize:14,
                                fontColor:'#000',
                            },    
                            ticks: {
                                beginAtZero: true,
                                
                            }
                        }]
                    },
                    legend: {
                        position: 'bottom',
                         
                    }
                }
            });
        }
        // grouped bar function end

     // donut chart function start
           function DonutChart() {
            var bdata = {
                datasets: [{
                    data: [18, 67, 15], 
                    backgroundColor: ['rgb(252, 201, 99)', 'rgb(87, 212, 116)', 'rgb(254, 82, 93)']
                }],
                labels: [
                    'Partially Available',
                    'Available',
                    'Out of Service'
                ]
            };
            var ctx = document.getElementById('donut-chart').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'doughnut',
                data: bdata, 
                options: {
                    legend:{
                     position: 'bottom',
                     labels:{
                     fontColor: "#000",
                     padding:10,
                    }
                  },
                    cutoutPercentage:70
                }
            });
        }
        // donut chart function end
        
        // donut chart function start
        function DonutChart2() {
            var bdata = {
                datasets: [{
                    data: [56, 28, 16], 
                    backgroundColor: ['rgb(212, 87, 170)', 'rgb(82, 195, 254)', 'rgb(32, 82, 199)']
                }],
                labels: [
                    'Printers',
                    'Card Readers',
                    'Despensers'
                ]
            };
            var ctx = document.getElementById('donut-chart2').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'doughnut',
                data: bdata, 
                options: {
                    legend:{
                     position: 'bottom',
                     labels:{
                     fontColor: "#000",
                     padding:10,
                    }
                  },
                    cutoutPercentage: 70
                }
            });
        }
        // donut chart function end


   