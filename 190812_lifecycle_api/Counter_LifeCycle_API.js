import React, { Component } from "react";

class Counter extends Component {
  state = {
    num: 0
  };

  // component가 새로 생성될 때
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // render가 끝난 후 호출. 외부 라이브러리 연동이나 AJAX요청, DOM의 속성을 읽거나 직접 변경
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 기본적으로 true를 return. 따로 조건을 작성하여 false를 return 하게 할 수 있다.
  // false를 return 할 경우 업데이트가 되지 않지만 내부적으로 값은 변한다.
  // 하단코드의 경우 num이 5의 배수이면 view가 업데이트 되지는 않지만 num값은 5로 바뀌어있다.
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // num이 5의 배수이면 업데이트 안함
    if (nextState.num % 5 === 0) return false;
    return true;
  }

  // souldComponentUpdate에서 true를 return해야 실행.
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillMount");
  }

  // 여기에선 this.props과 this.state가 바뀌어 있다.
  // parameter로 전달되는 prevProps, prevState로 확인은 가능.
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

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

  render() {
    console.log("render");
    return (
      <div>
        <h1>Counter</h1>
        <div>Number: {this.state.num}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
