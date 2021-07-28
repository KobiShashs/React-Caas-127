import { Component } from "react";
import { Unsubscribe } from "redux";
import store from "../../../Redux/Store";
import "./TotalCats.css";

interface TotalCatsState {
	count: number
}

class TotalCats extends Component<{}, TotalCatsState> {

    private unsbscribe: Unsubscribe 
    public constructor(props: {}) {
        super(props);
        this.state = {
			count:store.getState().catState.cats.length 
        };
    }

    public componentDidMount() {
        store.subscribe(()=>{
            this.setState({count:store.getState().catState.cats.length});
        });
    }

    public componentWillUnmount() {
        this.unsbscribe();
    }

    public render(): JSX.Element {
        return (
            <div className="TotalCats">
				<p>Total : {this.state.count}</p>
            </div>
        );
    }
}

export default TotalCats;
