import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const history = useNavigate();
  function handleClick() {
    history("/");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Welcome {location.state.id} !</h1>
      <button
        onClick={handleClick}
        style={{ marginTop: "100px" }}
        className="btn btn-danger"
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
