"use client";

import { cn } from "../utils/cn";
import GridPattern from "../ui/gridPatterns";

const GridPatternDashed = () => {
  return (
      
    <GridPattern
    width={40}
    height={40}
    x={-1}
    y={-1}
    strokeDasharray={5}
    className={cn(
      "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
    )}
  />
  );
};

export default GridPatternDashed;
