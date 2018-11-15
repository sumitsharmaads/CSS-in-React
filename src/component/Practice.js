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
			<div> 
			<p className="Box">This is a border box</p>
			</div>
			<div className="Outline_offset">
			<p className="Outline">This is Outline with offset propety</p>
			</div>
			<div className="justify">
				In my younger and more vulnerable years my father gave me some advice
				that I've been turning over in my mind ever since. 'Whenever you 
				feel like criticizing anyone,' he told me, 'just remember that 
				all the people in this world haven't had the advantages that you've 
				had.
			</div>
			<div className="Shadow">
				<h3>This is text part</h3>
				<p>
					I joined ADS in Aug 2018, Everyone have all expectation in mind. But 
					sometimes i think it's good to be silent observe that you see but be 
					a person speak where you have to say to speak upto that time be silent
					because our pious book Gita as well give such a beautiful lesson if Yudhistir
					will not went on the Cards play game without invitation and be silent there, noone
					asked him his advice, but he spoke there and lost his kingdom and lots of things.
				</p> 
			</div>
			<div>
				<h1 className="Times_new">This is times new roman</h1>
				<h1 className="San">This is San serif</h1>
			</div>
		</div>
	);
}

export default Practice;