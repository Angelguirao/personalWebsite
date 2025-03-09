
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sprout } from 'lucide-react';
import BlurEffect from '../ui/BlurEffect';

const GardenPreview = () => {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <BlurEffect className="glass p-8 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-50 rounded-full opacity-50"></div>
              <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-50 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium mb-4">
                  <Sprout size={12} className="mr-1" />
                  Growing Collection
                </div>
                
                <h3 className="font-serif text-xl font-semibold mb-4">Digital Garden</h3>
                <p className="text-muted-foreground mb-6">
                  Unlike traditional blogs or essays, a digital garden embraces the messiness of thinking in public. Ideas connect in unexpected ways, creating a rich network of concepts that evolve over time.
                </p>
                
                <Link 
                  to="/garden" 
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
                >
                  Explore the garden
                  <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </BlurEffect>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Work in Progress</p>
            <h2 className="heading-lg">Nonlinear Knowledge Exploration</h2>
            <p className="body-md text-muted-foreground">
              Unlike traditional blogs or essays, a digital garden embraces the messiness of thinking in public. Ideas connect in unexpected ways, creating a rich network of concepts that evolve over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardenPreview;
