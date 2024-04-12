import { Component } from "react";

// Functional component
const HelloWorld = () => {
  return <div>Hello World!</div>;
};

export default HelloWorld;

//Class component
class HelloWorldComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { string: "Hello Julia!" };
  }
  render() {
    return (
      <div>
        <h4>{this.state.string}</h4>
      </div>
    );
  }
}
export { HelloWorldComponent };
