import React, { Component, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';
import {Link, Router} from 'react-router-dom';
import $ from "jquery";
import ConnectButton from './ConnectButton';

import '../css/dt-global_style.css'
import '../css/datatables.css'
import '../css/style.css'
import '../css/style2.css'
import '../css/responsive.css'
import '../css/responsive1.css'
// import '../css/navbar.css'
import logo from '../images/logo.png';
import logomerlin from '../images/logomerlin.png';
import logo2 from '../images/logo2.png';
import burger from '../images/burger.png';
import crosss from '../images/crosss.png';
import brand1 from '../images/brand1.png';
import brand2 from '../images/brand2.png';
import brand3 from '../images/brand3.png';
import brand4 from '../images/brand4.png';
import copyaddress from '../images/copyaddress.png';
import menu from '../images/menu.png';
 


const Header = () => {
   

  useEffect(() =>{
    
    changePickupStoreMenu();

    function changePickupStoreMenu(){
     
        var body = $('body'),
            mask = $('<div class="mask"></div>'),
            toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
            slideMenuRight = document.querySelector( ".slide-menu-right" ),
            activeNav = '';
        ;
        $('body').append(mask);
     
        /* slide menu right */
        toggleSlideRight.addEventListener( "click", function(){
            $('body').addClass("smr-open");
            $('.mask').fadeIn();
            activeNav = "smr-open";
        } );
     
        /* hide active menu if close menu button is clicked */
        $(document).on('click', ".close-menu", function(el,i){
            $('body').removeClass(activeNav);
            activeNav = "";
            $('.mask').fadeOut();
        });
     
    } 
  })

 

		return(
      <div>
        {/* <div className="top-header-bg">
        <div className="container">
            <div className="wrp-top-header">
              <div className="topheaderchild1">
                <a href="/"><img src={logo2} /></a>
              </div>
              <div className="topheaderchild2">
                <ul className="top-headerlist">
                  {/* <li><a href="https://pancakeswap.finance/swap#/swap?outputCurrency=0x5066C68cAe3B9BdaCD6A1A37c90F2d1723559D18" target="_blank">PANCAKESWAP</a></li>
                  <li><a href="https://swap.wault.finance/bsc/#/swap?outputCurrency=0x5066c68cae3b9bdacd6a1a37c90f2d1723559d18" target="_blank">WAULT FINANCE</a></li>
                  <li><a href="https://exchange.babyswap.finance/#/swap?outputCurrency=0x5066c68cae3b9bdacd6a1a37c90f2d1723559d18" target="_blank">BABYSWAP</a></li>
                  <li><a href="https://dex.cafeswap.finance/#/swap?outputCurrency=0x5066C68cAe3B9BdaCD6A1A37c90F2d1723559D18" target="_blank">CAFESWAP</a></li> */}
                  {/* <li>
                    <ConnectButton />
                    </li>  
                </ul>
              </div>
            </div>
        </div>
        </div> */}
        <div className="border-b">
        <div className="container-fluid">
          <div className="header-box">
            <div className="header-c1">
              <div className="logo-box">
                <a href="/">
                  <img src={logomerlin} />
                </a>
              </div>
            </div>
            <div className="header-c3">
              <ul className="menu-list-d">
                    <li><Link to="/choose" className="mrl">NFT ECOSYSTEM</Link></li>
                    <li><Link to="/games" className="mrl">Games</Link></li>
                    <li><Link to="/choose">spell inventory</Link></li>
                    <li><Link to="#">IDO</Link></li>
                    <li><a to="#" className="marlin-head-btn">325.68 MERLIN</a></li>
                    <li><div className='copyaddress-wrap'>
                            <div className='copyaddress-left'>
                              <p>0x0Eef...b994</p>
                            </div>
                            <div className='copyaddress-right'>
                              <a href='#'><img src={copyaddress}></img></a>
                            </div>
                          </div>
                      </li>
                   
                </ul>
                <ul className="menu-list-d menu-list-d2">
                <li>
                      <div className="header-c2">
             
                            <div className="burger-area">
                                <a href="#" className="burgers toggle-slide-right"> <img src={burger} /></a>
                              </div>
                            </div>
                      </li>
                </ul>
                
            </div>
            
            
          </div>
              
              <div className="menu slide-menu-right menu-list-wrp">
                  <button class="close-menu"><img src={crosss} className="img-close" /></button>
                <ul className="menu-list2">
                  <li><Link to="/choose" className="close-menu">NFT ECOSYSTEM</Link></li>
                    <li><Link to="/marketplace" className="close-menu">Games</Link></li>
                    <li><Link to="#" className="close-menu">spell inventory</Link></li>
                     <li><Link to="/games" className="close-menu">IDO</Link></li>
                     <li> <Link to="pools" className="close-menu">MANA POOLS</Link></li>
                  <li><Link to="/farm" className="close-menu">GOLD FARMS</Link></li>
                  <li><a href='/marlinlightpapaer.pdf' className="close-menu">WHITEPAPER</a></li>
                  <li><Link to="#" className="close-menu">PITCH</Link></li>
                  <li><Link to="/faq" className="close-menu">FAQ</Link></li>
                  <li><Link to="partners" className="close-menu">PARTNERS</Link></li>
                  <li><Link to="#" className="close-menu">OUR TEAM</Link></li>
                  <li><Link to="#" className="close-menu">AUDIT</Link></li>
                   {/* <li><a href="/#partner-sec" className="close-menu">Partners</a></li> */}
                   <li><Link to="#" className="marlin-head-btn close-menu">325.68 MERLIN</Link></li>
                    <li><div className='copyaddress-wrap close-menu'>
                            <div className='copyaddress-left'>
                              <p>0x0Eef...b994</p>
                            </div>
                            <div className='copyaddress-right'>
                              <a href='#'><img src={copyaddress}></img></a>
                            </div>
                          </div>
                      </li>
                    
                   
                    
                </ul>
                <ul className="listmenu-desktop">
                  <li> <Link to="pools" className="close-menu"><span>01</span>MANA POOLS</Link></li>
                  <li><Link to="/farm" className="close-menu"><span>02</span>GOLD FARMS</Link></li>
                  <li><Link to="/marketplace" className="close-menu"><span>03</span>MARKETPLACE</Link></li>
                  <li><a href="/marlinlightpapaer.pdf" className="close-menu" target="_blank"><span>04</span>WHITEPAPER</a></li>
                  <li><Link to="#" className="close-menu"><span>05</span>PITCH</Link></li>
                  <li><Link to="/faq" className="close-menu"><span>06</span>FAQ</Link></li>
                  <li><Link to="partners" className="close-menu"><span>07</span>PARTNERS</Link></li>
                  <li><Link to="#" className="close-menu"><span>08</span>OUR TEAM</Link></li>
                  <li><Link to="#" className="close-menu"><span>09</span>AUDIT</Link></li>
                </ul>
              </div>
          
        </div>
      </div>
      </div>
		);
 
}


export default Header;

