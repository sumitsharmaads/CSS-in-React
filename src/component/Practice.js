import React, {Component} from 'react';
import './test.css'

const Practice = () => {
	return(
		<div className = "Practice">
			<h1> Welcome to practice </h1>
			<div className="Navigation">
				<ul>
					<li><a href="#">My Account</a></li>
					<li><a href="#">More Infos</a></li>
				</ul>
			</div>
			<div className = "Change">
				<h2 className ="Head_shift">My first heading</h2>
				<p>This is a paragraph, Above is navigation part. Down part is for border
				 div. Here i used an image as  background. </p>
			</div>
			<div className="Border">
				<h2 className="Border_tag">This is Border tag</h2>
				<p className="Border_Par"> This is shifting in border</p>
			</div>
		</div>
	);
}

export default Practice;