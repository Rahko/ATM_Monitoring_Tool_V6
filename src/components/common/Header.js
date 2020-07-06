import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            logintime:"",
            jwt:""
        }
    }

    componentDidMount(){
    // const jwtToken = localStorage.getItem("token");
    // const loginTime=localStorage.getItem("logintime");
    // const username=localStorage.getItem("username");
    const jwtToken = sessionStorage.getItem("token");
    const loginTime=sessionStorage.getItem("logintime");
    const username=sessionStorage.getItem("username");
    // console.log(jwtToken);
    // console.log(loginTime);
    this.setState({
        jwt: jwtToken,
        username: username,
        loginTime:loginTime
      });
    }

    render() {
        // console.log(this.state)
        return (
            <>
            <div >
            <header className="global-header sticky-header">
             <div className="in-glheader">
                 <div className="row">
                     <div className="col-12">
                         <div className="glheader-content">
                             <div className="brand-logo">
                                 <span className="logo-img">
                                         <img src="../images/logo/kiya-product-logo.png" alt="Kiya-Product-logo" />
                                     </span>
                                 </div>
                              <div className="header-items">
                                 <ul className="lst-header-items">
                                     <li className="mr-2">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search Bank/ATM" />
                                                <div className="input-group-btn">
                                                  <button className="btn" type="submit" >
                                                    <i className="glyphicon glyphicon-search">
                                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                                viewBox="0 0 512.005 512.005" style={{"enableBackground":"new 0 0 512.005 512.005"}} space="preserve" width="20px" height="20px">
                                                            <g>
                                                                <g>
                                                                    <path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
                                                                        S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
                                                                        c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
                                                                        M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/>
                                                                </g>
                                                            </g>
                                                        </svg>
                                                    </i>
                                                  </button>
                                                </div>
                                             </div>
                                            </form> 
                                      </li> 
                                       <li className="hil-notification">
                                         <a href="#" className="item-notification">
                                             <div className="notify">
                                                 <span className="point"></span>
                                             </div>
                                             <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 512 512" style={{"enableBackground":"new 0 0 512 512"}} space="preserve">
                                                <g>
                                                    <g>
                                                        <path d="M467.812,431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04
                                                            V42.667C298.66,19.136,279.524,0,255.993,0s-42.667,19.136-42.667,42.667V80.96C151.716,99.371,106.66,156.48,106.66,224v53.483
                                                            c0,32.853-8.939,65.109-25.835,93.291l-36.629,61.056c-1.984,3.307-2.027,7.403-0.128,10.752c1.899,3.349,5.419,5.419,9.259,5.419
                                                            H458.66c3.84,0,7.381-2.069,9.28-5.397C469.839,439.275,469.775,435.136,467.812,431.851z"/>
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M188.815,469.333C200.847,494.464,226.319,512,255.993,512s55.147-17.536,67.179-42.667H188.815z"/>
                                                    </g>
                                                </g>
                                              </svg>  
                                         </a>
                                         <div className="bm-notification">
                                             <div className="nf-header">
                                                 <span className="nf-title">Notifications <b>2</b></span>
                                             </div>
                                             <div className="nf-content">
 
                                                 <div className="template-list">
                                                     <dl className="dl-template-items">
                                                         <div>
                                                             <a href="#">
                                                                 <span>N</span>
                                                                 <dt>New data added to system</dt>
                                                                 <dd>System is updated with new reports</dd>
                                                                 <em>12 Jan 2020, 9:25 AM</em>
                                                             </a>
                                                         </div>
                                                         <div>
                                                             <a href="#">
                                                                 <span>E</span>
                                                                 <dt>Event Today</dt>
                                                                 <dd>Just a reminder of an event</dd>
                                                                 <em>11 Jan 2020, 08:00 AM</em>
                                                             </a>
                                                         </div>
                                                         <div>
                                                             <a href="#" className="nf-read">
                                                                 <span>S</span>
                                                                 <dt>System Maintenance</dt>
                                                                 <dd>System will be down from 5PM - 8PM today</dd>
                                                                 <em>10 Jan 2020, 07:00 AM</em>
                                                             </a>
                                                         </div>
                                                          
                                                     </dl>
 
                                                 </div>
                                             </div>
                                             <div className="nf-footer">
                                                 <button className="button sm secondary" onClick={()=> console.log()}> View all</button>
                                             </div>
                                         </div>
                                         <div className="nf-overlay"></div>
                                     </li> 
                                       <li className="hil-help">
                                         <a href="#" className="item-help">
                                             <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                                <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 405.332031c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031 21.332031 9.554687 21.332031 21.332031-9.554687 21.332031-21.332031 21.332031zm33.769531-135.636719c-7.550781 3.476563-12.4375 11.09375-12.4375 19.394532v9.578125c0 11.773437-9.535156 21.332031-21.332031 21.332031s-21.332031-9.558594-21.332031-21.332031v-9.578125c0-24.898438 14.632812-47.722656 37.226562-58.15625 21.738281-10.003906 37.4375-36.566406 37.4375-49.601563 0-29.394531-23.914062-53.332031-53.332031-53.332031s-53.332031 23.9375-53.332031 53.332031c0 11.777344-9.539063 21.335938-21.335938 21.335938s-21.332031-9.558594-21.332031-21.335938c0-52.925781 43.070312-96 96-96s96 43.074219 96 96c0 28.824219-25.003906 71.191407-62.230469 88.363281zm0 0"/>
                                            </svg>
                                         </a>
                                     </li>  
                                     <li className="hil-user-name">
                                        <a href="#" className="item-user">
                                            <img src="../images/icon/john.png" alt="user image" />
                                         </a>
                                         <div className="bm-userprofile">
                                             <ul className="lst-userprofile">
                                                 <li>
                                                     <div className="userprofile-container">
                                                         <div className="row">
                                                             <div className="col-12 col-sm-6">
                                                                 <span>{this.state.username}</span>
                                                                <em>Last login <i>{this.state.loginTime}</i></em>
                                                             </div>
                                                             <div className="col-12 col-sm-6">
                                                                  <div className="profile-btn">
                                                                     <button className="button sm secondary">View Profile</button>
                                                                 </div>
 
                                                             </div>
                                                         </div>
 
                                                     </div>
                                                 </li>
                                                 <li>
                                                     <Link to="" className="common-action change-pwd">
                                                         <span> Change Password</span>
                                                     </Link>
                                                 </li>
                                                 {/* data-toggle="modal" data-target="#logoutModal" */}
                                                 <li>
                                                     <Link to="/" onClick={()=>{sessionStorage.clear()}} className="common-action logout" >
                                                         <span> Logout</span>
                                                     </Link>
                                                 </li>
                                             </ul>
                                         </div>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </header>

         </div>
         {/* Modal */}
        {/* <div className="modal-sandbox">
          <div id="logoutModal" className="modal fade" role="dialog">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h6>Confirmation</h6>
                </div>
                <div className="modal-body">
                  <p>Do you want logout from this application?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="button secondary"
                    data-dismiss="modal"
                  >
                    No
                  </button>
                  <Link to="/" className="button" onClick={()=>sessionStorage.clear()}>
                    Yes
                  </Link>
                  <Link to="/">
                        <button type="button">
                            Click me
                        </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
 */}
         </> 
        )
    }
}
