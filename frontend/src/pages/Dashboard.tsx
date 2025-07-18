import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CountUp } from "@/components/ui/CountUp";
import { 
  Bot, 
  Search, 
  TrendingUp, 
  Clock, 
  Star, 
  Zap, 
  ArrowRight,
  Plus,
  Filter,
  Grid,
  List
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  price: number;
  image: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const Dashboard = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const recentSearches = [
    "Data Analysis Bot",
    "Content Writer AI",
    "Customer Support Agent",
    "Trading Assistant"
  ];

  const featuredAgents: Agent[] = [
    {
      id: "1",
      name: "CodeGenius AI",
      description: "Advanced coding assistant that writes, debugs, and optimizes code across multiple languages",
      category: "Development",
      rating: 4.9,
      price: 49,
      image: "/placeholder.svg",
      isFeatured: true
    },
    {
      id: "2",
      name: "MarketMind Pro",
      description: "AI-powered market analysis and trading strategy generator",
      category: "Finance",
      rating: 4.8,
      price: 129,
      image: "/placeholder.svg",
      isFeatured: true
    },
    {
      id: "3",
      name: "ContentCraft Elite",
      description: "Professional content creation agent for blogs, articles, and marketing copy",
      category: "Marketing",
      rating: 4.7,
      price: 39,
      image: "/placeholder.svg",
      isFeatured: true
    },
    {
      id: "4",
      name: "DataVault Analytics",
      description: "Enterprise-grade data analysis and visualization tool",
      category: "Analytics",
      rating: 4.9,
      price: 199,
      image: "/placeholder.svg",
      isFeatured: true
    },
    {
      id: "5",
      name: "SocialSphere Manager",
      description: "Complete social media management and engagement automation",
      category: "Marketing",
      rating: 4.6,
      price: 79,
      image: "/placeholder.svg",
      isFeatured: true
    }
  ];

  const newAgents: Agent[] = [
    {
      id: "6",
      name: "VoiceClone Studio",
      description: "AI voice cloning and synthesis for content creation",
      category: "Audio",
      rating: 4.5,
      price: 89,
      image: "/placeholder.svg",
      isNew: true
    },
    {
      id: "7",
      name: "DesignFlow AI",
      description: "Automated UI/UX design generation and prototyping",
      category: "Design",
      rating: 4.4,
      price: 159,
      image: "/placeholder.svg",
      isNew: true
    },
    {
      id: "8",
      name: "LegalEagle Assistant",
      description: "Legal document analysis and contract review automation",
      category: "Legal",
      rating: 4.8,
      price: 299,
      image: "/placeholder.svg",
      isNew: true
    }
  ];

  const AgentCard = ({ agent }: { agent: Agent }) =>
    <Card className="group hover:glow-primary hover-glow transition-all duration-300 animated-border cursor-pointer h-full flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <div>
              <CardTitle className="text-lg">{agent.name}</CardTitle>
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
          <div className="text-right">
            <div className="text-lg font-bold text-primary">${agent.price}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
              {agent.rating}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <CardDescription className="text-sm mb-4">
          {agent.description}
        </CardDescription>
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
    </Card>;

  return (
    <div className="min-h-screen">
      {/* Dynamic Banner */}
      <section className="gradient-dark py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
              Welcome back, <span className="text-primary">Agent</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your AI arsenal awaits. Deploy, customize, and command your digital workforce.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for AI agents, categories, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card border-primary/30 focus:border-primary"
              />
              <Button variant="neon" className="absolute right-2 top-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary"><CountUp end={12} duration={1200} /></div>
                <div className="text-sm text-muted-foreground">Active Agents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary"><CountUp end={98.5} duration={1500} /></div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent"><CountUp end={2340} duration={2000} /></div>
                <div className="text-sm text-muted-foreground">Saved This Month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Recent Searches */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Clock className="h-6 w-6 mr-2 text-primary" />
              Recent Searches
            </h2>
            <Button variant="cyber-ghost" size="sm">
              Clear All
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {recentSearches.map((search, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm border-primary/30 hover:border-primary hover:bg-primary/10 cursor-pointer transition-colors"
              >
                {search}
              </Badge>
            ))}
          </div>
        </section>

        {/* Featured Agents */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Star className="h-6 w-6 mr-2 text-primary" />
              Featured Agents This Week
            </h2>
            <div className="flex items-center space-x-2">
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
              <Link to="/agents">
                <Button variant="cyber-ghost" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl"}`}>
            {featuredAgents.slice(0, 5).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        {/* New Releases */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="h-6 w-6 mr-2 text-primary" />
              New Releases
            </h2>
            <Link to="/agents?filter=new">
              <Button variant="cyber-ghost" size="sm">
                View All New
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:glow-secondary hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="h-5 w-5 mr-2 text-secondary" />
                  Create Custom Agent
                </CardTitle>
                <CardDescription>
                  Build a personalized AI agent tailored to your specific needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/custom">
                  <Button variant="neon-secondary" className="w-full">
                    Start Building
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:glow-accent hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-accent" />
                  Professional Build
                </CardTitle>
                <CardDescription>
                  Let our experts create enterprise-grade AI solutions for you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/build">
                  <Button variant="neon-accent" className="w-full">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:glow-primary hover-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Agent Analytics
                </CardTitle>
                <CardDescription>
                  Monitor performance and optimize your AI agent deployments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="neon" className="w-full">
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};