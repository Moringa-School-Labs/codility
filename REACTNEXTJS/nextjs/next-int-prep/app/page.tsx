import ClientSide from "@/components/rendering-techniques/ClientSide";
import IncrementalStaticReg from "@/components/rendering-techniques/IncrementalStaticReg";
import ServerSide from "@/components/rendering-techniques/ServerSide";
import StaticSiteGen from "@/components/rendering-techniques/StaticSiteGen";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-y-3 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-blue-500">Rendering Techniques</h1>
      <ClientSide />
      <ServerSide />
      <StaticSiteGen />
      <IncrementalStaticReg/>
    </div>
  );
}
