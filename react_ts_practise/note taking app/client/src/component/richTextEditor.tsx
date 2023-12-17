import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface RichTextEditorProps {
  noteDescription: string;
  onChange: (value: string, delta: any, source: any, editor: any) => void;
}

export default function RichTextEditor({ noteDescription, onChange }: RichTextEditorProps) {
  return <ReactQuill theme="snow" style={{ height: "300px" }} value={noteDescription} onChange={onChange} />;
}
