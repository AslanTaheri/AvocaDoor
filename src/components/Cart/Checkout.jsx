import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const confirmHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Address</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.control}>
        <label htmlFor="zipcode">Zip Code</label>
        <input type="text" id="zipcode" />
      </div>
      <button type="button" onClick={props.onCancel}>
        Cancel
      </button>
      <button>Submit Order</button>
    </form>
  );
};

export default Checkout;
