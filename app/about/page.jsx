import Heading from "@/component/Heading";

export const metadata= {
    title: 'About',
    description: 'We make underrated game overrated in our Blog :)'
  }
  

export default function AboutPage(){
    return(
        <>
            <Heading>About page.</Heading>
            <p className="py-2">We make underrated game overrated in our Blog :)</p>
        </>
    );
};