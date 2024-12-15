export async function uploadVideo(file: File, name: string, artist: string) {
  // This is a placeholder function. In a real application, you would handle the file upload to your server or a cloud storage service.
  console.log("Uploading video:", { file, name, artist });

  // Simulating an upload delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Upload complete!");
}
