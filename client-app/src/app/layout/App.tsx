import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
	const [activities, setActivities] = useState<Activity[]>([]);

	const fetchData = async () => {
		const response = await axios.get<Activity[]>(
			'http://localhost:5000/api/activities',
		);
		setActivities(response.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<NavBar />
			<Container style={{ marginTop: '7em' }}>
				<ActivityDashboard activities={activities} />
			</Container>
		</>
	);
}

export default App;
