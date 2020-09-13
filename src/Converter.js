import React, { Component } from "react";

class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR", "INR"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: "01/01/1970"
  };

  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      this.calculate
    );
    console.log(this.state.convertTo);
  };
  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value
      },
      this.calculate
    );
    console.log(this.state.amount);
  };
  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then((res) => res.json())
        .then((data) => {
          const date = data.date;
          console.log(data);
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date
          });
        });
    }
  };

  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    console.log(`DATE IS ${date}`);
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} is equivalent to
              </h5>
              <h2>
                {result} {convertTo}
              </h2>
              <p>As of {new Date(date).toString("dddd, MMMM ,yyyy")}</p>
              <div className="row">
                <div className="col-lg-10 col-md-8 col-sm-2">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
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
                    <input
                      value={result}
                      disabled={true}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
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
