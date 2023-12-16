import { Box, Button, Divider, Paper, TextField, Typography } from "@mui/material";
import RichTextEditor from "../component/richTextEditor";
import TagFilter from "./tagFilter";

interface NoteFormProps {
  pageTitle: string;
}
export default function NoteForm({ pageTitle }: NoteFormProps) {
  return (
    <Paper className="my-6 p-10">
      <Typography className="text-start text-bolt text-xl w-[100%]">{pageTitle}</Typography>
      <Divider />
      <Box className="my-4">
        <Typography className="text-start my-2">Title</Typography>
        <TextField fullWidth id="filled-basic" label="Write Title Here" variant="filled" />
      </Box>
      <Box className="my-4">
        <Typography className="text-start my-2">Tags</Typography>
        <TagFilter className="w-[100%]" />
      </Box>
      <Box className="my-10">
        <Typography className="text-start my-2">Description</Typography>
        <RichTextEditor />
      </Box>
      <Box className="flex items-center justify-end">
        <Button variant="contained" className="mt-5">
          Save Note
        </Button>
      </Box>
    </Paper>
  );
}
