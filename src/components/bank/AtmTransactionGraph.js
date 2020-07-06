import React, { Component } from 'react'
import { Line } from 'react-chartjs-2';
import { getBankTxnUrl } from '../../Constants';
import Axios from 'axios';
import {getGraphPoints} from './BankCalls'




class AtmTransactionGraph extends Component {
    intervalId;
    constructor(props) {
        super(props);
        this.state={
            tenantId : this.props.tenantId,
            transactions : []
        }

        // this.state={
        //     // bank : props.location.state.item,
        //      // outOfCashCount: 10,
        //      // lowCashAtmCount: 85,
        //      // availableCashCount: 10,
        //      bank: "KDCC",
        //      outOfCashCount: 10,
        //      lowCashAtmCount: 85,
        //      availableCashCount: 10,
        //      atmTransactions: [
        //       {
        //             hrs: "0",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "1",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "2",
        //           txnCount: 1
        //       },
        //       {
        //             hrs: "3",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "4",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "5",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "6",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "7",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "8",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "9",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "10",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "11",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "12",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "13",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "14",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "15",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "16",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "17",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "18",
        //           txnCount: 8
        //       },
        //       {
        //             hrs: "19",
        //           txnCount: 1
        //       },
        //       {
        //             hrs: "20",
        //           txnCount: 0
        //       },
        //       {
        //             hrs: "21",
        //           txnCount: 0
        //       }
        //   ]
      
       
        //    }

    }
    

    componentDidMount(){
        // this.intervalId = setInterval(this.getGraphData(), 3600000)
        this.getGraphData();
    }
    componentWillUnmount(){
        // clearInterval(this.intervalId)
        clearTimeout(this.intervalId);
    }


    getGraphData(){
        console.log("TenantId for this Bank Dashboard---->",this.state.tenantId)
        getGraphPoints(this.state.tenantId).then(res=>{
            res.status===200 ? this.setState({
                transactions: res.data
            }) : this.setState({
                transactions: []
            });

            this.intervalId= setTimeout(this.getGraphData.bind(this),3600000);
        })
    }
    
    LineChart = () => {
        // this.getGraphData();
       const atmTransactions = this.state.transactions;
        const lineChart = (
            <Line
                data={{
                    labels: atmTransactions.map(({ hrs }) => hrs),
                    datasets: [{
                        label: 'Transactions',
                        borderColor: '#3333ff',
                        fill: false,
                        data: atmTransactions.map(({ txnCount }) => txnCount)
                    }]
                }}
                height={60}
                width={null}
                options={{
                    aspectRatio: 1,  // this would be a 1:1 aspect ratio
                    legend: {
                        position: 'bottom',

                    }
                }}

            />
        )
        return lineChart;
    }


    render() {
        // console.log(this.props)
        return (
            <div>
                {this.LineChart()}
                
            </div>
        )
    }
}

// const mapStateToProps = (state) =>{
//     return{
//         txns : state.bankTxns
//     }
// }

export default AtmTransactionGraph;
