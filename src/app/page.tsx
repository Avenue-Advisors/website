import Nav from "@/components/Nav";
import StoryFlow from "@/components/StoryFlow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <Nav />
        <StoryFlow />
        <CTA />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
