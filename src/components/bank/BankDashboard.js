import React, { Component } from 'react'
import HeadNavFoot from '../HeadNavFoot'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getBankDash } from '../../redux/actions/BankActions'
import { Doughnut, Line } from 'react-chartjs-2';
import AtmTransactionGraph from './AtmTransactionGraph';
import CountUp from 'react-countup';

class BankDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bank: props.location.state.item,
      // outOfCashCount: 10,
      // lowCashAtmCount: 85,
      // availableCashCount: 10,
      // bank: "KDCC",
      // outOfCashCount: 10,
      // lowCashAtmCount: 85,
      // availableCashCount: 10,
      // atmTransactions: [
      //   {
      //     hour: "12 PM",
      //     transCount: 148
      //   },
      //   {
      //     hour: "12 AM",
      //     transCount: 5
      //   },
      //   {
      //     hour: "01 PM",
      //     transCount: 8
      //   },
      //   {
      //     hour: "01 AM",
      //     transCount: 18
      //   },
      //   {
      //     hour: "02 AM",
      //     transCount: 39
      //   },
      //   {
      //     hour: "08 PM",
      //     transCount: 1
      //   },
      //   {
      //     hour: "03 PM",
      //     transCount: 11
      //   },
      //   {
      //     hour: "04 PM",
      //     transCount: 6
      //   },
      //   {
      //     hour: "06 PM",
      //     transCount: 2
      //   },
      //   {
      //     hour: "02 PM",
      //     transCount: 6
      //   },
      //   {
      //     hour: "05 PM",
      //     transCount: 6
      //   },
      //   {
      //     hour: "07 PM",
      //     transCount: 9
      //   }
      // ]

    }


    // this.state = {
    //   //state is by default an object

    //   bank: "KDCC",
    //   outOfCashCount: 10,
    //   lowCashAtmCount: 85,
    //   availableCashCount: 10,


    // }
  }

  PieChart = () => {
    const dash = this.props.bankDash;

    const pieChart = (
      <Doughnut
        data={{
          labels: ['Low Cash',
            'Available Cash',
            'Out of Cash'],
          datasets: [{
            label: 'ATM cash Availablity',
            backgroundColor: ['rgb(252, 201, 99)', 'rgb(87, 212, 116)', 'rgb(254, 82, 93)'],
            data: [dash.lowCashAtmCount, dash.availableCashCount, dash.outOfCashCount],

          }]

        }}

        options={{
          legend: {
            position: 'bottom',
            labels: {
              fontColor: "#000",
              padding: 10,
            }
          },
          cutoutPercentage: 70
        }}



      />
    )
    return pieChart;
  }

  // LineChart = () => {
  //   const atmTransactions = this.state.atmTransactions;
  //   const lineChart = (
  //     <Line
  //       data={{
  //         labels: atmTransactions.map(({ hour }) => hour),
  //         datasets: [{
  //           label: 'Transactions',
  //           borderColor: '#3333ff',
  //           fill: false,
  //           data: atmTransactions.map(({ transCount }) => transCount)
  //         }]
  //       }}
  //       height={60}
  //       width={null}
  //       options={{
  //         aspectRatio: 1,  // this would be a 1:1 aspect ratio
  //         legend: {
  //           position: 'bottom',

  //       }
  //       }}

  //     />
  //   )
  //   return lineChart;
  // }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = `js/effectScripts.js`;
    script.async = true;
    document.body.appendChild(script);

    // const token = localStorage.getItem("token")
    const token = sessionStorage.getItem("token")
    this.props.getBankDash(this.props.location.state.item.tenantId, token);
  }

  render() {
    // console.log(this.props.bankDash)
    const dashData = this.props.bankDash;

    const bankName = this.state.bank.bankName;
    const allAtms = []

    if (dashData.length !== 0) {

    }
    if (dashData.length !== 0) {
      return (
        <div>
          <HeadNavFoot />

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
                            {/*=============================== breadcrumb starts ===============================*/}
                            <div className="breadcrumb">
                              <ul className="lst-breadcrumb">
                                <li>
                                  <Link to="/banks">Banks</Link>
                                </li>
                                <li>
                                  {bankName}
                                </li>
                              </ul>
                              {/*.lst-breadcrumb*/}
                            </div>
                            {/* .breadcrumb */}
                            {/*=============================== breadcrumb ends ===============================*/}
                            {/*============================ grid container starts ============================*/}
                            <div className="grid-container2">
                              <div className="row">
                                {/* <div className="col-12 col-xl-6 col-lg-4 col-md-12"> */}
                                {/* <Link to={{pathname:"/bankdetails", state:{bank:this.state.bank}}}>
                                  <h1>{bankName}</h1>
                                </Link> */}
                                {/* <h1>{bankName}</h1> */}
                                {/* <Link to={{ pathname: "/bankdetails", state: { bank: this.state.bank } }} className="button">
                                        View Bank Details
                                      </Link> */}

                                {/* </div> */}

                                <div class="col-12 col-xl-6 col-lg-6 col-md-12">
                                  <div class="row">
                                    <div class="col-12 col-xl-4 col-lg-5 col-md-8">
                                      <h1>{bankName}</h1>
                                    </div>
                                    <div class="col-12 col-xl-8 col-lg-7 col-md-4 mt-1">
                                      <Link to={{ pathname: "/bankdetails", state: { bank: this.state.bank } }} className="dt-add secondary button">
                                        View Bank Details
                                      </Link>
                                    </div>
                                  </div>
                                </div>


                                <div className="col-12 col-xl-6 col-lg-6 col-md-12 text-right mt-2">
                                  <ul className="dt-buttons">
                                    <li>
                                      {/* state :{bank : bank} */}


                                      <Link to={{ pathname: "/atm/add", state: { bank: this.state.bank } }} className="dt-add secondary button">
                                        <em>New ATM</em>
                                      </Link>
                                    </li>
                                    {/* <li>
                                      <a href="#" className="button1 secondary">
                                        5 Y
                                          </a>
                                    </li>
                                    <li>
                                      <a href="#" className="button1 secondary">
                                        3 Y
                                          </a>
                                    </li>
                                    <li>
                                      <a href="#" className="button1 secondary">
                                        1 Y
                                          </a>
                                    </li>
                                    <li>
                                      <a href="#" className="button1 secondary">
                                        6 M
                                          </a>
                                    </li>
                                    <li>
                                      <a href="#" className="button1 secondary">
                                        1 M
                                          </a>
                                    </li>
                                    <li>
                                      <a href="#" className="button1 secondary active">
                                        Today
                                          </a>
                                    </li> */}
                                  </ul>
                                  {/* dt-buttons */}
                                </div>
                              </div>
                              <div className="vspacer20" />
                              <div className="row">

                                <div class="col-xl-6 col-lg-12 col-sm-12 col-12">
                                  <div class="widget-box1">
                                    <div class="component-title6">
                                      <h3>ATM Cash Availability</h3>
                                    </div>
                                    <div class="component-box">
                                      <div class="row">
                                        <div class="col-12">
                                          <div class="charts-samples">
                                            {this.PieChart()}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                  <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                      <div className="widget-box wb-single medium">
                                        <Link to={{ pathname: "/atmlist", state: { atms: dashData.activeAtm, item: this.state.bank } }}>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="number">
                                                <h2><CountUp start={0} end={dashData.activeAtmCount} duration={2.75} separator="," /></h2>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="small-heading">
                                                <h3>Active ATMs</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                      <div className="widget-box wb-single medium">
                                        <Link to={{ pathname: "/atmlist", state: { atms: dashData.inactiveAtm, item: this.state.bank } }}>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="number">
                                                <h2><CountUp start={0} end={dashData.inactiveAtmCount} duration={2.75} separator="," /></h2>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="small-heading">
                                                <h3>Inactive ATMs</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                      <div className="widget-box wb-single medium">
                                        <Link to={{ pathname: "/atmlist", state: { atms: dashData.outOfServiceAtm, item: this.state.bank } }}>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="number">
                                                <h2><CountUp start={0} end={dashData.outOfServiceAtmCount} duration={2.75} separator="," /></h2>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="small-heading">
                                                <h3>Out of Service ATMs</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                      <div className="widget-box wb-single medium">
                                        <Link to={{ pathname: "/atmlist", state: { item: this.state.bank }, state: { atms: dashData.activeAtm.concat(dashData.inactiveAtm).concat(dashData.outOfServiceAtm), item: this.state.bank } }}>
                                          {/* <Link to={{ pathname: "/atmlist" }}> */}
                                          <div className="row">
                                            <div className="col-12 text-center">
                                              <div className="number">
                                                <h2>
                                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                                    <g>
                                                      <g>
                                                        <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                                                                                            c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                                                                                            l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                                                                                            c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </h2>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-12 p-0 text-center">
                                              <div className="small-heading">

                                                <h3>
                                                  View All ATMs
                                                    </h3>

                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="vspacer20" />
                              <div className="row">
                                <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                                  <div className="widget-box1">
                                    <div className="component-title6">
                                      <h3>ATM Transactions</h3>
                                    </div>
                                    <div className="component-box">
                                      <div className="row">
                                        <div className="col-12">
                                          <AtmTransactionGraph tenant={this.state.bank.tenantId} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* grid container ends */}
                            <div className="vspacer50" />
                            {/*============================ grid container ends ============================*/}
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

        </div>
      )
    }
    else {
      return (
        <div>
          <HeadNavFoot />
          <div class="center">
            <div class="loading_box">

            </div>
          </div>
        </div>

      )
    }


  }
}


const mapStateToProps = (state) => {
  return {
    bankDash: state.bankDash,
    load: state.loading
  }
}

export default connect(mapStateToProps, { getBankDash })(BankDashboard);
