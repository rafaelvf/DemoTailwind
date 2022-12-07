import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [conditional, setConditional] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tailwind Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {" "}
        {/* md will be the breakpoint for medium screens */}
        <section className="bg-white px-10 dark:bg-gray-900">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              developedbyrafa
            </h1>
            <ul className="flex items-center">
              <li onClick={() => setDarkMode(!darkMode)}>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:text-white" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-text-white px-4 py-2 rounded-md ml-8 cursor-pointer"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 dark:bg-white">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-7xl">
              Rafael Viteri
            </h2>
            <h3 className="text-2xl py-2">Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer that provide services for programming
            </p>
            <div className="flex text-5xl justify-center gap-16 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 transform hover:scale-125 transition-all cursor-pointer">
              <Image
                src="/dev-ed-wave.png"
                layout="fill"
                objectFit="cover"
                alt="cover"
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my ourney as a freelancer as a developer,
              I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500">projects</span> and collaborated
              for startups
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Since the beggining of my journey as a freelancer as a developer,
              I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500">projects</span> and collaborated
              for startups
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src="/design.png"
                alt="s"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegante designgs stuffed for you{" "}
              </p>
              <h4 className="py-4 text-teal-600">Desing tools I use</h4>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src="/code.png"
                alt="s"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegante designgs stuffed for you{" "}
              </p>
              <h4 className="py-4 text-teal-600">Desing tools I use</h4>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src="/consulting.png"
                alt="s"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful designs
              </h3>
              <p className="py-2">
                Creating elegante designgs stuffed for you{" "}
              </p>
              <h4 className="py-4 text-teal-600">Desing tools I use</h4>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
              <p className="text-gray-800 py-1">Photohosp</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-3xl py-1">Portfolio (use case of flex)</div>
          <div>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beggining of my ourney as a freelancer as a developer,
              I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500">projects</span> and collaborated
              for startups
            </p>
            <p className="text-md py-5 leading-8 text-gray-800">
              Since the beggining of my ourney as a freelancer as a developer,
              I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span> consulted for{" "}
              <span className="text-teal-500">projects</span> and collaborated
              for startups
            </p>
          </div>
          <div className="flex flex-col  gap-10 py-10 md:flex-row md:flex-wrap">
            <div className="basis-1/3 flex-1 mx-auto">
              <Image
                src="/web1.png"
                alt="f"
                className="rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="basis-1/3 flex-1 mx-auto">
              <Image
                src="/web2.png"
                alt="f"
                className="rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="basis-1/3 flex-1 mx-auto">
              <Image
                src="/web3.png"
                alt="f"
                className="rounded-lg object-cover"
                width={300}
                height={300}
              />
            </div>
            <div className="basis-1/3 flex-1 mx-auto">
              <Image
                src="/web4.png"
                alt="f"
                className="rounded-lg object-cover "
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
        <section>
          <h1 className="pb-[20px]">
            <span className="text-3xl">Animations</span> (this has a 20px
            padding bottom)
          </h1>
          <div className="flex items-center justify-center p-10 bg-red-500 hover:bg-cyan-500 rounded mb-2 w-5/6 transition-all duration-500">
            Hover me!
          </div>
          <Image
            src="/web4.png"
            alt="f"
            className="rounded-lg object-cover animate-pulse"
            width={300}
            height={300}
          />
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 transform hover:scale-125 transition-all cursor-pointer">
            <Image
              src="/dev-ed-wave.png"
              layout="fill"
              objectFit="cover"
              alt="cover"
            />
          </div>
        </section>
        <section>
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl">Reusing Classes with Tailwind </span>
          </h1>
          <div className="button button--action">action</div>
          <div className="button button--success">success</div>
          <div className="button button--warning">warning</div>
        </section>
        <section>
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl">Conditional Classes with Tailwind </span>
          </h1>
          <div
            className="button button--change flex justify-center"
            onClick={() => setConditional(!conditional)}
          >
            Press to change class of button below
          </div>
          <div
            className={
              conditional
                ? "button button--conditional"
                : "button button--conditional button--conditional--open"
            }
          >
            success
          </div>
        </section>
        <section className="mb-10">
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl">
              Grid Example{" "}
              <span className="text-sm">(resize screen to see)</span>
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <div className="bg-red-400 h-24"></div>
            <div className="bg-yellow-400 h-24"></div>
            <div className="bg-green-400 h-24"></div>
            <div className="bg-blue-400 h-24"></div>
            <div className="bg-pink-400 h-24"></div>
            <div className="bg-purple-400 h-24"></div>
          </div>
        </section>
        <section className="mb-10">
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl">
              Another Grid Example{" "}
              <span className="text-sm">(resize screen to see)</span>
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            <div className="bg-red-400 h-24 col-span-4"></div>
            <div className="bg-yellow-400 h-24 w-full "></div>
            <div className="bg-green-400 h-24 w-full"></div>
            <div className="bg-blue-400 h-24 w-full col-span-2"></div>
            <div className="bg-pink-400 h-24 w-full md:col-span-4"></div>
            <div className="bg-purple-400 h-24 w-full col-span-4"></div>
          </div>
        </section>
        <section className="mb-10">
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl">
              Import a font & custom classes{" "}
              <span className="text-sm">(resize screen to see)</span>
            </span>
          </h1>
          <div className="font-Kenia text-sm text-red-500 llf:text-lg llf:text-black hover:text-gold-light">
            This a an example of an imported font from Google
          </div>
          <div className="text-reallyBig">This is a really big text</div>
        </section>
        <section className="mb-10 ">
          <h1 className="pb-[20px] pt-6">
            <span className="text-3xl ">
              Absolute position image{" "}
              <span className="text-sm">(resize screen to see)</span>
            </span>
          </h1>
          <div className="relative h-[300px] w-5/6 border-solid border-2 border-indigo-600">
            <Image
              src="/design.png"
              alt="s"
              width={150}
              height={150}
              className="mx-auto absolute top-0 left-0"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
