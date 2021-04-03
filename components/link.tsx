import * as React from "react";
import { ILink } from "@type/types";
import "tailwindcss/tailwind.css";

export const MyLink: React.FC<ILink> = ({ title, url }) => {
  return (
    <div className="p-2 mx-auto flex flex-col shadow-lg space-y-4  rounded-xl text-center max-w-prose border-white border-2 bg-gray-50 bg-opacity-50 hover:bg-opacity-90 transition font-bold text-gray-700 hover:text-gray-900">
      {/* <h3>{title}</h3> */}
      <a href={url} >{title}</a>
    </div>
  );
};
