import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "React", icon: "react/white" },
      { name: "Next.js", icon: "nextdotjs/white" },
      { name: "TypeScript", icon: "typescript/white" },
      { name: "JavaScript", icon: "javascript/white" },
      { name: "Tailwind CSS", icon: "tailwindcss/white" },
      { name: "HTML5", icon: "html5/white" },
      { name: "CSS3", icon: "css/white" },
    ]
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: "nodedotjs/white" },
      { name: "Express", icon: "express/white" },
      { name: "Python", icon: "python/white" },
      { name: "Django", icon: "django/white" },
      { name: "FastAPI", icon: "fastapi/white" },
      { name: "Flask", icon: "flask/white" },
      { name: "GraphQL", icon: "graphql/white" },
    ]
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS", icon: "amazonaws/white" },
      { name: "Google Cloud", icon: "googlecloud/white" },
      { name: "Docker", icon: "docker/white" },
      { name: "Kubernetes", icon: "kubernetes/white" },
      { name: "Linux", icon: "linux/white" },
    ]
  },
  {
    title: "DATABASES",
    skills: [
      { name: "PostgreSQL", icon: "postgresql/white" },
      { name: "MongoDB", icon: "mongodb/white" },
      { name: "MySQL", icon: "mysql/white" },
      { name: "Redis", icon: "redis/white" },
    ]
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: "git/white" },
      { name: "GitHub", icon: "github/white" },
      { name: "GitLab", icon: "gitlab/white" },
      { name: "VS Code", icon: "visualstudiocode/white" },
      { name: "Postman", icon: "postman/white" },
      { name: "Jira", icon: "jira/white" },
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-24 bg-black relative overflow-hidden flex flex-col justify-center items-center">
      <div ref={ref} className="max-w-5xl w-full mx-auto px-4 relative z-10">
         <motion.h2 
           className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight"
           initial={{ opacity: 0, y: 20 }}
           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
         >
           Tech Stack
         </motion.h2>

         <div className="flex flex-col gap-12">
           {techCategories.map((category, index) => (
             <motion.div 
               key={category.title}
               initial={{ opacity: 0, y: 20 }}
               animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="flex flex-col gap-6"
             >
               {/* Category Header */}
               <div className="flex items-center gap-4">
                 <h3 className="text-[11px] font-semibold text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap">
                   {category.title}
                 </h3>
                 <div className="h-px bg-white/5 flex-1"></div>
               </div>

               {/* Skills Grid */}
               <div className="flex flex-wrap gap-4">
                 {category.skills.map((skill) => (
                   <div 
                     key={skill.name} 
                     className="flex items-center gap-3 bg-[#111111] border border-white/5 rounded-xl px-4 py-3 hover:bg-[#1a1a1a] hover:border-white/10 transition-all duration-300 min-w-[140px]"
                   >
                     <img 
                       src={`https://cdn.simpleicons.org/${skill.icon}`} 
                       alt={skill.name} 
                       className="w-4 h-4 object-contain opacity-70" 
                     />
                     <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                   </div>
                 ))}
               </div>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}
