import Photo from "./../assets//images/header.jpg";
import Logo from "./../assets//images/BAMOSDESIGN.svg";
export default function Header() {
  return (
    <>
      <header>
        <h1 className="Logo">
          <img src={Logo} alt="" />
        </h1>
        <div className=" hamburger">
          <span>+</span>
          <span>Menu</span>
        </div>
      </header>
      <section>
        <div className="header">
          <img src={Photo} alt="" />
        </div>
        <div className="header-logo">
          <p>BAMOS DESIGN</p>
        </div>
      </section>
    </>
  );
}
