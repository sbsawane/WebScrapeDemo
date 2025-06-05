import React from 'react';
import { Container } from './Container';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    content:
      "WebScrapePro's service has been instrumental in helping us stay ahead of market trends. Their data accuracy and reliability are outstanding.",
    author: 'Sarah Johnson',
    role: 'Head of Analytics',
    company: 'TechCorp Inc.',
  },
  {
    content:
      'The team\'s expertise and professional approach made the entire process smooth. The insights we gained have been invaluable for our business.',
    author: 'Michael Chen',
    role: 'CEO',
    company: 'DataDrive Solutions',
  },
  {
    content:
      'Their custom scraping solution helped us automate what used to be a manual process, saving us countless hours and resources.',
    author: 'Emily Rodriguez',
    role: 'Operations Director',
    company: 'Market Analytics Ltd',
  },
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our clients say about our web scraping services
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-3 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
            >
              <blockquote className="text-gray-900">
                <p>{`"${testimonial.content}"`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-600">{`${testimonial.role}, ${testimonial.company}`}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </div>
  );
}