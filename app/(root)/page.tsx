import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center bg-yellow-200/90">
        <Header />
        <h2 className="z-10">Hello World</h2>
        <Image
          src="/assets/pexels-landscape.jpg"
          fill
          className="absolute overflow-y-hidden object-cover"
          alt="Picture of land"
        />
      </div>
    </main>
  );
}
