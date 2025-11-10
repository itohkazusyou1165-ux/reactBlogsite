import "./App.css";
import bamosList from "./components/bamosList";
import CheckBox from "./components/CheckBox";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Modal from "./components/Modal";
import SelectBox from "./components/SelectBox";
import TextBox from "./components/TextBox";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Header />
      <List src={bamosList} />
      <Footer />
      <Modal />
      <SelectBox />
      <CheckBox />
      <TextBox />
      <Button />
    </>
  );
}

export default App;
