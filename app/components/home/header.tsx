"use client";

import React, { useState } from "react";
import "../ui/Button/button.css";
import FormField from "../ui/FormField/formField";
import Button from "../ui/Button/button";
import AddModal from "./addModal";

export default function Header() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleClose = () => {
    setAddModalOpen(false);
  };

  const handleAddButtonClick = () => {
    setAddModalOpen(true);
  };

  return (
    <div className="w-full bg-white shadow-md py-3">
      <div className="flex gap-4 mx-16 lg:mx-28">
        <FormField
          className="grow"
          placeholder="Search"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clipRule="evenodd"
              />
            </svg>
          }
        ></FormField>
        <Button
          className="button-primary rounded-lg h-10 shrink"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
          }
          onClick={handleAddButtonClick}
        >
          Add
        </Button>
        <AddModal isOpen={isAddModalOpen} onClose={handleClose}></AddModal>
      </div>
    </div>
  );
}
