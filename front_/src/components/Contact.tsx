"use client";
import { translations } from '../translations';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Social, ProfileData } from '../types';

import axiosInstance from "../lib/axios";

interface ContactProps {
  socialsData: Social[];
  profileData: ProfileData | null;
}

const Contact: React.FC<ContactProps> = ({ socialsData = [], profileData }) => {
  const t = translations.contact;
const location = profileData?.location || "";
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosInstance.post('/references', {
        ...formData,
        is_read: false
      });

      toast({
        title: t.success,
        description: t.successMsg,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center animate-fade-in">
          <p className="text-secondary font-mono text-sm tracking-widest uppercase mb-4">Get in touch</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent rounded-full mx-auto" />
          <p className="text-foreground/50 max-w-2xl mx-auto mt-6 font-sans text-sm md:text-base leading-relaxed">
            {t.subtitle || 'Have a project? Don\'t hesitate to contact me'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t.info}
            </h3>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-900 dark:border-l-blue-400 glass-premium card-gradient-hover transition-all duration-300 hover:scale-105">
                <CardContent className="flex items-start p-6">
                  <Mail className="h-6 w-6 text-blue-900 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.email}</h4>
                    <a
                      href={`mailto:${profileData?.email || ""}`}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
                    >
                      {profileData?.email || "N/A"}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 mt-6">
                {socialsData.map(social => (
                  <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    {social.platform}
                  </a>
                ))}
              </div>

              <Card className="border-l-4 border-l-blue-900 dark:border-l-blue-400 glass-premium card-gradient-hover transition-all duration-300 hover:scale-105">
                <CardContent className="flex items-start p-6">
                  <Phone className="h-6 w-6 text-blue-900 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.phone}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{profileData?.phone || "N/A"}</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-900 dark:border-l-blue-400 glass-premium card-gradient-hover transition-all duration-300 hover:scale-105">
                <CardContent className="flex items-start p-6">
                  <MapPin className="h-6 w-6 text-blue-900 dark:text-blue-400 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t.location}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{location || "N/A"}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {t.availability}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {t.availabilityText}
              </p>
            </div>
          </div>

          <div>
            <Card className="border-t-4 border-t-blue-900 dark:border-t-blue-400 glass-premium shadow-2xl transition-all duration-500">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {t.sendMessage}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                      {t.name} *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-900 dark:focus:border-blue-400"
                      placeholder={t.namePlaceholder}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-900 dark:focus:border-blue-400"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300">
                      {t.subject} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-900 dark:focus:border-blue-400"
                      placeholder={t.subjectPlaceholder}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                      {t.message} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="mt-1 border-gray-300 dark:border-gray-600 focus:border-blue-900 dark:focus:border-blue-400"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-secondary text-white hover:bg-secondary/90 shadow-lg shadow-secondary/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 py-6 text-lg rounded-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        {t.sending}...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;