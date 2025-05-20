import {RevealOnScroll} from "./ReavelOnScroll"

export const About =()=>{
    const frontEnd=[
        "HTML",
        "CSS",
        "Javascript",
        "JQUERY",
        "React Js",
        "Tailwind CSS"
    ]
    const backEnd=[
        "Node js",
        "Express Js",
        "Mysql",
        "Python"
    ]
return(
    <section id="about" className="min-h-screen max-w-screen flex items-center justify-center py-20 relative left-10 ">
        <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {""}
            About Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all ">
                <p className="text-gray-300 mb-6">
                    Passionate about technology and design, I am a front-end developer with a keen interest in creating seamless user experiences. My journey in web development has equipped me with a diverse skill set, enabling me to tackle challenges across the entire stack. I thrive on collaboration and am always eager to learn new technologies and methodologies to enhance my craft.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6  hover:translate-y-1 transition-all">
                        <h3 className="texxl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontEnd.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">{tech}</span>
                            ))}
                        </div>
                        
                    </div>
                    <div className="rounded-xl p-6  hover:translate-y-1 transition-all">
                        <h3 className="texxl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backEnd.map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)]">{tech}</span>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="texl font-bold mb-4">📚Education</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Undergraduate In Software Engineering</strong>-Abbottabad University of Science and Technology (2023-2024)
                        </li>
                        <li>
                            Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Web Development, Software Engineering Principles
                        </li>
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 transition-all">
                    <h3 className="texl font-bold mb-4">👜Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Udmey Certified(2024)</h4>
                                <p>I have completed a front-end development course on Udemy, where I gained a strong understanding of HTML, CSS, JavaScript, Tailwind CSS, jQuery, and React.js, including Redux Toolkit and authentication</p>
                            </div>
                    </div>
                    <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold">Want to Internship at (Abbottabad Software Houses)</h4>
                                <p>I am currently working from home. As an undergraduate student, I am utilizing my semester break to gain experience by joining a software house.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
            </RevealOnScroll>
    </section>
)
}