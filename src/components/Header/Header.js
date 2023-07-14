import './Header.css';
import {  Link } from "react-router-dom";

export default function Heading() {
	return (
		<Link to="/">
			<h3 className="header">
			P<i></i>kédex 
			</h3>
		</Link>
	);
}