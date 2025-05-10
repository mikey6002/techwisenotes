import { useState } from 'react';
import './App.css';
import UserCard from './Components/UserCard'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <UserCard /> {}
      </div>
    </>
  );
}

export default App;