import ClientSide from "@/components/rendering-techniques/ClientSide";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-blue-500">Rendering Techniques</h1>
      <ClientSide />
    </div>
  );
}
