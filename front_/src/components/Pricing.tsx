"use client";
import { translations } from '../translations';

import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { PricingPlan } from '../types';

interface PricingProps {
  pricingData: PricingPlan[];
}

const Pricing: React.FC<PricingProps> = ({ pricingData = [] }) => {
  const t = translations.pricing;
const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-blue-900 dark:bg-blue-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingData.map((plan) => (
            <Card
              key={plan.id}
              className={`relative hover:shadow-2xl transition-all duration-300 ${plan.popular
                  ? 'border-4 border-blue-900 dark:border-blue-400 scale-105 z-10'
                  : 'border-2'
                }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-900 dark:bg-blue-600 text-white px-6 py-1 text-sm">
                  {t.popular}
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-blue-900 dark:text-blue-400">
                    {plan.price}
                  </span>
                  <span className="text-xl text-gray-600 dark:text-gray-400 ml-2">
                    {plan.currency}/{plan.duration}
                  </span>
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-400 min-h-[3rem]">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular
                      ? 'bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
                      : 'bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'
                    } text-white`}
                  onClick={scrollToContact}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  {t.requestQuote}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 border-blue-900 dark:border-blue-400 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-blue-950">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t.customTitle}
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                {t.customText}
              </p>
              <Button
                size="lg"
                className="bg-blue-900 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8"
                onClick={scrollToContact}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                {t.discussProject}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;