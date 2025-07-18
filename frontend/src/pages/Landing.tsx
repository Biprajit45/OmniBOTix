import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Zap, 
  Shield, 
  Cpu, 
  Sparkles, 
  ArrowRight,
  Users,
  TrendingUp,
  Layers,
  Check
} from "lucide-react";
import heroImage from "@/assets/hero-cyberpunk.jpg";
import { CountUp } from "@/components/ui/CountUp";
import { useState, useEffect } from "react";
import { CyberpunkInteractiveGrid } from "@/components/ui/CyberpunkInteractiveGrid";

export const Landing = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Agents Library",
      description: "Discover thousands of specialized AI agents ready to automate your workflows"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Custom Build Service",
      description: "Let our expert team create bespoke AI solutions tailored to your specific needs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and security protocols protect your data and processes"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "High Performance",
      description: "Quantum-optimized processing ensures lightning-fast response times"
    }
  ];

  const stats = [
    { value: "50,000+", label: "AI Agents", icon: <Bot className="h-5 w-5" /> },
    { value: "12,000+", label: "Active Users", icon: <Users className="h-5 w-5" /> },
    { value: "99.9%", label: "Uptime", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "500+", label: "Categories", icon: <Layers className="h-5 w-5" /> }
  ];

  const pricingPlans = [
    {
      name: "Explorer",
      price: "$29",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "Access to 10,000+ AI agents",
        "5 custom agent requests",
        "24/7 support",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For growing businesses and advanced users",
      features: [
        "Access to all 50,000+ AI agents",
        "Unlimited custom requests",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "API access"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "On-premise deployment",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const [showAgents, setShowAgents] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setShowAgents((prev) => !prev), 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative">
      <CyberpunkInteractiveGrid />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        
        <div className="relative z-20 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            
            <h1 className="text-5xl md:text-6xl font-bold mt-0 mb-12 leading-tight text-left">
              <span className="block min-h-[5.5rem] relative mb-2">
                <span
                  className={`transition-all duration-700 block w-full absolute left-0 top-0 ${showAgents ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
                  style={{willChange: 'transform, opacity'}}
                >
                  <span className="block neon-text-primary">AI</span>
                  <span className="block neon-text-primary">AGENTS</span>
                </span>
                <span
                  className={`transition-all duration-700 block w-full absolute left-0 top-0 ${!showAgents ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
                  style={{willChange: 'transform, opacity'}}
                >
                  <span className="block neon-text-green">WORKFLOW</span>
                  <span className="block neon-text-green">AUTOMATION</span>
                </span>
              </span>
              <span className="block text-foreground mt-8">MARKETPLACE</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Discover, deploy, and customize cutting-edge AI agents. From automation to intelligence, 
              unlock the power of artificial intelligence for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/signup">
                <Button variant="neon" size="xl" className="w-full sm:w-auto">
                  <Zap className="h-5 w-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/agents">
                <Button variant="neon-outline" size="xl" className="w-full sm:w-auto">
                  Browse Agents
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center text-primary mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    <CountUp end={parseFloat(stat.value.replace(/[^\d.]/g, ""))} suffix={stat.value.replace(/^[\d,.]+/, "")} duration={1200} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cyber-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="neon-text-primary">OmniBOTix</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of AI automation with our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:glow-primary hover-glow transition-all duration-300 animated-border">
                <CardHeader>
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Choose Your <span className="neon-text-primary">Power Level</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan to unlock your AI potential
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative h-full flex flex-col ${plan.popular ? 'border-primary glow-primary' : ''} hover:glow-primary hover-glow transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="gradient-primary">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold neon-text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-1">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-secondary mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex-1" />
                  <Button 
                    variant={plan.popular ? "neon" : "neon-outline"} 
                    className="w-full mt-auto"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cyber-dark/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Enter the <span className="neon-text-primary">Future</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging AI agents to automate, innovate, and dominate their markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="neon" size="xl">
                <Zap className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
            </Link>
            <Link to="/agents">
              <Button variant="neon-outline" size="xl">
                Explore Agents
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};