import Heading from "@/component/Heading";
import seperator from "@/lib/reviews.js";
import ShareLinkButton from "@/component/sharelinkbutton";

export async function generateMetadata({ params: { slug } }) {
    const review = await seperator(slug);
    return {
      title: review.title,
    };
  };
   
export default async function GamePage(props){
    const review = await seperator(props.params.slug);
    return(
        <>
            <Heading>{review.title}</Heading>
            <div className="flex gap-4 items-baseline">
            <p className="italic py-1">{review.date}</p>
            <ShareLinkButton />
            </div>
            <img src={review.img} width="640" height="360" className="rounded py-2"/>
            <article className="w-3/4 py-2" dangerouslySetInnerHTML={{__html: review.text}}/>
        </>
    );
};

