"use client";

import Card, { TNote } from "./components/home/Notes/note";
import TabMenu from "./components/ui/TabMenu/tabMenu";
import "./globals.css";
import notesData from "./data/dummyData";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="main-body flex flex-col gap-5">
        <div className="flex justify-start text-2xl font-semibold mt-5 text-gray-900/80">
          <h1>Your Notes</h1>
        </div>
        <TabMenu tabs={["ALL", "PERSONAL", "HOME", "BUSINESS"]} />
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
          {notesData.map((notes, index) => {
            return (
              <Card
                key={index}
                isCompleted={notes.isCompleted}
                category={notes.category}
                title={notes.title}
                description={notes.description}
                lastEditedAt={notes.lastEditedAt}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
