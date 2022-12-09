import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Table3 from "./components/section/Table3";
import Footer from "./components/footer/footer";

const App = () => {
  const objUsers = [
    {
      name: "Kalybek",
      lastName: "Askhatov",
      age: 22,
      id: 1,
    },
    {
      name: "Айзирек",
      lastName: "ментор",
      age: 24,
      id: 2,
    },
    {
      name: "Эмир",
      lastName: "ментор",
      age: 26,
      id: 3,
    },
  ];
  return (
    <div>
      <Navbar />
      {objUsers.map((item) => {
        return (
          <Table3
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            id={item.id}
          />
        );
      })}
      {/* <Table3
        name={objUsers.name}
        lastName={objUsers.lastName}
        age={objUsers.age}
        id={objUsers.id}
      /> */}
      <Footer />
    </div>
  );
};

export default App;
