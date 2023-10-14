import { useState } from "react";

const Dispense = () => {
    // Information from form that does not change
    const [userDetails, setUserDetails] = useState({
        fullname: "",
        dob: "",
        email: "",
        most_used_med: "",
        prescriber: "",
        dispenser: "",
        enrolee_name: "",
        enrolee_no: "",
        hmo: "",
    });

    //Information from form that changes in order to add
    //more medications
    const [medDetails, setMedDetails] = useState({
        name_of_drug: "",
        quantity: "",
        dosage: "",
        date: "",
        refill_date: "",
        no_of_repeat: "",
    });

    //empty medications details to reseting medication input
    const empty_med_details = {
        name_of_drug: "",
        quantity: "",
        dosage: "",
        date: "",
        refill_date: "",
        no_of_repeat: "",
    };

    //Array containing meds
    const array_of_meds = [];

    //Handle adding more meds to form
    const addMed = () => {
        setDisable(true);
        const new_array_of_meds = [...array_of_meds, medDetails];
        setMedDetails(empty_med_details);
        scrollToTop();
    };

    //Disable user details input before adding new meds
    const [isDisabled, setDisable] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    //scrolling to top
    const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    //Change Page display to print when use clicks proceed button
    const [proceedToPrint, setProceedToPrint] = useState(false);

    return (
        <>
            {/* Form for Medication */}
            {!proceedToPrint && (
                <div className="dispense-wrapper min-h-[90vh]">
                    <div className="flex justify-center">
                        <div className="dispense-container font-poppins text-primary-700 w-fit">
                            <h2
                                className="dispense-heading w-fit flex flex-col mt-6 mb-14
                relative font-extrabold text-l after:content-[''] after:absolute
                after:bg-primary-800 after:inline-block after:w-full
                after:h-1 after:-bottom-2 "
                            >
                                RX:00001
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col w-fit items-center"
                            >
                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="fullname"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Full Name
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.fullname}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        fullname:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="fullname"
                                                type="text"
                                                placeholder="Abdullahi Alabi"
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="date-of-birth"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Date of Birth
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.dob}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        dob: event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="date-of-birth"
                                                type="text"
                                                placeholder="27-01-97"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="email"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Email Address
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.email}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        email: event.target
                                                            .value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="email"
                                                type="text"
                                                placeholder="abdullahialabi@gmail.com"
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="most-use-med"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Most Used Medication
                                            <input
                                                disabled={isDisabled}
                                                value={
                                                    userDetails.most_used_med
                                                }
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        most_used_med:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="most-use-med"
                                                type="text"
                                                placeholder="Amlodipine"
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="prescriber"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Prescriber
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.prescriber}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        prescriber:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="prescriber"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="dispenser"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Dispenser
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.dispenser}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        dispenser:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="dispenser"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="name-of-drug"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Name of Drug
                                            <input
                                                value={medDetails.name_of_drug}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        name_of_drug:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="name-of-drug"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="quantity"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Quantity
                                            <input
                                                value={medDetails.quantity}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        quantity:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="quantity"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="dosage"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Dosage
                                            <input
                                                value={medDetails.dosage}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        dosage: event.target
                                                            .value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="dosage "
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="date"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Date
                                            <input
                                                value={medDetails.date}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        date: event.target
                                                            .value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="date"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="refill-date"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Refill Date
                                            <input
                                                value={medDetails.refill_date}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        refill_date:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="refill-date"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="hmo"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            HMO( if applicable )
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.hmo}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        hmo: event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="hmo"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="enrolee-name"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Enrolee name
                                            <select
                                                disabled={isDisabled}
                                                value={userDetails.enrolee_name}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        enrolee_name:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="enrolee-name"
                                                type="text"
                                                placeholder="HMOs"
                                            >
                                                <option value="hygei">
                                                    HYGEIA HMO
                                                </option>
                                                <option value="total-health">
                                                    TOTAL HEALTH TRUST HMO
                                                </option>
                                                <option value="intergrated-healthcare">
                                                    INTEGRATED HEALTHCARE
                                                    LIMITED
                                                </option>
                                                <option value="avon">
                                                    AVON HMO
                                                </option>
                                                <option value="aiico">
                                                    AIICO MULTI-SHIELD NIG. LTD
                                                </option>
                                                <option value="princeton">
                                                    PRINCETON HEALTH LIMITED
                                                </option>
                                                <option value="clearline">
                                                    CLEARLINE INTERNATIONAL
                                                    LIMITED (HMO)
                                                </option>
                                                <option value="reliance">
                                                    RELIANCE HMO
                                                </option>
                                                <option value="swift">
                                                    SWIFT HMO
                                                </option>
                                            </select>
                                        </label>
                                    </div>

                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="enrollee-number"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Enrollee number
                                            <input
                                                disabled={isDisabled}
                                                value={userDetails.enrolee_no}
                                                onChange={(event) =>
                                                    setUserDetails({
                                                        ...userDetails,
                                                        enrolee_no:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="enrollee-number"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="gap-x-48 md:flex">
                                    <div className="input-container my-10">
                                        <label
                                            htmlFor="num-repeat"
                                            className="text-black font-bold text-l block ml-4"
                                        >
                                            Number of repeat
                                            <input
                                                value={medDetails.no_of_repeat}
                                                onChange={(event) =>
                                                    setMedDetails({
                                                        ...medDetails,
                                                        no_of_repeat:
                                                            event.target.value,
                                                    })
                                                }
                                                className="dispense-input block border shadow-box-shadow 
                            bg-white py-4 px-4 -ml-4 mt-4 font-normal"
                                                id="num-repeat"
                                                type="text"
                                                placeholder=""
                                            />
                                        </label>
                                    </div>

                                    <div className="input-container my-10 self-end">
                                        <button
                                            onClick={addMed}
                                            className={`
                                        dispense-input block border shadow-box-shadow 
                                bg-[#1A4942] text-white py-5 px-10 mt-4 font-semibold w-full`}
                                            type=""
                                        >
                                            Add another medication
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type=""
                                    className="input-container my-10 dispense-input print w-[50%] border shadow-box-shadow
                            bg-[#1A4942] text-white py-4 px-10 mt-4 font-semibold"
                                    onClick={() => setProceedToPrint(true)}
                                >
                                    Proceed
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Print Page */}
            {proceedToPrint && (
                <div className="flex flex-col items-center font-poppins font-semibold text-lg mt-20 min-h-[90vh]">
                    <div className="my-20 bg-[#fff] print-label min-w-[35rem] px-8 py-10">
                        <div className="flex justify-between pb-3 my_border">
                            <p>Lagos</p>
                            <p>Tel: 09065783958</p>
                        </div>

                        <div className="flex justify-between pt-6">
                            <p>Amlodipine 10 mg</p>
                            <p>TAB 28</p>
                            <p>Rx: 00001</p>
                        </div>

                        <div className="pt-2">TAKE ONE TABLET DAILY</div>

                        <div className="pt-2">
                            <p>Refill: 1/5 </p>

                            <p>2022/07/22</p>
                        </div>

                        <div className="pt-2">Doctor : Martins </div>

                        <div className="pt-2">Dispenser: Abdullahi</div>

                        <div className="pt-2 flex">
                            <p>Theraswift Pharmacy</p>
                            <svg
                                width="150"
                                height="30"
                                viewBox="0 0 170 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25.9669 0.0718994C30.596 0.0718994 34.3835 2.959 34.3835 6.48767V33.2469C34.3835 36.7755 30.596 39.6624 25.9673 39.6624C21.3382 39.6624 17.5508 36.7753 17.5508 33.2469V6.48767C17.5508 2.959 21.3382 0.0718994 25.9669 0.0718994ZM32.6931 12.3133C32.8689 12.3133 33.0126 12.2037 33.0126 12.0697V5.74598C33.0235 5.55222 33.0264 5.35873 33.0126 5.16954V5.15581L33.0112 5.15392C32.9646 4.5511 32.7471 3.98918 32.0767 3.57393C31.3378 3.11616 30.309 3.10405 30.309 3.10405C32.3736 4.21901 32.267 5.0627 32.3736 5.24946V12.0697C32.3736 12.2037 32.5173 12.3133 32.6931 12.3133ZM32.6881 27.5779C32.864 27.5779 33.0077 27.6874 33.0077 27.8215V34.1452C33.0186 34.339 33.0214 34.5324 33.0077 34.7216V34.7354L33.0062 34.7373C32.9596 35.3401 32.7422 35.902 32.0717 36.3172C31.3328 36.775 30.3041 36.7871 30.3041 36.7871C32.3686 35.6722 32.262 34.8285 32.3686 34.6417V27.8215C32.3686 27.6874 32.5123 27.5779 32.6881 27.5779Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 19.8669V19.8672C0 23.3959 3.78743 26.2827 8.41616 26.2827H43.5201C48.1492 26.2827 51.9367 23.3956 51.9367 19.8672V19.8669C51.9367 16.3382 48.1492 13.4514 43.5201 13.4514H8.41616C3.78708 13.4514 0 16.3385 0 19.8669ZM16.0588 24.9942V24.9944C16.0588 25.1284 15.9151 25.2377 15.7393 25.2377H7.44353C7.18934 25.246 6.9355 25.2482 6.68731 25.2377H6.66931L6.66684 25.2366C5.87602 25.2011 5.13887 25.0353 4.59413 24.5243C3.99361 23.961 3.97772 23.1768 3.97772 23.1768C5.44037 24.7506 6.54716 24.6693 6.79217 24.7506H15.7393C15.9151 24.7506 16.0588 24.8601 16.0588 24.9942ZM36.0833 24.9904C36.0833 25.1244 36.227 25.2339 36.4028 25.2339H44.6986C44.9528 25.2423 45.2066 25.2444 45.4548 25.2339H45.4728L45.4753 25.2329C46.2661 25.1973 47.0033 25.0316 47.548 24.5205C48.1485 23.9572 48.1644 23.173 48.1644 23.173C46.7018 24.7468 45.595 24.6656 45.35 24.7468H36.4028C36.227 24.7468 36.0833 24.8564 36.0833 24.9904Z"
                                    fill="#40B36E"
                                />
                                <path
                                    d="M63.8785 15.8655V18.1096H60.8317V27.3645H58.0307V18.1096H54.9839V15.8655H63.8785Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M73.2766 18.126C74.3249 18.126 75.1658 18.4755 75.7992 19.1744C76.4325 19.8623 76.7492 20.8124 76.7492 22.0245V27.3645H73.9646V22.4013C73.9646 21.7897 73.8062 21.3147 73.4895 20.9762C73.1729 20.6377 72.747 20.4684 72.2119 20.4684C71.6768 20.4684 71.2509 20.6377 70.9342 20.9762C70.6175 21.3147 70.4592 21.7897 70.4592 22.4013V27.3645H67.6582V15.2431H70.4592V19.4528C70.7431 19.0488 71.1308 18.7266 71.6222 18.4864C72.1136 18.2461 72.6651 18.126 73.2766 18.126Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M88.3992 22.647C88.3992 22.9091 88.3828 23.1821 88.3501 23.466H82.0109C82.0546 24.0338 82.2347 24.4706 82.5514 24.7764C82.879 25.0713 83.2776 25.2187 83.7472 25.2187C84.4461 25.2187 84.932 24.9238 85.205 24.3341H88.1863C88.0334 24.9348 87.7549 25.4753 87.3509 25.9558C86.9577 26.4363 86.4609 26.813 85.8602 27.086C85.2596 27.359 84.588 27.4955 83.8455 27.4955C82.95 27.4955 82.1528 27.3044 81.4539 26.9222C80.7551 26.54 80.209 25.994 79.8159 25.2842C79.4228 24.5744 79.2262 23.7445 79.2262 22.7944C79.2262 21.8443 79.4173 21.0144 79.7995 20.3046C80.1927 19.5948 80.7387 19.0488 81.4376 18.6666C82.1365 18.2844 82.9391 18.0933 83.8455 18.0933C84.73 18.0933 85.5163 18.2789 86.2042 18.6502C86.8922 19.0215 87.4273 19.5511 87.8095 20.2391C88.2026 20.927 88.3992 21.7297 88.3992 22.647ZM85.5326 21.9099C85.5326 21.4294 85.3688 21.0472 85.0412 20.7632C84.7136 20.4793 84.3041 20.3374 83.8127 20.3374C83.3431 20.3374 82.9446 20.4739 82.6169 20.7469C82.3003 21.0199 82.1037 21.4075 82.0273 21.9099H85.5326Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M93.9807 19.7477C94.3083 19.2453 94.7178 18.8522 95.2092 18.5683C95.7006 18.2734 96.2466 18.126 96.8472 18.126V21.0908H96.0774C95.3785 21.0908 94.8543 21.2437 94.5048 21.5495C94.1554 21.8443 93.9807 22.3685 93.9807 23.122V27.3645H91.1796V18.2243H93.9807V19.7477Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M98.0778 22.778C98.0778 21.8389 98.2525 21.0144 98.602 20.3046C98.9623 19.5948 99.4483 19.0488 100.06 18.6666C100.671 18.2844 101.354 18.0933 102.107 18.0933C102.752 18.0933 103.314 18.2243 103.795 18.4864C104.286 18.7485 104.663 19.0924 104.925 19.5183V18.2243H107.726V27.3645H104.925V26.0705C104.652 26.4963 104.27 26.8403 103.778 27.1024C103.298 27.3645 102.735 27.4955 102.091 27.4955C101.348 27.4955 100.671 27.3044 100.06 26.9222C99.4483 26.5291 98.9623 25.9776 98.602 25.2678C98.2525 24.5471 98.0778 23.7172 98.0778 22.778ZM104.925 22.7944C104.925 22.0955 104.728 21.544 104.335 21.14C103.953 20.7359 103.483 20.5339 102.926 20.5339C102.369 20.5339 101.894 20.7359 101.501 21.14C101.119 21.5331 100.928 22.0791 100.928 22.778C100.928 23.4769 101.119 24.0338 101.501 24.4488C101.894 24.8529 102.369 25.0549 102.926 25.0549C103.483 25.0549 103.953 24.8529 104.335 24.4488C104.728 24.0448 104.925 23.4933 104.925 22.7944Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M113.675 27.4955C112.878 27.4955 112.168 27.359 111.546 27.086C110.923 26.813 110.432 26.4417 110.072 25.9722C109.711 25.4917 109.509 24.9566 109.466 24.3669H112.234C112.267 24.6836 112.414 24.9402 112.676 25.1368C112.938 25.3333 113.26 25.4316 113.643 25.4316C113.992 25.4316 114.26 25.3661 114.445 25.2351C114.642 25.0931 114.74 24.9129 114.74 24.6945C114.74 24.4324 114.604 24.2413 114.331 24.1212C114.058 23.9902 113.615 23.8482 113.004 23.6953C112.349 23.5424 111.802 23.3841 111.366 23.2203C110.929 23.0456 110.552 22.778 110.235 22.4177C109.919 22.0464 109.76 21.5495 109.76 20.927C109.76 20.4029 109.902 19.9278 110.186 19.502C110.481 19.0651 110.907 18.7212 111.464 18.47C112.032 18.2188 112.703 18.0933 113.479 18.0933C114.625 18.0933 115.526 18.3772 116.182 18.945C116.848 19.5129 117.23 20.2664 117.328 21.2055H114.74C114.696 20.8888 114.554 20.6377 114.314 20.452C114.085 20.2664 113.779 20.1735 113.397 20.1735C113.069 20.1735 112.818 20.2391 112.643 20.3701C112.469 20.4902 112.381 20.6595 112.381 20.8779C112.381 21.14 112.518 21.3366 112.791 21.4676C113.075 21.5986 113.512 21.7297 114.101 21.8607C114.778 22.0354 115.33 22.2102 115.756 22.3849C116.182 22.5487 116.553 22.8217 116.869 23.2039C117.197 23.5752 117.366 24.0775 117.377 24.7109C117.377 25.246 117.224 25.7265 116.919 26.1524C116.624 26.5673 116.192 26.8949 115.625 27.1352C115.068 27.3754 114.418 27.4955 113.675 27.4955Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M132.996 18.2243L130.522 27.3645H127.426L125.985 21.4348L124.494 27.3645H121.415L118.925 18.2243H121.726L123.02 24.76L124.56 18.2243H127.525L129.081 24.7273L130.358 18.2243H132.996Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M138.713 17.2742C138.222 17.2742 137.818 17.1323 137.501 16.8483C137.195 16.5535 137.043 16.1931 137.043 15.7672C137.043 15.3304 137.195 14.9701 137.501 14.6861C137.818 14.3913 138.222 14.2439 138.713 14.2439C139.194 14.2439 139.587 14.3913 139.893 14.6861C140.209 14.9701 140.368 15.3304 140.368 15.7672C140.368 16.1931 140.209 16.5535 139.893 16.8483C139.587 17.1323 139.194 17.2742 138.713 17.2742ZM140.106 18.2243V27.3645H137.305V18.2243H140.106Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M147.202 20.5503H145.695V27.3645H142.894V20.5503H141.878V18.2243H142.894V17.9622C142.894 16.8374 143.216 15.9857 143.86 15.4069C144.504 14.8172 145.449 14.5223 146.694 14.5223C146.901 14.5223 147.054 14.5278 147.153 14.5387V16.9139C146.617 16.8811 146.241 16.9575 146.022 17.1432C145.804 17.3288 145.695 17.6619 145.695 18.1424V18.2243H147.202V20.5503Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M155.682 24.9894V27.3645H154.257C153.241 27.3645 152.45 27.1188 151.882 26.6274C151.314 26.1251 151.03 25.3115 151.03 24.1867V20.5503H149.916V18.2243H151.03V15.9966H153.831V18.2243H155.666V20.5503H153.831V24.2195C153.831 24.4925 153.897 24.6891 154.028 24.8092C154.159 24.9293 154.377 24.9894 154.683 24.9894H155.682Z"
                                    fill="#6B6B6B"
                                />
                                <path
                                    d="M160.911 24.3597C161.301 24.3597 161.623 24.4085 161.876 24.506C162.132 24.6013 162.322 24.7476 162.448 24.9448C162.574 25.142 162.637 25.3934 162.637 25.6989C162.637 25.9503 162.591 26.1605 162.5 26.3296C162.409 26.4964 162.29 26.6319 162.143 26.7359C161.995 26.8399 161.838 26.9201 161.671 26.9764L162.975 29.1121H162.331L161.167 27.1292H160.179V29.1121H159.627V24.3597H160.911ZM160.878 24.8375H160.179V26.6611H160.933C161.321 26.6611 161.606 26.582 161.788 26.4238C161.973 26.2656 162.065 26.0327 162.065 25.725C162.065 25.4021 161.967 25.1734 161.772 25.0391C161.579 24.9047 161.281 24.8375 160.878 24.8375ZM166.908 29.1121H166.281L164.997 27.0187L163.693 29.1121H163.105L164.688 26.6351L163.215 24.3597H163.83L165.016 26.2548L166.209 24.3597H166.794L165.325 26.6254L166.908 29.1121Z"
                                    fill="#40B36E"
                                />
                            </svg>
                        </div>
                    </div>

                    <button
                        type=""
                        className="input-container my-10 dispense-input print w-[40%] border shadow-box-shadow
                            bg-[#1A4942] text-white py-4 px-10 mt-4 font-semibold"
                    >
                        Print
                    </button>
                </div>
            )}
        </>
    );
};

export default Dispense;
