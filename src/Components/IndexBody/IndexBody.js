import React from 'react'
import Carousel from '../Carousel/Carousel';
import data from "../../Assets/products/products.json";

const indexBody = () => {

    var elementArray;
    elementArray = data;
    const newData = elementArray.map((data) => {
        return (
            <div className={data.className}>
                <img alt={data.alt} src={data.url} className={data.imgClass} />
                <h4>{data.name}</h4>
                <p>{data.description}</p>
                <p>{data.price}</p>
            </div>
        )
    });
    return (
        <div>
            <main>
                <Carousel />
                <p className="welcome"> Enjoy our vast collection of boardgames!</p>
                <section className="products">
                    <h2 className="product-grid__title">Featured Products</h2>
                    <div className="product-grid">
                        {newData[1]}
                        {newData[2]}
                        {newData[3]}
                    </div>
                    <div className="index-footer"></div>
                </section>
            </main>
        </div>
    )
}

export default indexBody;