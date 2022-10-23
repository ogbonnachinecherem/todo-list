import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AddForms } from "../actions/TodoActions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import {db} from "../firebase/Config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'; 
import {closeIcon} from "../icons/Icon";



function AddForm(props) {
	const [title, setTitle] = useState("");
	const [activity, setActivity] = useState("");

	

	const handleSubmit = async(e) => {
		e.preventDefault();
		let myForm = {id:uuid(), title:title, activity:activity, timestamp: serverTimestamp()}

		try{await setDoc(doc(db, "todo", myForm.id),myForm);
		setTitle("");
		setActivity("");
		}catch(e) {console.log(e)}
		
	};
	return (
		<div>
			
			<Nav.Item>
        <Link style={{marginRight: "1rem", color: "success",textDecoration: "none"}} to="/">{closeIcon}</Link>
        </Nav.Item>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicTitle">
					<Form.Label></Form.Label>
					<Form.Control
						type="text"
            placeholder="Enter Your Title"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicActivity">
					<Form.Label></Form.Label>
					<textarea
						type="text"
                        name="textarea" rows="5" cols="70"
						placeholder=" Enter your activity"
						value={activity}
						onChange={(e) => {
							setActivity(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					SAVE
				</Button>
			</Form>
		</div>
	);
}
 const mapDispatchToProps = {
 	AddForms: AddForms,
 };
export default connect(null, mapDispatchToProps)(AddForm);
