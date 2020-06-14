import React from 'react';
import './table.css';

function Table({ data = [] }) {
	const keys = Object.keys(data[0]);
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
						{keys.map(key => (
							<td style={{ fontWeight: 'bold' }}>{key.toUpperCase()}</td>
						))}
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		</div>
	);
}

export default Table;
