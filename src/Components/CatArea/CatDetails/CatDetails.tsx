import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import "./CatDetails.css";

interface RouteParam{
    id: string;
}

interface CatDetailsProps extends RouteComponentProps<RouteParam> {
	
}

interface CatDetailsState {
	cat: CatModel;
}

class CatDetails extends Component<CatDetailsProps, CatDetailsState> {

    public constructor(props: CatDetailsProps) {
        super(props);
        this.state = {
			cat: null
        };
    }


    public async componentDidMount() {
        try{
            const id = +this.props.match.params.id;
            const response = await axios.get<CatModel>('http://localhost:8080/api/cats/' + id)
            this.setState({cat:response.data});
        } 
        catch(err){
            alert(err.message);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="CatDetails">
                <div>
                    {this.state.cat?.name} <br/>
                    Weight: {this.state.cat?.weight} <br/>
                    Color: {this.state.cat?.color} <br/>
                </div>
				<div>
                    <img src={'http://localhost:8080/api/cats/images/'+this.state.cat?.image} alt={this.state.cat?.name}/>
                </div>
            </div>
        );
    }
}

export default CatDetails;
