import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {EditF} from "../actions/TodoActions";
import { useDispatch } from "react-redux";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase/Config";

function EditForm(props) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(props.formBio.title);
	const [activity, setActivity] = useState(props.formBio.activity);
	const [id, setId] = useState(props.formBio.id);

	const handleSubmit = async(e) => {
		e.preventDefault();
		const newForm = {
			title,activity,id
		}
	
		const formRef = doc(db, "todo",newForm.id);


		// Set the "capital" field of the city 'DC'
		await updateDoc(formRef,newForm );
		dispatch(EditF({title,activity,id}))
		setTitle("");
		setActivity("");
		props.handleClose();

	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicTitle">
					<Form.Label>Title:</Form.Label>
					<Form.Control
						type="text"
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
						name="textarea" rows="5" cols="50"
						placeholder="Enter Your activity"
						value={activity}
						onChange={(e) => {
							setActivity(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} variant="primary" type="submit">
					Update
				</Button>
			</Form>
		</div>
	);
}
export default EditForm;