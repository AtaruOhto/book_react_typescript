import * as React from "react";

interface IProps {
  title: string;
}

export const StatelessFunctionalComponent: React.SFC<IProps> = (
  props: IProps
) => (
  <div>
    <h1>{props.title}</h1>
    <p>Stateless Functional Component</p>
  </div>
);
