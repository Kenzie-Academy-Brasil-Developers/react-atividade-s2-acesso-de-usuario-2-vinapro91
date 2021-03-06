import { useState } from "react";

const Input = ({ newMember, setNewMember }) => {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const addMember = (name, type) => {
    setNewMember([
      ...newMember,
      { id: `${newMember.length + 1}`, name: name, type: type },
    ]);
  };
  return (
    <>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <input
        type="radio"
        name="type"
        value="pf"
        onChange={(event) => setType(event.target.value)}
      />
      <label htmlFor="pf">PF</label>
      <input
        type="radio"
        name="type"
        value="pj"
        onChange={(event) => setType(event.target.value)}
      />
      <label htmlFor="pj">PJ</label>
      <input value="New" type="button" onClick={() => addMember(name, type)} />
    </>
  );
};
export default Input;
