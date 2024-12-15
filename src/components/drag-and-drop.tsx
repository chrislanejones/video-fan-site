import React, { useState, useCallback } from "react";
import { Button } from "../components/ui/button";

interface DragDropAreaProps {
  onFileDrop: (file: File) => void;
}

export default function DragDropArea({ onFileDrop }: DragDropAreaProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        onFileDrop(e.dataTransfer.files[0]);
      }
    },
    [onFileDrop]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        onFileDrop(e.target.files[0]);
      }
    },
    [onFileDrop]
  );

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-4 text-center ${
        isDragging ? "border-primary bg-primary/10" : "border-gray-300"
      }`}
    >
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleChange}
        accept="video/*"
      />
      <label htmlFor="fileInput">
        <div className="cursor-pointer">
          <p className="mb-2">Drag & Drop your video here</p>
          <p className="text-sm text-gray-500">or</p>
          <Button type="button" variant="outline" className="mt-2">
            Select Video
          </Button>
        </div>
      </label>
    </div>
  );
}
