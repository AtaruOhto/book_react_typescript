import * as React from "react";

import { ClassComponent } from "./components/ClassComponent";
import { RecomposeComponent } from "./components/RecomposeComponent";
import { StatelessFunctionalComponent } from "./components/StatelessFunctionalComponent";

class App extends React.Component {
  public render() {
    return (
      <div style={{ padding: "20px" }}>
        <ClassComponent title={"Just a Simple Counter"} />
        <StatelessFunctionalComponent title={"My SFC"} />
        <RecomposeComponent title={"Recompose"} />
      </div>
    );
  }
}

export default App;
