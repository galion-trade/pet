import React, {Component} from "react";
import "../App.css"
import PetsService from "../services/PetsService";

export default class Items extends Component{

    petsService = new PetsService();

    state = {
        petsList:[]
    }

    componentDidMount() {
        this.petsService.getAllPets()
            .then((res)=>{
                    this.setState({
                        petsList:res
                    })
                }
            );
    }


    renderItems(arr) {
        return arr.map((item) => {
            const {id,images,name} = item;
            return (
                <li
                    key={id}
                    className="catalog-list__item"
                >
                    <div className="catalog-list__inner-block">
                        <img src={`/img/animals/${images}`} alt="" className="catalog-list__img"/>
                            <div className="catalog-list__title">{name}</div>
                            <button className="btn" onClick={()=>this.props.onPetSelected(id)}>Смотреть</button>
                    </div>
                </li>

            )
        })
    }



    render() {
        const {petsList} = this.state

        let items = this.renderItems(petsList);
        return(
            <ul className="catalog-list flex-wrap">
                {items}
            </ul>
        )
    }
}















