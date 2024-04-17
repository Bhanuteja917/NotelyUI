import React, { FC, useCallback, useState } from "react";
import Modal from "../ui/Modal/modal";
import NoteDetails from "./noteDetails";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddModal: FC<AddModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState<string>();
  const [category, setCategory] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [wordCount, setWordCount] = useState(0);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleCategoryChange = useCallback(
    (value: string) => {
      setCategory(value);
    },
    [setCategory]
  );

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (event.target.value.length <= 200) {
      setWordCount(event.target.value.length);
      setDescription(event.target.value);
    }
  };

  return (
    <Modal isOpen={isOpen} hasCloseBtn={true} onClose={onClose}>
      <NoteDetails
        type={"Add"}
        title={title}
        category={category}
        wordCount={wordCount}
        description={description}
        onClose={onClose}
        handleTitleChange={handleTitleChange}
        handleCategoryChange={handleCategoryChange}
        handleDescriptionChange={handleDescriptionChange}
      ></NoteDetails>
    </Modal>
  );
};

export default AddModal;
