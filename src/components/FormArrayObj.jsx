import { useState } from "react";

export default function FormArrayObj() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    // console.log(e.target.placeholder);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Name :" + formData.name);

    setFormData({
      name: "",
      email: "",
      password: ""
    });
    // e.target.reset();
  };

  return (
    <>
      <form action="" onSubmit={handleForm}>
        <h1>{formData.name}</h1>
        <h1>{formData.email}</h1>
        <h1>{formData.password}</h1>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}
