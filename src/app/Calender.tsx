"use client";
import React, { useState } from "react";

import Calendar, {
  Appointment,
  logSelectedDatesAppointments,
} from "react-multi-date-picker-calendar";
import "./calender.css";

export default function Calender() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const handleDateChange = (dates: Date[]) => {
    console.log(dates);
    setSelectedDates(dates);
  };

  const appointments: Appointment[] = [
    {
      date: new Date("2023-08-10"),
      status: "Completed",
      id: "123",
      time: "10:00 AM",
      title: "Meeting with Client A",
    },
    {
      date: new Date("2023-08-10"),
      status: "Completed",
      id: "456",
      time: "2:30 PM",
      title: "Meeting with Client B",
    },
    {
      date: new Date("2023-08-10"),
      status: "Completed",
      id: "457",
      time: "2:30 PM",
      title: "Meeting with Client B",
    },
    {
      date: new Date("2023-08-10"),
      status: "incomplete",
    },
    {
      date: new Date("2023-08-11"),
      status: "completed",
    },
    {
      date: new Date("2023-08-11"),
      status: "Cancelled",
    },
    {
      date: new Date("2023-08-13"),
      status: "Missed",
    },
    {
      date: new Date("2023-08-13"),
      status: "incomplete",
    },
    {
      date: new Date("2023-08-15"),
      status: "Cancelled",
    },
    {
      date: new Date("2023-08-15"),
      status: "Missed",
    },
    // Add more appointments as needed...
  ];

  // Define the handleSelectedDatesChange function (same as before)
  const handleSelectedDatesChange = (selectedDates: Date[]) => {
    const selectedAppointments = logSelectedDatesAppointments(
      selectedDates,
      appointments
    );
    console.log("Selected Dates:", selectedDates);
    console.log("Selected Dates Appointments:", selectedAppointments);
    // Add any other logic you want to perform when selected dates change
  };

  const disabledDates: Date[] = [
    new Date("2023-08-12"), // Example: Disable July 5th, 2023
    new Date("2023-08-16"),
    new Date("2023-08-18"),
    new Date("2023-08-20"),
    new Date("2023-08-22"),
    new Date("2023-08-25"),
    // Add more Date objects as needed for other disabled dates
  ];

  const selectedDateList: Date[] = [
    new Date("2023-08-04"), // Example: Disable July 5th, 2023
    new Date("2023-08-16"),
    new Date("2023-08-18"),
    new Date("2023-08-20"),
    new Date("2023-08-22"),
    new Date("2023-08-25"),
  ];

  const [selectedRange, setSelectedRange] = useState<Date[]>([
    // Provide your default start and end dates here
    new Date("2023-08-01"), // Example: default start date
    new Date("2023-08-10"), // Example: default end date
  ]);

  // Function to handle date range selection
  const handleRangeChange = (dates: Date[]) => {
    setSelectedRange(dates);
  };

  return (
    <>
      <h1 className="heading">Date Picker</h1>
      <div className="App">
        <section>
          <h1>Dates Picker</h1>
          <Calendar
            id="test2"
            dates={[new Date("2023-08-01")]}
            onChange={handleDateChange}
            showDatePicker
            showMonth={true}
            showYear={true}
            label="Date"
          />
        </section>
        <section>
          <h1>Multi Dates Picker</h1>
          <Calendar
            id="test3"
            multiSelect={true}
            dates={selectedDateList}
            onChange={handleDateChange}
            showDatePicker
            showMonth={true}
            showYear={true}
            label="Date"
          />
        </section>
        <section>
          <h1>Date range Picker</h1>
          <Calendar
            id="test4"
            selectsRange
            dates={selectedRange}
            onChange={handleRangeChange}
            showDatePicker
            label="Date"
          />
        </section>
      </div>
      <h1 className="heading">Calendar</h1>
      <div className="App">
        <section>
          <h1>Single Date Picker</h1>
          <Calendar
            onChange={handleDateChange}
            dates={[new Date("2023-08-18T05:45:48.005Z")]}
            PrevIcon="<<"
            NextIcon=">>"
            showMonth={true}
            showYear={true}
          />
        </section>
        <section>
          <h1>Multi Date Picker</h1>
          <Calendar multiSelect={true} onChange={handleDateChange} />
        </section>
        <section>
          <h1>Date range Picker</h1>
          <Calendar
            selectsRange={true}
            dates={selectedRange}
            onChange={handleRangeChange}
          />
        </section>
        <section>
          <h1>Specific Dates Disabled</h1>
          <Calendar disabledDates={disabledDates} onChange={handleDateChange} />
        </section>
        <section>
          <h1>Min & Max Date Picker</h1>
          <Calendar
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={new Date("2024-08-25")}
          />
        </section>
        <section>
          <h1>Appointment Status</h1>
          <Calendar
            onChange={handleSelectedDatesChange}
            multiSelect={true}
            PrevIcon="<<"
            NextIcon=">>"
            showMonth={true}
            showYear={true}
            appointments={appointments}
            tooltipVisible
          />
        </section>
        <section>
          <h1>Selected Dates List</h1>
          <Calendar
            multiSelect={true}
            dates={selectedDateList}
            showSelectedDatesList
            onChange={handleDateChange}
          />
        </section>
      </div>
    </>
  );
}
