export default function PopUpAlret({ isVisiable , name , text}) {
  if (isVisiable) {
    return (
      <div className="PopUpBackground">
        <div className="PopUp">
                <h1>{name}</h1>
                <h2>{text}</h2>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}