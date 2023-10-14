import  React from 'react';

const placeholder  = 
`Lorem ipsum dolor sit amet consectetur. 
Varius orci tristique integer placerat ultricies. 
Cras fringilla sapien pellentesque et pulvinar mi. Est ante ac in metus sed sit. 
At neque diam id ultrices interdum interdum sodales viverra non. 
Purus magna tincidunt varius interdum risus nulla cursus. 
Erat urna consectetur sit eget at viverra at. 
Lobortis a amet sit ipsum tellus nunc interdum.`

const ComposeRequest = () => {
    return(
        <div className='my-10 mx-auto max-w-[93vw] lg:max-w-[90vw]'>
            <h1 className='text-[24px] font-bold' >Compose Message</h1>

            <h2 className='text-[20px] font-bold my-6'>Title:</h2>

            <form className=''>
                <input className='block font-poppins border-b-[1px] border-[#0000001A] py-3 text-[#00000080] mt-3 text-base w-[98%] md:w-[80%] px-4 focus:outline-[#00000080] focus:text-[#222]' type="text" placeholder='Doctors Name / Prescriber' />
                <input className='block font-poppins border-b-[1px] border-[#0000001A] py-3 text-[#00000080] mt-3 text-base w-[98%] md:w-[80%] px-4 focus:outline-[#00000080] focus:text-[#222]' type="text" placeholder='Patients Name' />

                <textarea type="text" className='block w-full font-poppins md:w-[80%] resize-y text-[#111] my_placeholder px-4 mt-20 focus:outline-[#00000080] focus:text-[#222]'rows='7' placeholder={placeholder} />

                <button className='block bg-primary-50  text-lg font-poppins py-2 px-10 text-white ml-4 mt-10 rounded-md' >
                    Send
                </button>
            </form>

        </div>
    );
}

export default ComposeRequest;