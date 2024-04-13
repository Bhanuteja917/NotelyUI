"use client";

import { FC, useRef, useState } from "react";
import CheckIcon from "../components/CheckIcon/checkIcon";
import CloseIcon from "../components/CloseIcon/closeIcon";
import DeleteIcon from "../components/DeleteIcon/deleteIcon";
import EditIcon from "../components/EditIcon/editIcon";
import Button from "../components/ui/Button/button";
import FormField from "../components/ui/FormField/formField";
import Select from "../components/ui/Select/select";
import Option from "../components/ui/Select/option";

export default function MyComponents() {
  const [checked, setChecked] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="grid grid-cols-3 gap-1.5 h-screen">
        <div className="container">
          <div className="inner-container">
            <Button
              className="button-primary rounded-lg"
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
            >
              Add
            </Button>
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <Button className="button-ghost rounded-lg">Cancel</Button>
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <Button className="button-danger rounded-lg">Delete</Button>
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <DeleteIcon />
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <EditIcon />
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <CloseIcon />
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <CheckIcon
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
            />
          </div>
        </div>
        <div className="container">
          <div className="inner-container">
            <FormField type="text" placeholder="Form Field"></FormField>
          </div>
        </div>
        <div className="container p-5">
          <Select>
            <Option>MAD-1</Option>
            <Option>MAD-2</Option>
            <Option>MAD-3</Option>
          </Select>
        </div>
      </div>
    </>
  );
}
