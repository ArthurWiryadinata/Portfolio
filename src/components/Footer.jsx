import React, { useEffect } from "react";
import feather from "feather-icons";

const Footer = () => {
  useEffect(() => {
    // No need to replace icons now, using toSvg() method
  }, []);

  return (
    <div className="max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto">
      <span className="primary-color">ART.W</span>
      {/* Add space between the rows */}
      <div className="text-gray-600 space-y-4">
        {/* LinkedIn with link */}
        <div className="flex items-center gap-x-4">
          <span
            dangerouslySetInnerHTML={{ __html: feather.icons.linkedin.toSvg() }}
            className="w-4 h-4"
          ></span>
          <a href="www.linkedin.com/in/arthur-wiryadinata-a73545311" target="_blank" rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline">
          
            Arthur Wiryadinata
          </a>
          
        </div>
        {/* Instagram with link */}
        <div className="flex items-center gap-x-4">
          <span
            dangerouslySetInnerHTML={{ __html: feather.icons.instagram.toSvg() }}
            className="w-4 h-4"
          ></span>
          <a href="https://www.instagram.com/arthurwrya" target="_blank" rel="noopener noreferrer"
          className="hover:text-blue-500 hover:underline">
            @arthurwrya
          </a>
        </div>
        <div className="flex items-center gap-x-4">
          <span
            dangerouslySetInnerHTML={{ __html: feather.icons.mail.toSvg() }}
            className="w-4 h-4"
          ></span>
          <a href="mailto:arthur.wiryadinata@binus.ac.id"
          className="hover:text-blue-500 hover:underline">
            arthur.wiryadinata
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
