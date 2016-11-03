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
    this.state = {coupons: [], amount: 5};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  makeid() {
  var text = "";
   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for( var i=0; i < 15; i++ )
       text += possible.charAt(Math.floor(Math.random() * possible.length));

   return text;
  }

  handleChange(e) {
    this.setState({amount: e.target.value});
  }

  handleSubmit(e) {

    console.log(this.state.amount);
    e.preventDefault();
    console.log("handle submit called");
    let all_coupons = [];
    for (let i=0; i < this.state.amount; i++) {
      var hash = CryptoJS.MD5(this.makeid());
      var string_hash = hash.toString(CryptoJS.enc.Base64);
      var couponCode = {
        id: string_hash,
        code: string_hash
      }

      all_coupons.push(couponCode);
    }
     console.log("ALL COUPONGs", all_coupons);

    this.setState(
      {coupons: all_coupons}
    )
  }

  render() {
    return (

      <div>
        <Header />
        <h2>Coupon Code Generator Based On React.js</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <input className="u-full-width" type="text" onChange={this.handleChange} value={this.state.amount}/>
            <button className="button button-primary">Create Coupon Codes</button>
          </div>
        </form>
        <CouponList coupons={this.state.coupons} />
        <Footer />
      </div>

    )
  }

}
