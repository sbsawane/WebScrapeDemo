import React from 'react';
import { Container } from './Container';
import { CaseStudy } from '../types';
import { CheckCircle } from 'lucide-react';

const caseStudies: CaseStudy[] = [
  {
    title: 'E-commerce Price Monitoring',
    description:
      'Helped a major retailer track competitor prices across multiple platforms, leading to optimized pricing strategies and increased revenue.',
    results: [
      '15% increase in revenue',
      'Real-time price adjustments',
      'Improved market positioning',
    ],
    industry: 'Retail',
  },
  {
    title: 'Real Estate Market Analysis',
    description:
      'Developed a comprehensive solution for a real estate firm to gather property listings and market trends data from multiple sources.',
    results: [
      'Data from 100+ websites',
      'Market insights dashboard',
      'Automated reporting system',
    ],
    industry: 'Real Estate',
  },
  {
    title: 'Social Media Sentiment Analysis',
    description:
      'Created a custom scraping solution for a brand to monitor social media mentions and analyze customer sentiment.',
    results: [
      'Improved response time by 60%',
      'Enhanced brand reputation',
      'Data-driven marketing decisions',
    ],
    industry: 'Marketing',
  },
];

export function CaseStudies() {
  return (
    <div className="py-24 sm:py-32" id="case-studies">
      <Container>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Case Studies
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success stories from our clients
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how our web scraping solutions have helped businesses across different
            industries achieve their goals.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.title}
                className="relative isolate flex flex-col gap-6 bg-white px-6 py-8 shadow-sm ring-1 ring-gray-900/5 rounded-2xl"
              >
                <div>
                  <span className="inline-flex items-center rounded-md bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10">
                    {study.industry}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold leading-7 tracking-tight text-gray-900">
                    {study.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    {study.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <ul className="space-y-2">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary-600" />
                        <span className="text-sm text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}