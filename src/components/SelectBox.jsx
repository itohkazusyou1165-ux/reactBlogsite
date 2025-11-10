import { useState } from "react";

export default function SelectBox() {
  const [form, setForm] = useState({
    design: "color",
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    console.log(`好きなデザイン：＄{form.design}`);
  };

  return (
    <>
      <div className="modal-text">
        <p>How did you hear about BAMOS DESIGN?</p>
      </div>
      <form className="select-form">
        <label htmlFor="design"></label>
        <select
          id="design"
          name="design"
          value={form.design}
          onChange={handleForm}
        >
          <option value="#">ー1つ選択してくださいー</option>
          <option value="#">c</option>
          <option value="#">g</option>
          <option value="#">f</option>
          <option value="#">f</option>
        </select>
        <button type="button" onClick={show}></button>
      </form>
    </>
  );
}
