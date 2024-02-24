
import { Hero } from "./components/Hero";
import { Services } from "./components/Servises";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">

      <Hero />
      <Services />
    </main>
  );
}
