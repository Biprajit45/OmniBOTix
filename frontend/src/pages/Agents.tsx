import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Bot, 
  Search, 
  Filter, 
  Star, 
  Zap, 
  Grid,
  List,
  SlidersHorizontal,
  TrendingUp,
  Clock,
  Award,
  DollarSign
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  reviews: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
  tags: string[];
}

export const Agents = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all-categories");
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = [
    "All Categories",
    "Development",
    "Marketing",
    "Analytics",
    "Finance",
    "Design",
    "Customer Service",
    "Content Creation",
    "Automation",
    "Audio",
    "Legal"
  ];

  const mockAgents: Agent[] = [
    {
      id: "1",
      name: "Digital Clone Agent (Exclusive)",
      description: "An advanced AI that creates a digital clone of your persona—mimics your voice, writing, decision-making, and even your online presence. Terrific for productivity, terrifying for privacy.",
      category: "Automation",
      rating: 5.0,
      price: 999,
      reviews: 7,
      image: "/placeholder.svg",
      isFeatured: true,
      tags: ["Digital Twin", "Persona", "Voice Synthesis", "Deep Learning", "Exclusive", "Terrifying", "AI Clone", "Identity"]
    },
    {
      id: "2",
      name: "CodeGenius AI",
      description: "Advanced coding assistant that writes, debugs, and optimizes code across multiple programming languages with enterprise-grade security",
      category: "Development",
      rating: 4.9,
      price: 49,
      reviews: 1247,
      image: "/placeholder.svg",
      isFeatured: true,
      tags: ["Python", "JavaScript", "Code Review", "Debugging"]
    },
    {
      id: "3",
      name: "MarketMind Pro",
      description: "AI-powered market analysis and trading strategy generator with real-time data processing and risk management",
      category: "Finance",
      rating: 4.8,
      price: 129,
      reviews: 856,
      image: "/placeholder.svg",
      isFeatured: true,
      tags: ["Trading", "Analysis", "Risk Management", "Real-time"]
    },
    {
      id: "4",
      name: "ContentCraft Elite",
      description: "Professional content creation agent for blogs, articles, and marketing copy with SEO optimization",
      category: "Marketing",
      rating: 4.7,
      price: 39,
      reviews: 2134,
      image: "/placeholder.svg",
      tags: ["Content Writing", "SEO", "Blogging", "Marketing"]
    },
    {
      id: "5",
      name: "DataVault Analytics",
      description: "Enterprise-grade data analysis and visualization tool with advanced machine learning capabilities",
      category: "Analytics",
      rating: 4.9,
      price: 199,
      reviews: 543,
      image: "/placeholder.svg",
      isFeatured: true,
      tags: ["Data Analysis", "Machine Learning", "Visualization", "Enterprise"]
    },
    {
      id: "6",
      name: "SocialSphere Manager",
      description: "Complete social media management and engagement automation across all major platforms",
      category: "Marketing",
      rating: 4.6,
      price: 79,
      reviews: 1876,
      image: "/placeholder.svg",
      tags: ["Social Media", "Automation", "Engagement", "Analytics"]
    },
    {
      id: "7",
      name: "VoiceClone Studio",
      description: "AI voice cloning and synthesis for content creation with natural speech patterns",
      category: "Audio",
      rating: 4.5,
      price: 89,
      reviews: 423,
      image: "/placeholder.svg",
      isNew: true,
      tags: ["Voice Cloning", "Audio", "TTS", "Content Creation"]
    },
    {
      id: "8",
      name: "DesignFlow AI",
      description: "Automated UI/UX design generation and prototyping with design system integration",
      category: "Design",
      rating: 4.4,
      price: 159,
      reviews: 672,
      image: "/placeholder.svg",
      isNew: true,
      tags: ["UI Design", "UX", "Prototyping", "Design Systems"]
    },
    {
      id: "9",
      name: "LegalEagle Assistant",
      description: "Legal document analysis and contract review automation with compliance checking",
      category: "Legal",
      rating: 4.8,
      price: 299,
      reviews: 234,
      image: "/placeholder.svg",
      isNew: true,
      tags: ["Legal", "Contracts", "Compliance", "Document Analysis"]
    },
    {
      id: "10",
      name: "CustomerCare Pro",
      description: "24/7 AI customer support agent with multi-language support and escalation protocols",
      category: "Customer Service",
      rating: 4.7,
      price: 69,
      reviews: 1543,
      image: "/placeholder.svg",
      tags: ["Customer Support", "Multi-language", "24/7", "Escalation"]
    },
    {
      id: "11",
      name: "AutoFlow Builder",
      description: "Workflow automation builder with drag-and-drop interface and integration capabilities",
      category: "Automation",
      rating: 4.6,
      price: 119,
      reviews: 789,
      image: "/placeholder.svg",
      tags: ["Automation", "Workflow", "Integration", "No-code"]
    },
    // 11-30: New mock agents
    {
      id: "12",
      name: "InsightBot Pro",
      description: "AI-powered business intelligence and reporting for executives.",
      category: "Analytics",
      rating: 4.5,
      price: 149,
      reviews: 312,
      image: "/placeholder.svg",
      tags: ["BI", "Reporting", "Dashboards", "KPIs"]
    },
    {
      id: "13",
      name: "AdCopy Master",
      description: "Generates high-converting ad copy for digital campaigns.",
      category: "Marketing",
      rating: 4.6,
      price: 59,
      reviews: 421,
      image: "/placeholder.svg",
      tags: ["Ad Copy", "Marketing", "Conversion", "Digital"]
    },
    {
      id: "14",
      name: "TrendSeeker AI",
      description: "Identifies emerging trends in social media and news.",
      category: "Analytics",
      rating: 4.3,
      price: 99,
      reviews: 198,
      image: "/placeholder.svg",
      tags: ["Trends", "Social Media", "News", "Analysis"]
    },
    {
      id: "15",
      name: "LegalDraft Pro",
      description: "Drafts legal documents and contracts with compliance checks.",
      category: "Legal",
      rating: 4.7,
      price: 249,
      reviews: 156,
      image: "/placeholder.svg",
      tags: ["Legal", "Drafting", "Contracts", "Compliance"]
    },
    {
      id: "16",
      name: "BrandVision AI",
      description: "Automates brand monitoring and sentiment analysis.",
      category: "Marketing",
      rating: 4.4,
      price: 89,
      reviews: 234,
      image: "/placeholder.svg",
      tags: ["Brand", "Sentiment", "Monitoring", "Analytics"]
    },
    {
      id: "17",
      name: "FinGuard Analyst",
      description: "Financial risk analysis and fraud detection for enterprises.",
      category: "Finance",
      rating: 4.8,
      price: 179,
      reviews: 312,
      image: "/placeholder.svg",
      tags: ["Finance", "Risk", "Fraud", "Analysis"]
    },
    {
      id: "18",
      name: "UXGenie",
      description: "AI-driven UX research and usability testing platform.",
      category: "Design",
      rating: 4.2,
      price: 129,
      reviews: 98,
      image: "/placeholder.svg",
      tags: ["UX", "Research", "Testing", "Design"]
    },
    {
      id: "19",
      name: "ScriptWriter AI",
      description: "Creates scripts for videos, podcasts, and presentations.",
      category: "Content Creation",
      rating: 4.6,
      price: 69,
      reviews: 187,
      image: "/placeholder.svg",
      tags: ["Script", "Content", "Video", "Podcast"]
    },
    {
      id: "20",
      name: "AutoInvoice Bot",
      description: "Automates invoice generation and payment reminders.",
      category: "Finance",
      rating: 4.5,
      price: 59,
      reviews: 143,
      image: "/placeholder.svg",
      tags: ["Invoice", "Automation", "Finance", "Payments"]
    },
    {
      id: "21",
      name: "SupportGen AI",
      description: "AI-powered helpdesk and ticket resolution for SaaS.",
      category: "Customer Service",
      rating: 4.7,
      price: 99,
      reviews: 321,
      image: "/placeholder.svg",
      tags: ["Support", "Helpdesk", "Tickets", "SaaS"]
    },
    {
      id: "22",
      name: "VoiceOver Studio",
      description: "Professional AI voiceovers for ads and e-learning.",
      category: "Audio",
      rating: 4.4,
      price: 79,
      reviews: 112,
      image: "/placeholder.svg",
      tags: ["Voiceover", "Audio", "Ads", "E-learning"]
    },
    {
      id: "23",
      name: "GrowthHacker AI",
      description: "Growth hacking strategies and campaign automation.",
      category: "Marketing",
      rating: 4.3,
      price: 109,
      reviews: 201,
      image: "/placeholder.svg",
      tags: ["Growth", "Hacking", "Campaign", "Automation"]
    },
    {
      id: "24",
      name: "DataGuard Pro",
      description: "Data privacy compliance and GDPR monitoring.",
      category: "Analytics",
      rating: 4.6,
      price: 139,
      reviews: 88,
      image: "/placeholder.svg",
      tags: ["Data", "Privacy", "GDPR", "Compliance"]
    },
    {
      id: "25",
      name: "AdBudget Optimizer",
      description: "Optimizes ad spend across multiple platforms.",
      category: "Marketing",
      rating: 4.5,
      price: 119,
      reviews: 176,
      image: "/placeholder.svg",
      tags: ["Ad Spend", "Optimization", "Marketing", "Platforms"]
    },
    {
      id: "26",
      name: "SmartRecruiter AI",
      description: "Automates candidate screening and interview scheduling.",
      category: "Automation",
      rating: 4.7,
      price: 149,
      reviews: 134,
      image: "/placeholder.svg",
      tags: ["Recruitment", "Screening", "Interview", "Automation"]
    },
    {
      id: "27",
      name: "DocuScan Bot",
      description: "Scans and extracts data from documents and receipts.",
      category: "Automation",
      rating: 4.4,
      price: 89,
      reviews: 99,
      image: "/placeholder.svg",
      tags: ["Document", "Scan", "Receipts", "Extraction"]
    },
    {
      id: "28",
      name: "EventPlanner AI",
      description: "Plans and schedules events with smart reminders.",
      category: "Automation",
      rating: 4.3,
      price: 59,
      reviews: 77,
      image: "/placeholder.svg",
      tags: ["Event", "Planning", "Reminders", "Automation"]
    },
    {
      id: "29",
      name: "SurveyGenie",
      description: "Creates and analyzes surveys for customer feedback.",
      category: "Analytics",
      rating: 4.2,
      price: 49,
      reviews: 65,
      image: "/placeholder.svg",
      tags: ["Survey", "Feedback", "Analytics", "Customer"]
    },
    {
      id: "30",
      name: "CopyEdit Pro",
      description: "Edits and proofreads content for grammar and clarity.",
      category: "Content Creation",
      rating: 4.8,
      price: 39,
      reviews: 211,
      image: "/placeholder.svg",
      tags: ["Editing", "Proofreading", "Content", "Grammar"]
    },
    {
      id: "31",
      name: "MultiLingua Bot",
      description: "Translates and localizes content in 30+ languages.",
      category: "Content Creation",
      rating: 4.7,
      price: 129,
      reviews: 178,
      image: "/placeholder.svg",
      tags: ["Translation", "Localization", "Languages", "Content"]
    }
  ];

  // Filtering logic
  let filteredAgents = mockAgents.filter(agent => {
    // Search filter
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      agent.name.toLowerCase().includes(query) ||
      agent.category.toLowerCase().includes(query) ||
      agent.tags.some(tag => tag.toLowerCase().includes(query));
    if (!matchesSearch) return false;

    // Category filter
    if (selectedCategory !== "all-categories" &&
        agent.category.toLowerCase().replace(" ", "-") !== selectedCategory) {
      return false;
    }

    // Price range filter
    if (priceRange.length > 0) {
      let inRange = false;
      for (const range of priceRange) {
        if (range === "Free" && agent.price === 0) inRange = true;
        if (range === "$1-50" && agent.price > 0 && agent.price <= 50) inRange = true;
        if (range === "$51-100" && agent.price > 50 && agent.price <= 100) inRange = true;
        if (range === "$101-200" && agent.price > 100 && agent.price <= 200) inRange = true;
        if (range === "$200+" && agent.price > 200) inRange = true;
      }
      if (!inRange) return false;
    }

    // Features filter
    if (selectedFeatures.length > 0) {
      const hasAll = selectedFeatures.every(f => agent.tags.includes(f));
      if (!hasAll) return false;
    }

    // Rating filter
    if (selectedRatings.length > 0) {
      let pass = false;
      for (const rating of selectedRatings) {
        if (rating === "4.5+ Stars" && agent.rating >= 4.5) pass = true;
        if (rating === "4.0+ Stars" && agent.rating >= 4.0) pass = true;
        if (rating === "3.5+ Stars" && agent.rating >= 3.5) pass = true;
        if (rating === "3.0+ Stars" && agent.rating >= 3.0) pass = true;
      }
      if (!pass) return false;
    }

    return true;
  });

  // Sorting logic (exclude Digital Clone Agent from sorting)
  const digitalClone = filteredAgents.find(a => a.id === "1");
  let restAgents = filteredAgents.filter(a => a.id !== "1");
  restAgents = restAgents.sort((a, b) => {
    if (sortBy === "popular") return b.reviews - a.reviews;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return b.id.localeCompare(a.id);
    return 0;
  });
  filteredAgents = digitalClone ? [digitalClone, ...restAgents] : restAgents;

  // Advanced Filters handlers
  const handlePriceRange = (range: string, checked: boolean) => {
    setPriceRange(prev => checked ? [...prev, range] : prev.filter(r => r !== range));
  };
  const handleFeature = (feature: string, checked: boolean) => {
    setSelectedFeatures(prev => checked ? [...prev, feature] : prev.filter(f => f !== feature));
  };
  const handleRating = (rating: string, checked: boolean) => {
    setSelectedRatings(prev => checked ? [...prev, rating] : prev.filter(r => r !== rating));
  };

  // Reset visibleCount when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [searchQuery, selectedCategory, priceRange, selectedFeatures, selectedRatings, sortBy]);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-cyber-dark/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              <span className="neon-text-primary">AI Agents</span> <span className="text-primary">Marketplace</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover and deploy cutting-edge AI agents to automate your workflows
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search agents by name, category, or capability..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-primary/30 focus:border-primary"
              />
              <Button variant="neon" className="absolute right-2 top-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="cyber-ghost"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category === "All Categories" ? "all-categories" : category.toLowerCase().replace(" ", "-") }>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing {filteredAgents.length} agents
            </span>
            <Button
              variant={viewMode === "grid" ? "neon" : "cyber-ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "neon" : "cyber-ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <Card className="mb-8 border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg">Advanced Filters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    {["Free", "$1-50", "$51-100", "$101-200", "$200+"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox 
                          id={range}
                          checked={priceRange.includes(range)}
                          onCheckedChange={(checked) => handlePriceRange(range, !!checked)}
                        />
                        <label htmlFor={range} className="text-sm">{range}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Features</h4>
                  <div className="space-y-2">
                    {["24/7 Support", "API Access", "Custom Training", "Enterprise Ready", "Multi-language"].map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox 
                          id={feature}
                          checked={selectedFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeature(feature, !!checked)}
                        />
                        <label htmlFor={feature} className="text-sm">{feature}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {["4.5+ Stars", "4.0+ Stars", "3.5+ Stars", "3.0+ Stars"].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox 
                          id={rating}
                          checked={selectedRatings.includes(rating)}
                          onCheckedChange={(checked) => handleRating(rating, !!checked)}
                        />
                        <label htmlFor={rating} className="text-sm">{rating}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Agents Grid */}
        <div className={`grid gap-6 ${
          viewMode === "grid" 
            ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {filteredAgents.slice(0, visibleCount).map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        {/* Load More */}
        {filteredAgents.length > visibleCount && (
          <div className="text-center mt-12">
            <Button variant="neon-outline" size="lg" onClick={() => setVisibleCount(c => c + 20)}>
              Load More Agents
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const AgentCard = ({ agent }: { agent: Agent }) => (
  <Card
    className={`group transition-all duration-300 animated-border cursor-pointer h-full flex flex-col
      ${agent.name.includes('Digital Clone Agent') ? 'border-red-500 animated-border-red hover:glow-red' : 'hover:glow-primary hover-glow'}
    `}
  >
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-primary transition-colors">
              {agent.name}
            </CardTitle>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                {agent.category}
              </Badge>
              {agent.isFeatured && (
                <Badge variant="default" className="text-xs gradient-secondary">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
              {agent.isNew && (
                <Badge variant="default" className="text-xs gradient-accent">
                  <Zap className="h-3 w-3 mr-1" />
                  New
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardHeader>
    
    <CardContent className="space-y-4 flex flex-col flex-1">
      <CardDescription className="text-sm line-clamp-3">
        {agent.description}
      </CardDescription>
      
      <div className="flex flex-wrap gap-1">
        {agent.tags.slice(0, 3).map((tag, index) => (
          <Badge key={index} variant="outline" className="text-xs border-muted text-muted-foreground">
            {tag}
          </Badge>
        ))}
        {agent.tags.length > 3 && (
          <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
            +{agent.tags.length - 3}
          </Badge>
        )}
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm">
            <Star className="h-4 w-4 mr-1 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{agent.rating}</span>
            <span className="text-muted-foreground ml-1">({agent.reviews})</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold neon-text-primary">${agent.price}</div>
          <div className="text-xs text-muted-foreground">per month</div>
        </div>
      </div>
      
      <div className="flex-1" />
      <div className="flex space-x-2 pt-2 mt-auto">
        <Button variant="neon" size="sm" className="flex-1">
          Deploy Now
        </Button>
        <Button variant="cyber-ghost" size="sm">
          Preview
        </Button>
      </div>
    </CardContent>
  </Card>
);