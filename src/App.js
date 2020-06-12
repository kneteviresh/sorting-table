import React from 'react';
import NameList from './components/NamesList';
import './App.css';

const data = [
	{
		name: 'Mahesh',
		EmployeeId: 111111,
		Designation: 'Engineer',
		city: 'Belgaum',
	},
	{
		name: 'Veeresh',
		EmployeeId: 222222,
		Designation: 'Doctor',
		city: 'Basavakalyan',
	},
	{
		name: 'Vikas',
		EmployeeId: 333333,
		Designation: 'Army',
		city: 'Bagalkot',
	},
	{
		name: 'Akshata',
		EmployeeId: 44444,
		Designation: 'Dancer',
		city: 'Bangalore',
	},
];

function App() {
	return (
		<div className="App">
			<NameList data={data} />
		</div>
	);
}

export default App;
