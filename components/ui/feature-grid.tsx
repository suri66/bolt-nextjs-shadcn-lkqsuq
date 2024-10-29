import { Brain, Sparkles, Link2, Library, Search, Users, Tag, Globe } from 'lucide-react';

interface FeatureItem {
  icon: typeof Brain;
  title: string;
  description: string;
}

export function FeatureGrid() {
  const features: FeatureItem[] = [
    {
      icon: Brain,
      title: "Smart Collections",
      description: "AI-powered organization that automatically categorizes your bookmarks based on content and context."
    },
    {
      icon: Search,
      title: "Universal Search",
      description: "Find anything instantly with our powerful search across all your saved content and notes."
    },
    {
      icon: Tag,
      title: "Auto-Tagging",
      description: "Let AI automatically tag your content for better organization and discovery."
    },
    {
      icon: Users,
      title: "Team Spaces",
      description: "Create shared spaces for teams to collaborate and build knowledge together."
    },
    {
      icon: Globe,
      title: "Web Clipper",
      description: "Save any web content with our powerful browser extension, preserving the original format."
    },
    {
      icon: Library,
      title: "Knowledge Base",
      description: "Transform your bookmarks into a searchable, organized knowledge base."
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <Icon className="h-8 w-8 text-[#f6569e] mb-4" />
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}