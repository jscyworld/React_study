import React, { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };
  /*
    기존에는
    constructor(props) {
      super(props);
      this.state = {
        num: 0
      }
    }
    이렇게 state를 설정했지만 편의를 위해 class field를 사용. 
    그리고 둘 다 사용할 경우 class field가 constructor보다 더 먼저 실행된다.
  */

  handleIncrease = () => {
    this.setState({
      num: this.state.num + 1
    });
  };

  handleDecrease = () => {
    this.setState({
      num: this.state.num - 1
    });
  };
  /*
    handleIncrease() {
      do something
    }
    이렇게 function을 정의하면 constructor에서 bind(this)를 설정해줘야 this가 풀리지 않는다.
    이를 막기 위해 => 를 사용해 function을 정의하면 this가 풀리지 않는다.
  */
  /*
    state 안의 값을 바꾸려면 this.setState method를 반드시 지나가야한다. setState는 주어진 값만 바꾼다.
    state = {
      num: 0,
      name: 'sirius'
    } 에서
    this.setState({ num: 100 }); 을 실행할 경우 name은 그대로 있고 num값만 변한다.
  */

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>Number: {this.state.num}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
        {/*
          1. 이벤트 이름은 camelCase로 설정 (onclick -> onClick, onmousedown -> onMouseDown ...)
          2. 이벤트에 전달해 주는 값은 함수여야 한다. {this.handleIncrease()}과 같이 method 호출하면
             호출과 렌더링이 무한반복 되니 주의.
        */}
      </div>
    );
  }
}

export default Counter;
