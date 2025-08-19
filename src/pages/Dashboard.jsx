import { useEffect, useState } from 'react';
import { fetchUserData } from '../services/api';

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserData().then(setUsers);
  }, []);

  return (
    <section>
      <h1>Dashboard</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </section>
  );
}
