import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/common/Login";
import Dashboard from "./components/admin/Dashboard";
import BankDashboard from "./components/bank/BankDashboard";
// import AtmList from "./components/atm/AtmList";
import AtmDetails from "./components/atm/AtmDetails";
import BankList from "./components/bank/BankList";
import AddAtm from "./components/atm/AddAtm";
import AtmListStates from "./components/atm/AtmListStates";
import BankDetails from "./components/bank/BankDetails";
import ConfigBankList from "./components/masters/config-master/ConfigBankList";
import ConfigMasterList from './components/masters/config-master/ConfigMasterList';
import EditBank from "./components/bank/EditBank";
import EditAtm from "./components/atm/EditAtm";
import AddBank from "./components/bank/AddBank";
import AddConfig from "./components/masters/config-master/AddConfig";
import ConfigDetails from "./components/masters/config-master/ConfigDetails";
import EditConfig from './components/masters/config-master/EditConfig';
import HsmConfigList from "./components/masters/hsm-master/HsmConfigList";
import AddHsm from "./components/masters/hsm-master/AddHsm";
import HsmConfigDetails from "./components/masters/hsm-master/HsmConfigDetails";
import EditHsm from './components/masters/hsm-master/EditHsm';

const NoMatchPage = () => {

  return (
    <div style={{margin:"325px"}}>
      <h3>404 - Not found</h3>
      <p>
        It looks like nothing was found at this location.
        Maybe try one of the links in the menu or press back to go to the previous page.
              </p>
     
    </div>


  );
};


export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />

        {/* Bank Routes */}
        <Route exact path="/banks" component={BankList} />
        <Route exact path="/bankdash" component={BankDashboard} />
        <Route exact path="/bankdetails" component={BankDetails} />
        <Route exact path="/editbank" component={EditBank} />
        <Route exact path="/addbank" component={AddBank} />

        {/* Atm Routes */}
        {/* <Route exact path="/atms" component={AtmList } /> */}
        <Route exact path="/atmlist" component={AtmListStates} />
        <Route exact path="/atmdetails" component={AtmDetails} />
        <Route exact path="/atm/add" component={AddAtm} />
        <Route exact path="/atm/edit" component={EditAtm} />


        {/* Config Routes */}
        <Route exact path="/configbanks" component={ConfigBankList} />
        <Route exact path="/configs" component={ConfigMasterList} />
        <Route exact path="/addconfig" component={AddConfig} />
        <Route exact path="/configdetails" component={ConfigDetails} />
        <Route exact path="/editconfig" component={EditConfig} />



        <Route exact path="/hsmconfigs" component={HsmConfigList} />
        <Route exact path="/addhsmconfig" component={AddHsm} />
        <Route exact path="/hsmdetails" component={HsmConfigDetails} />
        <Route exact path="/edithsm" component={EditHsm} />

        <Route component={NoMatchPage} />
      </Switch>
    </main>
  );
}