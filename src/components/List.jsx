import Good from "./../assets//images/thumb_down_23.svg";
import Down from "./../assets//images/thumb_down_22.svg";
import Good01 from "./../assets//images/thumb_up_24.svg";
import Down01 from "./../assets//images/thumb_up_25.svg";
export default function List({ src }) {
  return (
    <>
      {src.map((b) => (
        <div className="list-box">
          <dl>
            <dt>
              <img src={b.image} alt="test" />
              {b.title}
              {b.thumbsUp}
              <img src={Good} alt="" />
              {b.thumbsDown}
              <img src={Down} alt="" />({b.author})
            </dt>
            <dd>{b.category}</dd>
          </dl>
        </div>
      ))}
    </>
  );
}
