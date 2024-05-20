import  { useEffect, useState } from 'react';

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
}

export interface TransformedData {
  label: string;
  solved: number;
  total: number;
}

export const useLeetCodeStats = () => {
  const [data, setData] = useState<TransformedData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/sujiiit'); // Updated endpoint
        const stats: LeetCodeStats = await response.json();

        const transformedData: TransformedData[] = [
          { label: 'Easy', solved: stats.easySolved, total: stats.totalEasy },
          { label: 'Medium', solved: stats.mediumSolved, total: stats.totalMedium },
          { label: 'Hard', solved: stats.hardSolved, total: stats.totalHard },
        ];

        setData(transformedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};
export const getSubmissionCalendarData = () => {
    const initialData = JSON.stringify({ "1700870400": 2 }); // Initial data
    const [submissionCalendar, setSubmissionCalendar] = useState(initialData);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/uwi');
          const data = await response.json();
  
          // Assuming submissionCalendar is directly available in the response
          setSubmissionCalendar(JSON.stringify(data.submissionCalendar));
        } catch (error) {
          console.error('Error fetching submission calendar data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return submissionCalendar;
  };