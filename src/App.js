import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(){
    super(); 
    this.state = {
      subtotal: null,
      taxAmount: null,
      gratuity: null,
      total: null,
      showBill: false
    }
  }

  subTotalHandler(e){
    this.setState({
      subtotal: +e
    })
  }

  addTax(){
    let tax = this.state.subtotal * .08
    this.setState({
      showBill: true,
      taxAmount: tax.toFixed(2)
    })
  }

  gratuityHandler(e){
    let tip = +e/100
    this.setState({
      gratuity: tip
    })
  }

  cancel(){
    this.setState({
      showBill: false,
      subtotal: null,
      taxAmount: null,
      gratuity: null,
      total: null
    })
  }

  addGratuity(){
    const { subtotal, taxAmount, gratuity } = this.state;
    let withTax = +subtotal + +taxAmount
    let totalBill = (+withTax+(+gratuity*withTax)).toFixed(2)
    this.setState({
      total: +totalBill
    })
  }

  render(){
    const {showBill, subtotal} = this.state;
    return(
      <div className="App">

        <h1>Tip Calculator</h1>

       {!showBill? <div>Enter Subtotal: <br/>
        $<input className="input" onChange={e => this.subTotalHandler(e.target.value)} min="0" step="0" type="number"/>
        <br/>
        <button onClick={() => this.addTax()}> Submit Subtotal </button>
        <br/>
        </div> : ''}

        {showBill ? <div>
          <div className="bill-info">
           <div className="bill-item"> Subtotal: ${subtotal} </div>
            <br/>
           <div className="bill-item"> Tax: ${this.state.taxAmount} </div>
            <br/>
           <div className="bill-item"> Total before tip: ${+this.state.taxAmount + +subtotal} </div>
          </div>
          <br/>
          <div className="tip"> What percentage would you like to tip?</div>
        
          <input className="input" onChange={(e) => this.gratuityHandler(e.target.value)} min="0" step="0" type="number"/>%
          <br/>
          <button onClick={() => this.addGratuity()}>Enter Tip</button>
           <button onClick={() => this.cancel()}>Cancel</button>
          <br/>

          {this.state.total? <div className="total"> Total: ${this.state.total} </div> : ''}

          </div>
           : ''}
      </div>
    )
  }
}

export default App;
