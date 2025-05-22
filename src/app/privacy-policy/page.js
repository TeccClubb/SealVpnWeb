"use client";

import React from "react";
import { useLegalNotes } from "@/components/useLegalNotes";
import ArticleSection from "@/components/ArticleSection";

const PrivacyPolicyPage = () => {
  const {
    isLegalNotesLoading,
    errorMessage,
    legalNotes: { privacyPolicy },
  } = useLegalNotes();
  return (
    <ArticleSection
      heading="Privacy Policy"
      htmlContent={privacyPolicy}
      errorMessage={errorMessage}
      isLoading={isLegalNotesLoading}
    />
  );
};

export default PrivacyPolicyPage;
