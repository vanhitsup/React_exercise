import React, { Component } from 'react'
import "./FlipCoin.css"
export default class FlipCoin extends Component {
    constructor(){
        super();
        this.state={
            inVisible:true,
            img:"",
            value:0,
            head:0,
            tail:0,
        }
    }
    handleClick=()=>{
        if(this.state.value===10){
            this.state({
                inVisible:true,
                img:"",
                value:0,
                head:0,
                tail:0,
            });
        }
        else if(this.state.value!==10 && this.state.value %2===0){
            this.setState({
                inVisible:false,
                img:"https://www.pcgs.com/UserImages/1990%20five%20dollar%20gold%20eagle%20obv.JPG",
                value:this.state.value +1,
                head:this.state.head +1,
            });
        }
        else if(this.state.value!==10 && this.state.value %2!==0){
            this.setState({
                inVisible:false,
                img:"https://www.pcgs.com/UserImages/1990%20five%20dollar%20gold%20eagle%20rev.JPG",
                value:this.state.value +1,
                head:this.state.head +1,
            });
        }
    }
  render() {
    return (
      <div>
        <h1>FlipCoin</h1>
        <img src={this.state.img} alt="" />
        {/* <img src="https://www.pcgs.com/UserImages/1990%20five%20dollar%20gold%20eagle%20rev.JPG" alt="" /> */}
        <div>
            <button onClick={this.handleClick} type="button" class="btn btn-outline-primary"> FLIP Mee</button>
        </div>
        <p>Out of {this.state.value} flips, there have been {this.state.head} heads and {this.state.tail} tails</p>
      </div>
    )
  }
}
