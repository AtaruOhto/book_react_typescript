import * as React from "react";

interface IProps {
  title: string;
}

interface IState {
  counter: number;
}

export class ClassComponent extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  public render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.addCounter}>Add</button>
        <button onClick={this.resetCounter}>Reset</button>
      </div>
    );
  }

  private addCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  private resetCounter = () => {
    this.setState({
      counter: 0
    });
  };
}
