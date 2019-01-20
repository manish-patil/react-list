import * as React from "react";

export default class ListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        console.log("ListItem Constructor executed.", this.props.text, new Date());
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log("ListItem shouldComponentUpdate executed.", nextProps.text, new Date());

        if (this.props.backgroundColor === nextProps.backgroundColor) {
            return false;
        }
    }

    render() {
        console.log("ListItem render executed.", this.props.text, new Date());

        return (
            <option value={this.props.value} style={{ backgroundColor: this.props.backgroundColor, color: this.props.foreColor }}>{this.props.text}</ option>
        )
    }
}