import React from 'react';
import { Container } from './Container';
import {
  ClipboardCheck,
  Code2,
  Database,
  LineChart,
} from 'lucide-react';

const steps = [
  {
    name: 'Requirements Analysis',
    description:
      'We work closely with you to understand your data needs and define clear objectives.',
    icon: ClipboardCheck,
  },
  {
    name: 'Custom Solution Development',
    description:
      'Our team develops a tailored scraping solution optimized for your target websites.',
    icon: Code2,
  },
  {
    name: 'Data Extraction & Processing',
    description:
      'We extract and clean the data, ensuring high quality and accuracy.',
    icon: Database,
  },
  {
    name: 'Analysis & Delivery',
    description:
      'Processed data is analyzed and delivered in your preferred format with insights.',
    icon: LineChart,
  },
];

export function Process() {
  return (
    <div className="py-24 sm:py-32 bg-white" id="process">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Our Process
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How we deliver value
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our streamlined process ensures efficient delivery of high-quality web
            scraping solutions tailored to your needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-4">
            {steps.map((step, stepIdx) => (
              <div key={step.name} className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="relative">
                  <div className="flex items-center">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-600">
                      {stepIdx + 1}
                    </span>
                    <h3 className="ml-3 text-lg font-semibold leading-8 text-gray-900">
                      {step.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}