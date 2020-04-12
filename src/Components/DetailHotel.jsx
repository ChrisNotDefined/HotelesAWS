import React from "react";

export default class DetailHotel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hotel: ""
    }
  }
  render() {
    return (
      <div>
        <p>This is the detail of the hotel!</p>
      </div>
    );
  }
}
