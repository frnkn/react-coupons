import React from 'react';
import $ from 'jquery';
import CouponList from 'components/couponList';
import Footer from 'components/footer';



export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {coupons: [], amount: 0};
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
    e.preventDefault();
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

    this.setState(
      {coupons: all_coupons}
    );

    $('html, body').animate({
      scrollTop: $('.coupon-list').offset().top
    }, 1200);
  }

  render() {
    return (
      <div>
        <div className="section hero">
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <h1 className="hero-heading">Create Unique Coupon Codes With React JS</h1>
                <p>Hi there!</p>
                <p>This is a simple coupon generator for e-commerce websites or blogs. You can create up to 10.000 unique coupon codes. Just enter the amount of required coupon codes, click the button - you will than get the list of coupons.</p>
                <div className="row">
                  <div className="six columns">
                    <form onSubmit={this.handleSubmit}>
                      <div className="row">
                        <label htmlFor="amount_field">Enter amount of coupons:</label>
                        <input id="amount_field" className="u-full-width" type="number" min="1" max="10000" onChange={this.handleChange} value={this.state.amount}/>
                        <button className="button button-primary">Create Coupon Codes</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="one-half column">
                <img className="u-max-full-width" src="https://placekitten.com/g/500/300" />
              </div>
              <div className="row">
                <div className="twelve columns coupon-list">
                  <h2>{this.state.coupons.length} Coupons generated</h2>
                  <CouponList coupons={this.state.coupons} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-cf"></div>
        <Footer />
      </div>
    );
  }
}
