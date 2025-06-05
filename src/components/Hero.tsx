import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import { Bot, Database, LineChart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-20 pb-20 sm:pt-24 sm:pb-32">
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transform Web Data into{' '}
            <span className="text-primary-600">Actionable Insights</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Professional web scraping services tailored for your business needs. Extract,
            analyze, and leverage web data to make informed decisions and stay ahead of
            the competition.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg">Start your project</Button>
            <Button variant="outline" size="lg">
              Schedule a demo
            </Button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-8 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-12">
            <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none">
              <div className="flex flex-col items-center">
                <Bot className="h-12 w-12 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold">Automated Extraction</h3>
                <p className="text-center text-sm text-gray-600">
                  Reliable data extraction at scale
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Database className="h-12 w-12 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold">Clean Data</h3>
                <p className="text-center text-sm text-gray-600">
                  Structured and validated output
                </p>
              </div>
              <div className="flex flex-col items-center">
                <LineChart className="h-12 w-12 text-primary-600" />
                <h3 className="mt-4 text-lg font-semibold">Real-time Analytics</h3>
                <p className="text-center text-sm text-gray-600">
                  Instant insights from data
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}