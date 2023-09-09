import * as React from 'react';

export default function CardCSSFlexOverlap() {
  return (
<div className="flex-container">
  <div className="left">
  Teach <span style={{ color: '#8b05fa' }}>how to</span> CSSFlex <br /> React
    <div className="item overlap">
      <img src={process.env.PUBLIC_URL + 'assets/images/1.jpg'} alt={'Photo 1'} />
    </div>
    <div className="item overlap shifted">
      <img src={process.env.PUBLIC_URL + 'assets/images/2.jpg'} alt={'Photo 2'} />
  </div>
  </div>
  <div className="middle">
    <img src={process.env.PUBLIC_URL + 'assets/images/7.jpg'} alt={'Photo 7'} />
  </div>
  <div className="right">
    <div className="item overlap">
      <img src={process.env.PUBLIC_URL + 'assets/images/3.jpg'} alt={'Photo 3'} />
    </div>
    <div className="item overlap shifted">
      <img src={process.env.PUBLIC_URL + 'assets/images/4.jpg'} alt={'Photo 4'} />
    </div>
  </div>
</div>
  )
}