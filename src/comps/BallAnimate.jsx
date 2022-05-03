import React, { Component } from 'react'

import TagsCanvas from 'react-tags-canvas'

const BallAnimate = () => {
 
  return (
    <div className="container ">
      <div className="row">
 
        <div className="col-12 canvasa">
        <TagsCanvas
        textColour='#149ddd'
        maxSpeed={0.06}
        freezeActive
        shuffleTags
        shape='sphere'
        zoom={0.7}
        noSelect
        pinchZoom
        tags={[
          { value: 'Javascript', weight: 10 },
          { value: 'Javascript', weight: 10 },
          { value: 'Javascript', weight: 10 },
          { value: 'Javascript', weight: 10 },
          { value: 'React', weight: 8 },
          { value: 'HTML5', weight: 12 },
          { value: 'CSS3', weight: 15 },
          { value: 'PHP', weight: 7 },
          { value: 'Git', weight: 11 },
          { value: 'Redux', weight: 11 },
          { value: 'NodeJS', weight: 11 }
        ]}
      />
        </div>
      </div>

    </div>
  );
};

export default BallAnimate;
