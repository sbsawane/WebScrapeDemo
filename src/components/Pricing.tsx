import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { PricingTier } from '../types';
import { Check } from 'lucide-react';

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Perfect for small businesses starting with web scraping',
    features: [
      'Up to 100,000 pages monthly',
      'Basic data cleaning',
      'JSON/CSV export',
      'Email support',
      'Weekly updates',
    ],
    cta: 'Start with Starter',
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Ideal for growing businesses with regular scraping needs',
    features: [
      'Up to 500,000 pages monthly',
      'Advanced data cleaning',
      'Custom export formats',
      'Priority support',
      'Daily updates',
      'API access',
    ],
    cta: 'Go Professional',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex requirements',
    features: [
      'Unlimited pages',
      'Custom solutions',
      'Advanced analytics',
      '24/7 dedicated support',
      'Real-time updates',
      'Custom API integration',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <div className="py-24 sm:py-32 bg-white" id="pricing">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your needs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Flexible pricing options to match your web scraping requirements
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/10
                ${
                  tierIdx === 1
                    ? 'lg:z-10 lg:rounded-b-none lg:-mx-8 lg:p-10'
                    : tierIdx === 0
                    ? 'lg:rounded-r-none'
                    : 'lg:rounded-l-none'
                }
              `}
            >
              <h3
                className={`text-lg font-semibold leading-8 text-gray-900 ${
                  tierIdx === 1 ? 'text-primary-600' : ''
                }`}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                {tier.price !== 'Custom' && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                )}
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-primary-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={tierIdx === 1 ? 'primary' : 'outline'}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}