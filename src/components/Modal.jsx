import { useState } from "react";

export default function FormRadio() {
  const [form, setForm] = useState({
    os: "windows",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`使用OS:$(form.os)`);
  };

  return (
    <>
      <div className="contact-top">
        <h2>FEEDBACK</h2>
      </div>

      <div className="contact-text">
        <p>
          Thank you for visiting BAMOS DESIGN. <br />
          Please take a moment to complete our survey to help us <br /> improve
          our services.
        </p>
      </div>
      <form className="modal-form">
        <legend>Age</legend>
        <label htmlFor="age">0~10</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />{" "}
        <label htmlFor="age">10~20</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />
        <label htmlFor="age">20~30</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />{" "}
        <br />
        <label htmlFor="age">30~40</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />
        <label htmlFor="age">40~50</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />
        <label htmlFor="age">50 and above</label>
        <input
          id="age"
          name="age"
          type="radio"
          value="age"
          onChange={handleForm}
        />
      </form>
    </>
  );
}
