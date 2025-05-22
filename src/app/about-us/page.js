"use client";

import React from "react";
import { useLegalNotes } from "@/components/useLegalNotes";
import ArticleSection from "@/components/ArticleSection";

const AboutUsPage = () => {
  const {
    isLegalNotesLoading,
    errorMessage,
    legalNotes: { aboutUs },
  } = useLegalNotes();
  return (
    <ArticleSection
      heading="About Us"
      htmlContent={aboutUs}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default AboutUsPage;
