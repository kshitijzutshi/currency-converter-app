import React, { Component } from "react";

class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR", "INR"],
    base: "USD",
    amount: "",
    convertTo: "",
    result: "",
    date: ""
  };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} is equivalanet to
              </h5>
              <h2>
                {result} {convertTo}
              </h2>
              <p>As of {date}</p>
              <div className="row">
                <div className="col-lg-10 col-md-8 col-sm-2">
                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select
                      name="base"
                      value={base}
                      className="form-control form-control-lg"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input className="form-control form-control-lg mx-3" />
                    <select
                      name="convertTo"
                      value={convertTo}
                      className="form-control form-control-lg"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 align-self-center">
                  <h1 className="swap">&#8595;&#8593;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
