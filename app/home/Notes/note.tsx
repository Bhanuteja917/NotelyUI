"use client";

import CheckIcon from "@/app/components/CheckIcon/checkIcon";
import DeleteIcon from "@/app/components/DeleteIcon/deleteIcon";
import EditIcon from "@/app/components/EditIcon/editIcon";
import "./note.css";
import { FC } from "react";

type TNote = "Business" | "Home" | "Personal";

function formatDate(date: Date) {
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear().toString()}`;
}

interface CardProps {
  isCompleted: boolean;
  category: TNote;
  title: string;
  description: string;
  lastEditedAt: Date;
}

const Card: FC<CardProps> = ({
  isCompleted,
  category,
  title,
  description,
  lastEditedAt,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <Badge>{category}</Badge>
        <div className="flex">
          <CheckIcon checked={isCompleted}></CheckIcon>
          <EditIcon></EditIcon>
          <DeleteIcon></DeleteIcon>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-body-title">{title}</h2>
        <p className="card-body-content">{description}</p>
      </div>

      <div className="card-footer ">
        <p className="timestamp">{formatDate(lastEditedAt)}</p>
      </div>
    </div>
  );
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-blue-400 rounded-[56px] px-4">
      <p className="pt-0.5">{children}</p>
    </span>
  );
}

export default Card;
