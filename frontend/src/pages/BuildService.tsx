import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bot, 
  Zap, 
  Users,
  Award,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Code,
  Brain,
  Shield,
  Layers,
  Mail,
  Phone,
  Calendar,
  Target,
  Rocket,
  Settings
} from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

interface ProjectForm {
  projectName: string;
  businessType: string;
  projectType: string;
  budget: string;
  timeline: string;
  requirements: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  company: string;
  additionalInfo: string;
}

export const BuildService = () => {
  const [selectedTier, setSelectedTier] = useState("professional");
  const [showContactForm, setShowContactForm] = useState(false);
  const [projectForm, setProjectForm] = useState<ProjectForm>({
    projectName: "",
    businessType: "",
    projectType: "",
    budget: "",
    timeline: "",
    requirements: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    company: "",
    additionalInfo: ""
  });

  const serviceTiers = [
    {
      id: "starter",
      name: "Starter Build",
      price: "Starting at $2,999",
      duration: "2-4 weeks",
      description: "Perfect for small businesses and startups looking to automate basic workflows",
      features: [
        "Single-purpose AI agent",
        "Basic integrations (2-3 systems)",
        "Standard deployment",
        "30-day support",
        "Basic analytics",
        "Email support"
      ],
      icon: <Rocket className="h-6 w-6" />,
      color: "secondary",
      popular: false
    },
    {
      id: "professional",
      name: "Professional Build",
      price: "Starting at $9,999",
      duration: "4-8 weeks",
      description: "Comprehensive AI solutions for growing businesses with complex requirements",
      features: [
        "Multi-agent system",
        "Advanced integrations (5+ systems)",
        "Custom AI training",
        "90-day support & maintenance",
        "Advanced analytics & reporting",
        "Priority support",
        "Training sessions",
        "Documentation"
      ],
      icon: <Brain className="h-6 w-6" />,
      color: "primary",
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise Build",
      price: "Custom Quote",
      duration: "8-16 weeks",
      description: "Large-scale AI transformation for enterprises with mission-critical requirements",
      features: [
        "Enterprise AI ecosystem",
        "Unlimited integrations",
        "Custom ML models",
        "1-year support & maintenance",
        "Real-time monitoring",
        "Dedicated account manager",
        "24/7 priority support",
        "White-label options",
        "Compliance certifications",
        "On-premise deployment"
      ],
      icon: <Shield className="h-6 w-6" />,
      color: "accent",
      popular: false
    }
  ];

  const portfolio = [
    {
      title: "E-commerce Automation Suite",
      client: "TechCorp Inc.",
      description: "Complete order processing and customer service automation",
      industry: "E-commerce",
      savings: "$2.3M annually",
      efficiency: "85% faster processing",
      image: "/placeholder.svg"
    },
    {
      title: "Financial Analysis Platform",
      client: "Investment Partners",
      description: "Real-time market analysis and trading recommendation system",
      industry: "Finance",
      savings: "$1.8M annually",
      efficiency: "90% accuracy rate",
      image: "/placeholder.svg"
    },
    {
      title: "Healthcare Data Pipeline",
      client: "MedTech Solutions",
      description: "Patient data processing and predictive health analytics",
      industry: "Healthcare",
      savings: "$1.2M annually",
      efficiency: "95% compliance rate",
      image: "/placeholder.svg"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead AI Architect",
      expertise: "Machine Learning, Neural Networks",
      experience: "12+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Marcus Rodriguez",
      role: "Senior Developer",
      expertise: "Full-Stack Development, API Design",
      experience: "8+ years",
      image: "/placeholder.svg"
    },
    {
      name: "Emily Watson",
      role: "DevOps Engineer",
      expertise: "Cloud Infrastructure, Security",
      experience: "10+ years",
      image: "/placeholder.svg"
    },
    {
      name: "James Park",
      role: "Data Scientist",
      expertise: "Analytics, Predictive Modeling",
      experience: "7+ years",
      image: "/placeholder.svg"
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Detailed analysis of your requirements and business goals",
      duration: "1-2 weeks",
      icon: <Target className="h-5 w-5" />
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Custom AI system design and technical specification",
      duration: "1-2 weeks",
      icon: <Code className="h-5 w-5" />
    },
    {
      step: 3,
      title: "Development & Training",
      description: "AI agent development and custom model training",
      duration: "2-8 weeks",
      icon: <Brain className="h-5 w-5" />
    },
    {
      step: 4,
      title: "Testing & Optimization",
      description: "Comprehensive testing and performance optimization",
      duration: "1-2 weeks",
      icon: <Settings className="h-5 w-5" />
    },
    {
      step: 5,
      title: "Deployment & Training",
      description: "Production deployment and team training",
      duration: "1 week",
      icon: <Rocket className="h-5 w-5" />
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", projectForm);
  };

  const updateFormField = (field: keyof ProjectForm, value: string) => {
    setProjectForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-cyber-dark/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Badge variant="outline" className="border-accent text-accent">
                <Users className="h-3 w-3 mr-1" />
                Expert Team
              </Badge>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">
              Professional AI Agent <span className="text-primary">Build Service</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Let our expert team design, develop, and deploy enterprise-grade AI agents tailored to your unique business requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="neon" size="xl" onClick={() => setShowContactForm(true)}>
                <Zap className="h-5 w-5 mr-2" />
                Start Your Project
              </Button>
              <Button variant="neon-outline" size="xl">
                <Phone className="h-5 w-5 mr-2" />
                Schedule Consultation
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary"><CountUp end={500} suffix="+" duration={1200} /></div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent"><CountUp end={50} suffix="M+" duration={1500} /></div>
                <div className="text-sm text-muted-foreground">Cost Savings Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="services" className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          {/* Services */}
          <TabsContent value="services" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Choose Your <span className="text-primary">Service Tier</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Scalable solutions designed to meet your specific needs and budget
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {serviceTiers.map((tier) => (
                <Card 
                  key={tier.id} 
                  className={`relative cursor-pointer transition-all duration-300 h-full flex flex-col
                    ${tier.popular 
                      ? 'border-primary glow-primary scale-105' 
                      : 'hover:border-primary/50 hover:glow-primary'}
                    ${selectedTier === tier.id ? 'border-primary glow-primary' : ''}`}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge variant="default" className="gradient-primary">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                      tier.color === 'primary' ? 'gradient-primary' :
                      tier.color === 'secondary' ? 'gradient-secondary' :
                      'gradient-accent'
                    }`}>
                      <div className="text-white">{tier.icon}</div>
                    </div>
                    
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <div className="mt-4">
                      <div className={`text-3xl font-bold ${
                        tier.color === 'primary' ? 'text-primary' :
                        tier.color === 'secondary' ? 'text-secondary' :
                        'text-accent'
                      }`}>
                        {tier.price}
                      </div>
                      <div className="text-muted-foreground mt-1">{tier.duration}</div>
                    </div>
                    <CardDescription className="mt-4">{tier.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-secondary mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex-1" />
                    <Button 
                      variant={tier.popular ? "neon" : "neon-outline"} 
                      className="w-full mt-auto"
                      onClick={() => setShowContactForm(true)}
                    >
                      {tier.id === "enterprise" ? "Request Quote" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Portfolio */}
          <TabsContent value="portfolio" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Success <span className="text-primary">Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                See how we've transformed businesses with cutting-edge AI solutions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {portfolio.map((project, index) => (
                <Card key={index} className="hover:glow-primary hover-glow transition-all duration-300 animated-border">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <Bot className="h-16 w-16 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Client:</span>
                        <span className="font-medium">{project.client}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Industry:</span>
                        <Badge variant="outline">{project.industry}</Badge>
                      </div>
                      <div className="border-t border-primary/20 pt-4">
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-lg font-bold text-secondary">{project.savings}</div>
                            <div className="text-xs text-muted-foreground">Cost Savings</div>
                          </div>
                          <div>
                            <div className="text-lg font-bold text-accent">{project.efficiency}</div>
                            <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Process */}
          <TabsContent value="process" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="text-primary">Development Process</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                A proven methodology that ensures successful AI implementation
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={step.step} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <Card className="flex-1 hover:glow-primary hover-glow transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <div className="text-primary mr-3">{step.icon}</div>
                          {step.title}
                          <Badge variant="outline" className="ml-auto text-xs border-secondary text-secondary">
                            {step.duration}
                          </Badge>
                        </CardTitle>
                        <CardDescription>{step.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Team */}
          <TabsContent value="team" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Meet Our <span className="text-primary">Expert Team</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                World-class AI engineers and data scientists at your service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:glow-primary hover-glow transition-all duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 mx-auto bg-gradient-primary rounded-full mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-muted-foreground">Expertise:</span>
                        <div className="font-medium">{member.expertise}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Experience:</span>
                        <div className="font-medium text-primary">{member.experience}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Contact */}
          <TabsContent value="contact" className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Start Your <span className="text-primary">AI Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Get in touch to discuss your project requirements
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/30 hover:glow-primary hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Project Requirements Form</CardTitle>
                  <CardDescription className="text-center">
                    Tell us about your project and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="project-name">Project Name *</Label>
                        <Input
                          id="project-name"
                          placeholder="Enter project name"
                          value={projectForm.projectName}
                          onChange={(e) => updateFormField("projectName", e.target.value)}
                          className="border-primary/30 focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="business-type">Business Type *</Label>
                        <Select value={projectForm.businessType} onValueChange={(value) => updateFormField("businessType", value)}>
                          <SelectTrigger className="border-primary/30 focus:border-primary">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="startup">Startup</SelectItem>
                            <SelectItem value="smb">Small/Medium Business</SelectItem>
                            <SelectItem value="enterprise">Enterprise</SelectItem>
                            <SelectItem value="nonprofit">Non-profit</SelectItem>
                            <SelectItem value="government">Government</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="project-type">Project Type *</Label>
                        <Select value={projectForm.projectType} onValueChange={(value) => updateFormField("projectType", value)}>
                          <SelectTrigger className="border-primary/30 focus:border-primary">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="automation">Process Automation</SelectItem>
                            <SelectItem value="analytics">Data Analytics</SelectItem>
                            <SelectItem value="chatbot">Chatbot/Virtual Assistant</SelectItem>
                            <SelectItem value="prediction">Predictive Modeling</SelectItem>
                            <SelectItem value="integration">System Integration</SelectItem>
                            <SelectItem value="custom">Custom Solution</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range *</Label>
                        <Select value={projectForm.budget} onValueChange={(value) => updateFormField("budget", value)}>
                          <SelectTrigger className="border-primary/30 focus:border-primary">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                            <SelectItem value="15k-50k">$15,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="over-100k">Over $100,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline *</Label>
                      <Select value={projectForm.timeline} onValueChange={(value) => updateFormField("timeline", value)}>
                        <SelectTrigger className="border-primary/30 focus:border-primary">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Rush Job)</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="requirements">Project Requirements *</Label>
                      <Textarea
                        id="requirements"
                        placeholder="Describe your project requirements, goals, and any specific features you need..."
                        value={projectForm.requirements}
                        onChange={(e) => updateFormField("requirements", e.target.value)}
                        className="border-primary/30 focus:border-primary"
                        rows={4}
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Contact Name *</Label>
                        <Input
                          id="contact-name"
                          placeholder="Your full name"
                          value={projectForm.contactName}
                          onChange={(e) => updateFormField("contactName", e.target.value)}
                          className="border-primary/30 focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          placeholder="Company name"
                          value={projectForm.company}
                          onChange={(e) => updateFormField("company", e.target.value)}
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="your@email.com"
                          value={projectForm.contactEmail}
                          onChange={(e) => updateFormField("contactEmail", e.target.value)}
                          className="border-primary/30 focus:border-primary"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone</Label>
                        <Input
                          id="contact-phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={projectForm.contactPhone}
                          onChange={(e) => updateFormField("contactPhone", e.target.value)}
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additional-info">Additional Information</Label>
                      <Textarea
                        id="additional-info"
                        placeholder="Any additional information, constraints, or special requirements..."
                        value={projectForm.additionalInfo}
                        onChange={(e) => updateFormField("additionalInfo", e.target.value)}
                        className="border-primary/30 focus:border-primary"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the terms of service and privacy policy *
                      </Label>
                    </div>
                    
                    <div className="flex gap-4">
                      <Button type="submit" variant="neon" className="flex-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Submit Project Request
                      </Button>
                      <Button type="button" variant="neon-outline">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Call
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <section className="bg-cyber-dark/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with <span className="text-primary">AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of successful companies that have revolutionized their operations with our custom AI solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="neon" size="xl" onClick={() => setShowContactForm(true)}>
              <Zap className="h-5 w-5 mr-2" />
              Start Your Project Today
            </Button>
            <Button variant="neon-outline" size="xl">
              <Phone className="h-5 w-5 mr-2" />
              +1 (555) AI-BUILD
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};