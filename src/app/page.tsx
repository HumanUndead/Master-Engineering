import About from "@/components/Home/About";
import Achievement from "@/components/Home/Achievement";
import Features from "@/components/Home/Features";
import Testimonials from "@/components/Home/Testimonials";
import Work from "@/components/Home/Work";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen bg-[#F3F3F3]">
      <About />
      <Work />
      <Achievement />
      <Features />
      <Testimonials />
    </main>
  );
}
