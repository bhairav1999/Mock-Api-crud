import React, { useEffect, useState } from "react";
import "./Read.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    try {
      await axios
        .get(
          "https://665ae607003609eda45f2885.mockapi.io/bhairav-crud/after-crud"
        )
        .then((res) => {
          setUserData(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteId = async (id) => {
    console.log(id);
    try {
      await axios
        .delete(
          `https://665ae607003609eda45f2885.mockapi.io/bhairav-crud/after-crud/${id}`
        )
        .then((res) => {
          getData();
        });
    } catch (error) {
      console.log(error);
    }
  };

  const hadleedit = (item) => {
    localStorage.setItem("id", item.id);
    localStorage.setItem("name", item.name);
    localStorage.setItem("email", item.email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <table className="styled-table">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th></th>
          <th></th>
        </tr>
        <tbody>
          {userData.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to="/update">
                    <button onClick={() => hadleedit(item)}>edit</button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteId(item.id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Read;
