import React, { Component } from 'react';
import $ from "jquery";
import marlinpartimg  from '../../images/marlinpartimg.png';
import ripple  from '../../images/ripple.png';
import huobi  from '../../images/huobi.png';






class Marlinpartner extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	
	  }
	  componentDidMount = () =>{
            
	  }
	  
  render() {
	 return (
		 <div>
	 <div className='marlinpartnerbg'>
         <div className="main-container">
		 <div className='container-fluid'>
			  <div className='marlinpartner-main-wrap'>
				  <div className='row'>
                      <div className='col-lg-7'>
                      <div className='marlinpartner-heading'>
					  <h3>OUR PARTNERS</h3>
				       </div>
                       <div className='marlinpartner-logoimg'>
                           <ul className='partnerlogoimg'>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                               <li>
                                   <div className='part-logo-wrap'>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={huobi}></img></a>
                                   </div>
                                   <div className='part-logo'>
                                   <a href='#'><img src={ripple}></img></a>
                                   </div>
                                   </div>
                               </li>
                           </ul>
                       </div>
                      </div>
                       
                       <div className='col-lg-5'>
                           <div className='marlin-p-img'>
                               <img src={marlinpartimg}></img>
                           </div>
                       </div>

                  </div>

                 

			  </div>
		  </div>
		 </div>
	 </div>
		 </div>
    );
  }
}

export default Marlinpartner;