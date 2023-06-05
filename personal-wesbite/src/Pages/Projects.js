import React from "react";
import "../Projects.css";
import LiveTelemetry from "../ProjImages/telemetry.jpg";
import Receiptify from "../ProjImages/receiptify.jpg";
import Bot from "../ProjImages/bot.JPG";
import Scheme from "../ProjImages/scheme.png";
import Discord from "../ProjImages/discord.jpg";
import Ants from "../ProjImages/antsVsBees.png";
import World from "../ProjImages/byow.png";
import Deque from "../ProjImages/deque.png";

export default function Projects() {
  return (
    <>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20" style={{marginTop: "10rem", textAlign: "center"}}>
            A lot of the code for these projects are in private repositories to protect the integrity of my work (and to not get flagged for 
            academic dishonesty as some of these are school projects). If you would like access to the code, please email me: raiyanausaf14@icloud.com{" "}
          </div>
      </div>
      <div class="bg-white">
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
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8">
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={LiveTelemetry}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                      Live Telemetry System
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        Developed a custom data acquisition system that integrats
                      CAN protocol to wirelessly send curical sensor info such
                      as RPM, Radiator Temperature, Acceleration, and etc
                      through wireless antennas. On the recieving end (desktop
                      app), we are currently working on processing the data that
                      is recieved as serial data to be able to visualize it on
                      our application (Electron JS and Python).
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Receiptify}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                      Receiptify Clone
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        A planned project that mimics the functionality of The
                      Recieptify Application (displays most commonly listened
                      songs for the month) along with added features such as a
                      playlist randomizer, where a random new playlist is
                      created from your playlists to get a hybrid taste of
                      different songs all at once!
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Bot}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                      S1XT33N
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        A voice controlled robot that can go left, right,
                        straight for a bit, or straight for a while!
                        Additionally, an LED display was added to showcase what
                        command was classified and the distance traveled by the
                        car. The code uses linear algebra concepts such as PCA
                        to help implement the voice classification.
                        Additionally, the robot was trained by me and my
                        partner's voice samples for our training data.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Scheme}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                        Scheme Interpreter
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        A developed Python program to interpret Scheme! Script performed lexical analysis and mapped special forms to python
                        functions. Program was implemented tail recurisvely with mutual recursion when calling eval and apply functions.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Discord}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                        GeoGuesser Discord Bot
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        A planned project where a discord bot that allows you to play the geoGuesser game in your discord server! Random long/lat coordinates are generated and using Google Maps API 
                        a picture is shown that allows you to guess the place (Integrated with Node.js and Discord API).
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Ants}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                        Ants Vs Bees
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        Play a tower defense game called Ants Vs. SomeBees! 
                        The goal is to populate your colony with different types of ants that protect the queen ant from the bees
                        invading the terriorties! (This game was inspired by Plants Vs Zombies).
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={World}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                        Build Your Own World
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        A randomly generated tile based world with walls and hallways for you to explore! Some additional nice features such as the time, hover properities, and light toggle
                        are implemented to better your expeirence traversing this new world! The state of your current world can be saved and loaded for later, should you desire!
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#" class="group flip-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img
                        src={Deque}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                      <h3 class="mt-4 text-sm text-gray-700">
                        Deque
                      </h3>
                    </div>
                    <div class="flip-card-back">
                      <p>
                        {" "}
                        Implemented an underlying interface that utilizes arrays to basically mimic how ArrayLists and LinkedLists are implemented in the Java language.
                        Properties such as add, remove, and get were all implemented using the same interface.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
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
        </div>
      </div>
    </>
  );
}