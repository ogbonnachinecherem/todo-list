import React, { useState } from "react";
import { Card, Col, Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";
import { DeleteForm } from "../actions/TodoActions";
import { connect} from "react-redux";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../firebase/Config";
import {editIcon, deleteIcon} from "../icons/Icon";

function Form (props) {
    const [checked, setChecked] = useState(false);
    const handleChange = () => { 
        setChecked(!checked); 
      console.log(checked);   
    }; 
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const hadleDelete = async(e) => {
		e.preventDefault();

try {
	await deleteDoc(doc(db, "todo", props.formBio.id));
} catch (e) {
	console.log(e);
}
	};
	return (
		<>
        
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>EDIT MY TODO LIST</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<EditForm editForm={props.EditForm} formBio={props.formBio} handleClose={handleClose} />
				</Modal.Body>
			</Modal>
			<Col md={6} style={{  marginBottom: "10px" }}>
				<Card>
					<Card.Body>
						<Card.Title>{props.formBio.title}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{props.formBio.activity}
						</Card.Subtitle>
						<Button href="#" size="sm" variant="success" style={{marginLeft: "1rem"}} onClick={handleShow}>
							{editIcon}
						</Button>
						<Button href="#" size="sm" variant="danger" style={{marginLeft: "1rem"}} onClick={hadleDelete}>
							{deleteIcon}
						</Button>
						<input style={{marginLeft: "1rem"}}type="checkbox" onChange={handleChange}/>
                        <p>{checked ? 'Done' : 'Not done'}</p>
						
						
					
					</Card.Body>
				</Card>
			</Col>
		</>
	);
}
const mapDispatchToProps = {
	DeleteForm: DeleteForm,
};

export default connect(null, mapDispatchToProps)(Form);