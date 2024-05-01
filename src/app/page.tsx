import { Header2 } from "@/components/Header2";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { Section3 } from "@/components/Section3";
import { Section4 } from "@/components/Section4";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className=" flex w-screen flex-col items-center overflow-x-hidden">

      {/* header */}
      <Header2 />
      
    <TracingBeam className="px-6">
      {/* Section1 */}
      <Section1 />
      {/* Section2 */}
      <Section2 />
      </TracingBeam>
      {/* Section3 */}
      <Section3 />
      {/* Section4 */}
      <Section4 />
      <div className="w-screen h-screen">

      </div>
    </main>
  );
}
