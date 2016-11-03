import React from 'react';

export default class Couponlist extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="twelve columns">
          <h2>Your Coupons</h2>
          <table className='u-full-width'>
            <tbody>
                {this.props.coupons.map(coupon => (
                  <tr key={coupon.id}>
                    <td key={coupon.id}>{coupon.code}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>


    );
  }
}
