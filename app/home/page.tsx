"use client";
import Header from "./Header/header";
import Card from "./Notes/note";
import TabMenu from "./TabMenu/tabMenu";
import "./page.css";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-body flex flex-col gap-5">
        <div className="flex justify-start text-2xl font-semibold mt-5 text-gray-900/80">
          <h1>Your Notes</h1>
        </div>
        <TabMenu />
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
          <Card
            isCompleted={false}
            category={"Business"}
            title={"Finish the task on the board"}
            description={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur velit itaque dolor esse nobis similique? Deleniti sit libero inventore cupiditate."
            }
            lastEditedAt={new Date("2024/03/01")}
          ></Card>
        </div>
      </div>
    </>
  );
}
