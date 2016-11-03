import React from 'react';

export default class Couponlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.coupons.map(coupon => (
          <li key={coupon.id}>{coupon.code}</li>
        ))}
      </ul>
    );
  }
}
