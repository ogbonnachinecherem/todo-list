import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddForms } from "../actions/TodoActions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import {db} from "../firebase/Config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import AddForm from "./AddForm"; 
import { editIcon } from "../icons/Icon";


function Display(props) {
	
	return (
		<div>
			
            <a href="/addform">{editIcon}</a>
		</div>
	);
}
 const mapDispatchToProps = {
 	AddForms: AddForms,
 };
export default connect(null, mapDispatchToProps)(Display);
