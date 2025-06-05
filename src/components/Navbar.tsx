import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';
import { NavItem } from '../types';

const navigation: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Process', href: '#process' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary-600">WebScrapePro</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Get started</Button>
          </div>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button className="w-full">Get started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}