import React from "react";
import { 
  Code, 
  Palette, 
  Globe, 
  Layers, 
  Database, 
  Server, 
  Coffee,
  Zap,
  Settings,
  Terminal,
  FileCode,
  Cpu
} from "lucide-react";

const frontendSkills = [
  { name: "HTML & CSS", icon: Code },
  { name: "JavaScript", icon: Zap },
  { name: "React.js", icon: Globe },
  { name: "Vue.js", icon: Layers },
  { name: "Angular", icon: Settings },
  { name: "Tailwind CSS", icon: Palette },
];

const backendSkills = [
  { name: "Java + Spring Boot", icon: Coffee },
  { name: "Python + Django / Flask / FastAPI", icon: Terminal },
  { name: "PHP + Laravel", icon: FileCode },
  { name: "Node.js + Express", icon: Server },
  { name: "SQL Databases (MySQL)", icon: Database },
  { name: "NoSQL Databases (MongoDB)", icon: Cpu },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Frontend</h2>
            </div>
            
            <div className="grid gap-4">
              {frontendSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="bg-white p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-800 flex-1">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex items-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-xl mr-4">
                <Server className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Backend</h2>
            </div>
            
            <div className="grid gap-4">
              {backendSkills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-100 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="bg-white p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-800 flex-1">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
}