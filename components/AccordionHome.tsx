"use client"
import React from 'react'
import { Accordion, AccordionItem } from "@heroui/react";


const AccordionHome = () => {
   const AccordionData = [
          {
              "title": "What is the total fee payable at the time of admission for regular students?",
              "description": "The total fee payable at the time of admission for regular students is ₹1,05,200."
          },
          {
              "title": "What is the total fee payable at the time of admission for students allotted through TFW (Tuition Fee Waiver) scheme?",
              "description": "The total fee payable at the time of admission for students allotted through TFW is ₹53,200."
          },
          {
              "title": "How much is the tuition fee per semester?",
              "description": "The tuition fee per semester is ₹52,000."
          },
          {
              "title": "Are there any additional fees that might be charged by the University (MAKAUT)?",
              "description": "Yes, there are additional fees charged by the University, which include:  1) University Development Fees @ ₹550 per year (one-time payment of ₹2,200) 2) University Registration Fees @ ₹500 (one-time payment)"
          },
          {
              "title": "Is the caution deposit refundable?",
              "description": "Yes, the caution deposit of ₹10,000 is refundable."
          },
          {
              "title": "How can the fees be paid?",
              "description": "The fees can be paid by cash or demand draft in favour of 'ACADEMY OF TECHNOLOGY,' payable at Kolkata."
          },
          {
              "title": "Are the tuition fees subject to change?",
              "description": "Yes, the tuition fees may be revised based on directives from the West Bengal Government."
          },
          {
              "title": "What is the Vidyarthi Mediclaim, and how much does it cost?",
              "description": "Vidyarthi Mediclaim is a medical insurance for students, and it costs ₹2,500 (one-time payment)."
          },
          {
              "title": " What are the fees for library services?",
              "description": "The library fees, which cover the Book Bank, Journals, and Digital Library, amount to ₹6,000 (one-time payment)."
          }
      ]
  
      return (
          <Accordion variant="splitted" className='w-full h-full  p-10 '>
  
              {AccordionData.map((item,index)=>(
                  <AccordionItem key={index} aria-label={`Accordion ${index + 1}`} title={item.title} className='bg-gray-400 font-bold rounded-lg text-gray-800  text-center'>
                      {item.description}
                  </AccordionItem>
              ))}
  
          </Accordion>
      );
}

export default AccordionHome
