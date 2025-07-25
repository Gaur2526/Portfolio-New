import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {

    return (

        <section id="about" className="py-24 px-4 relative"> 
           <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">

                    About <span className="text-primary"> Me</span>
 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">

                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">

                        Skilled in both front-end and back-end development, I build responsive web apps using React.js, Tailwind CSS, Node.js, and PostgreSQL. I focus on clean UI, API integration, database handling, and deploying full-stack apps with attention to detail and user-centered design.

                        </p>

                        <p className="text-muted-foreground"> 

                        I'm actively building projects using technologies like React.js, Tailwind CSS, Node.js, PostgreSQL, and Python. From frontend interfaces to backend logic and data analysis, I focus on creating clean, responsive, and user-friendly applications that reflect practical problem-solving skills.

                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 tp-4 justify-center">

                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a 
                            href="https://drive.google.com/uc?export=download&id=1n62XTuw0H8dOouExNToQvKSZxuIfUQx5"
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download Resume
                            </a>


                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">

                        <div className="gradient-border p-6 card-hover"> 
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                  <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"> 
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                  <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intuitive user interfaces and seamless user experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 ">
                                  <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Project Management</h4>
                                    <p className="text-muted-foreground">
                                    Driving full-stack web projects from idea to deployment using modern technologies and agile development practices.
                                    </p>
                                </div>
                            </div> 
                        </div>

                    </div>

                </div>
           </div>
        </section>
    )
}