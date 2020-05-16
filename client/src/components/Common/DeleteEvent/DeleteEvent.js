import axios from "axios";

const DeleteEvent = (Id) => {

  axios
    .delete(`/api/delete-event/${Id}`)
    .then(() => {
      window.location.reload(false);
    })
    .catch((err) => alert(`An Error happend : ${err.message} !! try again !!`))
}

export default DeleteEvent;
