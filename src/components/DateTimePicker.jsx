import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateTimePicker.css";

const DateTimePicker = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    return (
        <div className="flex flex-col min-h-screen bg-white p-5">
            <div className="flex items-center mb-6">
                <button onClick={() => navigate(-1)} className="text-gray-600 flex items-center text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </button>
            </div>

            <div className="flex-grow flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Choose Delivery Time</h2>
                <div className="w-full max-w-md space-y-4">
                    <div className="relative">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MMMM d, yyyy"
                            placeholderText="Select a date"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div className="relative">
                        <DatePicker
                            selected={selectedTime}
                            onChange={(time) => setSelectedTime(time)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            placeholderText="Select a time"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                </div>
                <button 
                    onClick={() => {
                        if (selectedDate && selectedTime) {
                            const combinedDateTime = new Date(
                                selectedDate.getFullYear(),
                                selectedDate.getMonth(),
                                selectedDate.getDate(),
                                selectedTime.getHours(),
                                selectedTime.getMinutes()
                            );
                            console.log('Selected date and time:', combinedDateTime);
                            // Here you would typically save the date/time and navigate to the next step
                            navigate('/checkout');
                        } else {
                            console.log('Please select both date and time');
                        }
                    }}
                    className="w-full max-w-md bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition duration-200 text-base font-semibold mt-8"
                >
                    Confirm Time
                </button>
            </div>
        </div>
    );
};

export default DateTimePicker;
