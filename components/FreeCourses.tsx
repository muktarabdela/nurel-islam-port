"use client";

import { useState } from "react";

// Mock data for the videos
const courses = [
  {
    id: 1,
    title: "Introduction to ትጅዊድ Rules",
    description: "Learn the foundational rules of Quranic recitation with clear, step-by-step examples.",
    category: "ትጅዊድ",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUvGZMwhxjbP7Ypinqed0I588a6L2lBezYhqMZDCfWswgANOuA3l5z4ULamCyfLEMQLXEjc7r9JX_x1WfaZ-Vfqpt7wt1zIRurqEJps_3DVNlQk3pfLT4KMoLJy1Qg4v5y2hEOr4CI1macJf43wxMXdX8q4T3Gbc_vsaOEfq5OYyDpb5XxKJ6iZqVKUM4XHfAwtBMe4ERxRRR54b1_rQIZ1JlS9IxwXc7B13vFsteAhHsqtf9Cu0zzwDRrpmaV-KQW4gFlIiIojVf7",
  },
  {
    id: 2,
    title: "አረበኛ Grammar Basics",
    description: "A beginner-friendly guide to understanding the structure of the አረበኛ language.",
    category: "አረበኛ",
    thumbnail: "https://images.unsplash.com/photo-1584281722888-cb5f87b8f04c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Life of the Prophet (ﷺ)",
    description: "An inspiring journey through the key events of the ሲራ.",
    category: "ሲራ",
    thumbnail: "https://images.unsplash.com/photo-1596728091873-10e4701dd92c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Understanding Daily ፊቂህ",
    description: "Practical rulings on purification, prayer, and daily acts of worship.",
    category: "ፊቂህ",
    thumbnail: "https://images.unsplash.com/photo-1606132479633-91b35b62e49c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Advanced ትጅዊድ: Sifat al-Huroof",
    description: "Deep dive into the characteristics of አረበኛ letters for advanced reciters.",
    category: "ትጅዊድ",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVu1pBcYpBeMgrI1GLBlFFb6IWqNyNCwHbF2vInkT3E6Mg68UmvXorD63nHGZ0azIfA3icMfroFB7i7xELWm0HWKcFu6f3j52XutHIb-icuy2jYW6TRtv-1ipyL844zZOqkg0QR3WqjbAlWEFJ-WU4XW22Hzeb2VxWTRpXYk_y4ZGOOZ90vW6mtFvUJKy7lQJlyKfoygux_dXjuxkq9vhtBfS2USM-p1xndNOOuBLDnrp8WigFaFHRVK8N3G_kjxssOr0kx5ZsUHf-",
  },
  {
    id: 6,
    title: "Conversational አረበኛ",
    description: "Learn practical vocabulary and phrases for daily communication.",
    category: "አረበኛ",
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = ["ሁሉንም", "ትጅዊድ", "አረበኛ", "ሲራ", "ፊቂህ"];

export default function FreeCourses() {
  const [activeCategory, setActiveCategory] = useState("ሁሉንም");

  const filteredCourses =
    activeCategory === "ሁሉንም"
      ? courses
      : courses.filter((course) => course.category === activeCategory);

  return (
    <section id="classes" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">
            ነፃ የ ዲን ትምህርቶች
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            በተመረጡ ኡስታዞች በተቀረጹት የነፃ ከፍተኛ ጥራት ያላቸው ትምህርታዊ ቪዲዮዎች በመከታተል እና በመማር የ ዲን ዕውቀትዎን ግንዛቤ ያስፉ።
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface-container-highest text-primary hover:bg-secondary/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-outline-variant/30"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative aspect-video overflow-hidden bg-primary">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-primary transform scale-90 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                  </div>
                </div>
                <span className="absolute top-4 left-4 bg-secondary-fixed text-on-secondary-fixed text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                  {course.title}
                </h3>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}