import React, { FC, useCallback, useState } from "react";
import FormField from "../ui/FormField/formField";
import Select from "../ui/Select/select";
import Option from "../ui/Select/option";
import Button from "../ui/Button/button";

interface NoteDetailProps {
  type: "Add" | "Edit";
  title: string | undefined;
  category: string | undefined;
  wordCount: number;
  description: string | undefined;
  onClose: () => void;
  handleTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (value: string) => void;
  handleDescriptionChange: (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const NoteDetails: FC<NoteDetailProps> = ({
  type,
  title,
  category,
  description,
  wordCount,
  handleTitleChange,
  handleCategoryChange,
  handleDescriptionChange,
  onClose,
}) => {
  return (
    <div className="edit-note-modal">
      <h2 className="font-bold text-xl text-gray-800/90 mb-4">
        {type == "Add" ? "Add Note" : "Edit Note"}
      </h2>
      <div className="edit-note-body-1 flex gap-6">
        <div className="title flex flex-col justify-start gap-1">
          <h5 className="font-semibold text-gray-800/90">Title</h5>
          <FormField
            className="w-[200px] h-10"
            placeholder="Add title"
            value={title}
            onChange={handleTitleChange}
          ></FormField>
        </div>
        <div className="category flex flex-col justify-start gap-1">
          <h5 className="font-semibold text-gray-800/90">Category</h5>
          <Select
            className="w-[200px]"
            value={category}
            onOptionChange={handleCategoryChange}
          >
            <Option>Personal</Option>
            <Option>Home</Option>
            <Option>Business</Option>
          </Select>
        </div>
      </div>
      <div className="edit-note-body-2 mt-4">
        <div className="title flex flex-col justify-start gap-1">
          <div className="flex justify-between">
            <h5 className="font-semibold text-gray-800/90">Title</h5>
            <p>{`${wordCount}/200`}</p>
          </div>
          <textarea
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            id="1"
            cols={30}
            rows={5}
            placeholder="Add description"
          ></textarea>
        </div>
      </div>
      <div className="edit-note-footer flex flex-row-reverse mt-4">
        <Button className="button-primary py-2">
          {type == "Add" ? "Add" : "Save"}
        </Button>
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
  );
};

export default NoteDetails;
