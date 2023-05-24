import Self from "../Components/raiyan.png";

export default function AboutMe() {
  return (
    <>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#9BE6B1] to-[#2C3A47] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'circle(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Electrical Eng & Comp Sci BS</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Raiyan Ausaf</h1>
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
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Hi! I'm currently studying EECS with a minor in Mathematics @ UC Berkeley. My passion is more directed towards the CS side 
                especially in areas such as Machine Learning, Aritical Intelligence, Cryptography, and Full Stack Development. My first taste of CS
                was at my high school, where I took my first CS class (Java). Following summer, I created a note-taking app implmenting MySQL in Android
                Studios.
              </p>
              <p className="mt-8">
                Aside from university, you can catch me practicing a lot of basketball. 
                I'm a huge GSW fan, and I follow many other sports such as UFC, Boxing, and Cricket. I'm a very social character and would love to hear from you more!
                Please don't hesitate to contact me with my information listed in the contact me page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}