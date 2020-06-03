import React, { Component } from 'react';
import data from "../../Assets/products/products.json";

class productsPage extends Component {
    state = {
        test: 'test'
    };

    render() {
        const allCards = () => {
            for (let i = 0; i <= newData.length; i++) {
                return newData[i];
            }
        }

        var elementArray;
        elementArray = data;
        const filterSelection = (str) => {
            // console.log(elementArray); // test

            for (var i = 0; i < elementArray.length; i++) {
                removeClass(elementArray[i], 'show'); // removes 'show' from every element
                if (elementArray[i].className.split(" ").indexOf(str) > -1 || str == 'all') {
                    addClass(elementArray[i], 'show'); // adds 'show' to every element that matches the str class
                }
                // console.log(elementArray[1].className.split(" ").indexOf(str))
                console.log(elementArray)
            }
            this.setState({});
        }

        // Show elements
        function addClass(element, name) {
            var array1;
            array1 = element.className.split(" "); // .className returns the entire class string
            // console.log(array1);
            if (array1.indexOf(name) == -1) { // checks if the element does not already have 'show' class
                element.className += " " + name;
            }
            console.log(element.className);
        }

        // Hide elements
        function removeClass(element, name) {
            var array1;
            array1 = element.className.split(" ");
            while (array1.indexOf(name) > -1) { // continously loops until all instances of name do not exist
                array1.splice(array1.indexOf(name), 1); // at the index of name, deletes one element
            }
            element.className = array1.join(" ");
        }

        // Add active class 
        var btns = document.getElementsByClassName('filters__btn');
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("filters__btn--active"); // grabs an array with all currently 
                current[0].className = current[0].className.replace(" filters__btn--active", ""); // in the first element, removes the active class
                this.className += " filters__btn--active"; // adds the active class to the button clicked
            });
        }

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
            <main className="product-page-main">

                <div>
                    <section class="filters">
                        <h2 className="filters__header">Categories</h2>
                        <button className="filters__btn filters__btn--active" onClick={() => filterSelection('all')}>Show All</button>
                        <button className="filters__btn" onClick={() => filterSelection('adventure')}>Adventure</button>
                        <button className="filters__btn" onClick={() => filterSelection('civilization')}>Civilization</button>
                        <button className="filters__btn" onClick={() => filterSelection('exploration')}>Exploration</button>
                        <button className="filters__btn" onClick={() => filterSelection('science-fiction')}>Science Fiction</button>
                        <button className="filters__btn" onClick={() => filterSelection('economic')}>Economic</button>
                        <button className="filters__btn" onClick={() => filterSelection('card-game')}>Card Game</button>
                    </section>
                    <section class="filters">
                        <h2 className="filters__header">Price</h2>
                        <button className="filters__btn" onClick={() => filterSelection('cheap')}>&lt; $40.00</button>
                        <button className="filters__btn" onClick={() => filterSelection('medium')}>$40.01 - $80.00</button>
                        <button className="filters__btn" onClick={() => filterSelection('expensive')}>&gt; $80.00</button>
                    </section>
                </div>
                <section className="products">
                    <h3 className="product-grid__title">Products</h3>
                    <div className="product-grid">
                        {newData}
                    </div>
                </section>

                <div className="footer-space"></div>
            </main >
        )
    }
}

export default productsPage;