import React, { Component } from 'react';
import $ from "jquery";


class Game extends Component {
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
	 <div className='gamebg'>
         <div className="main-container">
		 <div className='container-fluid'>
			  <div className='game-main-wrap'>
				  <div className='game-heading'>
					  <h3>GAMES</h3>
				  </div>

                 <div className='row'>
                 <div className='col-lg-4'>
						 <div className='game-left'>
							 <div className='game-l-cont'>
								 <h3>merlin war</h3>
								 <div className='stake-nft-but'>
									 <a href='#'>stake your nft</a>
								 </div>
							 </div>
						 </div>
					 </div>
					 <div className='col-lg-4'>
                     <div className='game-center'>
							 <div className='game-l-cont'>
								 <h3>20x20 pvp</h3>
								 <div className='stake-nft-but'>
									 <a href='#'>stake your nft</a>
								 </div>
							 </div>
						 </div> 
					 </div>
					 <div className='col-lg-4'>
                     <div className='game-right'>
							 <div className='game-l-cont'>
								 <h3>Last merlin</h3>
								 <div className='stake-nft-but'>
									 <a href='#'>stake your nft</a>
								 </div>
							 </div>
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

export default Game;