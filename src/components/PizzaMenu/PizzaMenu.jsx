import React from 'react'
import '../PizzaMenu/PizzaMenu.css';


const PizzaMenu = () => {
  return (
    <>
    <div class="container mt-5">
    <h1 class="text-center mb-4">Pizza Menu</h1>

    <div class="row">
      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=Margherita" class="card-img-top" alt="Margherita Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">Margherita Pizza</h5>
            <p class="pizza-description">Classic pizza topped with fresh tomatoes, mozzarella, and basil.</p>
            <p class="pizza-price">$9.99</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=Pepperoni" class="card-img-top" alt="Pepperoni Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">Pepperoni Pizza</h5>
            <p class="pizza-description">A delicious combination of mozzarella and spicy pepperoni.</p>
            <p class="pizza-price">$11.99</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=Vegetarian" class="card-img-top" alt="Vegetarian Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">Vegetarian Pizza</h5>
            <p class="pizza-description">Loaded with fresh vegetables and topped with mozzarella cheese.</p>
            <p class="pizza-price">$10.49</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=BBQ+Chicken" class="card-img-top" alt="BBQ Chicken Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">BBQ Chicken Pizza</h5>
            <p class="pizza-description">Topped with grilled chicken, barbecue sauce, and red onions.</p>
            <p class="pizza-price">$12.99</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=Hawaiian" class="card-img-top" alt="Hawaiian Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">Hawaiian Pizza</h5>
            <p class="pizza-description">A sweet and savory combination of pineapple, ham, and mozzarella.</p>
            <p class="pizza-price">$11.49</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card pizza-card">
          <img src="https://via.placeholder.com/400x250.png?text=Meat+Lovers" class="card-img-top" alt="Meat Lovers Pizza"/>
          <div class="card-body">
            <h5 class="pizza-name">Meat Lovers Pizza</h5>
            <p class="pizza-description">Topped with pepperoni, sausage, bacon, and ham.</p>
            <p class="pizza-price">$13.99</p>
            <button class="btn btn-order">Order Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default PizzaMenu