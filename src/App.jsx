import SideNav, { ScrollProgress } from './components/Navigation'
import MobileNav from './components/MobileNav'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import WorkflowSection from './components/WorkflowSection'
import UseCasesSection from './components/UseCasesSection'
import ProductsSection from './components/ProductsSection'
import PricingSection from './components/PricingSection'
import ImportSection from './components/ImportSection'
import ROISection from './components/ROISection'
import RisksSection, { ConclusionSection } from './components/RisksSection'
import BusinessSection from './components/BusinessSection'
import FinancingSection from './components/FinancingSection'
import Footer from './components/Footer'
import { useScrollProgress } from './hooks/useScrollReveal'

function Divider() {
  return <hr className="divider" />
}

export default function App() {
  const progress = useScrollProgress()

  return (
    <>
      <ScrollProgress progress={progress} />
      <SideNav />
      <MobileNav />

      <div className="layout">
        <main className="content">
          <Header />
          <IntroSection />
          <Divider />
          <WorkflowSection />
          <Divider />
          <UseCasesSection />
          <Divider />
          <ProductsSection />
          <Divider />
          <PricingSection />
          <Divider />
          <ImportSection />
          <Divider />
          <ROISection />
          <Divider />
          <RisksSection />
          <Divider />
          <ConclusionSection />
          <Divider />
          <BusinessSection />
          <Divider />
          <FinancingSection />
          <Footer />
        </main>
      </div>
    </>
  )
}
