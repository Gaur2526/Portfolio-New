import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [

    {
        id: 1,
        title: "Social App",
        description : "This social media app lets users create posts, like and comment on them, and join or create communities to organize content. It supports seamless interaction within communities to foster targeted engagement. The app is built with React and TypeScript on the frontend, uses Supabase with PostgreSQL for the backend, and is deployed on Vercel.",
        image : "./Projects/SocialApp.png",
        tags : ["React.js","TypeScript","PostgreSQL","Supabase","vercel"],
        demoUrl : "https://social-app-amber-three.vercel.app/",
        githubUrl : "https://github.com/Gaur2526/Social-app",
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
    {
        id: 4,
        title: "Whatsapp Chat Analyzer",
        description : "WhatsApp Chat Analyzer is a web app that processes exported WhatsApp chat files to provide detailed insights and visualizations. It analyzes metrics such as total messages, word counts, media shared, frequently used words, and chat sentiment. The app helps users understand chat dynamics through interactive charts, word clouds, and activity heatmaps.",
        image : "./Projects/WhatsappChatAnalyzer.png",
        tags : ["Python","Streamlit","NLP"],
        demoUrl : "https://whatsapp-chat-analyzer-akash.streamlit.app/",
        githubUrl : "https://github.com/Gaur2526/Whatsapp-Chat-Analyzer",
        
    },
    {
        id: 5,
        title: "VaultX",
        description : "VaultX is a secure crypto wallet generation tool that creates Ethereum and Solana-compatible wallets using a 12-word mnemonic seed phrase. It leverages the BIP39 standard to generate and validate the phrases, ensuring compatibility with popular blockchain wallets. The tool offers a simple and private interface to explore deterministic key generation in web3.",
        image : "./Projects/VaultX.png",
        tags : ["React.js","TailwindCSS","Bip39","Vercel"],
        demoUrl : "https://vaultx-chi.vercel.app/",
        githubUrl : "https://github.com/Gaur2526/VaultX",
        
    },
    {
        id: 6,
        title: "Online Food Ordering",
        description : "A responsive and interactive food ordering website where users can browse items, manage a cart, and complete checkout with ease. It features dynamic updates, smooth animations, and a mobile-friendly design.",
        image : "./Projects/FoodOrdering.png",
        tags : ["HTML","CSS","JS","Netlify"],
        demoUrl : "https://onlinemealordering.netlify.app/",
        githubUrl : "https://github.com/Gaur2526/Online-Food-Ordering",
        
    }


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