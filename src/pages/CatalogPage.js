import React, {Component} from "react";
import "../App.css"
import Header from "../components/Header";
import Items from "../components/Items";
import PetDetails from "../components/PetDetails";

export default class CatalogPage extends Component{

    state = {
        petSelected:null
    }

    onPetSelected = (id)=>{
       this.setState({
           petId:id
       })
}

    render() {


        return(
            <>
                <Header/>
                <div className="catalog">
                    <div className="container">
                        <div className="catalog__body">
                            <h2 className="title">Our friends who<br/>
                                are looking for a house</h2>

                            <div className="catalog__inner">

                    <Items onPetSelected={this.onPetSelected}/>

                    <PetDetails petId = {this.state.petId}/>

                            </div>
                        </div>


                    </div>

                </div>

            </>
        )
    }
}