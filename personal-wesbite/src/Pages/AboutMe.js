import Self from "../Components/raiyan.png";
import raiyanResume from "../raiyanResume.pdf";

export default function AboutMe() {
  return (
    <>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9BE6B1] to-[#2C3A47] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "circle(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7 text-indigo-600">
                    Electrical Eng & Comp Sci BS
                  </p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Raiyan Ausaf
                  </h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    Thanks for visiting!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                src={Self}
                alt=""
              />
            </div>
            <div
              className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
              style={{ marginTop: "10rem" }}
            >
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  <p>
                    Hi! I'm currently studying EECS @ UC Berkeley. My passion is
                    more directed towards the CS side especially in areas such
                    as Machine Learning, Aritical Intelligence, Cryptography,
                    and Full Stack Development. I'm currently working on some
                    side projects of mine along with working a TA position at
                    X-Camp (Data Structures and Algorithms Class). For my fall
                    semester, I'll be focused on recruiting for internships
                    along with taking some demanding classes such as EECS 126
                    (Probability and Random Proccesses) and CS170 (Efficent
                    Algorithms and Intractable Problems).
                  </p>
                  <p className="mt-8">
                    Attatched below is my resume (in PDF form) to download if
                    you want to know more about my work and experience. If you
                    have any more questions after reading my resume, please feel
                    free to contact me!
                  </p>
                  <a
                    href={raiyanResume}
                    download="raiyanResume.pdf"
                    class="inline-flex items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                    style={{ marginTop: "10rem" }}
                  >
                    <span class="w-full">Download Resume</span>
                    <svg
                      aria-hidden="true"
                      class="w-6 h-6 ml-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}