import "./ModalDelete.scss";

const ModalDelete = (props) => {
  return (
    <div className="ModalContainer">
      <div className="modalDelete">
        <h3>Are you sure you want to delete this report?</h3>
        <div className="deletebtn">
          <button
            className="pointer"
            onClick={() => {
              props.setDeleteModal(false);
            }}
          >
            No
          </button>
          <button
            className="pointer"
            onClick={() => {
              fetch(`http://localhost:3333/api/reports/${props.e.id}`, {
                method: "DELETE",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem(
                    "accessToken"
                  )}`,
                },
              }).then((res) => {
                console.log(res);
                props.setReload(!props.reload);
              });
              props.setDeleteModal(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
