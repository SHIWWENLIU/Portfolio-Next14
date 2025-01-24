"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <div className="flex items-center gap-6">
            <h1 className="text-[50px] text-white font-semibold">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                {" "}
                Shawn&apos;s Portfolio
              </span>
            </h1>
          </div>
          
          <p className="text-gray-200 text-xl">
            Full Stack Developer 
          </p>
          
          <p className="text-gray-300 text-lg max-w-[600px]">
            Focused on creating modern web applications. 4+ years of development experience, passionate about frontend innovation and user experience design.
          </p>

          <div className="flex gap-8 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">20+</div>
              <div className="text-gray-300">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500">15+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[300px]"
            >
              View Skills
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[300px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn More
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
