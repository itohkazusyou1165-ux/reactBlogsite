import { useState } from "react";

export default function TextBox() {
  const [form, setForm] = useState({
    comment: `ここに記入してください。`,
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const show = () => {
    console.log(`コメント: ${form.comment}`);
  };

  return (
    <>
      <div className="textbox">
        <p>
          What kind of special features or topics would you like to read on
          BAMOS DESIGN in the future?
        </p>
      </div>

      <form>
        <label htmlFor="comment"></label>
        <textarea
          id="comment"
          name="comment"
          cols="30"
          rows="7"
          value={form.comment}
          onChange={handleForm}
        ></textarea>
      </form>
    </>
  );
}
