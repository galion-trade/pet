import React, {Component} from "react";
import PetsService from "../services/PetsService";


export default class PetDetails extends Component {

    petsService = new PetsService();

state = {
    pet: null
}
    componentDidMount() {
        this.petSelected();
    }

    petSelected(){
    const {petId} = this.props;
    this.petsService.getAllPets()
        .then((res)=>{
                res.forEach(item=>{
                    if(item.id === petId){
                        return this.setState({
                            pet:item
                        })
                    }

                })
            }
        );
}

    render() {

        console.log(this.state);
    console.log(this.props.petId)
        return(
            <div>
                {this.props.petId}

            </div>
        )
    }


}
