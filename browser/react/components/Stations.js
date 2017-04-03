import React from 'react';
import {Link} from 'react-router';

export default function Stations(props){
  return(
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(props.stations).map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={`/stations/${station.toLowerCase()}`}>{station}</Link>
            </div>

          );
        })
      }
      {
        props.children && React.cloneElement(props.children, Object.assign({}, props))
      }

      </div>
    </div>)
}
