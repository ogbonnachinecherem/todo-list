import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Row, Col, Container } from "react-bootstrap";
import All from "./components/All";
import { AddForms } from "./actions/TodoActions";
import { useDispatch } from "react-redux";
import {db} from "../src/firebase/Config";
import {collection, orderBy, query, onSnapshot } from "firebase/firestore";
import Router from "../src/Router";

function App() {
	const  dispatch = useDispatch();
 	useEffect (() => {
		try {
			const readData = async () => {
				const q = query(collection(db, "todo") , orderBy("timestamp", "asc"));
				const unsubscribe = onSnapshot(q, (querySnapshot) => {
					const forms = [];
					querySnapshot.forEach((doc) => {
						forms.push(doc.data());
					});
					dispatch(AddForms(forms));
					console.log(forms);
				});
			};
			readData();
		} catch (e) {
			console.log(e);
		}
	}) 

	return (
		<Container style={{ marginTop: "30px" }}>
			<Row>
				<Col md={6}>
					<Router/>
				</Col>
				<Col md={6}>
					<All/> 
				</Col>
			</Row>
		</Container>
	);
}

export default App;