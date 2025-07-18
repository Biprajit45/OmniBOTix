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
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Zap, 
  ArrowRight, 
  ArrowLeft,
  Sparkles,
  Cpu,
  Brain,
  Layers,
  Settings,
  Code,
  Database,
  Shield,
  Clock,
  DollarSign,
  CheckCircle
} from "lucide-react";

interface AgentConfig {
  name: string;
  description: string;
  category: string;
  capabilities: string[];
  complexity: string;
  dataSource: string;
  responseTime: string;
  security: string;
  deployment: string;
}

export const CustomService = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [agentConfig, setAgentConfig] = useState<AgentConfig>({
    name: "",
    description: "",
    category: "",
    capabilities: [],
    complexity: "",
    dataSource: "",
    responseTime: "",
    security: "",
    deployment: ""
  });

  const steps = [
    { id: 0, title: "Basic Info", icon: <Bot className="h-4 w-4" /> },
    { id: 1, title: "Capabilities", icon: <Brain className="h-4 w-4" /> },
    { id: 2, title: "Configuration", icon: <Settings className="h-4 w-4" /> },
    { id: 3, title: "Review & Deploy", icon: <Zap className="h-4 w-4" /> }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const categories = [
    { value: "development", label: "Development", icon: <Code className="h-4 w-4" /> },
    { value: "analytics", label: "Analytics", icon: <Database className="h-4 w-4" /> },
    { value: "marketing", label: "Marketing", icon: <Sparkles className="h-4 w-4" /> },
    { value: "finance", label: "Finance", icon: <DollarSign className="h-4 w-4" /> },
    { value: "automation", label: "Automation", icon: <Cpu className="h-4 w-4" /> },
    { value: "security", label: "Security", icon: <Shield className="h-4 w-4" /> }
  ];

  const capabilities = [
    "Natural Language Processing",
    "Data Analysis",
    "Image Processing",
    "API Integration",
    "Real-time Monitoring",
    "Automated Reporting",
    "Predictive Analytics",
    "Content Generation",
    "Voice Recognition",
    "Machine Learning",
    "Database Operations",
    "Web Scraping"
  ];

  const templates = [
    {
      name: "Data Analyst Bot",
      description: "Analyzes datasets and generates insights",
      category: "analytics",
      capabilities: ["Data Analysis", "Automated Reporting", "Predictive Analytics"],
      complexity: "intermediate",
      estimatedCost: 149
    },
    {
      name: "Content Creator AI",
      description: "Generates marketing content and copy",
      category: "marketing",
      capabilities: ["Content Generation", "Natural Language Processing", "API Integration"],
      complexity: "beginner",
      estimatedCost: 89
    },
    {
      name: "Security Monitor",
      description: "Monitors systems for security threats",
      category: "security",
      capabilities: ["Real-time Monitoring", "Automated Reporting", "Machine Learning"],
      complexity: "advanced",
      estimatedCost: 299
    }
  ];

  const calculateEstimatedCost = () => {
    let baseCost = 50;
    
    // Category multiplier
    const categoryMultipliers = {
      development: 1.5,
      analytics: 1.3,
      marketing: 1.0,
      finance: 1.8,
      automation: 1.2,
      security: 2.0
    };
    
    baseCost *= categoryMultipliers[agentConfig.category as keyof typeof categoryMultipliers] || 1;
    
    // Capabilities cost
    baseCost += agentConfig.capabilities.length * 15;
    
    // Complexity multiplier
    const complexityMultipliers = {
      beginner: 1.0,
      intermediate: 1.5,
      advanced: 2.5
    };
    
    baseCost *= complexityMultipliers[agentConfig.complexity as keyof typeof complexityMultipliers] || 1;
    
    return Math.round(baseCost);
  };

  const handleCapabilityToggle = (capability: string, checked: boolean) => {
    if (checked) {
      setAgentConfig(prev => ({
        ...prev,
        capabilities: [...prev.capabilities, capability]
      }));
    } else {
      setAgentConfig(prev => ({
        ...prev,
        capabilities: prev.capabilities.filter(c => c !== capability)
      }));
    }
  };

  const loadTemplate = (template: any) => {
    setAgentConfig(prev => ({
      ...prev,
      name: template.name,
      description: template.description,
      category: template.category,
      capabilities: template.capabilities,
      complexity: template.complexity
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-cyber-dark/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">
              Custom AI Agent <span className="text-primary">Builder</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Design and deploy your personalized AI agent with our advanced builder platform
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      index <= currentStep 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-muted text-muted-foreground'
                    }`}>
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`h-0.5 w-16 mx-2 transition-all duration-300 ${
                        index < currentStep ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <Progress value={progress} className="h-2" />
              <div className="text-sm text-muted-foreground mt-2">
                Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Builder */}
            <div className="lg:col-span-2">
              <Card className="border-primary/30 hover:glow-primary hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Bot className="h-6 w-6 mr-2 text-primary" />
                    {steps[currentStep].title}
                  </CardTitle>
                  <CardDescription>
                    Configure your AI agent step by step
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Step 0: Basic Info */}
                  {currentStep === 0 && (
                    <div className="space-y-6">
                      {/* Templates */}
                      <div>
                        <Label className="text-lg font-medium mb-4 block">Quick Start Templates</Label>
                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          {templates.map((template, index) => (
                            <Card key={index} className="cursor-pointer hover:border-primary transition-colors" onClick={() => loadTemplate(template)}>
                              <CardHeader className="pb-3">
                                <CardTitle className="text-sm">{template.name}</CardTitle>
                                <CardDescription className="text-xs">{template.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="text-lg font-bold text-primary">${template.estimatedCost}</div>
                                <Badge variant="outline" className="text-xs mt-2">{template.complexity}</Badge>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="agent-name">Agent Name</Label>
                          <Input
                            id="agent-name"
                            placeholder="Enter agent name..."
                            value={agentConfig.name}
                            onChange={(e) => setAgentConfig(prev => ({ ...prev, name: e.target.value }))}
                            className="border-primary/30 focus:border-primary"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="category">Category</Label>
                          <Select value={agentConfig.category} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, category: value }))}>
                            <SelectTrigger className="border-primary/30 focus:border-primary">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.value} value={category.value}>
                                  <div className="flex items-center">
                                    {category.icon}
                                    <span className="ml-2">{category.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          placeholder="Describe what your agent should do..."
                          value={agentConfig.description}
                          onChange={(e) => setAgentConfig(prev => ({ ...prev, description: e.target.value }))}
                          className="border-primary/30 focus:border-primary"
                          rows={4}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 1: Capabilities */}
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label className="text-lg font-medium mb-4 block">Select Capabilities</Label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {capabilities.map((capability) => (
                            <div key={capability} className="flex items-center space-x-3 p-3 border border-primary/20 rounded-lg hover:border-primary/40 transition-colors">
                              <Checkbox
                                id={capability}
                                checked={agentConfig.capabilities.includes(capability)}
                                onCheckedChange={(checked) => handleCapabilityToggle(capability, checked === true)}
                              />
                              <Label htmlFor={capability} className="text-sm cursor-pointer">
                                {capability}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="complexity">Complexity Level</Label>
                        <Select value={agentConfig.complexity} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, complexity: value }))}>
                          <SelectTrigger className="border-primary/30 focus:border-primary">
                            <SelectValue placeholder="Select complexity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-secondary rounded-full mr-2" />
                                Beginner - Simple logic and basic operations
                              </div>
                            </SelectItem>
                            <SelectItem value="intermediate">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-primary rounded-full mr-2" />
                                Intermediate - Advanced features and integrations
                              </div>
                            </SelectItem>
                            <SelectItem value="advanced">
                              <div className="flex items-center">
                                <div className="w-3 h-3 bg-accent rounded-full mr-2" />
                                Advanced - Complex AI and machine learning
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Configuration */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="data-source">Data Source</Label>
                          <Select value={agentConfig.dataSource} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, dataSource: value }))}>
                            <SelectTrigger className="border-primary/30 focus:border-primary">
                              <SelectValue placeholder="Select data source" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="api">External API</SelectItem>
                              <SelectItem value="database">Database Connection</SelectItem>
                              <SelectItem value="files">File Upload</SelectItem>
                              <SelectItem value="realtime">Real-time Stream</SelectItem>
                              <SelectItem value="web">Web Scraping</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="response-time">Response Time</Label>
                          <Select value={agentConfig.responseTime} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, responseTime: value }))}>
                            <SelectTrigger className="border-primary/30 focus:border-primary">
                              <SelectValue placeholder="Select response time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="realtime">Real-time (&lt; 1s)</SelectItem>
                              <SelectItem value="fast">Fast (&lt; 5s)</SelectItem>
                              <SelectItem value="standard">Standard (&lt; 30s)</SelectItem>
                              <SelectItem value="batch">Batch Processing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="security">Security Level</Label>
                          <Select value={agentConfig.security} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, security: value }))}>
                            <SelectTrigger className="border-primary/30 focus:border-primary">
                              <SelectValue placeholder="Select security level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="basic">Basic Security</SelectItem>
                              <SelectItem value="enhanced">Enhanced Security</SelectItem>
                              <SelectItem value="enterprise">Enterprise Security</SelectItem>
                              <SelectItem value="military">Military Grade</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="deployment">Deployment Type</Label>
                          <Select value={agentConfig.deployment} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, deployment: value }))}>
                            <SelectTrigger className="border-primary/30 focus:border-primary">
                              <SelectValue placeholder="Select deployment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cloud">Cloud Hosted</SelectItem>
                              <SelectItem value="hybrid">Hybrid Cloud</SelectItem>
                              <SelectItem value="onpremise">On-Premise</SelectItem>
                              <SelectItem value="edge">Edge Computing</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Review */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium">Agent Configuration Review</h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm text-muted-foreground">Name</Label>
                              <div className="font-medium">{agentConfig.name || "Unnamed Agent"}</div>
                            </div>
                            <div>
                              <Label className="text-sm text-muted-foreground">Category</Label>
                              <div className="font-medium capitalize">{agentConfig.category || "Not selected"}</div>
                            </div>
                            <div>
                              <Label className="text-sm text-muted-foreground">Complexity</Label>
                              <div className="font-medium capitalize">{agentConfig.complexity || "Not selected"}</div>
                            </div>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <Label className="text-sm text-muted-foreground">Data Source</Label>
                              <div className="font-medium capitalize">{agentConfig.dataSource || "Not selected"}</div>
                            </div>
                            <div>
                              <Label className="text-sm text-muted-foreground">Response Time</Label>
                              <div className="font-medium capitalize">{agentConfig.responseTime || "Not selected"}</div>
                            </div>
                            <div>
                              <Label className="text-sm text-muted-foreground">Security</Label>
                              <div className="font-medium capitalize">{agentConfig.security || "Not selected"}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-sm text-muted-foreground">Description</Label>
                          <div className="font-medium">{agentConfig.description || "No description provided"}</div>
                        </div>
                        
                        <div>
                          <Label className="text-sm text-muted-foreground">Capabilities ({agentConfig.capabilities.length})</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {agentConfig.capabilities.map((capability, index) => (
                              <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                                {capability}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                    <Button
                      variant="cyber-ghost"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    
                    {currentStep < steps.length - 1 ? (
                      <Button variant="neon" onClick={nextStep}>
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button variant="neon" className="animate-glow-pulse">
                        <Zap className="h-4 w-4 mr-2" />
                        Deploy Agent
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Cost Estimate */}
              <Card className="border-primary/30 hover:glow-secondary hover-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-secondary" />
                    Cost Estimate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">
                      ${calculateEstimatedCost()}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Monthly subscription
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Base Cost</span>
                        <span>$50</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category Multiplier</span>
                        <span>{agentConfig.category ? `${((calculateEstimatedCost() / (50 + agentConfig.capabilities.length * 15)) * 100 - 100).toFixed(0)}%` : '0%'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capabilities ({agentConfig.capabilities.length})</span>
                        <span>+${agentConfig.capabilities.length * 15}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Complexity</span>
                        <span>{agentConfig.complexity ? `${agentConfig.complexity}` : 'Not selected'}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-primary" />
                    Included Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      24/7 Monitoring
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Auto-scaling
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      API Access
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Analytics Dashboard
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2" />
                      Priority Support
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-accent" />
                    Development Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Configuration</span>
                      <span className="text-secondary">Instant</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Development</span>
                      <span className="text-secondary">2-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Testing</span>
                      <span className="text-secondary">1-2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Deployment</span>
                      <span className="text-secondary">Same day</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};