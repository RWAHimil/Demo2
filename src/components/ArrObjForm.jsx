import { useState } from "react";

const ArrObjForm = () => {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;

    const newObject = { name, email };

    setFormData([...formData, newObject]);

    console.log(name);
    console.log(email);

    event.target.reset(); // Clear the form fields after submission
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        {formData.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrObjForm;
