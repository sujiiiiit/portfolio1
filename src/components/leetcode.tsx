import React from "react";
import { subMonths, getMonth } from "date-fns";
import Calendar from "@components/heatmap/Calendar";

const MyComponent: React.FC = () => {
  const submissionCalendar = JSON.stringify({ "1700870400": 2 });

  const currentMonthIndex = getMonth(new Date()); // Get the current month index (0-indexed)
  const selectedMonths = [
    (currentMonthIndex - 2 + 12) % 12, // Subtract 2 months
    (currentMonthIndex - 1 + 12) % 12, // Subtract 1 month
    currentMonthIndex, // Current month
  ];
  const selectedYear = 2024; // Selected year
  const isCurrentMonth = true;
  const monthData = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      <Calendar
        submissionCalendar={submissionCalendar}
        selectedMonths={selectedMonths}
        selectedYear={selectedYear}
        isCurrentMonth={isCurrentMonth}
        monthData={monthData}
      />
    </div>
  );
};

export default MyComponent;
