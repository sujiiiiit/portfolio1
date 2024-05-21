//section 2

import { Calendar } from "lucide-react";

{
  /* <span className="cursor-text font-GistBold m-10 xs:m-0 xs:my-4	text-6xl	xs:text-4xl	 gradientanimation">
    Coding Creativity, Powered by Coffee makes the web perfect
  </span>; */
}

//fro generating dates for perticular duration {from - to}
// import React from "react";
// import { subMonths, format, eachDayOfInterval } from "date-fns";

// interface DateRangeProps {}

// const DateRange: React.FC<DateRangeProps> = () => {
//   const today = new Date();
//   const fourMonthsAgo = subMonths(today, 4);

//   const dates = eachDayOfInterval({ start: fourMonthsAgo, end: today });

//   // Group dates by month and year
//   const groupedDates: {
//     [key: string]: {
//       year: number;
//       monthName: string;
//       monthInNumber: number;
//       dates: Date[];
//     };
//   } = {};
//   dates.forEach((date) => {
//     const year = date.getFullYear();
//     const monthName = format(date, "MMMM");
//     const monthInNumber = date.getMonth() + 1;
//     const key = `${monthName} ${year}`;
//     if (!groupedDates[key]) {
//       groupedDates[key] = { year, monthName, monthInNumber, dates: [] };
//     }
//     groupedDates[key].dates.push(date);
//   });

//   return (
//     <svg viewBox="0 0 787.78 104.64" className="w-full">
//       {Object.values(groupedDates).map(
//         ({ year, monthName, monthInNumber, dates }, index) => (
//           <g x="0" y="0" className={`month ${monthInNumber}`} key={index}>
//             <p>
//               {monthName} {year}
//             </p>
//             <ul>
//               {dates.map((date, i) => (
//                 <li key={i}>
//                   Date: {format(date, "yyyy-MM-dd")}, Day:{" "}
//                   {format(date, "EEEE")}
//                 </li>
//               ))}
//             </ul>
//           </g>
//         )
//       )}
//     </svg>
//   );
// };

// export default DateRange;

//for generating random timestamp for heatmap
// const generateRandomSubmissions = () => {
//   const submissions: { [key: string]: number } = {};
//   const currentDate = new Date(2023, 10, 1); // November 2023
//   const endDate = new Date(2023, 10, 30); // Last day of November 2023

//   while (currentDate <= endDate) {
//     const timestamp = Math.floor(currentDate.getTime() / 1000);
//     const count = Math.floor(Math.random() * 10); // Random count (0-9)
//     submissions[timestamp] = count;
//     currentDate.setDate(currentDate.getDate() + 1); // Move to next day
//   }

//   return submissions;
// };

// const submissionCalendar = JSON.stringify(generateRandomSubmissions());

// code for Calendar.tsx line no 53
//   const [source, target] = useSingleton({
//     overrides: ["placement"],
//   });




//leetcode.tsx

// import React from "react";
// import { getMonth } from "date-fns";
// import Calendar from "@components/heatmap/Calendar";
// import DoughnutChart from "@components/chart/SeperatedProgress";

// const MyComponent: React.FC = () => {
//   const submissionCalendar = JSON.stringify({ "1700870400": 2 });

//   const currentMonthIndex = getMonth(new Date()); // Get the current month index (0-indexed)
//   // const selectedMonths = [
//   //   (currentMonthIndex - 2 + 12) % 12, // Subtract 2 months
//   //   (currentMonthIndex - 1 + 12) % 12, // Subtract 1 month
//   //   currentMonthIndex, // Current month
//   // ];
//   const selectedMonths = [8, 9, 10];
//   const selectedYear = 2023; // Selected year
//   const isCurrentMonth = true;
//   const monthData = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const data = [10, 20, 30];
//   const labels = ["Red", "Blue", "Yellow"];
//   const backgroundColors = ["#FF6384", "#36A2EB", "#FFCE56"];

//   return (
//     <div className="flex justify-between">
//       <DoughnutChart
//         data={data}
//         labels={labels}
//         backgroundColors={backgroundColors}
//         width={200}
//         height={200}
//       />
//       <Calendar
//         submissionCalendar={submissionCalendar}
//         selectedMonths={selectedMonths}
//         selectedYear={selectedYear}
//         isCurrentMonth={isCurrentMonth}
//         monthData={monthData}
//       />
//     </div>
//   );
// };

// export default MyComponent;



//calender.tsx

// import React, { useEffect, useRef, useState } from "react";
// import {
//   format,
//   fromUnixTime,
//   startOfMonth,
//   getDaysInMonth,
//   getDay,
//   subMonths,
// } from "date-fns";
// import Tippy, { useSingleton } from "@tippyjs/react";

// interface CalendarProps {
//   submissionCalendar: string; // JSON string of submissions
//   selectedMonths: number[]; // Array of selected months
//   selectedYear: number;
//   monthData: string[];
// }

// const Calendar: React.FC<CalendarProps> = ({
//   submissionCalendar,
//   selectedMonths,
//   selectedYear,
//   monthData,
// }) => {
//   const subGraphRef = useRef<HTMLDivElement>(null);
//   const [submissionCounts, setSubmissionCounts] = useState<{
//     [key: string]: number;
//   }>({});
//   const [tooltipContent, setTooltipContent] = useState<{
//     [key: string]: string;
//   }>({});

//   useEffect(() => {
//     const handleResize = () => {
//       if (subGraphRef.current) {
//         const subGraph = subGraphRef.current;
//         subGraph.scrollLeft = subGraph.scrollWidth;
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const initialSubmissionData = JSON.parse(submissionCalendar);
//     const counts: { [key: string]: number } = {};
//     const tooltips: { [key: string]: string } = {};

//     for (const [timestamp, count] of Object.entries(initialSubmissionData)) {
//       const date = fromUnixTime(Number(timestamp));
//       const dateString = format(date, "dd/MM/yyyy");
//       counts[dateString] = count as number;
//       tooltips[dateString] = `${count} submissions on ${dateString}`;
//     }

//     setSubmissionCounts(counts);
//     setTooltipContent(tooltips);
//   }, [submissionCalendar]);

//   const renderColorIntensity = (frequency: number) => {
//     if (frequency === 0) {
//       return "#161b22";
//     } else if (frequency >= 1 && frequency <= 9) {
//       for (let i = 1; i <= 9; i++) {
//         if (frequency === i) {
//           return `var(--green-${i})`;
//         }
//       }
//     } else {
//       return "#006d32"; // Fallback color if frequency is above 9
//     }
//   };
//   const [source, target] = useSingleton({
//     overrides: ["placement"],
//   });

//   return (
//     <>
//       <div
//         ref={subGraphRef}
//         className="w-full justify-around flex gap-1 relative overflow-hidden overflow-x-scroll"
//       >
//         {selectedMonths.map((selectedMonth, index) => {
//           const date = new Date(selectedYear, selectedMonth);
//           const currMonth = selectedMonth;
//           const currYear = selectedYear;
//           const firstDayOfMonth = getDay(startOfMonth(date));
//           const lastDateOfMonth = getDaysInMonth(date);
//           const lastDateOfLastMonth = getDaysInMonth(subMonths(date, 1));
//           const monthString = format(date, "MMM");

//           const getDatesOfLastMonth = (
//             firstDayOfMonth: number,
//             lastDateOfLastMonth: number
//           ) => {
//             return Array.from(
//               { length: firstDayOfMonth },
//               (_, index) => lastDateOfLastMonth - firstDayOfMonth + index + 1
//             );
//           };

//           const getCurrMonthDates = (lastDateOfMonth: number): number[] => {
//             return Array.from({ length: lastDateOfMonth }, (_, i) => i + 1);
//           };

//           const datesOfLastMonth = getDatesOfLastMonth(
//             firstDayOfMonth,
//             lastDateOfLastMonth
//           );
//           const currMonthDateArray = getCurrMonthDates(lastDateOfMonth);

//           return (
//             <div key={index} className={`monthItem flex flex-col items-center`}>
//               <div
//                 className={`grid grid-rows-7 grid-flow-col gap-x-1 gap-y-1 ${
//                   firstDayOfMonth === 0 ? "ml-[10px]" : ""
//                 }`}
//               >
//                 {datesOfLastMonth.map((_date, index) => (
//                   <div
//                     key={`empty-${index}`}
//                     className="invisible row-span-1"
//                   />
//                 ))}

//                 {currMonthDateArray.map((x, dayIndex) => {
//                   const dateString = format(
//                     new Date(currYear, currMonth, x),
//                     "dd/MM/yyyy"
//                   );
//                   const frequency = submissionCounts[dateString] || 0;
//                   const tooltip =
//                     tooltipContent[dateString] ||
//                     `No submissions on ${dateString}`;

//                   return (
//                     <Tippy
//                       moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
//                       singleton={target}
//                       delay={100}
//                       arrow={false}
//                       theme="custom"
//                       key={`box-${dayIndex + 1}`}
//                       content={tooltip}
//                       placement="top"
//                     >
//                       <div
//                         style={{
//                           background:
//                             frequency > 0
//                               ? renderColorIntensity(frequency)
//                               : "var(--graph-fill)",
//                         }}
//                         className={`row-span-1 w-[1rem] h-[1rem] rounded-[3px]`}
//                       />
//                     </Tippy>
//                   );
//                 })}
//               </div>
//               <div className="mt-2 font-Gist text-center text-textSecondary text-xs">
//                 {monthString}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <Tippy
//         moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
//         singleton={source}
//         delay={500}
//         content=""
//         placement="top"
//       ></Tippy>
//     </>
//   );
// };

// export default Calendar;
