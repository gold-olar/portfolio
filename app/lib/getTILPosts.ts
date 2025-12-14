import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface TILPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

export function getTILPosts(): TILPost[] {
  const tilDirectory = path.join(process.cwd(), "content/til");

  try {
    if (!fs.existsSync(tilDirectory)) {
      return [];
    }

    const files = fs.readdirSync(tilDirectory);
    const markdownFiles = files.filter((file) => file.endsWith(".md") && file !== "example.md");

    const posts = markdownFiles.map((file) => {
      const filePath = path.join(tilDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(".md", ""),
        title: data.title || file.replace(".md", ""),
        date: data.date || "",
        content,
      };
    });

    // Sort by date, newest first
    return posts.sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error reading TIL posts:", error);
    return [];
  }
}
