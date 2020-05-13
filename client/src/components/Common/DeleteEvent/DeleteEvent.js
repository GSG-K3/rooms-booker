import axios from "axios";

const DeleteEvent = (Id) => {
  const eventId = { eventId: Id };

  axios
    .post("/api/delete-event", eventId)
    .then((response) => {
      window.location.reload(false);
    })
    .catch((err) => alert(`An Error happend : ${err.message} !! try again !!`))
}

export default DeleteEvent;
