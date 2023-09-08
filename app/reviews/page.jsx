import Link from "next/link";
import Heading from "@/component/Heading";
import { listfiles } from "@/lib/reviews";

export const metadata= {
  title: 'Game review',
}

export default async function ReviewsPage(){
    const slugs = await listfiles();
    return(
        <>
        <Heading>Game review.</Heading>
        <p className="py-2 text-center">Making underrated games overrated :)</p>
        <ul>
        {slugs.map(slug => (
          <li><Link key={slug} className="text-cyan-700" href={`/reviews/${slug}`}>
            {slug}
          </Link></li>
        ))}
        </ul>
      </>
    );
};