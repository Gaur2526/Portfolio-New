import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

    {
        id: 1,
        title: "Online Food Ordering",
        description : "A responsive and interactive food ordering website where users can browse items, manage a cart, and complete checkout with ease. It features dynamic updates, smooth animations, and a mobile-friendly design.",
        image : "./Projects/FoodOrdering.png",
        tags : ["HTML","CSS","JS","Netlify"],
        demoUrl : "https://onlinemealordering.netlify.app/",
        githubUrl : "https://github.com/Gaur2526/Online-Food-Ordering",
    },
    {
        id: 2,
        title: "YT-Stats",
        description : "A web-based tool that provides real-time analytics for YouTube channels using the channel ID. It displays key metrics like subscriber count, video count, and views through a clean, responsive UI. This project highlights API integration, asynchronous data fetching, and efficient data presentation.",
        image : "./Projects/YT-Stats.png",
        tags : ["React.js","Python","Tailwind CSS","Vercel","Youtube Data API V3"],
        demoUrl : "https://yt-updated-8sop.vercel.app/",
        githubUrl : "https://github.com/Gaur2526/YT-UPDATED",
    },

    {
        id: 3,
        title: "Content Share",
        description : "Content Share is a modern web app for sharing and exploring content. Built with Next.js and Tailwind CSS, it offers a responsive, user-friendly interface and dynamic interactions using React. The project highlights scalable frontend development with modern web technologies.",
        image : "./Projects/ContentShare.png",
        tags : ["Next.js","Tailwind CSS","TypeScript","Vercel"],
        demoUrl : "https://content-share-lyart.vercel.app/",
        githubUrl : "https://github.com/Gaur2526/Content_Share",
    },


]

export const ProjectSection = () =>{

    return(

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center]">
                    Featured <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map( (project,key) => (
                        <div 
                        key={key} 
                        className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">

                                <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>

                            </div>

                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-sm border font-medium rounded-full bg-primary/20 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                            <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center ">
                                <div className="flex space-x-3">
                                    <a 
                                    href={project.demoUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a 
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>   
                            </div>
                        </div>
                      </div>                        
                    ))}
                </div>

                <div className="text-center mt-12">

                    <a 
                    href="https://github.com/Gaur2526"
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>

                </div>

            </div>
        </section>
    )
}