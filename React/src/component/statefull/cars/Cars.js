import React, { Component } from 'react';
import Car from '../../stateless/Car/Car';
import Formadd from './Formadd/Formadd';
import Formtoedit from './Formadd/formtoedit/formtoedit';
import Fade from 'react-reveal/Fade'

class Cars extends Component {
    deleteCarHandler = (index) => {
        // console.log("Delete Button Clicked");

        const newcar = [...this.state.mycars];
        newcar.splice(index, 1);
        this.setState({
            mycars: newcar
        })
        localStorage.setItem("newCars", JSON.stringify(newcar))

    }
    addCarHandler = (brand, color, Prix) => {
        const newCar = {
            id: this.state.lastid + 1,


            brand: brand,
            color: color,
            price: Prix

        }
        const lastid = this.state.lastid + 1
        const newcars = [...this.state.mycars]
        newcars.push(newCar);
        this.setState((prevState) => ({
            mycars: newcars,
            lastid: prevState.lastid + 1
        }

        ))
        localStorage.setItem("newCars", JSON.stringify(newcars))
        localStorage.setItem("lastid", JSON.stringify(lastid))
        this.props.closeForm()
    }
    updateCarHandler = (id, brand, color, price) => {

        const index = this.state.mycars.findIndex(index => { return index.id === id })
        const newCar = { id, brand, color, price }
        const newCars = [...this.state.mycars]

        newCars[index] = newCar;
        this.setState({
            mycars: newCars,
            isDataEditing: 0
        })
        localStorage.setItem("newCars", JSON.stringify(newCars))
    }

    state = {
        mycars: localStorage.getItem("newCars") ? JSON.parse(localStorage.getItem("newCars")) : [],
        lastid: localStorage.getItem("lastid") ? JSON.parse(localStorage.getItem("lastid")) : 0,
        isDataEditing: 0
    }
    render() {
        return (
            <>
                <Fade>
                    <table className="table text-center">
                        <thead>
                            <tr>
                                <th>BRAND </th>
                                <th>COLOR </th>
                                <th>PRICE </th>
                                <th colSpan="2">ACTIONS </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.mycars.map((car, index) => {
                                    if (this.state.isDataEditing !== car.id) {
                                        return (
                                            <Car key={car.id} brand={car.brand} color={car.color} price={car.price} clickDel={() => this.deleteCarHandler(index)} clickEdit={() => this.setState({ isDataEditing: car.id })} />
                                        )
                                    }
                                    else {
                                        return (
                                            <Formtoedit
                                                key={car.id}
                                                id={car.id}
                                                brand={car.brand}
                                                price={car.price}
                                                color={car.color}
                                                updateCar={this.updateCarHandler}

                                            />
                                        )
                                    }


                                }
                                )
                            }


                        </tbody>
                    </table>
                </Fade>

                {
                    this.props.isformopen && <Formadd addcar={this.addCarHandler} />
                }

            </>
        )
    }
}

export default Cars
