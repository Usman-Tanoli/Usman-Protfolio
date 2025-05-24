import {RevealOnScroll} from "./ReavelOnScroll"

export const Projects=()=>{
    return(
        <section id="projects" className=" min-h-screen w-full flex items-center justify-center py-20 mx-auto relative left-11">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                 <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {""}
            Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Landing-Page</h3>
                        <p className="text-gray-400 mb-4">This GitHub repository contains the source code for a responsive, modern landing page using HTML, CSS, and JavaScript, ideal for showcasing products, services, or portfolios with clean design.</p>
                        <div>
                        {['React','Nodejs','Appwrite','Tailwindcss'].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">{tech}</span>
                        ))}
                         </div>
                        <div className="flex justify-between items-center">
                        <a href="https://github.com/Usman-Tanoli/Landing-Page-code" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                          View Projects ▶{''}
                        </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Task-Manager-App</h3>
                        <p className="text-gray-400 mb-4">This application showcases proficiency in modern frontend development practices, emphasizing component-based architecture and efficient state management. It's an excellent demonstration of building a single-page application (SPA) with a focus on user experience and performance</p>
                        <div>
                        {['React','Nodejs','Appwrite','Tailwindcss'].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">{tech}</span>
                        ))}
                         </div>
                        <div className="flex justify-between items-center">
                        <a href="https://Usman-Tanoli.github.io/task-manager-app" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                          View Projects ▶{''}
                        </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Tiktok</h3>
                        <p className="text-gray-400 mb-4">Project description</p>
                        <div>
                        {['React','Nodejs','Appwrite','Tailwindcss'].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">{tech}</span>
                        ))}
                         </div>
                        <div className="flex justify-between items-center">
                        <a href="https:/www.tiktok.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                          View Projects ▶{''}
                        </a>
                        </div>
                    </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Github</h3>
                        <p className="text-gray-400 mb-4">Project description</p>
                        <div>
                        {['React','Nodejs','Appwrite','Tailwindcss'].map((tech,key)=>(
                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.1)] transition-all">{tech}</span>
                        ))}
                         </div>
                        <div className="flex justify-between items-center">
                        <a href="https:/www.github.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                          View Projects ▶{''}
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}