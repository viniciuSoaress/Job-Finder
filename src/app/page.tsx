
import { Hero } from "./components/Hero";
import { Services } from "./components/Servises";
import { WelcomeText } from "./components/WelcomeText";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Hero />
      <Services />

      <div className="w-full mt-12 mb-16">
        <WelcomeText />
      </div>
    </main>
  );
}
