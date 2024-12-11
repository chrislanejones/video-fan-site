// app/api/upload/route.ts
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const video = formData.get("video") as File;

    if (!video) {
      return NextResponse.json({ error: "No video uploaded" }, { status: 400 });
    }

    const bytes = await video.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const videoPath = path.join(
      process.cwd(),
      "public/_next-video",
      video.name
    );
    await writeFile(videoPath, buffer);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to upload video" },
      { status: 500 }
    );
  }
}
