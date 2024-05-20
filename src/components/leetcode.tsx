import LeetcodeCharts from "./chart/LeetcodeChart";
import { getMonth } from "date-fns";
import SubmissionGraph from "./heatmap/Calendar";

export default function LeetCode() {
  const submissionCalendar = JSON.stringify({ "1700870400": 2 });

  const currentMonthIndex = getMonth(new Date()); // Get the current month index (0-indexed)
  const selectedMonths = [
    (currentMonthIndex -  + 12) % 12, // Subtract 2 months
    (currentMonthIndex - 3 + 12) % 12, // Subtract 2 months
    (currentMonthIndex - 2 + 12) % 12, // Subtract 2 months
    (currentMonthIndex - 1 + 12) % 12, // Subtract 1 month
    currentMonthIndex, // Current month
  ];
  // const selectedMonths = [ 8, 9, 10];
  const selectedYear = 2023; // Selected year
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
    <div className=" p-4 xs:p-0 flex  xs:flex-col overflow-hidden items-center">
      <LeetcodeCharts />
      <SubmissionGraph
        submissionCalendar={submissionCalendar}
        selectedMonths={selectedMonths}
        selectedYear={selectedYear}
        isCurrentMonth={isCurrentMonth}
        monthData={monthData}
      />
    </div>
  );
}
