import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import DragDropArea from "../components/drag-and-drop";
import { uploadVideo } from "../lib/uploadVideo";
import { Upload, Loader2 } from "lucide-react";

interface UploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UploadModal({ isOpen, onClose }: UploadModalProps) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      await uploadVideo(file, name, artist);
      onClose();
    }
  };

  const handleDirectUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setUploading(true);
    setFile(selectedFile);

    const formData = new FormData();
    formData.append("video", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error("Upload failed");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Video upload failed. Please try again.");
      setFile(null);
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Video</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="artist">Artist</Label>
            <Input
              id="artist"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <DragDropArea onFileDrop={setFile} />
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-500 mx-2">or</span>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleDirectUpload}
                accept="video/*"
                className="hidden"
              />
              <Button
                type="button"
                size="sm"
                variant="secondary"
                onClick={triggerFileInput}
                disabled={uploading}
              >
                {uploading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                {uploading ? "Uploading..." : "Choose File"}
              </Button>
            </div>
          </div>
          {file && (
            <p className="text-sm text-green-600">File selected: {file.name}</p>
          )}
          <Button type="submit" disabled={!file || uploading}>
            Upload
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
