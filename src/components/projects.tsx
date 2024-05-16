import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
    {
      name: "RecipeRover",
      time: "May 2024",
      description:
        "RecipeRover is a web app that helps users discover and explore new recipes based on their dietary preferences, ingredients, and nutritional requirements. Step-by-step instructions and nutritional info included.",
      categories: ["Web"],
      tech_stack: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "FitTrack",
      time: "June 2024",
      description:
        "FitTrack is a mobile fitness tracking app for setting and achieving health goals. Track activities, calories burned, and workouts. Provides personalized plans, progress tracking, and social features.",
      categories: ["Mobile"],
      tech_stack: ["Swift", "UIKit", "Core Data", "Firebase"],
    },
    {
      name: "HealthGuard",
      time: "June 2024",
      description:
        "HealthGuard is an AI-powered health monitoring system analyzing health metrics from wearable devices. Provides personalized insights and alerts for potential health risks.",
      categories: ["AI & ML"],
      tech_stack: [
        "Python",
        "TensorFlow",
        "Flask",
        "Docker",
        "AWS",
        "Google Cloud Platform",
      ],
    },
    {
      name: "TravelExplorer",
      time: "June 2024",
      description:
        "TravelExplorer is a website for discovering and planning travel adventures. Browse destinations, find tips, book accommodations, and create personalized itineraries.",
      categories: ["Web"],
      tech_stack: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      name: "BudgetBuddy",
      time: "June 2024",
      description:
        "BudgetBuddy is a mobile app for managing finances and tracking expenses. Set budgets, categorize transactions, and visualize spending patterns.",
      categories: ["Mobile"],
      tech_stack: ["Kotlin", "Android Jetpack", "Room", "Firebase"],
    },
    {
      name: "StockPredictor",
      time: "June 2024",
      description:
        "StockPredictor is a ML model forecasting stock prices based on historical data and market trends. Analyzes company performance, economic indicators, and news sentiment.",
      categories: ["AI & ML"],
      tech_stack: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Flask",
        "Docker",
        "AWS",
        "Google Cloud Platform",
      ],
    },
  ];
interface ReadMoreProps {
  children: string;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const [limit, setLimit] = useState(window.innerWidth >= 768 ? 200 : 80);
  
    const handleResize = () => {
      setLimit(window.innerWidth >= 768 ? 200 : 80);
    };
  
    // Update the limit when the window is resized
    React.useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
  
    return (
      <div>
        <p className="text">
          {isReadMore ? text.slice(0, limit) : text}
          {text.length > limit && (
            <span
              onClick={toggleReadMore}
              className="read-or-hide text-textPrimary cursor-pointer"
            >
              {isReadMore ? "....Read More" : " Show Less"}
            </span>
          )}
        </p>
      </div>
    );
  };

const ProjectList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProjects = (category: string) => {
    setSelectedCategory(category);
  };

  const isProjectInCategory = (projectCategories: string[]) => {
    return (
      selectedCategory === "All" || projectCategories.includes(selectedCategory)
    );
  };

  const getProjectCountForCategory = (category: string) => {
    if (category === "All") {
      return projects.length;
    }
    return projects.filter((project) => project.categories.includes(category))
      .length;
  };

  return (
    <div>
      {/* Filter buttons */}
      <div className=" flex text-base xs:text-sm my-6 xs:my-3 flex-row items-center justify-start xs:justify-around [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full ">
        {["All", "Web", "Mobile", "AI & ML","Finance"].map((category) => (
          <button
            key={category}
            onClick={() => filterProjects(category)}
            className={`relative flex flex-row  font-Gist cursor-pointer px-3 py-1 rounded-full ${
              selectedCategory === category
                ? "text-textPrimary"
                : "text-textSecondary"
            }`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {selectedCategory === category && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full"
              />
            )}
            <span className="relative gap-1 flex whitespace-nowrap">
              {category} ({getProjectCountForCategory(category)})
            </span>
          </button>
        ))}
      </div>

      {/* List of projects */}
      {projects
        .filter((project) => isProjectInCategory(project.categories))
        .map((project, index) => (
          <div className="projectGroup flex mt-10" key={index}>
            <div className="period font-Gist flex mt-3 mr-3 text-sm xs:text-xs uppercase text-nowrap xs:text-wrap text-textSecondary">
              {project.time}
            </div>
            <div className="projectItems flex-grow">
              <div className="projectDivider after:content-[''] after:flex-grow after:h-px	after:bg-[#5b5b5b42] w-full  flex h-11 items-center"></div>
              <div className="project font-GistBold underlinetext text-textPrimary text-3xl xs:text-xl">
                {project.name}
              </div>
              <div className="projectDescription font-Gist text-textSecondary text-lg xs:text-base mt-4 xs:mt-2">
                <ReadMore>{project.description}</ReadMore>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
