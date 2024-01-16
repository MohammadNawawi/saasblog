import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse space-y-5">
      <div className="flex items-center justify-center">
        <div className="h-10 w-56 bg-gradient-dark rounded-md"></div>
        <div className="h-10 w-48 bg-gradient-dark rounded-md"></div>
      </div>
      <div className="border h-96 rounded-md bg-gradient-dark"></div>
    </div>
  );
}
