import React from 'react';
import { Container } from './Container';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: 'What types of websites can you scrape?',
    answer:
      'We can scrape most public websites while respecting their terms of service and robots.txt files. This includes e-commerce sites, social media, news sites, and more.',
  },
  {
    question: 'How do you handle website changes?',
    answer:
      'Our systems continuously monitor target websites for changes and automatically adapt our scraping methods to ensure consistent data collection.',
  },
  {
    question: 'What data formats do you support?',
    answer:
      'We provide data in various formats including JSON, CSV, XML, and can customize the format according to your needs.',
  },
  {
    question: 'How do you ensure data quality?',
    answer:
      'We implement multiple validation layers and quality checks to ensure the accuracy and completeness of the scraped data.',
  },
  {
    question: 'What about website terms of service?',
    answer:
      'We strictly adhere to website terms of service, robots.txt files, and maintain appropriate crawl rates to ensure ethical data collection.',
  },
  {
    question: 'Do you offer custom solutions?',
    answer:
      'Yes, we provide custom scraping solutions tailored to your specific requirements, including custom APIs and integration with your existing systems.',
  },
];

export function FAQ() {
  return (
    <div className="py-24 sm:py-32" id="faq">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Common questions about our web scraping services
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4 marker:content-['']">
              <summary className="flex w-full cursor-pointer select-none items-center justify-between text-left text-gray-900">
                <span className="text-sm font-semibold leading-7">{faq.question}</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-900/10 bg-white">
                  <svg
                    className="h-4 w-4 transition duration-300 group-open:-rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>
              <div className="mt-3 text-sm leading-6 text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </div>
  );
}