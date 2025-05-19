import {RevealOnScroll} from "./ReavelOnScroll"
export const Home = ()=>{
    return<section id="home" className="min-h-screen flex items-center justify-center relative">
                <RevealOnScroll>
            <div className="text-center z-10 px-4"> 
                <h1 className="text-5\xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-4000 leading-right bg-clip-text text-transparent">Hi, I'm Usman</h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a Frontend Developer with a passion for creating beautiful and functional web applications. I love to learn new technologies and improve my skills. Let's work together to build something amazing!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ">
                        View Projects
                    </a>
                    <a href="#contacts" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 overflow-hidden
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] ">
                        Contact Me
                    </a>
                </div>
            </div>
                </RevealOnScroll>
        </section>
}