import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function RichTextEditor() {
  const [value, setValue] = useState("Write a description here...");

  useEffect(() => {
    console.log(value);
  }, [value]);

  return <ReactQuill theme="snow" style={{ height: "300px" }} value={value} onChange={setValue} />;
}
