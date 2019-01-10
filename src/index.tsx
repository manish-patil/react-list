import * as React from "react";
import * as ReactDOM from "react-dom";

import List from "./components/List";

class Main extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    };

    render() {
        return(
            <List />
        );
    };
}

ReactDOM.render(<Main/>, document.getElementById("main"));