import React from "react";
import FileTree from "./FileTree";
import "./index.css";

const fileStructure = [
  {
    name: "bachir",
    type: "folder",
    children: [
      {
        name: "salut",
        type: "folder",
        children: [{ name: "bachir", type: "file" }],
      },
    ],
  },
  { name: "salutvoir", type: "folder" },
];

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <FileTree structure={fileStructure} />
    </div>
  );
};

export default App;
