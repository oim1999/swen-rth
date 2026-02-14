import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>MERN Stack Hello World</h1>
      <h2>Backend says: {message || 'Loading...'}</h2>
    </div>
  );
}

export default App;