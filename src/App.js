import { useEffect, useState } from 'react';
import './App.css';
import UserList from './component/UserList';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([])

  const fetcData = async () => {
    return await axios.get("https://randomuser.me/api/?results=5");
  }

  useEffect(() => {
    fetcData().then(res => setUsers(res.data.results));
    
  }, [])

  return (
    <div className="App">
      <h2 className='header'>Random User List</h2>
      <UserList users={users} />
    </div>
  );
}

export default App;
