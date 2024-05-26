/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.1} dragTransition={{bounceDamping:30 , bounceStiffness:100}} className="flex-shrink-0 relative w-60 h-72 rounded-[40px] py-10 px-8 bg-zinc-300 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-1">
          <h4>{data.filesize}</h4>
          <span className="w-7 h-7 bg-zinc-900 rounded-full flex items-center justify-center">
            {data.close?<IoClose color="#ffffff"/>:<LuDownload size=".7rem" color="#ffffff" />}
          </span>
        </div>
        {data.tag.isOpen && (<div className={`tag w-ful h-10 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} py-4 flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
          )
        }
        
      </div>
    </motion.div>
  );
}

export default Card;
