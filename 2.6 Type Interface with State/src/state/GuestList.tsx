import { useState } from 'react';

const GuestList: React.FC = () => {
  // TS auto defines the type for state variables based on initial state data
  const [name, setName] = useState('');
  // To explicitly define type
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
