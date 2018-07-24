import * as React from "react";
import { withStateHandlers } from "recompose";

interface IOuterProps {
  title: string;
}

interface IState {
  counter: number;
}

interface IProps extends IState, IOuterProps {
  updateState: (value: any) => void;
}

const Enhancer = withStateHandlers(
  ({ counter = 0 }: IState) => ({
    counter
  }),
  {
    updateState: (state: IState) => (value: any) => ({ ...state, ...value })
  }
);

const BaseComponent: any = (props: IProps) => (
  <div>
    <h1>{props.title}</h1>
    <p>Stateless Functional Component</p>
    <p>{props.counter}</p>
    <button
      onClick={props.updateState.bind(null, {
        counter: props.counter + 1
      })}
    >
      Add
    </button>
  </div>
);

export const RecomposeComponent: React.SFC<IOuterProps> = Enhancer(
  BaseComponent
) as any;
