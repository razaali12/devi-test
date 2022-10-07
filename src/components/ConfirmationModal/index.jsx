import { Modal } from "antd";
import React from "react";
import "./styles.scss";
import { WEB_STRINGS } from "../../constants";
const ConfirmationModal = ({
  handleClose,
  title,
  description,
  deleteHandler,
  selectedData,
}) => {
  const { CONFIRMATION_MODAL } = WEB_STRINGS;
  const handleDeleteData = () => {
    deleteHandler();
    handleClose();
  };

  return (
    <Modal
      visible={true}
      title={<span>{title}</span>}
      centered
      onCancel={handleClose}
      footer={null}
      className="modal"
    >
      <div className="modal-wrapper">
        <div className="modal-body">
          <div className="modal-confirmation">{description}</div>
        </div>
        <div className="modal-footer">
          <button className="close" onClick={handleClose}>
            {CONFIRMATION_MODAL.CLOSE}
          </button>
          <button className="submit" onClick={handleDeleteData}>
            {CONFIRMATION_MODAL.CONFIRM}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
