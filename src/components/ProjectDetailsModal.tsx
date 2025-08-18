import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, DollarSign, Clock, Users, Target, Activity, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  sponsor: string;
  partners: string;
  duration: string;
  objectives: string | string[];
  activities: string | string[];
  achievements?: string[];
  image: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ 
  project, 
  isOpen, 
  onClose 
}) => {
  if (!project) return null;

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-background border-border">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
          className="relative"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-full"
            onClick={onClose}
          >
            <X size={20} />
          </Button>

          {/* Full-width Hero Image */}
          <motion.div 
            className="relative w-full h-64 md:h-80 overflow-hidden"
            variants={imageVariants}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Title Overlay */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6"
              variants={itemVariants}
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h1>
            </motion.div>
          </motion.div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Key Info Badges */}
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={itemVariants}
            >
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5 text-sm">
                <DollarSign size={16} className="text-primary" />
                <span className="font-medium">Funding:</span> {project.sponsor}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5 text-sm">
                <Clock size={16} className="text-primary" />
                <span className="font-medium">Duration:</span> {project.duration}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5 text-sm">
                <Users size={16} className="text-primary" />
                <span className="font-medium">Partners:</span> {project.partners}
              </Badge>
            </motion.div>

            {/* Project Sections */}
            <div className="grid gap-6">
              {/* Objectives */}
              <motion.section variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Target size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Objectives</h2>
                </div>
                <div className="pl-7">
                  {Array.isArray(project.objectives) ? (
                    <ul className="space-y-2">
                      {project.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{project.objectives}</p>
                  )}
                </div>
              </motion.section>

              {/* Key Activities */}
              <motion.section variants={itemVariants} className="space-y-3">
                <div className="flex items-center gap-2">
                  <Activity size={20} className="text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Key Activities</h2>
                </div>
                <div className="pl-7">
                  {Array.isArray(project.activities) ? (
                    <ul className="space-y-2">
                      {project.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{act}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground leading-relaxed">{project.activities}</p>
                  )}
                </div>
              </motion.section>

              {/* Achievements (if present) */}
              {project.achievements && project.achievements.length > 0 && (
                <motion.section variants={itemVariants} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Trophy size={20} className="text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">Major Achievements</h2>
                  </div>
                  <div className="pl-7">
                    <ul className="space-y-2">
                      {project.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.section>
              )}
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;