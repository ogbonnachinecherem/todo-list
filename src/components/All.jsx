import React from "react";
import Form from "./Form";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

function All (props) {
	const {forms} = useSelector((state) => {
		return state
	})
	return (
		<Container>
			<Row>
				{forms.map((item, index) => {
					return (
						<Form
							key={index}
							formBio={item}
							delete={props.delete}
							editUser={props.editForm}
						/>
					);
				})}
			</Row>
		</Container>
	);
}

export default All;