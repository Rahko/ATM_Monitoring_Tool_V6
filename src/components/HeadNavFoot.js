import React, { Component } from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import DashFooter from './common/DashFooter'

export default class HeadNavFoot extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidebar />
                <DashFooter />
            </div>
        )
    }
}
