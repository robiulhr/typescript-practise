import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import RichTextEditor from "../component/richTextEditor";
import TagFilter from "./tagFilter";
import { ChangeEvent, SyntheticEvent, useEffect } from "react";

interface NoteFormProps {
  pageTitle: string;
  btnText: string;
  noteData: {
    noteTitle: string;
    noteDescription: string;
    noteTags: string[];
  };
  noteHandlers: {
    setNoteTitle: (input: string) => void;
    setNoteTags: (input: string[]) => void;
    setNoteDescription: (input: string) => void;
  };
}
export default function NoteForm({ noteData, noteHandlers, pageTitle, btnText }: NoteFormProps) {
  const { noteTitle, noteDescription, noteTags } = noteData;
  const { setNoteTitle, setNoteTags, setNoteDescription } = noteHandlers;

  useEffect(() => {
    console.log(noteTitle, "NoteTitle", noteTags);
  }, [noteTitle, noteTags]);

  function noteTitleHandler(e: ChangeEvent<HTMLInputElement>) {
    setNoteTitle(e.target.value);
  }
  function noteTagsHandler(e: SyntheticEvent<Element, Event>) {
    console.log(e);
  }
  function noteDescriptionHandler(e: ChangeEvent<HTMLInputElement>) {
    console.log(e);
  }
  return (
    <Paper className="my-6 p-10">
      <Typography className="text-start text-bolt text-xl w-[100%]">{pageTitle}</Typography>
      <Divider />
      <Box className="my-4">
        <Typography className="text-start my-2">Title</Typography>
        <TextField value={noteTitle} onChange={noteTitleHandler} fullWidth id="filled-basic" label="Write Title Here" variant="filled" />
      </Box>
      <Box className="my-4">
        <Typography className="text-start my-2">Tags</Typography>
        <TagFilter onChange={noteTagsHandler} className="w-[100%]" />
      </Box>
      <Box className="my-10">
        <Typography className="text-start my-2">Description</Typography>
        <RichTextEditor noteDescription={noteDescription} onChange={noteDescriptionHandler} />
      </Box>
      <Box className="flex items-center justify-end">
        <Button variant="contained" className="mt-5">
          {btnText}
        </Button>
      </Box>
    </Paper>
  );
}
