import { combineReducers } from "redux";

import {dashboard} from './DashboardReducer';
import {banks , bankDash} from './BankReducer';
import {atms} from './AtmReducer';
import {hsmConfigs} from './ConfigReducer';

const rootReducer = combineReducers({
    dashboard,
    banks,
    bankDash,
    atms,
    hsmConfigs
});

export default rootReducer;