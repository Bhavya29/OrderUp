
import React, { useState, useRef } from 'react';
import '../PizzaOrder/PizzaOrder.css';
import { Navigate, useNavigate } from 'react-router-dom';

const PizzaOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    pizza: '',
    size: '',
    toppings: [],
    address: '',
  });

  // const [confirmationMsg, setconfirmationMsg] = useState(false);
  const navigation = useNavigate()


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        toppings: checked
          ? [...prev.toppings, value]
          : prev.toppings.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  

  const handleConfirm = () => {
    const modalEl = document.getElementById('staticBackdrop');
    if (modalEl) {
      const modalInstance = bootstrap.Modal.getInstance(modalEl);
      if (modalInstance) modalInstance.hide();
    }
  
    navigation('/confirmation');
  };

  return (
    <>
      <div className="order-form">
        <h2>Order Your Pizza 🍕</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Choose Your Pizza</label>
            <select
              name="pizza"
              className="form-select"
              value={formData.pizza}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a pizza</option>
              <option>Margherita</option>
              <option>Pepperoni</option>
              <option>BBQ Chicken</option>
              <option>Vegetarian</option>
              <option>Hawaiian</option>
              <option>Meat Lovers</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Select Size</label>
            {['Small', 'Medium', 'Large'].map((size) => (
              <div className="form-check" key={size}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="size"
                  id={size}
                  value={size}
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor={size}>{size}</label>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <label className="form-label">Extra Toppings</label>
            {['Cheese', 'Mushrooms', 'Olives'].map((topping) => (
              <div className="form-check" key={topping}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={topping}
                  value={topping}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={topping}>{topping}</label>
              </div>
            ))}
          </div>

          <div className="mb-3">
            <label className="form-label">Delivery Address</label>
            <textarea
              name="address"
              className="form-control"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your delivery address"
            ></textarea>
          </div>

          {/* Modal Trigger */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>

      {/* Modal*/}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Your Pizza Order</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Pizza:</strong> {formData.pizza}</p>
              <p><strong>Size:</strong> {formData.size}</p>
              <p><strong>Toppings:</strong> {formData.toppings.join(', ') || 'None'}</p>
              <p><strong>Address:</strong> {formData.address}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleConfirm}>Confirm Order</button>
              {/* {confirmationMsg && (
        <div className="alert alert-success mt-3" role="alert">
          ✅ Your order has been confirmed!
        </div>
        
      )} */}
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaOrder;
