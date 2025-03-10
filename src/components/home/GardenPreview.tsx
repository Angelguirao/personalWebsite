
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import RevealText from '../ui/RevealText';

const GardenPreview = () => {
  return (
    <section className="py-20">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center">
          <RevealText>
            <h2 className="heading-lg mb-6">Digital Garden</h2>
          </RevealText>
          
          <div className="mb-4">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium">Non-Linear Exploration</p>
          </div>
          
          <p className="body-md text-muted-foreground mb-8 max-w-2xl">
            Unlike traditional blogs or essays, a digital garden embraces the messiness of thinking in public. 
            Ideas connect in unexpected ways, creating a rich network of concepts that evolve over time.
          </p>
          
          <Link 
            to="/garden" 
            className="inline-flex items-center text-sm font-medium text-primary hover:underline group"
            onClick={() => window.scrollTo(0, 0)}
          >
            Explore the garden
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GardenPreview;
