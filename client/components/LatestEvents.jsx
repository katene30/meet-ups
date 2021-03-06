import React, { Component } from "react";
import { connect } from "react-redux";

import { getEvent } from "../actions/events";

class LatestEvents extends Component {
  constructor(props) {
    super(props);
  }

  handleDate = date => {
    return new Date(date).toString();
  };

  handleClick = id => {
    this.props.getEvent(id);
  };

  render() {
    return (
      <div className="columns events-column">
        {this.props.events.slice(0, 3).map((event, i) => {
          return (
            <div key={i} className="column">
              <article className="message is-dark">
                <div className="message-header">
                  <p>{event.name}</p>
                </div>
                <div className="message-body">
                  <p>
                    <strong>Where: </strong>
                    {event.location}
                  </p>
                  <br />
                  <p>
                    <strong>When: </strong>
                    {this.handleDate(event.date)}
                  </p>
                  <br />
                  <p>
                    <strong>What: </strong>
                    {event.description}
                  </p>
                </div>
                <a
                  className="button is-rounded is-warning is-outlined event-icon"
                  value={event.id}
                  onClick={() => {
                    this.handleClick(event.id);
                    window.location.hash = `#/eventinfo/${event.id}`;
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-info" />
                  </span>
                </a>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.home.events
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getEvent: id => {
      dispatch(getEvent(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LatestEvents);
