import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Profile from '../assets/Profile.jpg'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-ful via-black  bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-2xl  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Junior Front-End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae rem, quaerat quasi magni quos sed voluptatum adipisci laboriosam exercitationem suscipit quia labore aut odit, minus iure dolorum voluptas natus sapiente cum! Aperiam id expedita, delectus illo amet magnam minus!
          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
            <img src={Profile} alt="my profile" className="rounded-2xl mx-auto md:h-[450px] md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
