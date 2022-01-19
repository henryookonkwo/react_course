function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure you want to delete?</p>
      <button className="btn btn--alt" onClick={props.onClickToCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClickToCancel}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
