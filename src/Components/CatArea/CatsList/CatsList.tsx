import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import CatModel from "../../../Models/CatModel";
import { catsDownloadedAction } from "../../../Redux/CatsState";
import store from "../../../Redux/Store";
import globals from "../../../Service/Globals";
import tokenAxios from "../../../Service/InterceptorAxios";
import notify, { SccMsg } from "../../../Service/Notification";
import EmptyView from "../../SharedArea/EmptyView/EmptyView";
import "./CatsList.css";

interface CatsListState {
  cats: CatModel[];
}

class CatsList extends Component<{}, CatsListState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      cats: store.getState().catState.cats,
    };
  }

  public async componentDidMount() {

      if(this.state.cats.length==0){
        try {


          //Sending token without interceptor
          // const headers = {"authorization": store.getState().authState.user.token};
          // const response = await axios.get<CatModel[]>(globals.urls.cats,{headers: headers});
          
          const response = await tokenAxios.get<CatModel[]>(globals.urls.cats);
    
          store.dispatch(catsDownloadedAction(response.data)) // Global State;
    
          this.setState({ cats: response.data }); //Local State
          notify.success(SccMsg.DOWNLOADED_CATS)
        } catch (err) {
          notify.error(err);
        }
      }
   
  }

  public async deleteCat(id: any) {
    const res = window.confirm(
      "Are you sure you want to delete this cat : " + id + "?"
    );
    if (res) {
      id = +id;
      try {
        const response = await axios.delete<any>(globals.urls.cats + id);
        this.setState({ cats: this.state.cats.filter((c) => c.id !== id) });
        notify.success(SccMsg.DELETED_CAT);
      } catch (err) {
        notify.error(err.message);
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CatsList">

        <h1>Cats</h1>
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
                  <img src={globals.urls.images + c.image} />
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
