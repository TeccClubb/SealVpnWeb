"use client";

import React from "react";
import { Loader } from "lucide-react";

const ArticleSection = ({
  heading,
  htmlContent,
  errorMessage,
  isLoading,
  children,
}) => (
  <section className="w-full flex flex-col items-center pt-4">
    <div className="w-full max-w-7xl min-h-[calc(100vh-4rem)] flex flex-col items-center gap-4 px-4 py-10">
      <h2 className="text-4xl sm:text-5xl font-bold">{heading}</h2>
      {isLoading && (
        <span className="mt-4 flex flex-col gap-y-4 items-center justify-center">
          <Loader className="animate-spin" />
          <span>Loading...</span>
        </span>
      )}

      {errorMessage && (
        <div className="text-red-600 bg-red-50 border-2 border-solid border-red-100 p-3 rounded-xl">
          {errorMessage}
        </div>
      )}

      {children && (
        // <article className="w-full max-w-7xl prose prose-neutral dark:prose-invert">
        <article className="w-full max-w-7xl prose prose-neutral">
          {children}
        </article>
      )}

      {htmlContent && (
        <article
          // className="w-full max-w-7xl prose prose-neutral dark:prose-invert"
          className="w-full max-w-7xl prose prose-neutral"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></article>
      )}
    </div>
  </section>
);

export default ArticleSection;
