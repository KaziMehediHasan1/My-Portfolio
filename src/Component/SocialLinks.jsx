import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-cyan-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                    <a href="https://www.linkedin.com/feed" className='flex text-white justify-between items-center w-full' target='_blank'>
                        <>
                            LinkedIn <FaLinkedin size={30}></FaLinkedin>
                        </>
                    </a>
                </li>
                {/* LinkedIn */}
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-cyan-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                    <a href="" className='flex text-white justify-between items-center w-full'>
                        <>
                            GitHub <FaGithub size={30}></FaGithub>
                        </>
                    </a>
                </li>

                {/* mail */}
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-cyan-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                    <a href="" className='flex text-white justify-between items-center w-full'>
                        <>
                            Mail <HiOutlineMail size={30}></HiOutlineMail>
                        </>
                    </a>
                </li>

                {/* resume */}
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-cyan-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-200'>
                    <a href="" className='flex text-white justify-between items-center w-full'>
                        <>
                            Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                        </>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialLinks;