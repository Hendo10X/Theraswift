import {doctor_details} from "./data.js";
import {useState} from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);

    const seeMoreDetails = (item) => {
        setCurrentUser(item);
        setShowModal(true);
    };

    return (
        <>
            <div className="flex justify-center py-3">
                <div></div>
                <input type="search" className="form-input px-4 py-3 rounded-full self-stretch border-light-green-600 focus:border-transparent" placeholder={'Search for any doctor'} />
                <div></div>
            </div>

            <div className="wrapper overflow-auto mb-[250px]">

            <table className="table text-left w-full mt-10 whitespace-nowrap font-poppins text-xs">
               
                <tbody className="text-xs">
                    {doctor_details.map((item, index) => (
                    <tr key={index} className={`${doctor_details.indexOf(item) % 2 === 0 ? 'bg-[#666A661A]' : ''}`}>
                        <td className="pl-[6vw] min-w-[2rem] px-5 py-3">
                        <img className="block w-8 h-8 rounded" src={item.profile_img} alt="doctor's image" />
                        </td>
                        <td className="px-5 py-3">{item.regNo}</td>
                        <td className="px-5 py-3">{item?.full_name}</td>
                        <td className="px-5 py-3">{item?.specialty}</td>
                        <td className="px-5 py-3">{item?.email}</td>
                        <td className="px-5 py-3">{item?.phone_no}</td>
                        <td className="px-5 py-3">{item?.address}</td>
                        <td className="pr-[6vw] text-center px-2 py-5"><button
                                onClick={() => seeMoreDetails(item)}
                                className="text-light-green "
                            >
                                See more details
                            </button>
                    </td>
                    </tr>))}
                </tbody>
               
                </table>                
            </div>


            

            {showModal && (
                <div className={'absolute w-full h-full bg-modal-transparent-bg top-0 right-0 flex items-center justify-center z-10 font-poppins text-base'}>
                    <div
                        onClick={() => setShowModal(false)}
                        className="close-modal absolute top-8 right-12 bg-white p-2 rounded-3xl cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.5rem"
                            height="1.5rem"
                            viewBox="0 0 384 512"
                            fill="#081614"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>

                    <div className="my-modal flex bg-white flex-col py-8 rounded-xl">
                        <h3 className="font-semibold text-2xl px-10 mb-4 text-light-green ">
                            Doctors Details
                        </h3>

                        <div className="flex py-1 text-primary-600 px-10 justify-start">
                            <img className="inline w-12 h-12 rounded" src={currentUser?.profile_img} alt="doctor's image" />
                        </div>

                        <div>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Full name:
                                </span>
                                {currentUser?.full_name}
                            </p>

                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Email address:
                                </span>
                                {currentUser?.email}
                            </p>

                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Specialty:
                                </span>
                                {currentUser?.specialty}
                            </p>

                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Office Address:
                                </span>
                                {currentUser?.address}
                            </p>

                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Registration No:
                                </span>
                                {currentUser?.regNo}
                            </p>

                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Number Of Patients:
                                </span>
                                0{currentUser?.no_patients}
                            </p>
                            <p className="flex justify-center items-center">
                            <Link to='/compose' className="text-light-green border-black/[0.4] text-center border-b-2 w-fit self-center mt-6 mb-2" >Compose Request</Link>
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Doctors;