"use client";

import React from "react";
import { useLegalNotes } from "@/components/useLegalNotes";
import ArticleSection from "@/components/ArticleSection";

const TermsOfServicesPage = () => {
  const {
    isLegalNotesLoading,
    errorMessage,
    legalNotes: { termsAndConditions },
  } = useLegalNotes();
  return (
    <ArticleSection
      heading="Terms of Services"
      htmlContent={termsAndConditions}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default TermsOfServicesPage;
