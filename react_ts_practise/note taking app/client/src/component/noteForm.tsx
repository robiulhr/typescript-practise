import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import RichTextEditor from "../component/richTextEditor";
import TagFilter from "./tagFilter";
import { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useEffect } from "react";

interface NoteFormProps {
  pageTitle: string;
  btnText: string;
  noteData: {
    noteTitle: string;
    noteDescription: string;
    noteTags: string[];
  };
  noteHandlers: {
    /*
     * here Dispatch<SetStateAction<string>> is the type for react useState setter function argument and
     * and the string and string[] defines the datatype of the argument.
     */
    setNoteTitle: Dispatch<SetStateAction<string>>;
    setNoteTags: Dispatch<SetStateAction<string[]>>;
    setNoteDescription: Dispatch<SetStateAction<string>>;
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
  function noteTagsHandler(e: SyntheticEvent, value: string[]) {
    console.log(e, value);
    setNoteTags(value);
  }
  function noteDescriptionHandler(value: string, delta: any, source: any, editor: any) {
    setNoteDescription(value);
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
        <TagFilter noteTags={noteTags} onChange={noteTagsHandler} className="w-[100%]" />
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
