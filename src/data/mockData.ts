import { Category, Project, TeamMember, Service, Testimonial } from "../types";

export const categories: Category[] = [
  { id: 1, name: "Wedding", slug: "wedding" },
  { id: 2, name: "Commercial", slug: "commercial" },
  { id: 3, name: "Music Video", slug: "music" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "The Royal Knot",
    category: { id: 1, name: "Wedding", slug: "wedding" },
    thumbnail: "/images/gallery/wedding.jpg",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Kerala Tourism",
    category: { id: 2, name: "Commercial", slug: "commercial" },
    thumbnail: "/images/gallery/backwaters.jpg",
  },
  {
    id: 3,
    title: "Symphony in Green",
    category: { id: 3, name: "Music Video", slug: "music" },
    thumbnail: "/images/gallery/prewedding.jpg",
  },
  {
    id: 4,
    title: "Golden Hour Vows",
    category: { id: 1, name: "Wedding", slug: "wedding" },
    thumbnail: "/images/gallery/goldenhour.jpg",
  },
  {
    id: 5,
    title: "Urban Motion",
    category: { id: 2, name: "Commercial", slug: "commercial" },
    thumbnail: "/images/gallery/bts.jpg",
  },
];

export const team: TeamMember[] = [
  { id: 1, name: "Adil Rasheed", role: "Creative Director" },
];

export const services: Service[] = [
  { id: 1, title: "Wedding Cinema" },
  { id: 2, title: "Commercials" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    client_name: "Sarah & John",
    role: "Bride & Groom · Cochin",
    text: "FrameStory Studios captured our day perfectly. The cinematic quality and emotional storytelling was beyond our expectations!",
    rating: 5,
  },
  {
    id: 2,
    client_name: "TechNova Inc.",
    role: "Brand Commercial",
    text: "Professional, fast, and broadcast caliber. Their creative direction helped our commercial outperform all previous campaigns.",
    rating: 5,
  },
  {
    id: 3,
    client_name: "Priya & Rahul",
    role: "Destination Wedding · Wayanad",
    text: "Watching our wedding film felt like watching a feature film on Netflix. Every raw, emotional moment was preserved genuinely.",
    rating: 5,
  },
  {
    id: 4,
    client_name: "Malabar Heritage",
    role: "Hospitality Campaign",
    text: "The aerial drone work and lighting design captured the true soul of our resort. Exceptional team to collaborate with.",
    rating: 5,
  },
  {
    id: 5,
    client_name: "Ananya & Rohit",
    role: "Wedding Ceremony · Calicut",
    text: "They blended seamlessly into our families without feeling intrusive. The final highlight teaser gave everyone goosebumps!",
    rating: 5,
  },
  {
    id: 6,
    client_name: "Zest Coffee Roasters",
    role: "Product Film",
    text: "From initial storyboard to the final 4K color master, the turnaround was swift and the visual aesthetic is world-class.",
    rating: 5,
  },
];
