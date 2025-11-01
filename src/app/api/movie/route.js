import { spawn } from "child_process";

export async function GET() {
  const streamUrl = `http://classik-tv.com:80/movie/${process.env.USER_ID}/${process.env.USER_PASS}/402233.mkv`;
  console.log(streamUrl);

  const headers = new Headers();
  headers.set("Content-Type", "video/mp4");

  const ffmpeg = spawn("ffmpeg", [
    "-i",
    streamUrl,
    "-c:v",
    "copy",
    "-c:a",
    "aac",
    "-f",
    "mp4",
    "-movflags",
    "frag_keyframe+empty_moov",
    "pipe:1",
  ]);

  return new Response(ffmpeg.stdout, {
    headers,
  });
}

// const Page = () => {
//   return (
//     <video src="/api/movies" controls autoPlay style={{ width: "100%" }} />
//   );
// };

// export default Page;
