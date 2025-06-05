import React from 'react';
import { Container } from './Container';
import { Feature } from '../types';
import {
  Bot,
  Shield,
  Zap,
  Database,
  LineChart,
  Clock,
} from 'lucide-react';

const features: Feature[] = [
  {
    title: 'Automated Extraction',
    description:
      'Our advanced bots handle high-volume data extraction efficiently and reliably, saving you time and resources.',
    icon: Bot,
  },
  {
    title: 'Enterprise Security',
    description:
      'Bank-grade security measures ensure your data is protected throughout the extraction and processing pipeline.',
    icon: Shield,
  },
  {
    title: 'Lightning Fast',
    description:
      'High-performance infrastructure delivers rapid data extraction and processing capabilities.',
    icon: Zap,
  },
  {
    title: 'Structured Data',
    description:
      'Receive clean, organized data in your preferred format (JSON, CSV, XML) ready for immediate use.',
    icon: Database,
  },
  {
    title: 'Real-time Analytics',
    description:
      'Transform raw data into actionable insights with our built-in analytics and visualization tools.',
    icon: LineChart,
  },
  {
    title: '24/7 Monitoring',
    description:
      'Round-the-clock monitoring ensures consistent performance and immediate issue resolution.',
    icon: Clock,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32" id="features">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Powerful Features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for professional web scraping
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of features ensures reliable, efficient, and secure
            web data extraction for your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary-600"
                    aria-hidden="true"
                  />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}