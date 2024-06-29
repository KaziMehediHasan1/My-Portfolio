import git from "../assets/Experience/git.png";
import css from "../assets/Experience/css.png";
import html from "../assets/Experience/html.svg";
import js from "../assets/Experience/js.png";
import tailwind from "../assets/Experience/tailwind.png";
import react from "../assets/Experience/react.svg";
import next from "../assets/Experience/nextjs.svg";
import vsCode from "../assets/Experience/vs.svg";
import express from "../assets/Experience/express.png";
import mongodb from "../assets/Experience/mongodb.png";
import node from "../assets/Experience/node.png";
const Experience = () => {
  return (
    <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center items-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
          <p className="py-6 ">Technologies I've Worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-10 sm:px-0">
            {/* card */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-800">
            <img src={vsCode} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">VS Code</p>
          </div>
            {/* card2 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
            <img src={git} alt="Code-Editor" className="w-20 mx-auto bg-white" />
            <p className="mt-3">GitHub</p>
          </div>
            {/* card3 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
            <img src={html} alt="Code-Editor" className="w-20 mx-auto " />
            <p className="mt-3">HTML</p>
          </div>
            {/* card4 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
            <img src={css} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">CSS</p>
          </div>
            {/* card5 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
            <img src={tailwind} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">Tailwind CSS</p>
          </div>
            {/* card 6*/}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
            <img src={js} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">JavaScript</p>
          </div>
            {/* card7 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-700">
            <img src={react} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">React JS</p>
          </div>
            {/* card8 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white">
            <img src={next} alt="Code-Editor" className="w-20 mx-auto bg-white p-2" />
            <p className="mt-3">Next JS</p>
          </div>
            {/* card9 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-400">
            <img src={node} alt="Code-Editor" className="w-20 mx-auto" />
            <p className="mt-3">Node JS</p>
          </div>
            {/* card10 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-700">
            <img src={express} alt="Code-Editor" className="w-20 mx-auto bg-white" />
            <p className="mt-3">Express JS</p>
          </div>
          {/* card11 */}
          <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
            <img src={mongodb} alt="Code-Editor" className="w-20 mx-auto bg-white" />
            <p className="mt-3">MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
