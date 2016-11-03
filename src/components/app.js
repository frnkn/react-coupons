import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import CouponList from 'components/couponList';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("Hello World. I'm the app.");
    var hash = CryptoJS.MD5("Messages");

    console.log("HASH", hash.toString(CryptoJS.enc.Base64));
    this.state = {coupons: []};
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  createCoupons(amount) {
    let i = amount;


    return "123312321";
  }

  makeid() {
  var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for( var i=0; i < 15; i++ )
       text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit called");
    let all_coupons = [];
    for (let i=0; i < 100; i++) {
      var hash = CryptoJS.MD5(this.makeid());
      var string_hash = hash.toString(CryptoJS.enc.Base64);
      console.log("StringHAsh", string_hash);
      var couponCode = {
        id: string_hash,
        code: string_hash
      }
      all_coupons.push(couponCode);
    }
     console.log("ALL COUPONGs", all_coupons);

    var hash = CryptoJS.MD5(this.makeid());
    var string_hash = hash.toString(CryptoJS.enc.Base64);
    console.log("StringHAsh", string_hash);
    var couponCode = {
      id: Date.now(),
      code: string_hash
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
