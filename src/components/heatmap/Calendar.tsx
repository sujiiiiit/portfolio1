import React, { useState } from "react";
import {
  format,
  fromUnixTime,
  startOfMonth,
  endOfMonth,
  getDaysInMonth,
  getDay,
  subMonths,
} from "date-fns";
import Tippy, { useSingleton } from "@tippyjs/react";

interface CalendarProps {
  submissionCalendar: string; // JSON string of submissions
  selectedMonths: number[]; // Array of selected months
  selectedYear: number;
  isCurrentMonth: boolean;
  monthData: string[];
}

const Calendar: React.FC<CalendarProps> = ({
  submissionCalendar,
  selectedMonths,
  selectedYear,
  isCurrentMonth,
  monthData,
}) => {
  // Parse the submissionCalendar JSON string
  const submissionData = JSON.parse(submissionCalendar);
  const submissionCounts: { [key: string]: number } = {};

  // Convert the timestamps to date strings (format: "dd/MM/yyyy")
  for (const [timestamp, count] of Object.entries(submissionData)) {
    const date = fromUnixTime(Number(timestamp));
    const dateString = format(date, "dd/MM/yyyy");
    submissionCounts[dateString] = count as number;
  }

  const renderColorIntensity = (frequency: number) => {
    if (frequency === 0) {
      return "bg-[#161b22]";
    } else if (frequency > 0 && frequency <= 3) {
      return "bg-[#006d32]";
    } else if (frequency > 3 && frequency <= 5) {
      return "bg-[#26a641]";
    } else if (frequency > 5) {
      return "bg-[#39d353]";
    }
  };
  const [source, target] = useSingleton({
    overrides: ["placement"],
  });

  return (
    <>
      <div className="flex gap-1 relative">
        {selectedMonths.map((selectedMonth, index) => {
          const date = new Date(selectedYear, selectedMonth);
          const currMonth = selectedMonth;
          const currYear = selectedYear;
          const currDate = new Date().getDate();
          const firstDayOfMonth = getDay(startOfMonth(date));
          const lastDateOfMonth = getDaysInMonth(date);
          const lastDateOfLastMonth = getDaysInMonth(subMonths(date, 1));

          const getDatesOfLastMonth = (
            firstDayOfMonth: number,
            lastDateOfLastMonth: number
          ) => {
            return Array.from(
              { length: firstDayOfMonth },
              (_, index) => lastDateOfLastMonth - firstDayOfMonth + index + 1
            );
          };

          const getCurrMonthDates = (lastDateOfMonth: number): number[] => {
            return Array.from({ length: lastDateOfMonth }, (_, i) => i + 1);
          };

          const datesOfLastMonth = getDatesOfLastMonth(
            firstDayOfMonth,
            lastDateOfLastMonth
          );
          const currMonthDateArray = getCurrMonthDates(lastDateOfMonth);

          return (
            <div
              key={index}
              className={`grid grid-rows-7 grid-flow-col gap-x-1 gap-y-1 ${
                // This is the responsive logic, ensuring only one month is hidden on smaller screens
                window.innerWidth < 640 && index !== selectedMonths.length - 1
                  ? "xs:hidden"
                  : ""
              }`}
            >
              {/* To add gaps before the new month starts */}
              {datesOfLastMonth.map((_date, index) => (
                <div
                  key={`empty-${index}`}
                  className={`invisible row-span-1`}
                />
              ))}

              {currMonthDateArray.map((x, dayIndex) => {
                // Construct the date string for the current day
                const dateString = format(
                  new Date(currYear, currMonth, x),
                  "dd/MM/yyyy"
                );
                const frequency = submissionCounts[dateString] || 0;

                return (
                  <Tippy
                    moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                    singleton={target}
                    delay={500}
                    arrow='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>'
                    theme="custom"
                    key={`box-${dayIndex + 1}`}
                    content={`${frequency} submissions on ${monthData[selectedMonth]} ${x}, ${selectedYear}`}
                    placement="top"
                    className="font-Gist text-textPrimary"
                  >
                    <div
                      className={`${
                        frequency > 0
                          ? renderColorIntensity(frequency)
                          : `bg-transparentWhite`
                      }  row-span-1 w-[1rem] h-[1rem] rounded-[3px]`}
                    />
                  </Tippy>
                );
              })}
            </div>
          );
        })}
      </div>
      <Tippy
        moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
        singleton={source}
        delay={500}
        content=""
        placement="top"
      ></Tippy>
    </>
  );
};

export default React.memo(Calendar);
