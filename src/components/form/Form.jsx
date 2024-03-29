import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCreateInJSONPlaceholder } from "../../toolkit/slices/createPostSlice";

const Form = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const data = new FormData(e.target);
      const parsedData = Object.fromEntries(data);
      if (Object.values(parsedData).filter(Boolean).length < 2) {
        let tempErrors = {};
        Object.keys(parsedData).forEach((key) => {
          if (!parsedData[key]) {
            tempErrors[key] = true;
          }
        });
        setErrors(tempErrors);
      } else {
        setErrors({});
        dispatch(postCreateInJSONPlaceholder(parsedData));
      }
    } catch (error) {
      setErrors(error);
    }
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
          {errors.name && <p>Name is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          {errors.email && <p>Email is required</p>}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
