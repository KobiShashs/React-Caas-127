import { Component } from "react";
import "./Clock.css";

interface ClockState {
	time: string;
}

class Clock extends Component<{}, ClockState> {
    private timerID = 0;
    //1
    public constructor(props: {}) {
        super(props);
        this.state = {
			time : new Date().toLocaleTimeString()
        };
    }


    //2
    public render(): JSX.Element {
        return (
            <div className="Clock">
				<p>time</p>
            </div>
        );
    }

    //3
    public componentWillMount():void{
        this.timerID = window.setInterval(() =>{
            this.setState({ time:new Date().toLocaleTimeString()})
        },1000);
    }

    //4
    public componentWillUpdate():void{
        //changes in props or state......
    }

    //5
    public componentWillUnmount():void{
        window.clearInterval(this.timerID);
    }
}

export default Clock;
