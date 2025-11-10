import { useState } from "react";
export default function CheckBox() {
  const [form, setForm] = useState({
    field: ["music", "it"],
  });

  const handleFormMulti = (e) => {
    const fa = form.field;

    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  const show = () => {
    console.log(`興味のあるもの：＄{form.field}`);
  };

  return (
    <>
      <div className="checkbox-text">
        <p>What is your favorite field or area of interest?</p>
      </div>

      <form className="checkbox-form">
        <label htmlFor="field_music">音楽</label>
        <input
          id="field_music"
          name="field"
          type="checkbox"
          value="music"
          onChange={handleFormMulti}
        />
        <label htmlFor="field_music">芸術</label>
        <input
          id="field_music"
          name="field"
          type="checkbox"
          value="music"
          onChange={handleFormMulti}
        />
        <label htmlFor="field_music">デザイン</label>
        <input
          id="field_music"
          name="field"
          type="checkbox"
          value="music"
          onChange={handleFormMulti}
        />{" "}
        <br />
        <label htmlFor="field_music">プログラミング</label>
        <input
          id="field_music"
          name="field"
          type="checkbox"
          value="music"
          onChange={handleFormMulti}
        />
      </form>
    </>
  );
}
