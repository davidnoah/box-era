import React from 'react';

export default class TourDates extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
    <div className="tour-dates-wrapper">
      <h2>{'Tour Dates'}</h2>
      <ul>
        <li>{'Sample date '}</li>
        <li>{'Sample date'}</li>
        <li>{'Sample date'}</li>
        <li>{'Sample date'}</li>
        <li>{'Sample date'}</li>
      </ul>
    </div>
    );
  }
}
