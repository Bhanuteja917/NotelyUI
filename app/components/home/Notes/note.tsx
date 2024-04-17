"use client";

import CheckIcon from "@/app/components/home/checkIcon";
import DeleteIcon from "@/app/components/home/deleteIcon";
import EditIcon from "@/app/components/home/editIcon";
import "./note.css";
import { FC, HtmlHTMLAttributes, useState } from "react";
import EditModal from "../editModal";
import DeleteModal from "../deleteModal";

const NoteCategoryColors = {
  Business: "bg-blue-500",
  Home: "bg-yellow-500",
  Personal: "bg-orange-500",
} as const;

export type TNote = keyof typeof NoteCategoryColors;

function formatDate(date: Date) {
  return `${date.getDate().toString().padStart(2, "0")}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getFullYear().toString()}`;
}

interface CardProps {
  isCompleted: boolean;
  category: string;
  title: string;
  description: string;
  lastEditedAt: string;
}

const Card: FC<CardProps> = ({
  isCompleted,
  category,
  title,
  description,
  lastEditedAt,
}) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditIconClick = () => {
    setEditModalOpen(true);
  };

  const handleDeleteIconClick = () => {
    setDeleteModalOpen(true);
  };

  return (
    <div className={`card ${isCompleted && "completed"}`}>
      <div className="card-header">
        <Badge
          className={` ${
            isCompleted
              ? "bg-gray-900/35"
              : NoteCategoryColors[category as TNote]
          }`}
        >
          {category}
        </Badge>
        <div className="flex">
          <CheckIcon checked={isCompleted}></CheckIcon>
          <EditIcon onClick={handleEditIconClick}></EditIcon>
          <DeleteIcon onClick={handleDeleteIconClick}></DeleteIcon>
        </div>
      </div>

      <div className={`card-body ${isCompleted && "completed"}`}>
        <h2 className="card-body-title">{title}</h2>
        <p className="card-body-content">{description}</p>
      </div>

      <div className="card-footer ">
        <p className="timestamp">{formatDate(new Date(lastEditedAt))}</p>
      </div>

      <EditModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
      ></EditModal>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      ></DeleteModal>
    </div>
  );
};

interface BadgeProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Badge: FC<BadgeProps> = ({ children, className }) => {
  return (
    <span className={`${className} rounded-[56px] px-4`}>
      <p className="pt-0.5">{children}</p>
    </span>
  );
};

export default Card;
