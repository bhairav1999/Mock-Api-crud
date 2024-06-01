import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    name: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedName = localStorage.getItem("name");
    const storedId = localStorage.getItem("id");

    if (storedEmail || storedName || storedId) {
      setUserInput({
        email: storedEmail || "",
        name: storedName || "",
        id: storedId || ""
      });
    }
  }, []);
  const header = { "Access-Control-Allow-Origin": "*" };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          `https://665ae607003609eda45f2885.mockapi.io/bhairav-crud/after-crud/${userInput.id}`,
          {
            ...userInput,
            header,
          }
        )
        .then((responce) => {
          navigate("/read");
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
        <button onClick={handleSubmit}>Update</button>
      </form>
    </>
  );
};

export default Update;
