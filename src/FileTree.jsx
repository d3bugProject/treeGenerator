import React from "react";

const FileTree = ({ structure }) => {
  const renderTree = (nodes, depth = 0) => {
    return nodes.map((node, index) => (
      <div
        key={`${node.name}-${index}`}
        className="pl-4"
        style={{ paddingLeft: depth * 20 }}
      >
        <div>
          {node.type === "folder" ? "📁" : "📄"} {node.name}
        </div>
        {node.children && renderTree(node.children, depth + 1)}
      </div>
    ));
  };

  return <div className="font-mono text-sm">{renderTree(structure)}</div>;
};

export default FileTree;
