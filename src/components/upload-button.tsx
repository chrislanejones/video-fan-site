"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Loader2 } from "lucide-react";

export function UploadVideoButton() {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");
    } catch (error) {
      console.error("Upload error:", error);
      // Optional: Add user-friendly error handling
      alert("Video upload failed. Please try again.");
    } finally {
      setUploading(false);
      // Reset the file input
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        accept="video/*"
        className="hidden"
      />
      <Button
        size="sm"
        variant="secondary"
        onClick={triggerFileInput}
        disabled={uploading}
      >
        {uploading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Upload size={16} />
        )}
        {uploading ? "Uploading..." : ""}
      </Button>
    </>
  );
}
