import { useState } from 'react';

import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { StickyMobileCTA } from '@/components/layout/StickyMobileCTA';

import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { DosagesSection } from '@/components/sections/DosagesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { GuaranteeSection } from '@/components/sections/GuaranteeSection';
import { WhereToBuySection } from '@/components/sections/WhereToBuySection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { ContactDialog } from '@/components/modals/ContactDialog';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar onOpenDialog={openDialog} />
      <main>
        <HeroSection onOpenDialog={openDialog} />
        <StatsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <ComparisonSection />
        <DosagesSection onOpenDialog={openDialog} />
        <TestimonialsSection />
        <PricingSection onOpenDialog={openDialog} />
        <GuaranteeSection />
        <WhereToBuySection />
        <FAQSection />
        <CTASection onOpenDialog={openDialog} />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA onOpenDialog={openDialog} />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}

export default App;
