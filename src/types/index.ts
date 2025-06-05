export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface CaseStudy {
  title: string;
  description: string;
  results: string[];
  industry: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}