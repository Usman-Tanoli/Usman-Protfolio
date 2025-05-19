import { RevealOnScroll } from "./ReavelOnScroll"
import { useState } from "react";
import emailjs from 'emailjs-com';

export const Contact=()=>{

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert('Message sent successfully!')
            setFormData({
                name:'',
                email:'',
                message:''
            })
        }).catch(()=>{
            alert('Message not sent, please try again later.')
        })
    }
    return <section 
    id="contacts" 
    className="min-h-screen flex items-end justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
               {''} Get In Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6 bg-sky-700 p-10 rounded-3xl">
                    <div className="relative">
                        <input type="text" id="name" name="name" required placeholder="Name..." value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} className="w-full bg-red/5 border border-red/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black"/>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" name="email" required placeholder="example@gmail.com" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} className="w-full bg-red/5 border border-red/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black"/>
                    </div>
                    <div className="relative">
                        <textarea  id="message" name="message" required placeholder="Your Message..." value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})} className="w-full bg-red/5 border border-red/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-black"/>
                    </div>
                        <button type="submit"
                        className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,10,246,0.4)]">
                        Send Message</button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
}