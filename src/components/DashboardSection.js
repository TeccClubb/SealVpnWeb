
import React from "react";

const DashboardSection = ({ title, heading, children }) => (
  <section className="flex flex-col gap-y-6 lg:px-8 px-6 pb-20 lg:pb-14">
    {title && (
      <span className="text-accent sm:text-xl text-lg font-bold text-neutral-600">{title}</span>
    )}

    {heading && <h2 className="sm:text-3xl text-2xl font-bold text-neutral-600">{heading}</h2>}
    {children}
  </section>
);

export default DashboardSection;
