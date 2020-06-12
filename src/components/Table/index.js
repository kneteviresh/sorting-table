import React from 'react';
import './table.css';

function Table({ data = [] }) {
	const rows = data.map((row, index) => {
		const keys = Object.keys(row).map(cell => {
			return <td key={cell.toString()}>{row[cell]}</td>;
		});
		return <tr key={index}>{keys}</tr>;
	});
	return (
		<div className="table">
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Employee Id</th>
						<th>Designation</th>
						<th>City</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default Table;
