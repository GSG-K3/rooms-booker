import axios from "axios";

const logout = () => {
  axios
    .post("/api/logout")
    .then((result) => {
      window.location.replace("/");
    })
    .catch((err) => {
      alert(err.response.data.messag);
    });
};

export default logout;
