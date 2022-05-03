import React from 'react';
import Coverflow from 'react-coverflow';

const CoverFlow = () => {
    const fn = function () {
        /* do your action */
      }
  return (
      <div className='container-xxl'>

    <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <div
      onClick={() => fn()}
      onKeyDown={() => fn()}
      role="menuitem"
      tabIndex="0"
    >
      <img
        src='./Images/css.png'
        alt='title or description'
        style={{
          display: 'block',
          width: '100%',
        }}
      />
    </div>
    <img src='./Images/IMG_20211115_234554.jpg' alt='title or description' />
    <img src='./Images/10001.png' alt='title or description' />
  </Coverflow>
      </div>
  )
}

export default CoverFlow
