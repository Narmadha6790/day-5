import React from 'react';
import {Pie} from '../../../src/index.js';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default React.createClass({
  displayName: 'PieExample',

  render() {
    return (
      <div>
        <h2>Pie Example</h2>
        <Pie data={data} />
      </div>
    );
  }
});
