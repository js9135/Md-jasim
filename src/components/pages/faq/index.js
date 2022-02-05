import React, { Component } from 'react';
import $ from "jquery";
import q1 from '../../images/q1.png';
import q2 from '../../images/q2.png';
import q3 from '../../images/q3.png';
import q4 from '../../images/q4.png';
import q5 from '../../images/q5.png';
import p1 from '../../images/p1.png';
import p2 from '../../images/p2.png';
import p3 from '../../images/p3.png';
import p4 from '../../images/p4.png';
import p5 from '../../images/p5.png';
import p6 from '../../images/p6.png';
import p7 from '../../images/p7.png';
import p8 from '../../images/p8.png';
import p9 from '../../images/p9.png';
import p10 from '../../images/p10.png';
import p11 from '../../images/p11.png';
import p12 from '../../images/p12.png';
class faq extends Component {
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
				<section id="faq-section">
					<div className="main-container">
						<div className="container-fluid">
							<div className="head-faq">
								<h3>FAQ</h3>
							</div>
							<div className="wrp-faq">
								<div className="row">
									<div className="col-lg-12">
										<div class="wrapper">
											<div class="block one">
												<div class="block__item block__items2">
													<div class="block__title">Q: WHAT IS ARCANE?</div>
													<div class="block__text">
														
													simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
													standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
													scrambled it to make a type specimen book. It has survived not only five centuries, but also
													 the leap into electronic typesetting, remaining essentially unchanged.
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">Q: WHAT ARE THE BENEFITS OF HOLDING ARCANE?</div>
													<div class="block__text">
													simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
													standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
													scrambled it to make a type specimen book. It has survived not only five centuries, but also
													 the leap into electronic typesetting, remaining essentially unchanged.
													</div>
												</div> 
												<div class="block__item block__items2">
													<div class="block__title">Q: WHAT IS IAO?</div>
													<div class="block__text">
													simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
													standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
													scrambled it to make a type specimen book. It has survived not only five centuries, but also
													 the leap into electronic typesetting, remaining essentially unchanged.
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">Q: WHAT IS DKNIGHT AND HOW IT IS RELATED TO ARCANE?</div>
													<div class="block__text">
													simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
													standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
													scrambled it to make a type specimen book. It has survived not only five centuries, but also
													 the leap into electronic typesetting, remaining essentially unchanged.
													</div>
												</div>
												<div class="block__item block__items2">
													<div class="block__title">Q: WHAT IS SO UNIQUE ABOUT THE ARCANE NFT MARKETPLACE?</div>
													<div class="block__text">
													simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
													standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
													scrambled it to make a type specimen book. It has survived not only five centuries, but also
													 the leap into electronic typesetting, remaining essentially unchanged.


													</div>
												</div>

											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</section>

			</div>

		);
	}
}

export default faq;