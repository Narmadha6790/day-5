import React from 'react';

import PieExample from './pie';
import LineExample from './line';
import BarExample from './bar';

export default class App extends React.Component {
	render() {
		return (
			<div>
				
				<PieExample />
				<hr />
				<LineExample />
				<hr />
				<BarExample />
				<hr />
				
			</div>
		);
	}
}
