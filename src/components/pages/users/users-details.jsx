import { useState } from "react";
import { Link } from "react-router-dom";

const user_details = [
    {
        userId: 2345654,
        firstname: "Olasco",
        lastname: "Deji",
        email: "olascodeji@gmail.com",
        phone_no: "08122455678",
        date_of_birth: "12/08/23",
        age: 50,
        address: "17,Ola str. Yaba, Lagos",
        insurance: "azertis",
        meds: "Emzor Paracetamol",
        new_order: "Emzor Paracetamol",
        new_order_address: "17,Ola str. Yaba, Lagos",
        delivery_time_for_order: "5:00pm",
        family_member_details: "Adebayo Austin Deji",
        previous_order: "Emzor Parecetamol",
        allergy: "Rain water",
        next_refill: "12/09/23",
        role: 'Manufacturers',
    },

    {
        userId: 1545954,
        firstname: "Chioma",
        lastname: "Nnaemeka",
        email: "chioma@gmail.com",
        phone_no: "08122435658",
        date_of_birth: "08/05/23",
        age: 25,
        address: "24,Ade str. Alaba, Lagos",
        insurance: "Little finger",
        meds: "Emzor Paracetamol",
        new_order: "Emzor Paracetamol",
        new_order_address: "17,Ola str. Yaba, Lagos",
        delivery_time_for_order: "7:00pm",
        family_member_details: "Adebayo Austin Deji",
        previous_order: "Emzor Parecetamol",
        allergy: "Chocolates",
        next_refill: "18/05/23",
        role: 'Doctor',
    },
];

const UserDetails = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentUser, setCurrentUser] = useState([]);
    

    const seeMoreDetails = (item) => {
        setCurrentUser(item);
        setShowModal(true);
    };

    return (
        <>
        <div className="wrapper overflow-auto">
            <table className="table text-left w-full mt-10 whitespace-nowrap font-poppins text-sm">
                <thead>
                    <tr className="font-medium">
                        <td className="pl-[6vw] px-2 py-5">UserId</td>
                        <td className="px-2 py-5">Firstname</td>
                        <td className="px-2 py-5">Lastname</td>
                        <td className="px-2 py-5">Email</td>
                        <td className="px-2 py-5">Phone No.</td>
                        <td className="px-2 py-5">Meds</td>
                        <td className="px-2 py-5">New_order</td>
                        <td className="px-2 py-5">Delivery Time</td>                        
                        <td className="px-2 py-5">Previous Order</td>
                        <td className="px-2 py-5">Role</td>
                        <td className="pr-[6vw] text-center px-2 py-5">...</td>
                    </tr>
                </thead>

                <tbody className="text-xs">
                    {user_details.map (item =>
                    <tr key={item?.userId} className={`${user_details.indexOf(item) % 2 === 0 ? 'bg-[#666A661A]' : ''}`}>
                        <td className="pl-[6vw] px-2 py-5">{item?.userId}</td>
                        <td className="px-2 py-5">{item?.firstname}</td>
                        <td className="px-2 py-5">{item?.lastname}</td>
                        <td className="px-2 py-5">{item?.email}</td>
                        <td className="px-2 py-5">{item?.phone_no}</td>
                        <td className="px-2 py-5">{item?.meds}</td>
                        <td className="px-2 py-5">{item?.new_order}</td>
                        <td className="px-2 py-5">{item?.delivery_time_for_order}</td>
                        <td className="px-2 py-5">{item?.previous_order}</td>
                        <td className="px-2 py-5">{item?.role}</td>
                        <td className="pr-[6vw] text-center px-2 py-5"><button
                                onClick={() => seeMoreDetails(item)}
                                className="text-light-green "
                            >
                                See more details
                            </button>
                    </td>
                    </tr>)}
                </tbody>
               
                </table>                
            </div>
            

            {showModal && (
                <div className="absolute py-20 overflow-y-auto w-full min-h-[100vh] bg-modal-transparent-bg top-0 right-0 flex items-center justify-center z-10 font-poppins text-base">
                    <div
                        onClick={() => setShowModal(false)}
                        className="close-modal absolute top-8 right-[10vw] bg-white p-2 rounded-3xl cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1rem"
                            height="1rem"
                            viewBox="0 0 384 512"
                            fill="#081614"
                        >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                        </svg>
                    </div>

                    <div className="my-modal flex bg-white flex-col py-8 rounded-xl">
                        <h3 className="font-semibold text-2xl px-10 mb-4 text-light-green ">
                            User Information
                        </h3>
                        <div>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    UserId:
                                </span>
                                {currentUser?.userId}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Firstname:
                                </span>
                                {currentUser?.firstname}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Lastname:
                                </span>
                                {currentUser?.lastname}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Email:
                                </span>
                                {currentUser?.email}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Phone Number:
                                </span>
                                {currentUser?.phone_no}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Date of birth:
                                </span>
                                {currentUser?.date_of_birth}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Age:
                                </span>{" "}
                                {currentUser?.age}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Insurance:
                                </span>
                                {currentUser?.insurance}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Meds:
                                </span>
                                {currentUser?.meds}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    New order:
                                </span>
                                {currentUser?.new_order}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    New order address:
                                </span>
                                {currentUser?.new_order_address}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Delivery time for order:
                                </span>
                                {currentUser?.delivery_time_for_order}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Family member details:
                                </span>
                                {currentUser?.family_member_details}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Previous Order:
                                </span>
                                {currentUser?.previous_order}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Allergy:
                                </span>
                                {currentUser?.allergy}
                            </p>
                            <p className="flex py-1 text-primary-600 px-10 justify-between">
                                <span className="text-gray-700 font-light ">
                                    Next refill:
                                </span>
                                {currentUser?.next_refill}
                            </p>
                        </div>

                        {currentUser.role === 'Doctor' && <Link to='/compose' className="text-light-green border-black/[0.4] border-b-2 w-fit self-center mt-6 mb-2" >Compose Request</Link>}
                    </div>
                </div>
            )}
        </>
    );
};

export default UserDetails;
