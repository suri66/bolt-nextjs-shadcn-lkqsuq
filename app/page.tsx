import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { StatCard } from "@/components/ui/stat-card";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { Testimonial } from "@/components/ui/testimonial";
import { 
  Chrome, Apple, Play, BookmarkPlus, FolderSearch, 
  Share2, Github, Twitter, Linkedin, Brain, 
  Sparkles, Link2, Library, ArrowRight
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      title: "Save Content",
      description: "Capture articles, research papers, and web pages instantly. Our AI preserves and enhances your digital collection.",
      icon: BookmarkPlus,
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3"
    },
    {
      title: "Smart Organization",
      description: "Experience AI-powered organization that automatically categorizes and tags your content for easy retrieval.",
      icon: FolderSearch,
      imageUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3"
    },
    {
      title: "Team Collaboration",
      description: "Build a shared knowledge base with your team. Create, share, and grow your collective intelligence.",
      icon: Share2,
      imageUrl: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3"
    }
  ];

  const testimonials = [
    {
      quote: "Favorite has transformed how I organize my research. The AI-powered organization is a game-changer.",
      author: "Dr. Sarah Chen",
      role: "Research Scientist"
    },
    {
      quote: "Finally, a bookmark manager that understands context. It's like having a personal librarian.",
      author: "Mark Thompson",
      role: "Content Creator"
    },
    {
      quote: "The team collaboration features have made knowledge sharing effortless.",
      author: "Lisa Rodriguez",
      role: "Product Manager"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BookmarkPlus className="h-8 w-8 text-[#f6569e]" />
          <span className="text-xl font-bold">Favorite</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://favorite.com" className="text-gray-600 hover:text-gray-900">Website</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a>
          <Button variant="outline" className="flex items-center">
            <Chrome className="mr-2 h-4 w-4" />
            Add to Chrome
          </Button>
          <Button className="bg-[#fde047] hover:bg-yellow-300 text-black">Try now</Button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 pt-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black tracking-tight mb-6 leading-[1.1]">
            TRANSFORM YOUR BOOKMARKS<br />INTO KNOWLEDGE
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Favorite is your AI-powered companion for capturing, organizing, and utilizing digital knowledge. Stop losing valuable content in endless browser tabs.
          </p>

          <div className="flex justify-center items-center space-x-6 mb-12">
            <Button className="bg-[#fde047] hover:bg-yellow-300 text-black flex items-center px-6 py-6">
              <Chrome className="mr-2 h-5 w-5" />
              Install Chrome Extension
            </Button>
            <Button variant="outline" className="flex items-center px-6 py-6 opacity-60 cursor-not-allowed">
              <Apple className="mr-2 h-5 w-5" />
              Coming Soon
            </Button>
            <Button variant="outline" className="flex items-center px-6 py-6 opacity-60 cursor-not-allowed">
              <Play className="mr-2 h-5 w-5" />
              Coming Soon
            </Button>
          </div>

          <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3"
              alt="Favorite App Preview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <section className="mb-32">
          <h2 className="text-4xl font-bold mb-16 text-center">SUPERCHARGE YOUR BOOKMARKS</h2>
          <FeatureGrid />
        </section>

        <section className="mb-32">
          <div className="grid grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="mb-32 bg-gradient-to-br from-[#f6569e]/5 to-[#fde047]/5 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-12 text-center">LOVED BY KNOWLEDGE WORKERS</h2>
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </section>

        <section className="mb-32 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Bookmarks?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of knowledge workers who have already upgraded their bookmark game.
          </p>
          <Button className="bg-[#fde047] hover:bg-yellow-300 text-black text-lg px-8 py-6">
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </section>

      <footer className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <BookmarkPlus className="h-8 w-8 text-[#f6569e]" />
                <span className="text-xl font-bold">Favorite</span>
              </div>
              <p className="text-gray-600">
                Your AI-powered knowledge curator
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#f6569e]">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f6569e]">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f6569e]">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-gray-600">
              © 2024 Favorite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}