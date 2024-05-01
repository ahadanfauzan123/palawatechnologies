import { Header2 } from "@/components/Header2";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className=" flex min-h-[300vh] flex-col items-center overflow-x-hidden">

      {/* header */}
      <Header2 />
      
    <TracingBeam className="px-6">
      {/* Section1 */}
      <Section1 />
      {/* Section2 */}
      <Section2 />
      </TracingBeam>
    </main>
  );
}
