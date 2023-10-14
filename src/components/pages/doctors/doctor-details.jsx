const DoctorDetails = () => {
    const doctor_details = [
        {
            regNo: 23456946471,
            full_name: "Emmanuel Ola",
            email: "emmanuelola54@gmail.com",
            phone_no: "08122455678",
            specialty: "12/08/23",
            address: "17,Ola str. Yaba, Lagos",
        },

        {
            regNo: 23456946471,
            full_name: "Abdullahi Abba",
            email: "emmanuelola54@gmail.com",
            phone_no: "08122455678",
            specialty: "12/08/23",
            address: "17,Ola str. Yaba, Lagos",
        },
    ];

  return (
      <>
          <div className="my-users-grid grid my-20">
              {doctor_details.map((item) => (
                  <div
                      className="grid grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 font-poppins text-xs font-light px-12 py-5 gap-4"
                      key={item.id}
                  >
                      <div className="item ">{item.regNo}</div>
                      <div className="item ">Dr. {item.full_name}</div>
                      <div className="item user-email col-span-2 ">
                          {item.email}
                      </div>
                      <div className="item user-email col-span-2 ">
                          {item.specialty}
                      </div>
                      <div className="item hidden xl:block">
                          {item.address}
                      </div>
                      <div className="item">
                          <link href={'#'}
                              className="text-light-green "
                          >
                              See more details
                          </link>
                      </div>
                  </div>
              ))}
          </div>
      </>
  )
}

export default DoctorDetails;