import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text)
      .then((data) => {
        alert("Thanks for contacting us");
        setName("");
        setPhone("");
        setDesc("");
        setEmail("");
      })
      .catch((err) => {
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    }
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="exampleInputEmail1">
            Enter Your Name:
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            value={name}
            onChange={handleChange}
            name="name"
            aria-describedby="userName"
            placeholder="Enter name"
          ></input>
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="Email">
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            value={email}
            onChange={handleChange}
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
          <small id="emailHelp" className={styles.formText}>
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="phone">
            Enter Your Phone Num:
          </label>
          <input
            type="phone"
            className={styles.input}
            id="phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            required
            aria-describedby="PhoneNum"
            placeholder="Enter Phone Number"
          ></input>
        </div>
        <div className={styles.mb3}>
          <label className={styles.label} htmlFor="desc">
            Eleborate your concern
          </label>
          <textarea
            className={styles.input}
            placeholder="write your concern here"
            name="desc"
            id="desc"
            value={desc}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
