import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    // console.log("Clicked " + props.text);
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onClickToCancel={closeModalHandler} />}
      {modalIsOpen && <Backdrop onClickToCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
