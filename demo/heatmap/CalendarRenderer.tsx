import React, { useState } from 'react';
import Calendar from './Calendar.tsx';

interface CalendarRendererProps {
    acceptedSubmissions: any;
    monthData: string[];
}

export default function CalendarRenderer({ acceptedSubmissions, monthData }: CalendarRendererProps) {
    const [selectedMonth, setSelectedMonth] = useState(String(new Date().getMonth()));
    const [selectedYear, setSelectedYear] = useState(String(new Date().getFullYear()));

    const selectedMonthSubmissionsDates: string[] = acceptedSubmissions
        .map((x: any) => x.createdAt.toLocaleString("en-GB"))
        .filter((date: any) => Number(date.split(',')[0].split("/")[1]) - 1 === Number(selectedMonth) && Number(date.split(',')[0].split('/')[2]) === new Date().getFullYear());

    const yearWiseSubmissionDates: string[] = acceptedSubmissions
        .map((x: any) => x.createdAt.toLocaleString("en-GB"))
        .filter((date: any) => Number(date.split(',')[0].split('/')[2]) === Number(selectedYear));

    const generateYearsData = (currentYear: number) => {
        let finalYearsArray: number[] = [];
        while (currentYear >= 2023) {
            finalYearsArray.push(currentYear);
            currentYear--;
        }
        return finalYearsArray;
    }

    return (
        <div className='calendar-renderer'>
            {/* Component for displaying submissions by month */}
            <div className='submissions-by-month relative'>
                <h2>{selectedMonthSubmissionsDates.length} Submission(s) in {monthData[Number(selectedMonth)]} {new Date().getFullYear()}</h2>
                <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    {monthData.map((item: string, index: number) => (
                        <option key={`select-month-${index}`} value={String(index)}>{item}</option>
                    ))}
                </select>
                <main className='flex overflow-auto border-b-2 pb-4 items-center gap-2 pr-4 h-fit'>
                    <Calendar
                        submissionDates={selectedMonthSubmissionsDates}
                        selectedMonth={Number(selectedMonth)}
                        monthData={monthData}
                        type={"single"}
                        isCurrentMonth={new Date().getMonth() === Number(selectedMonth)}
                        selectedYear={new Date().getFullYear()}
                    />
                </main>
                {/* Custom tooltip */}
                <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 -mt-8 left-1/2 transform -translate-x-1/2">
                    Tooltip content here
                </div>
            </div>

            {/* Component for displaying submissions by year */}
            <div className='submissions-by-year'>
                <h2>{yearWiseSubmissionDates.length} Submissions in {selectedYear}</h2>
                <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                    {generateYearsData(new Date().getFullYear()).map((item, index) => (
                        <option key={`select-year-${index}`} value={String(item)}>{item}</option>
                    ))}
                </select>
                <main className='flex max-w-full overflow-auto mt-10 items-center m-auto gap-2 px-4 h-fit'>
                    {monthData.map((item: string, index: number) => {
                        const eachMonthSubmissionDates = acceptedSubmissions
                            .map((x: any) => x.createdAt.toLocaleString("en-GB"))
                            .filter((date: any) => Number(date.split("/")[1]) - 1 === Number(index) && Number(date.split(',')[0].split('/')[2]) === Number(selectedYear));
                        const isCurrentMonth = new Date().getMonth() === Number(index) && new Date().getFullYear() === Number(selectedYear);
                        return (
                            <div key={`each-month-render-${index}`} className={`${(index <= new Date().getMonth() && new Date().getFullYear() === Number(selectedYear)) ? "opacity-100" : "opacity-25"} flex flex-col gap-4 pb-4 items-center`}>
                                <Calendar
                                    childKey={`each-month-render-calendar-${index}`}
                                    selectedYear={Number(selectedYear)}
                                    type={"multiple"}
                                    isCurrentMonth={isCurrentMonth}
                                    submissionDates={eachMonthSubmissionDates}
                                    selectedMonth={index}
                                    monthData={monthData}
                                />
                                <div className={`${isCurrentMonth ? "bg-[#3b82f6]" : "border-none"} w-full flex items-center justify-center py-[0.125rem] text-xs rounded-md`}>
                                    {item.slice(0, 3)}
                                </div>
                            </div>
                        );
                    })}
                </main>
            </div>
        </div>
    )
}