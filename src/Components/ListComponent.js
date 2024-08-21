import React from 'react'
import { useSelector } from 'react-redux'

const ListComponent = ({subject,fromEmail,toEmail,toName,body,sentAt}) => {
    const theme = useSelector((store) => store.theme);
    const textColor = theme === "dark" ? "text-white" : "text-[#343A40]";
  const borderClr = theme === "dark" ? "border-gray-800" : "border-[#E0E0E0]";

  const date = new Date(sentAt);

const day = date.getUTCDate();
const monthIndex = date.getUTCMonth();
const year = date.getUTCFullYear();
const monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
const monthName = monthNames[monthIndex];
let hours = date.getUTCHours();
const minutes = date.getUTCMinutes();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12;
const getDateInFormat = `${day} ${monthName} ${year} ${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

  return (
    
    <>
    <div className="relative mx-5 h-auto ">
    <div
      className={`w-full flex justify-center items-center ${textColor} mt-3`}
    >
      <span
        className={`px-4 py-1 ${
          theme === "dark"
            ? "bg-[#171819] text-[#F8FAFC]"
            : "bg-[#EEF1F4] text-[#777777]"
        } z-10`}
      >
        {monthName} {day}
      </span>
    </div>
    <div className={`border absolute top-4 w-full ${borderClr}`}></div>
  </div>

  <div
    className={`w-9/10 h-auto border
  ${
    theme === "dark"
      ? "bg-[#141517] border-gray-800 text-[#F8FAFC]"
      : "bg-[#F9F9F9] text-black"
  }
   mt-3 mx-5 p-5 rounded-lg`}
  >
    <div className="flex justify-between">
      <p className="text-xl font-sans">{subject}</p>
      <p className="text-gray-600 font-bold mt-1 font-sans">{getDateInFormat}</p>
    </div>
    <p className="mt-2 text-gray-500 font-sans">
    from : {fromEmail} cc : 
    </p>
    <p className="mt-2 text-gray-500 font-sans">to : {toEmail}</p>
    <div className="w-[70%]">
      <p className="mt-8 font-sans">Hi {toName}</p>
      <p className="mt-3 font-sans" dangerouslySetInnerHTML={{ __html: body }}>
        
      </p>
    </div>
  </div>
    </>
   
  )
}

export default ListComponent
