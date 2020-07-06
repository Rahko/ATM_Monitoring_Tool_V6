import React, { Component } from 'react'
import HeadNavFoot from '../HeadNavFoot';
import {Bar} from 'react-chartjs-2';
import { connect } from 'react-redux';
import CountUp from 'react-countup';
import {getDashboard} from '../../redux/actions/DashboardActions';
import { Link } from 'react-router-dom';


class AdminContent extends Component {

    constructor(props) {
        super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
        this.state = {
            username:"",
            loginTime: ""
        }
    }


    componentDidMount() {
        const token = sessionStorage.getItem("token")
        this.setState({
            username : sessionStorage.getItem("username"),
            loginTime: sessionStorage.getItem("logintime")
        })
        console.log(token);
        this.props.getDashboard(token);

        // const script = document.createElement("script");
        // script.src = `js/effectScripts.js`;
        // script.async = true;
        // document.body.appendChild(script);
    }

    BarChart = () => {   
        const topFailedAtm = this.props.dashboard.topFailedAtm;
        const barChart = (
                <Bar 
                    data={{
                        labels : topFailedAtm.map(({ATMId}) => ATMId),
                        datasets : [{
                            label : 'Failed ATMs',
                            backgroundColor : ['rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)' ],
                            data : topFailedAtm.map(({repCount}) => repCount)
                        }]
                    }}
                    options={{
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
                    }}
                />
        )
        return barChart;
    }

    BarChartForTransactedAtm = () => {
        const topTransAtm = this.props.dashboard.topTransAtm;   
        const barChart = (
            <Bar 
                data={{
                    labels : topTransAtm.map(({ATMId}) => ATMId),
                    datasets : [{
                        label : 'Transacted ATMs',
                        backgroundColor : ['rgba(0, 128, 0, 0.5)', 'rgba(0, 128, 0, 0.5)', 'rgba(0, 128, 0, 0.5)',
                        'rgba(0, 128, 0, 0.5)' ,'rgba(0, 128, 0, 0.5)' ,'rgba(0, 128, 0, 0.5)' ,'rgba(0, 128, 0, 0.5)' 
                    ,'rgba(0, 128, 0, 0.5)' ,'rgba(0, 128, 0, 0.5)' ,'rgba(0, 128, 0, 0.5)'  ],
                        data : topTransAtm.map(({reqCount}) => reqCount)
                    }]
                }}
                options={{
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
                }}
               
            />
    )
    return barChart;


    }

    render() {
        console.log(this.props)
        const dashData = this.props.dashboard;

        if(this.props.dashboard.length!==0){

        return (

            <div>

                <HeadNavFoot />

                {/* ================================= Main Page Content - Start ===============================*/}
                <main className="main-container">
                    <div className="in-main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 px-0">
                                    {/*============================== Right Main Column Starts ==================================*/}
                                    {/* ***************************************************************************************** */}
                                    <div className="right-main-column">
                                        <div className="right-col-container">
                                            {/*================================ Body code starts Here ===================================*/}
                                            <div className="main-content">
                                                <div className="in-mcontainer">
                                                    {/*============================ grid container starts ============================*/}
                                                    <div className="grid-container2">
                                                        <div className="row">
                                                            <div className="col-12 col-xl-6 col-lg-4 col-md-12">
                                                                <h1>Welcome, {this.state.username}</h1>
                                                                <h3>Last Login {this.state.loginTime}</h3>
                                                            </div>
                                                            <div className="col-12 col-xl-6 col-lg-8 col-md-12 text-right mt-2">
                                                                <ul className="dt-buttons">
                                                                    <li>
                                                                        <Link to="/addbank" className="dt-add secondary button">
                                                                            <em>New Bank</em>
                                                                        </Link>
                                                                    </li>
                                                                    {/* <li>
                                                                        <a href="#" className="button1 secondary">
                                                                            Last 1 Week
                                  </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="button1 secondary">
                                                                            Ysterday
                                  </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#" className="button1 secondary">
                                                                            Today
                                  </a>
                                                                    </li> */}
                                                                </ul>
                                                                {/* dt-buttons */}
                                                            </div>
                                                        </div>
                                                        <div className="vspacer20" />
                                                        <div className="row">
                                                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                                <div className="widget-box wb-single medium">
                                                                    <Link to="/banks">
                                                                        <div className="row">
                                                                            <div className="col-12 text-center">
                                                                                <div className="number">
                                                                                <h2><CountUp start={0} end={dashData.bankCount} duration={2.75} separator="," /></h2>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-12 text-center">
                                                                                <div className="small-heading">
                                                                                    <h3>Total Banks</h3>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                                <div className="widget-box wb-single medium">
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">
                                                                            <div className="number">
                                                                            
                                                                            <h2><CountUp start={0} end={dashData.atmCount} duration={2.75} separator="," /></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">
                                                                            <div className="small-heading">
                                                                                <h3>Total ATM</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                                <div className="widget-box wb-single medium">
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">
                                                                            <div className="number">
                                                                            <h2><CountUp start={0} end={dashData.lowCashAtm} duration={2.75} separator="," /></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">
                                                                            <div className="small-heading">
                                                                                <h3>Low Cash ATMs</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                                <div className="widget-box wb-single medium">
                                                                    <div className="row">
                                                                        <div className="col-12 text-center">
                                                                            <div className="number">
                                                                            <h2><CountUp start={0} end={dashData.outOfService} duration={2.75} separator="," /></h2>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col-12 p-0 text-center">
                                                                            <div className="small-heading">
                                                                                <h3>Out of Services ATMs</h3>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vspacer20" />
                                                        <div className="row">
                                                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                                                <div className="widget-box1">
                                                                    <div className="component-title6">
                                                                        <h3>Top 10 Transacted ATMs</h3>
                                                                    </div>
                                                                    <div className="component-box">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {/* <div className="charts-samples">
                                                                                    <canvas id="grouped-bar" />
                                                                                </div> */}
                                                                                {this.BarChartForTransactedAtm()}
                                                                                {/*.charts-samples*/}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                                                <div className="widget-box1">
                                                                    <div className="component-title6">
                                                                        <h3>Most 10 Failed ATMs</h3>
                                                                    </div>
                                                                    <div className="component-box">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                {/* <div className="charts-samples">
                                                                                    <canvas id="grouped-bar2" />
                                                                                </div> */}
                                                                                {/*.charts-samples*/}

                                                                                {this.BarChart()}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vspacer20" />
                                                        
                                                    </div>
                                                    {/* grid container ends */}
                                                    <div className="vspacer50" />

                                                    {/*.global-footer*/}
                                                    {/*================================ Footer code starts Ends ================================*/}
                                                    {/* ***************************************************************************************** */}
                                                </div>
                                                {/* .in-mcontainer */}
                                            </div>
                                            {/* .main-content */}
                                            {/*================================ Body code starts Ends ===================================*/}
                                            {/* ***************************************************************************************** */}
                                        </div>
                                        {/* .right-col-container */}
                                    </div>
                                    {/*  .right-main-column */}
                                    {/*============================== Right Main Column Ends ==========================================*/}
                                    {/* *********************************************************************************************** */}
                                </div>
                                {/*  col-12 */}
                            </div>
                            {/* row */}
                        </div>
                        {/* .container-fluid  */}
                    </div>
                    {/* .in-main */}
                </main>
                {/* .main-container */}
                {/* ============================================== Main Page Content - End ===============================================*/}

            </div>



        )
        }
        else{
            return(
                <div>
                    <HeadNavFoot />
                    <div className="center">
                        <div className="loading_box">
                            
                        </div>
                    </div>
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => {
    return {
        dashboard: state.dashboard,
        load: state.loading,
    }
}

export default connect(mapStateToProps,{getDashboard})(AdminContent);