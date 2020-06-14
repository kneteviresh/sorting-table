import React from 'react';
import Table from '../Table';
import './list.css';

var placeholder = document.createElement('li');
placeholder.className = 'placeholder';

class NameList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { ...props };
	}
	dragStart(e) {
		this.dragged = e.currentTarget;
		e.dataTransfer.effectAllowed = 'move';
		e.dataTransfer.setData('text/html', this.dragged);
	}
	dragEnd(e) {
		this.dragged.style.display = 'block';
		this.dragged.parentNode.removeChild(placeholder);

		// update state
		var data = this.state.data;
		var from = Number(this.dragged.dataset.id);
		var to = Number(this.over.dataset.id);

		const newData = data.map(item => {
			const keys = Object.keys(item);
			let fromKey = keys[from];
			let toKey = keys[to];

			keys[from] = toKey;
			keys[to] = fromKey;

			const modifiedItem = {};
			keys.forEach(key => {
				modifiedItem[key] = item[key];
			});
			return modifiedItem;
		});
		this.setState({ data: newData });
	}
	dragOver(e) {
		e.preventDefault();
		this.dragged.style.display = 'none';
		if (e.target.className === 'placeholder') return;
		this.over = e.target;
		e.target.parentNode.insertBefore(placeholder, e.target);
	}
	render() {
		const attributes = Object.keys(this.state.data[0] || {});
		var listItems = attributes.map((item, i) => {
			return (
				<li
					data-id={i}
					key={i}
					draggable="true"
					onDragEnd={this.dragEnd.bind(this)}
					onDragStart={this.dragStart.bind(this)}
					style={{ fontWeight: 'bold' }}
				>
					{item.toUpperCase()}
				</li>
			);
		});
		return (
			<div className="content">
				<ul onDragOver={this.dragOver.bind(this)}>{listItems}</ul>

				<Table data={this.state.data} />
			</div>
		);
	}
}

export default NameList;
