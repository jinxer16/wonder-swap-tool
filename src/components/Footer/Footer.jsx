import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiFillMediumSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
	return (
		
			<footer class="footer_section">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-3">
							<div class="footer_col1">
								<Link to="/">
									<img src="logo.png" alt="" />
								</Link>
								<p>Our community is building a comprehensive decentralized trading platform for the future of finance. Join us!</p>
								<ul className='socialIcons justify-content-center'>
									<li><a href="#"><BsTwitter></BsTwitter></a></li>
									<li><a href="#"><AiOutlineInstagram></AiOutlineInstagram></a></li>
									<li><a href="#"><BsDiscord></BsDiscord></a></li>
									<li><a href="#"><AiFillMediumSquare></AiFillMediumSquare></a></li>
								</ul>
							</div>
						</div>
						<div class="col-md-8 mt-5">
							<div class="row">
								<div class="col-md-3 col-6  mt-2">
									<div class="footer_col2">
										<h2>Useful Link</h2>
										<ul>
											<li><a href="#">About Us</a></li>
											<li><a href="#">NFT</a></li>
											<li><a href="#">Buy Coin</a></li>
											{/* <li><a href="#">Tool</a></li>  */}
										</ul>
									</div>
								</div>
								<div class="col-md-3 col-6 mt-2">
									<div class="footer_col2">
										<h2>Useful Link</h2>
										<ul>
											<li><a href="#">NFT Open Market</a></li>
											<li><a href="#">L.P Farming</a></li>
										</ul>
									</div>
								</div>
								<div class="col-md-3 col-6 mt-2">
									<div class="footer_col2">
										<h2>Swap</h2>
										<ul>
											<li><a href="#">Swap Exchange</a></li>
											<li><a href="#">Wonder Land</a></li>
										</ul>
									</div>
								</div>
								<div class="col-md-3 col-6 mt-2">
									<div class="footer_col2">
										<h2>Help</h2>
										<ul>
											<li><a href="#">Terms & Conditions</a></li>
											<li><a href="#">Privacy Policy</a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
	)
}

export default Footer
