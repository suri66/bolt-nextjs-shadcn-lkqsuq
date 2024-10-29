import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  imageUrl: string;
}

export function FeatureCard({ title, description, icon: Icon, imageUrl }: FeatureCardProps) {
  return (
    <div className="text-left rounded-2xl overflow-hidden bg-white shadow-lg transition-transform hover:scale-105">
      <div className="h-48 relative">
        <Image 
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Icon className="h-6 w-6 text-[#f6569e]" />
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}