const Button = (props) => {
  const { styleButton, buttonName } = props;
  return <button className={styleButton}>{buttonName}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="heading-style">Social Buttons</h1>
    <div>
      <Button styleButton="style-like-button" buttonName="Like" />
      <Button styleButton="style-comment-button" buttonName="Comment" />
      <Button styleButton="style-share-button" buttonName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
