import React from 'react';

export default class TourDates extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
    <div className="tour-dates-wrapper">
      {'Tour Dates'}
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
