// src/App.js
import React from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
