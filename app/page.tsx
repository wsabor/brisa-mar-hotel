import { About } from "@/components/sections/About";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Rooms } from "@/components/sections/Rooms";
import { ScrollSequence } from "@/components/sections/ScrollSequence";
import { Testimonials } from "@/components/sections/Testimonials";
import { siteContent } from "@/content/site";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero {...siteContent.hero} />
      <ScrollSequence {...siteContent.scrollSequence} />
      <About {...siteContent.about} />
      <Rooms {...siteContent.rooms} />
      <Experience {...siteContent.experience} />
      <Gallery {...siteContent.gallery} />
      <Testimonials {...siteContent.testimonials} />
      <Booking {...siteContent.booking} />
      <Contact {...siteContent.contact} />
      <Footer {...siteContent.footer} />
    </main>
  );
}
