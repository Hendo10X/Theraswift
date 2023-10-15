import React, { useState } from "react";

const Contact = () => {
    const [closedModal, setClosedModal] = useState(true)

    const handleForm = (e) => {
        e.preventDefault()
    }

    return(
        <>    
        <div className={`bg-black/[0.8] min-h-screen fixed top-0 left-0 w-full justify-center items-center ${closedModal ? 'hidden' : 'flex'}`}>
            <div className="modal h-80 bg-white w-full max-w-md">
        <div className="border-b-2 py-3  w-full text-right">
            <button className="mr-8" onClick={() => setClosedModal(true)}>X</button>
        </div>
        
        <div className="ml-8 mt-10">
            <p className="text-ba">Thank You</p>

            <p className="text-sm mt-8">we will be in touch shortly </p>

            <a href='/manufacturers' className="mt-6 inline-block text-white bg-[#1A4942] py-1 px-10 md:w-auto text-base">
                Done
            </a>
        </div>

            </div>
        </div>
    
    <div className="wrapper py-20 mx-auto px-5">
        <div className="flex flex-col font-poppins mx-auto max-w-lg">
            <div className="max-w-lg">
            <p className="text-xl font-bold">Contact us about Theraswift’s services for 
            pharmaceutical manufacturers.
            </p>
            <p className="text-xl font-medium mt-10">We would love to give you our pitch</p>
        </div>

        <form onSubmit={handleForm} className="mt-10">
            <label htmlFor="name" className="flex flex-col mb-5">
                <span className="font-open-sans text-lg font-medium"> Your Name</span>
                <input type="text" className="mt-4 border-2 border-[#26EF77] border-solid bg-[#D9D9D9] py-3 px-4 rounded-xl" placeholder="John Doe"  />
                <span className="text-sm mt-3">
                    <span className="text-[#F90A0A]">*</span>Required
                </span>
            </label>

            <label htmlFor="name" className="flex flex-col mb-5">
                <span className="font-open-sans text-lg font-medium">Your Tittle</span>
                <input type="text" className="mt-4 border-2 border-[#26EF77] border-solid bg-[#D9D9D9] py-3 px-4 rounded-xl" placeholder="John Doe"  />
                <span className="text-sm mt-3">
                    <span className="text-[#F90A0A]">*</span>Required
                </span>
            </label>

            <label htmlFor="name" className="flex flex-col mb-5">
                <span className="font-open-sans text-lg font-medium">Your Company</span>
                <input type="text" className="mt-4 border-2 border-[#26EF77] border-solid bg-[#D9D9D9] py-3 px-4 rounded-xl" placeholder="Company"  />
                <span className="text-sm mt-3">
                    <span className="text-[#F90A0A]">*</span>Required
                </span>
            </label>

            <label htmlFor="name" className="flex flex-col mb-5">
                <span className="font-open-sans text-lg font-medium">Email</span>
                <input type="text" className="mt-4 border-2 border-[#26EF77] border-solid bg-[#D9D9D9] py-3 px-4 rounded-xl" placeholder="john@mail.com"  />
                <span className="text-sm mt-3">
                    <span className="text-[#F90A0A]">*</span>Required
                </span>
            </label>

            <label htmlFor="name" className="flex flex-col mb-5">
                <span className="font-open-sans text-lg font-medium">Phone Number </span>
                <input type="text" className="mt-4 border-2 border-[#26EF77] border-solid bg-[#D9D9D9] py-3 px-4 rounded-xl" placeholder="08133458756"  />
                <span className="text-sm mt-3">
                    <span className="text-[#F90A0A]">*</span>Required
                </span>
            </label>

            <button className="mt-6 text-white bg-[#1A4942] rounded-lg py-3 px-16 w-full md:w-auto text-lg tracking-wider" onClick={() => setClosedModal(false)}>
                SUBMIT</button>           
        </form>
    </div>
</div>
</>
    )
}

export default Contact;