
import img1 from '../assets/edu.jpg'
import img2 from '../assets/eye.jpg'
import img3 from '../assets/medical.jpg'
import img4 from '../assets/pen.jpg'
import img5 from '../assets/Profile.jpg'
import img6 from '../assets/Weekly .jpg'
const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check Out Some of my work right here</p>
        </div>

        {/* card */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img1} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          {/* card2 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img2} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          {/* card3 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img2} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          {/* card4 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img1} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          {/* card5 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img1} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
          {/* card6 */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img src={img1} alt="" className="rounded-md duration-200 hover:scale-105" />
            <div className='flex items-baseline justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
