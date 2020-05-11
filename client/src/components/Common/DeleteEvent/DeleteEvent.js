import axios from "axios";

const DeleteEvent = (Id) => {
  let eventId = { eventId: Id };

  axios
    .post("/api/delete-event", eventId)
    .then((response) => {
      window.location.reload(false);
    })
    .catch((err) => console.log(err));
};

export default DeleteEvent;
