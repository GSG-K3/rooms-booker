import axios from "axios";

const DeleteEvent = (Id) => {

  axios
    .delete(`/api/delete-event/${Id}`)
    .then(() => {
      window.location.reload(false);
    })
    .catch((err) => console.log("err", err))
};

export default DeleteEvent;
