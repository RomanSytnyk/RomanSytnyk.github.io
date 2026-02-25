import MyStory from "@/components/MyStory";
import BeyondWork from "@/components/BeyondWork";
import TechStack from "@/components/TechStack";
import Articles from "@/components/Articles";
import OpenSource from "@/components/OpenSource";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <MyStory />
        <TechStack />
        <BeyondWork />
        <Articles />
        <OpenSource />
        <Education />
      </main>
      <Footer />
    </div>
  );
};

export default Index;