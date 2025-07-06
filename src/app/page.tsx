import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Features from "@/components/Features";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="w-screen min-h-screen bg-[#F3F3F3]">
      <About />
      <Work />
      <Achievement />
      <Features />
    </main>
  );
}
