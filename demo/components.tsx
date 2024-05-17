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
