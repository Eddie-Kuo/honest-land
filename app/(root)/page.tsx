import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="z-10 flex flex-col items-center gap-2">
          <h1 className="font-serif text-6xl font-medium">Welcome</h1>
          <p className="font-serif text-sm">to</p>
          <h2 className="font-serif text-7xl">Honest Land</h2>
          <div className=" flex gap-8">
            <p>Integrity</p>
            <p>Transparency</p>
            <p>Respect</p>
          </div>
          <button className="mt-2 rounded-md bg-zinc-900 p-2 text-white">
            Sell us Your Land
          </button>
        </div>
        <Image
          src="/assets/pexels-landscape.jpg"
          fill
          className="absolute overflow-y-hidden object-cover"
          alt="Landing page bg-photo"
        />
      </div>
    </main>
  );
}
