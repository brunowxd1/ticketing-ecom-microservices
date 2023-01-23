import axios from "axios";

const Landing = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing3</h1>;
};

Landing.getInitialProps = async () => {
  const response = await axios
    .get("/api/users/currentuser")
    .catch((err) => console.log(err));

  console.log(response);
  return response.data;
};

export default Landing;
