import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ value, onChange }: any) => {
  const QuillEditor = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <QuillEditor
      value={value}
      onChange={onChange}
      theme="snow"
      className="!w-full"
      modules={{
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["bold", "italic", "underline"],
          ["link"],
          [{ align: [] }],
          ["image"],
          ["blockquote", "code-block"],
          [{ direction: "rtl" }],
        ],
      }}
    />
  );
};

export default RichTextEditor;
