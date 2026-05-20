"use client";
import { translations } from '../translations';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonialsData: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonialsData = [] }) => {
  const t = translations.testimonials;
return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
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

        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-900 dark:border-t-blue-400"
            >
              <CardContent className="pt-6">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-blue-900/10 dark:text-blue-400/10" />

                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={testimonial.avatar || testimonial.avatar_url} alt={testimonial.name} />
                    <AvatarFallback className="bg-blue-900 dark:bg-blue-600 text-white text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-900 dark:text-blue-400 font-medium">
                      {testimonial.position || testimonial.role}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;