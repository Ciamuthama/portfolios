import Image from "next/image";
import Link from "next/link";
import { TextLoop } from "../../components/motion-primitives/text-loop";
import { TextRoll } from "../../components/motion-primitives/text-roll";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 max-sm:grid-rows-2  items-center justify-items-center h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="bg-[#e1c6b5] lg:min-h-screen w-full h-full flex items-center justify-center relative">
        <Link className=" text-[#004030]" href="/personal">
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src="/profile-pic.png"
              alt="personal portfolio"
              className=" !relative shadow-xl rounded-full"
              fill
            />
          </div>
          <div className="inline-flex whitespace-pre-wrap text-sm">
            Dive into my{" "}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span>journey!</span>
              <span>ideas!</span>
              <span>creations!</span>
            </TextLoop>
          </div>
        </Link>
        <div className="absolute top-2 right-2">
          <TextRoll
          
            variants={{
              enter: {
                initial: { rotateX: 0, filter: "blur(0px)" },
                animate: { rotateX: 90, filter: "blur(2px)" },
              },
              exit: {
                initial: { rotateX: 90, filter: "blur(2px)" },
                animate: { rotateX: 0, filter: "blur(0px)" },
              },
            }}
            className=" text-[#004030] font-medium"
          >
            Personal
          </TextRoll>
        </div>
      </div>
      <div className="bg-[#004030] lg:min-h-screen w-full h-full flex items-center justify-center relative">
        <Link className="text-xl text-[#e1c6b5]" href="/agency">
          <div className="relative w-20 h-20 mx-auto">
            <Image
              src="/ciado.png"
              alt="personal portfolio"
              className=" !relative shadow-lg rounded-full"
              fill
            />
          </div>
          <div className="inline-flex whitespace-pre-wrap text-sm !font-light">
            See how we bring visions to life for{" "}
            <TextLoop
              className="overflow-y-clip"
              transition={{
                type: "spring",
                stiffness: 900,
                damping: 80,
                mass: 10,
              }}
              variants={{
                initial: {
                  y: 20,
                  rotateX: 90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
                animate: {
                  y: 0,
                  rotateX: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                },
                exit: {
                  y: -20,
                  rotateX: -90,
                  opacity: 0,
                  filter: "blur(4px)",
                },
              }}
            >
              <span>brands!</span>
              <span>businesses!</span>
            </TextLoop>
          </div>
        </Link>
        <div className="absolute top-2 left-2 text-[#e1c6b5] font-medium">
          <TextRoll
            variants={{
              enter: {
                initial: { rotateX: 0, filter: "blur(0px)" },
                animate: { rotateX: 90, filter: "blur(2px)" },
              },
              exit: {
                initial: { rotateX: 90, filter: "blur(2px)" },
                animate: { rotateX: 0, filter: "blur(0px)" },
              },
            }}
            className="text-[#e1c6b5] !font-normal"
          >
            Agency
          </TextRoll>
        </div>
      </div>
    </div>
  );
}
