import {readdir, readFile} from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export default async function seperator(slug){
    const buffer = await readFile(`./content/reviews/${slug}.md`, 'utf8');
    const {content, data: {title, date, img}} = matter(buffer)
    const text = marked(content);
    return {title, date, img, text};
};

export async function listfiles(){
    const files = await readdir('./content/reviews/');
    const slugs = files.map((file) => file.slice(0, -3));
    return slugs
};