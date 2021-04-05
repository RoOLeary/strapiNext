import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
   
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
           
            <div className="relative w-full mb-3 mt-8">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="full-name"
            >
                Full Name 
            </label>
            
            <input 
                name="fullname" 
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Full Name"
                {...register('fullname', { required: true, maxLength: 30 })}  
                style={{ transition: "all .15s ease" }}/>
            </div>

            <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
            >
                Email
            </label>
            <input
                type="email"
                name="email" 
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Enter Your Email Address"
                {...register('email')} 
                style={{ transition: "all .15s ease" }}
            />
            </div>

            <div className="relative w-full mt-2 mb-3">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="inquiry_type"
            >
                Inquiry Type
            </label>
             <select name="inquiry_type" style={{ "width": "100%" }} class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full" {...register('inquiry_type')} >
               <option>Please Select</option>
               <option value="booking">Booking</option>
               <option value="teaching">Lesson Inquiry</option>
               <option value="other">Other</option>
            </select>
            </div>

            <div className="relative w-full mb-3">
            <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="message"
            >
                Message
            </label>
            <textarea
                rows="4"
                cols="80"
                className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm shadow focus:outline-none focus:shadow-outline w-full"
                placeholder="Type a message..."
                name="message" 
                {...register('message')}  
            />
            </div>
            <div className="text-center mt-6">
                <input className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="submit" />
            </div>
        </form>
    
    )
}

export default Form;