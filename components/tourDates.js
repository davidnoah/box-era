import React from 'react';
import * as firebase from 'firebase';
import _ from 'lodash';

const sampleTourDates = {
  1: {
    venue: 'Wherever',
    location: 'San Francisco, CA',
    date: 'February 2, 2017',
    otherBands: 'other band 1, other band 2',
  },
  2: {
    venue: 'Some dudes basement',
    location: 'Oakland, CA',
    date: 'February 3, 2017',
  },
  3: {
    venue: 'Somewhere Else',
    location: 'Los Angeles, CA',
    date: 'February 4, 2017',
    otherBands: 'other band 1, other band 2',
  },
  4: {
    venue: 'Another place',
    location: 'San Diego, CA',
    date: 'February 8, 2017',
  },
};

const TourDate = ({ venue, location, data, otherBands }) => {
  return (
    <div className="tour-date-wrapper">
      {'tour date'}
      {venue}
      {location}
    </div>
  );
};


export default class TourDates extends React.Component {
  constructor () {
    super();

    this.state = {
      tourDates: [],
    };
  }

  componentDidMount() {
    // get tour dates from firebase
    const tourDatesArr = [];

    _.forOwn(sampleTourDates, (key, value) => {
      tourDatesArr.push(value);
    });

    console.log('>>> tourDates', tourDatesArr);

    this.setState({ tourDates: tourDatesArr });
  }

  render () {
    const { tourDates } = this.state;

    return (
      <div className="tour-dates-wrapper">
        <h2>{'Tour Dates'}</h2>
        {tourDates.map((tourObj, index) => {
          const { venue, location, date, otherBands } = tourObj;
          return (
            <TourDate
              key={index}
              venue={venue}
              location={location}
              date={date}
              otherBands={otherBands}
            />
          )
        })}
      </div>
    );
  }
}
