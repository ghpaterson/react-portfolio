import Image from "next/image";
import titlelight2 from "../public/light/titlelight2.png";
import lighthero from "../public/light/lighthero.png";

export default function Body({ darkMode }) {
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="flex flex-col justify-center items-center my-20 lg:flex-row">
          <div>
            <Image
              id="title-image"
              src={titlelight2}
              width={400}
              alt="title"
              priority
            />
          </div>

          <div>
            <Image
              id="hero-image"
              src={lighthero}
              width={500}
              alt="hero"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
