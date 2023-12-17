import { useEffect, useState } from "react";
import NoteForm from "../component/noteForm";

export default function Create() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteTags, setNoteTags] = useState([]);
  const [noteDescription, setNoteDescription] = useState("Write a description here...");
  const noteData = { noteTitle, noteTags, noteDescription };
  const noteHandlers = { setNoteTitle, setNoteTags, setNoteDescription };
  useEffect(() => {
    console.log(noteTitle, noteTags, noteDescription);
  }, [noteTitle, noteTags, noteDescription]);
  return <NoteForm noteHandlers={noteHandlers} noteData={noteData} pageTitle={"Create New Note"} btnText={"Save Note"} />;
}
