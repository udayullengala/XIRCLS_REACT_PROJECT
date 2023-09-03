import logo2 from '@src/assets/images/dashboard/man.png'
import per from '@src/assets/images/dashboard/percentage.png'
import bar from '@src/assets/images/dashboard/bargraph.png'

import gmail from '@src/assets/images/dashboard/gmail-tick.png'
import sent from '@src/assets/images/dashboard/sent.png'
import deleted from '@src/assets/images/dashboard/delete.png'
import archived from '@src/assets/images/dashboard/archived.png'
import forward from '@src/assets/images/dashboard/forward.png'
import laptop from '@src/assets/images/dashboard/laptop.png'
import revenue from '@src/assets/images/dashboard/revenue.png'

const EmailMarketing = () => {
    return ( 
        <div>
            <div style={{display: "flex", justifyContent:"space-between"}}>
                <div>
                    <div style={{backgroundColor:"#00bfff", color:"white", borderRadius:"10px", marginRight:"500px", paddingLeft:"10px"}} >Q2 2025</div>
                    <div style={{fontSize:"40px", fontWeight:"bolder", color: "#003d3d"}}>Email Marketing Dashboard</div>
                    <div style={{fontWeight:"bolder", fontSize:"16px", color:"#003d3d" }}>Report Time Frame: Q1 2025 (Compared to Q4 2024)</div>
                </div>
                <div style={{display:"flex", backgroundColor:"lightgray", borderRadius:"7px", marginBottom:"15px"}}>
                    
                    <div>
                        <img src={logo2} alt="Person" style={{height:"55px", margin:"15px 20px 15px 20px"}}/>
                    </div>
                    <div style={{marginTop:"20px", marginRight:"30px", marginTop:"17px", fontSize:"15px"}}>
                        <div style={{color:"#003d3d" }}>Prepared by:</div>
                        <div style={{fontWeight:"bolder", color: "#003d3d"}}>Samantha Dawn</div>
                    </div>
                    
                </div>
            </div>
            <div style={{ display: "flex", marginTop: "30px" }}>
                <div style={{ flex: 1 }}>
                    <div style={{ backgroundColor: "skyblue", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", marginRight: "255px", fontSize: "16.3px", padding: "8px 0px 8px 16px", backgroundColor:"#00bfff", color:"white" }}> Email sessions trending in the month of May</div>
                    <div style={{ display: "flex", backgroundColor: "#dcdcdc", borderRadius: "7px", marginRight: "130px" }}>
                        <div style={{ marginTop: "10px" }}>
                            <img src={per} alt="Person" style={{ height: "135px", marginTop: "17px", marginLeft: "60px", marginRight: "17px" }} />
                            <div style={{ marginLeft: "24px" }}>
                                <div style={{ marginTop: "10px", marginLeft: "10px", color:"#003d3d" }}>Total number of sessions</div>
                                <div style={{ fontWeight: "bolder", marginLeft: "57px", fontSize: "25px", paddingBottom: "15px", color:"#003d3d"  }}>10,500</div>
                            </div>
                        </div>
                        <div style={{ width: "1px", backgroundColor: "black", margin: "10px 0px", marginLeft:"52px" }}></div>
                        <div style={{ marginLeft: "60px", marginTop: "10px" }}>
                            <img src={per} alt="Person" style={{ height: "135px", marginTop: "17px", marginLeft: "30px", marginRight: "17px" }} />
                            <div style={{ marginLeft: "2px" }}>
                                <div style={{ marginTop: "10px", marginLeft: "10px", color:"#003d3d"  }}>Total number of sessions</div>
                                <div style={{ fontWeight: "bolder", marginLeft: "57px", fontSize: "25px", paddingBottom: "15px", color:"#003d3d"  }}>5,400</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ flex: 1, marginLeft:"-110px"}}>
                    <div style={{ backgroundColor: "skyblue", borderTopLeftRadius:"20px", borderTopRightRadius:"20px", marginRight: "200px", fontSize:"15.5px", padding:"8px 8px 8px 16px", backgroundColor:"#00008b", color: "white"}}> Sessions in thousands</div>
                    <div style={{ display: "flex", backgroundColor: "#dcdcdc", borderRadius: "6px" }}>
                        <div style={{ marginTop: "10px" }}>
                            <img src={bar} alt="Person" style={{ height: "217px", width: "400px", marginTop: "17px", marginLeft: "60px", marginRight: "17px" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", marginTop:"20px", backgroundColor:"#dcdcdc"}}>
                <div style={{flex: "2", boxSizing: "border-box0"}}>
                    <div style={{fontSize:"20px", fontWeight:"bolder", marginTop:"25px", color:"#003d3d" }}>How are the conversions trending in the month of May?</div>
                    <div style={{display: "flex", height: "200px", marginTop:"5px"}}>
                        <div style={{flex: "2", padding: "5px 5px 5px -5px", boxSizing: "border-box"}}>
                            <div style={{ flex: 1}}>
                                <div style={{ backgroundColor: "skyblue", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", marginRight: "355px", fontSize: "16.3px", padding: "8px 8px 8px 30px", backgroundColor:"#00bfff", color:"white"}}> Newsletter</div>
                                <div style={{ display: "flex", backgroundColor: "white", borderRadius: "7px", marginRight: "45px" }}>
                                    <div style={{ marginTop: "10px" }}>
                                        <img src={gmail} alt="Person" style={{ height: "70px", marginTop: "17px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "40px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px", paddingTop:"6px", marginLeft:"5px", color:"#003d3d"  }}>5,000</div>
                                            <div style={{ marginLeft:"9px", paddingBottom:"16px", color:"#003d3d" }}>Sessions</div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "20px", marginTop: "15px" }}>
                                        <img src={laptop} alt="Person" style={{ height: "70px", marginTop: "11px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "43px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px",  paddingTop:"6px", marginLeft:"20px", color:"#003d3d" }}>36</div>
                                            <div style={{ marginLeft: "9px", color:"#003d3d" }}>Signups</div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "20px", marginTop: "15px" }}>
                                        <img src={revenue} alt="Person" style={{ height: "70px", marginTop: "11px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "43px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px",  paddingTop:"6px", marginLeft:"20px", color:"#003d3d" }}>520</div>
                                            <div style={{ marginLeft: "9px", color:"#003d3d"  }}>Revenue</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "skyblue", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", marginRight: "355px", fontSize: "16.3px", padding: "8px 8px 8px 30px", marginTop:"17px", backgroundColor:"#00008b", color:"white" }}> Another Email</div>
                                <div style={{ display: "flex", backgroundColor: "white", borderRadius: "7px", marginRight: "45px" }}>
                                    <div style={{ marginTop: "10px" }}>
                                        <img src={gmail} alt="Person" style={{ height: "70px", marginTop: "17px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "40px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px", paddingTop:"6px", marginLeft:"5px", color:"#003d3d"  }}>8,000</div>
                                            <div style={{ marginLeft:"9px", color:"#003d3d" }}>Sessions</div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "20px", marginTop: "15px" }}>
                                        <img src={laptop} alt="Person" style={{ height: "70px", marginTop: "11px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "43px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px",  paddingTop:"6px", marginLeft:"20px", color:"#003d3d" }}>120</div>
                                            <div style={{ marginLeft: "9px", color:"#003d3d" }}>Signups</div>
                                        </div>
                                    </div>
                                    <div style={{ marginLeft: "20px", marginTop: "15px" }}>
                                        <img src={revenue} alt="Person" style={{ height: "70px", marginTop: "11px", marginLeft: "47px", marginRight: "17px" }} />
                                        <div style={{ marginLeft: "43px" }}>
                                            <div style={{ fontWeight: "bolder", fontSize: "25px",  paddingTop:"6px", marginLeft:"20px", color:"#003d3d" }}>225</div>
                                            <div style={{ marginLeft: "9px", paddingBottom:"16px", color:"#003d3d"  }}>Revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{flex: "1", padding: "10px", boxSizing: "border-box", marginRight:"10px", marginLeft:"-25px"}}>
                            <div style={{backgroundColor:"yellow", marginTop:"35px", marginRight:"105px", borderRadius:"6px", backgroundColor:"#00bfff", color:"white"}}>
                                <div style={{paddingTop:"15px", paddingLeft:"34px", fontSize: "15px", fontWeight:"bolder"}}>Email Signups</div>
                                <div style={{fontSize: "37px", fontWeight: "bolder", marginLeft:"52px"}}>150</div>
                                <div style={{marginLeft:"75px", paddingBottom:"15px"}}>5%</div>
                            </div>
                            <div style={{backgroundColor:"yellow", marginTop:"14px", marginRight:"105px", borderRadius:"6px", backgroundColor:"#00008b", color:"white"}}>
                                <div style={{paddingTop:"15px", paddingLeft:"18px", fontSize: "15px", fontWeight:"bolder"}}>Email Transaction</div>
                                <div style={{fontSize: "37px", fontWeight: "bolder", marginLeft:"63px"}}>10</div>
                                <div style={{marginLeft:"75px", paddingBottom:"15px"}}>2%</div>
                            </div>
                            <div style={{backgroundColor:"yellow", marginTop:"14px", marginRight:"105px", borderRadius:"6px", backgroundColor:"#003d3d", color:"white"}}>
                                <div style={{paddingTop:"15px", paddingLeft:"32px", fontSize: "15px", fontWeight:"bolder"}}>Email Revenue</div>
                                <div style={{fontSize: "37px", fontWeight: "bolder", marginLeft:"52px"}}>620</div>
                                <div style={{marginLeft:"75px", paddingBottom:"15px"}}>4%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{flex: "1", padding: "10px", boxSizing: "border-box", backgroundColor:"#979aaa", paddingBottom:"30px", marginLeft:"-70px"}}>
                    <div style={{fontSize:"20px", fontWeight:"bolder", margin:"15px 15px 15px 15px"}}>
                        <div style={{color:"white"}}>Best Performing Email in</div>
                        <div style={{color:"white"}}>May 2025</div>
                    </div>
                    <div style={{display:"flex", marginLeft:"10px"}}>
                        <div>
                            <img src={per} alt="Person" style={{height:"115px", margin:"15px 20px 15px 20px"}}/>
                        </div>
                        <div style={{marginTop:"47px", fontSize:"18px"}}>
                            <div style={{color:"white"}}>Open Rate</div>
                            <div style={{fontWeight:"bolder", fontSize:"25px", paddingLeft:"30px", color:"white"}}>20%</div>
                        </div>
                    </div>
                    <div style={{display:"flex", marginLeft:"10px"}}>
                        <div>
                            <img src={per} alt="Person" style={{height:"115px", margin:"15px 20px 15px 20px"}}/>
                        </div>
                        <div style={{marginTop:"45px", fontSize:"18px"}}>
                            <div style={{color:"white"}}>Website Sessions</div>
                            <div style={{fontWeight:"bolder", fontSize:"25px", paddingLeft:"30px", color:"white"}}>8000</div>
                        </div>
                    </div>
                    <div style={{display:"flex", marginLeft:"10px"}}>
                        <div>
                            <img src={per} alt="Person" style={{height:"115px", margin:"15px 20px 15px 20px"}}/>
                        </div>
                        <div style={{marginTop:"45px", fontSize:"18px"}}>
                            <div style={{color:"white"}}>New Signups</div>
                            <div style={{fontWeight:"bolder", fontSize:"25px", paddingLeft:"30px", color:"white"}}>120</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"20px"}}>
                <div>
                    <div style={{fontSize:"20px", fontWeight:"bolder", color:"#003d3d" }}>Best Performing Email in May 2025</div>
                    <div style={{fontWeight:"bolder", color:"#00bfff"}}>Email Date: Friday, 10 May 2025, 10:00 AM</div>
                </div>
                <div style={{display: "flex", justifyContent:"space-between", marginTop:"20px"}}>
                    <div style={{flex: "1", paddingRight:"60px"}}>
                        <div style={{display:"flex", backgroundColor:"#dcdcdc", borderRadius:"7px", marginBottom:"10px"}}>
                            <div>
                                <img src={sent} alt="Person" style={{height:"55px", margin:"15px 20px 15px 20px"}}/>
                            </div>
                            <div style={{marginTop:"20px", marginRight:"10px", marginTop:"17px", fontSize:"15px"}}>
                                <div style={{fontWeight:"bold",  fontSize: "14.5px", color:"#003d3d" }}>Emails Sent</div>
                                <div style={{fontWeight:"bolder", fontSize: "30px", marginTop:"-8px", color:"#003d3d" }}>10,000</div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex: "1", paddingRight:"60px"}}>
                        <div style={{display:"flex", backgroundColor:"#dcdcdc", borderRadius:"7px", marginBottom:"10px"}}>
                            <div>
                                <img src={deleted} alt="Person" style={{height:"55px", margin:"15px 20px 15px 20px"}}/>
                            </div>
                            <div style={{marginTop:"20px", marginRight:"10px", marginTop:"17px", fontSize:"15px"}}>
                                <div style={{fontWeight:"bold",  fontSize: "14.5px", color:"#003d3d" }}>Emails Deleted</div>
                                <div style={{fontWeight:"bolder", fontSize: "30px",  marginTop:"-8px", color:"#003d3d" }}>150</div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex: "1", paddingRight:"60px"}}>
                        <div style={{display:"flex", backgroundColor:"#dcdcdc", borderRadius:"7px", marginBottom:"10px"}}>
                            <div>
                                <img src={archived} alt="Person" style={{height:"55px", margin:"15px 20px 15px 20px"}}/>
                            </div>
                            <div style={{marginTop:"20px", marginRight:"10px", marginTop:"17px", fontSize:"15px"}}>
                                <div style={{fontWeight:"bold",  fontSize: "14.5px", color:"#003d3d" }}>Archived</div>
                                <div style={{fontWeight:"bolder", fontSize: "30px", marginTop:"-8px", color:"#003d3d"  }}>2000</div>
                            </div>
                        </div>
                    </div>
                    <div style={{flex: "1", paddingRight:"60px"}}>
                        <div style={{display:"flex", backgroundColor:"#dcdcdc", borderRadius:"7px", marginBottom:"10px"}}>
                            <div>
                                <img src={forward} alt="Person" style={{height:"55px", margin:"15px 20px 15px 20px"}}/>
                            </div>
                            <div style={{marginTop:"20px", marginRight:"10px", marginTop:"17px", fontSize:"15px"}}>
                                <div style={{fontWeight:"bold",  fontSize: "14.5px", color:"#003d3d" }}>Forwarded</div>
                                <div style={{fontWeight:"bolder", fontSize: "30px", marginTop:"-8px", color:"#003d3d" }}>415</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
     )
}
 
export default EmailMarketing