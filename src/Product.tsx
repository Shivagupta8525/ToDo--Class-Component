import React, { PureComponent } from "react";
// import { render } from "react-dom";


type ProductPros = {
    
    id: number;
    title: string;
    category: string;
    rating: number;
    price: number;
    thumbnail:string
}

export default class Product extends  React.Component <ProductPros ,PureComponent> {
    // constructor(props: ProductPros) 
    render() {
        
    
return (
    
        <div className="  border   bg-white  flex flex-col gap-2   " >
            <div className="w-full h-full">
                <img className=" w-full h-full object-cover aspect-square" src={this.props.thumbnail} alt={"product " + this.props.id} />
            </div>
            <div className="text-2xs  ml-2  font-bold mt-2">{this.props.title}</div>
            <div className="text-red-500 text-2xs ml-2   ">{this.props.category}</div>
            <div className="text-1xs ml-2 -mt-1">Rating : {this.props.rating}/5</div>
            <div className='ml-2 -mt-1 font-bold'> Price : ${this.props.price}</div>
        </div>
    
);

}
}

