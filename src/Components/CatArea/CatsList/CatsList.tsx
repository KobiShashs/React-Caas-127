import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import notify, { SccMsg } from "../../../Service/Notification";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import "./CatsList.css";

interface CatsListState {
  cats: CatModel[];
}

class CatsList extends Component<{}, CatsListState> {
  private end_point = "http://localhost:8080/api/cats/";
  public constructor(props: {}) {
    super(props);
    this.state = {
      cats: [],
    };
  }

  public async componentDidMount() {
    try {
      const response = await axios.get<CatModel[]>(this.end_point);
      this.setState({ cats: response.data });
      notify.success(SccMsg.DOWNLOADED_CATS)
    } catch (err) {
      notify.error(err);
    }
  }

  public async deleteCat(id: any) {
    const res = window.confirm(
      "Are you sure you want to delete this cat : " + id + "?"
    );
    if (res) {
      id = +id;
      try {
        const response = await axios.delete<any>(this.end_point + id);
        this.setState({ cats: this.state.cats.filter((c) => c.id !== id) });
      } catch (err) {
        alert(err.message);
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CatsList">

        {!this.state.cats.length && <EmptyView msg="No Cats for you"/>}
        {this.state.cats.length &&  <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Weight</th>
              <th>Color</th>
              <th>Image</th>
              <th>
                Actions <NavLink to="/cats/add"><button>➕</button></NavLink>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.cats.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.name}</td>
                <td>{c.weight}</td>
                <td>{c.color}</td>
                <td>
                  <img src={this.end_point + "images/" + c.image} />
                </td>
                <td>
                  <button onClick={() => this.deleteCat(c.id)}>🗑️</button>
                  <button>✏️</button>
                  <NavLink to={'cats/details/'+c.id}><button>🛈</button></NavLink> 
                </td>
              </tr>
            ))}
          </tbody>
        </table> }
      </div>
    );
  }
}

export default CatsList;
