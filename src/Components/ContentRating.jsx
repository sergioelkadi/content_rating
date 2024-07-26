
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0
    }
  }
  render() {
    return (
     <>
     <div className='content-rating'>
        <p>Do you like Genesis?</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
