import React, { FC, useCallback, useState } from "react";
import Modal from "../ui/Modal/modal";
import NoteDetails from "./noteDetails";
import Button from "../ui/Button/button";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} hasCloseBtn={true} onClose={onClose}>
      <div className="edit-note-modal">
        <h2 className="font-bold text-xl text-gray-800/90 mb-4">Delete Note</h2>
        <div className="edit-note-body-1">
          Are you sure you want to delete this note?
        </div>
        <div className="edit-note-footer flex flex-row-reverse mt-4">
          <Button className="button-danger py-2">Delete</Button>
          <Button
            className="button-ghost"
            onClick={() => {
              onClose();
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
