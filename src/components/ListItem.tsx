import * as React from "react";

export default class ListItem extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        console.log("ListItem Constructor executed.", this.props.text, new Date());
    }

    render() {
        console.log("ListItem render executed.", this.props.text, new Date());

        return (
            <option value={this.props.value} style={{ backgroundColor: this.props.backgroundColor, color: this.props.foreColor }}>{this.props.text}</ option>
        )
    }
}