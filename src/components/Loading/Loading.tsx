import "./Loading.css";

const Loading = (): React.ReactElement => {
  return (
    <div className="loading" aria-label="loading">
      <span className="loader" />
    </div>
  );
};

export default Loading;
