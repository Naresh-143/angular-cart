export class Product {
    id:number;
    name:string;
    description:string;
    imageurl:string;
    price:number;
    offerprice:number;

    constructor(id, name, description = '', price = 0, offerprice = 0, imageurl = 'https://images-eu.ssl-images-amazon.com/images/I/41ekFbMy-4L._SY300_QL70_FMwebp_.jpg'){
        this.id = id
        this.name = name
        this.description = description
        this.imageurl = imageurl
        this.price = price
        this.offerprice = offerprice
    }
}
