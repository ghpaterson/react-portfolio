import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Body({ darkMode }) {
  const gitHubUrl = "https://github.com/ghpaterson";
  const linkedInUrl = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <section className="min-h-screen">
          <div className=" mx-24">
            <div className=" min-w-screen h-96 flex justify-start ml-32 gap-20 items-center mt-24 rounded-xl dark:bg-transparent">
              <div className="text-center p-1">
                <h2 className="font-raleway text-5xl py-2 text-bittersweet font-medium md:text-5xl sm:text-4xl dark:text-moonstone">
                  Hi, I'm Graeme.
                </h2>
                <h3 className="text-2xl py-2 text-gray-100 md:text-3xl dark:text-gray-100">
                  Software Developer
                </h3>
                <p className="text-md py-5 leading-8 text-gray-100 md:text-xl max-w-lg mx-auto dark:text-gray-100">
                  Junior Full-Stack software developer with a focus on Frontend
                  development. Makers Academy graduate
                </p>
                <div className="text-3xl flex justify-center gap-16 py-2 text-gray-100 cursor-pointer dark:text-gray-100">
                  <a
                    className="hover:text-bittersweet dark:hover:text-moonstone"
                    href={linkedInUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    className="hover:text-bittersweet dark:hover:text-moonstone"
                    href={gitHubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
