import React from "react";
import { Link } from "react-router-dom";

class BankListItems extends React.Component {
  constructor(props) {
    super(props);
    console.log("bankList");
    this.state = {
      item: props.item,
    };
  }

  render() {
    console.log(this.state.item);
    const bank = this.state.item;
    return (
      <tr>
        <td><Link to="/" style={{color:"black"}}>{bank.bank.bankName}</Link></td>
        <td>{bank.activeAtms}</td>
        <td>{bank.inactiveAtms}</td>
        <td>
          {bank.bank.bankStatus === 0 && (
            <span className="approve">Active</span>
          )}
          {bank.bank.bankStatus != 0 && (
            <span className="reject">Inactive</span>
          )}
        </td>
        <td>
          <a href="#" className="viewbtn">
            {" "}
            <img src="../images/icon/view.png" alt="view" />
          </a>
        </td>
      </tr>
    );
  }
}

export default BankListItems;
