import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate=useNavigate()
  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "https://665ae607003609eda45f2885.mockapi.io/bhairav-crud/after-crud",
          {
            ...userInput,
            // header,
          }
        )
        .then((responce) => {
            navigate('/read')
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form action="">
        <input
          type="text"
          name="name"
          id=""
          value={userInput.name}
          onChange={handlechange}
        />
        <input
          type="email"
          name="email"
          id=""
          value={userInput.email}
          onChange={handlechange}
        />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </>
  );
};

export default Form;
