import React from "react";
import axios from "axios";

export default function useNotesData() {
  const base_url = "https://localhost:7148";

  async function getNotes() {
    return await axios.get(`${base_url}api/notes`);
  }

  async function getNote(noteId: number) {
    return await axios.get(`${base_url}/api/notes/${noteId}`);
  }

  //   async function postNote(noteId: number) {
  //     return await axios.get(`${base_url}/api/notes/${noteId}`);
  //   }

  return {
    getAll: getNotes,
    get: getNote,
  };
}
