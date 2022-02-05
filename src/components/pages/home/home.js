import React, { Component } from 'react';

import $ from "jquery";
import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';

import bnrcharacter from '../../images/bnrcharacter.png';
import eyef from '../../images/eyef.png';
import twitterf from '../../images/twitterf.png';
import telegramf from '../../images/telegramf.png';
import mediumf from '../../images/mediumf.png';
import Layer from '../../images/Layer.png';
import ExploreNew from '../explore/ExploreNew'
import Stake from '../newhome/Stake'
import { CHAIN_ID } from '../../../Config/index.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}

	componentDidMount = () => {

		// faq open js

		$(document).ready(function () {
			$('.block__title').click(function (event) {
				if ($('.block').hasClass('one')) {
					$('.block__title').not($(this)).removeClass('active');
					$('.block__text').not($(this).next()).slideUp(300);
				}
				$(this).toggleClass('active').next().slideToggle(300);
			});

		});

		// closed faq js

	}

	render() {
		return (
			<div>

				<div id="banner-section">
						<div className="container">
							<div className="banner-content-wrp">
								<div className="row">
									<div className="col-lg-6">
										<div className="banner-contents">
											<span>Welcome to</span>
											<h3>MERLIN</h3>
											<p>You’re a MERLIN now the possibilities are endless.</p>
											<div className="bnr-btns-wrp">
												<div className="bnr-btn"><a href="#">BUY MERLIN</a></div>
												<div className="bnr-btn2"><a href="/buy">Buy nft</a></div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="bnr-img">
											<img src={bnrcharacter} />
										</div>
									</div>
								</div>
							</div>
						</div>
					<div className="wrp-social-media">
						<div className="social-cotent">
							<p>© 2022 Merlin. All rights reserved.</p>
						</div>
						<div className="social-icon">
							<ul className="social-list">
								<li><a href="#"><img src={eyef} /></a></li>
								<li><a href="#"><img src={twitterf} /></a></li>
								<li><a href="#"><img src={telegramf} /></a></li>
								<li><a href="#"><img src={mediumf} /></a></li>
							</ul>
						</div>
					</div>
				</div>

				<section id="about-section">
					<div className="main-container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-5">
								<div className="about-img">
									<img src={Layer} />
								</div>
							</div>
							<div className="col-lg-5">
								<div className="about-content">
									<h3>Join our <br></br> benefits</h3>
									<p>Lorem ipsum dolor sit amet, consetetur sadipscing<br></br> elitr,
										sed diam nonumy eirmod tempor invidunt ut <br></br> labore et dolore
										magna aliquyam erat, sed diam <br></br>voluptua. At vero eos et accusam
										et justo duo dolores<br></br> et ea rebum. Stet clita kasd gubergren,
										no sea <br></br>takimata sanctus estemated. </p>
									<a>WHITEPAPER</a>
								</div>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					</div>
				</section>
				<section id="our-features-sec">
					<div className="main-container">
					<div className="container-fluid">
						<div className="our-features-head">
							<h3>OUR</h3>
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut <br></br>
								labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et <br></br>
								ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated.</p>
						</div>
						<div className="faq-wrp">
							<div className="faq-child1">
								<p>Q1 <span>2022</span></p>
								<div class="wrapper">
									<div class="block one">
										<div class="block__item">
											<div class="block__title">Launch website</div>
											<div class="block__text">
												Ans Wizard is a fantasy-based ecosystem 
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Coinmarketcap & Coingecko listing</div>
											<div class="block__text">
												Holding WIZARD comes with the following benefits:

											</div>
										</div>
										<div class="block__item">
											<div class="block__title">CEX listings</div>
											<div class="block__text">
												And IWO stands for Initial Wizard Offering.
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Game Launch</div>
											<div class="block__text">
												Ans A fierce and brave warrior a protector 
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">NFT Marketplace launch</div>
											<div class="block__text">
												Ans WIZARD NFT marketplace is made to 
												other projects NFT.


											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Coinmarketcap & Coingecko listing</div>
											<div class="block__text">
												Ans A fierce and brave warrior a protector 
											</div>
										</div>


									</div>
								</div>
							</div>
							<div className="faq-child2">
								<p>Q2 <span>2022</span></p>
								<div class="wrapper">
									<div class="block one">
										<div class="block__item">
											<div class="block__title">Launch website</div>
											<div class="block__text">
												Ans Wizard is a fantasy-based ecosystem that is solely made to revolutionize
												the P2E and NFTs use case on the blockchain. Wizard gives unique NFT based solutions
												.
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Coinmarketcap & Coingecko listing</div>
											<div class="block__text">
												Holding WIZARD comes with the following benefits:

											</div>
										</div>
										<div class="block__item">
											<div class="block__title">CEX listings</div>
											<div class="block__text">
												And IWO stands for Initial Wizard Offering is a launchpad by wizard financial.
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Game Launch</div>
											<div class="block__text">
												Ans A fierce and brave warrior a protector of human realm more details will be revealed shortly
											</div>
										</div>
										<div class="block__item">
											<div class="block__title">NFT Marketplace launch</div>
											<div class="block__text">
												Ans WIZARD NFT marketplace is made to trade all sorts of erc721 whether it a game weapon,
												other projects NFT.


											</div>
										</div>
										<div class="block__item">
											<div class="block__title">Coinmarketcap & Coingecko listing</div>
											<div class="block__text">
												Ans A fierce and brave warrior a protector of human realm more details will be revealed shortly
											</div>
										</div>


									</div>
								</div>
							</div>
						</div>
						<div className="faq-whitepaper">
							<a href="/marlinlightpapaer.pdf" target="_blank">WHITEPAPER</a>
						</div>
					</div>
					</div>
				</section>


				<section id="marketplace-sec-home">
					<div className="main-container">
					<div className="container-fluid">
						<div className="marketplacenfthome">
							<div className="marketplace-child1">
								<h3>nft marketplace</h3>
							</div>
							<div className="marketplacechild2">
								<a href="#">CREATE NFT</a>
							</div>
						</div>
						<div className="marketpace-p">
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero <br></br>
									qeos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus estemated. </p>
						</div>
						<div className="scrollable mb-3">
							<ExploreNew />
						</div>
					</div>
					</div>
				</section>
				
				{
					CHAIN_ID == 56 &&
					<>
						
						<div className="scrollable">
							<Stake className="p-0" />
							
						</div>
					</>
				}
				
				



				
			</div >

		);
	}

}
export default Home;