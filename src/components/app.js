import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import CouponList from 'components/couponList';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("Hello World. I'm the app.");
    //var hash = CryptoJS.MD5("Message");
    //console.log("HASH", hash);
    this.state = {coupons: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  createCoupons() {
    return "123312321";
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit called");

    var couponCode = {
      id: Date.now(),
      code: "123456"
    }

    this.setState((prevState) => ({
      coupons: prevState.coupons.concat(couponCode)
    }));
  }

  render() {
    return (

      <div>
        <Header />
        <h2>Coupon Code Generator Based On React.js</h2>
        <button onClick={this.handleSubmit} className="button button-primary">Create Coupon Codes</button>
        <CouponList coupons={this.state.coupons} />
        <Footer />
      </div>

    )
  }

}
