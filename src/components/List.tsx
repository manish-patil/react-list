import * as React from "react";
import * as randomHexColor from "random-hex-color";
import * as ntc from "ntc";
import * as colorPairsPicker from "color-pairs-picker";

import ListItem from "./ListItem";

export default class List extends React.Component<any, any>{
    private colors: Color[] = [];
    private timer = null;

    constructor(props: any) {
        super(props);

        this.state = {
            colors: []
        };

        console.log("START - Creating data.", new Date());
        for (var i = 0; i < 5000; i++) {
            this.colors.push(this.getNewColor());
        }
        console.log("END - Creating data.", new Date());

        this.toogleDataPooling = this.toogleDataPooling.bind(this);
    }

    getNewColor(): Color {
        var newColor = randomHexColor();
        
        return {
            backGroundHex: newColor,
            backGroundName: ntc.name(newColor)[1],
            foreColor: colorPairsPicker(newColor).fg
        }
    }

    componentDidMount() {
        console.log("START - Setting State.", new Date());
        this.setState({ colors: this.colors });
        console.log("START - Setting State.", new Date());
    }

    toogleDataPooling(e) {
        if (e.target.innerText === "Start") {
            this.timer = setInterval(() => {
                this.setState({
                    colors: this.state.colors.concat(this.getNewColor())
                });
            }, 1000);

            e.target.innerText = "Stop";
        } else {
            clearInterval(this.timer);
            e.target.innerText = "Start";
        }

    }

    render() {
        console.log("List render executed.", new Date());

        return (
            <div>
                <select size={25} style={{ width: "100%" }}>
                    {this.state.colors.map((color, idx) => {
                        return <ListItem key={color.backGroundName + `_${idx}`} value={color.backGroundName}
                            text={`${idx + 1} - ` + color.backGroundName} backgroundColor={color.backGroundHex} foreColor={color.foreColor}>
                        </ListItem>
                    })}
                </select>
                <div>
                    <button onClick={this.toogleDataPooling}>Start</button>
                </div>
            </div>
        );
    }
}

interface Color {
    backGroundHex: string,
    backGroundName: string,
    foreColor: string
}