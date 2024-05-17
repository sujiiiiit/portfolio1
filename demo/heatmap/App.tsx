// //this is App.tsx code

// import React, { useEffect, useState } from "react";
// import CalendarRenderer from "./components/heatmap/CalendarRenderer";

// const App: React.FC = () => {
//   const monthData = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];

//   const [submissions, setSubmissions] = useState<any[]>([]);

//   useEffect(() => {
//     // Sample hardcoded submissions for the last 12 months
//     const currentDate = new Date();
//     const currentYear = currentDate.getFullYear();
//     const currentMonth = currentDate.getMonth();

//     const previous12Months = Array.from({ length: 12 }, (_, index) => {
//       const date = new Date();
//       date.setMonth(date.getMonth() - index);
//       return date;
//     });

//     const sampleSubmissions = previous12Months.map((date) => {
//       return { createdAt: date, language: "JavaScript" };
//       // Add more sample submissions as needed
//     });

//     setSubmissions(sampleSubmissions);
//   }, []);

//   return (
//     <div className='app'>
//       <CalendarRenderer acceptedSubmissions={submissions} monthData={monthData} />

//     </div>
//   );
// };

// export default App;