const capabilities = [
  {
    title: "Demand generation & acquisition",
    description: "Paid media, audience segmentation, SEO content, and landing page optimization, grounded in acquisition and lead-to-close improvements.",
    href: "#case-acquisition",
    link: "Acquisition work",
  },
  {
    title: "Lifecycle & marketing operations",
    description: "Hands-on HubSpot infrastructure, lead scoring, routing, and nurture that connect marketing activity with sales follow-up.",
    href: "#case-hubspot",
    link: "HubSpot work",
  },
  {
    title: "Leadership & sales alignment",
    description: "Building a marketing function, managing agencies and vendors, and enabling agents through CRM training and sales feedback loops.",
    href: "#case-marketing-function",
    link: "Marketing function work",
  },
  {
    title: "Measurement & technical initiative",
    description: "Full-funnel reporting, performance analytics, and practical dashboard development that make data easier to use.",
    href: "#projects",
    link: "Market Data Dashboard",
  },
];

export default function Skills() {
  return (
    <div tabIndex={-1} id="skills" className="content-width mt-10 scroll-mt-24">
      <h3 className="font-serif text-3xl mb-6">Capabilities</h3>
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {capabilities.map((item) => (
          <div key={item.title} className="pt-5 border-t border-black/15 dark:border-white/20">
            <h4 className="font-semibold mb-2">{item.title}</h4>
            <p className="text-text-secondary dark:text-text-light/75 leading-relaxed">{item.description}</p>
            <a href={item.href} className="social-link text-sm mt-1">{item.link}</a>
          </div>
        ))}
      </div>
      <p className="text-sm text-text-secondary dark:text-text-light/75 leading-relaxed mt-8 pt-6 border-t border-black/15 dark:border-white/20">
        <span className="font-semibold text-text-primary dark:text-text-light">Selected tools:</span>{" "}
        HubSpot, Google Ads, Meta Ads, GA4, Google Tag Manager, SQL, JavaScript, React.
      </p>
    </div>
  );
}
