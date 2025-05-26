"use client"
import { getMessage } from '@/lib/home/message';
import React from 'react'
import { useEffect,useState } from 'react';
// import { Lato } from 'next/font/google';
import { lato } from '@/fonts';
import { messageCard } from '@/types/frontend';
import ReactMarkdown from "react-markdown";
import BlockRendererClient from '@/hooks/BlockRendererClient';

interface LinkProps {
  link: string;
}

const Message = ({ link }: LinkProps) => {
  const [message,setmessage]=useState<messageCard>();

  useEffect(()=>{
    const loaddata=async()=>{
      const data=await getMessage({link});
      setmessage(data);
      // console.log("Message",message?.message);
    }
    loaddata();
    
  },[link])

  return (
    <div>
      <section className="mb-10 font-lato">
        <div className="flex flex-col md:flex-row max-w-4xl md:max-w-6xl mx-auto items-center">
          <div className="flex justify-center md:justify-start w-full md:w-auto p-6 md:p-10">
            <img
              src={message?.image}
              className="w-48 h-48 md:w-80 md:h-72 rounded-2xl object-cover"
              alt={message?.name}
            />
          </div>
          <div className="flex flex-col justify-center font-lato  p-6 md:p-10 w-full">
            <p className="text-xl md:text-2xl text-gray-600 font-semibold">{message?.name}</p>
            <p className="text-xs md:text-sm text-gray-500">{message?.position}</p>
            <p className='max-w-3xl text-xs md:text-sm text-gray-500 pt-4 md:pt-5'>
               <BlockRendererClient content={message?.message}  />
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Message
