import React from 'react';
import './App.css';
import { useState } from "react";
import Form from "./Components/Form";
import ActualForm from "./Components/ActualForm";


function App() {
  const [members, setMembers] = useState([
  {
    name: "Kasit",
    email: "kasit.nganthavee@gmail.com",
    role: "CEO"
  }
  ]);

  const addNewForm = member => {
    const newForm = setMembers([...members, member]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Register to Thailand's First Unicorn</h1>
          <Form addNewForm={addNewForm} />
          <ActualForm members={members} />
      </header>
    </div>
  );
}

export default App;
