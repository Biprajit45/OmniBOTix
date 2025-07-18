import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Bot, Zap, Search, User, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isLoggedIn?: boolean;
  username?: string;
}

export const Header = ({ isLoggedIn = false, username }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="relative bg-card/80 backdrop-blur-xl border-b border-primary/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Bot className="h-8 w-8 text-primary group-hover:animate-glow-pulse" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300" />
            </div>
            <span className="text-xl font-bold neon-text-primary">
              OmniBOTix
            </span>
            <span className="ml-3 align-middle inline-block">
              <Badge variant="outline" className="border-primary text-primary text-xs px-2 py-1">
                ✨ New Era of AI
              </Badge>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              to="/agents"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/agents") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Browse Agents
            </Link>
            <Link
              to="/custom"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/custom") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Create Custom
            </Link>
            <Link
              to="/build"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isActive("/build") ? "text-primary" : "text-muted-foreground"
              )}
            >
              Build Service
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button variant="cyber-ghost" size="sm">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="cyber-ghost" size="sm">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Link to="/dashboard">
                  <Button variant="cyber-ghost" size="sm">
                    <User className="h-4 w-4" />
                    <span className="ml-2">{username}</span>
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="cyber-ghost" size="sm">
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="neon" size="sm">
                    <Zap className="h-4 w-4" />
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="cyber-ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-primary/20 pt-4 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/") ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/agents"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/agents") ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse Agents
              </Link>
              <Link
                to="/custom"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/custom") ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Create Custom
              </Link>
              <Link
                to="/build"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive("/build") ? "text-primary" : "text-muted-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                Build Service
              </Link>
              
              <div className="pt-4 border-t border-primary/20">
                {isLoggedIn ? (
                  <div className="flex flex-col space-y-2">
                    <Link to="/dashboard">
                      <Button variant="cyber-ghost" size="sm" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link to="/login">
                      <Button variant="cyber-ghost" size="sm" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/signup">
                      <Button variant="neon" size="sm" className="w-full">
                        <Zap className="h-4 w-4 mr-2" />
                        Get Started
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};