"use client";

import React, { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import axios from "axios";
import { EMAIL_VERIFICATION_ROUTE } from "@/lib/constants";
import { addToast, Spinner } from "@heroui/react";
import { Section } from "../sections";
import {
  ErrorIcon,
  CircleExclamation,
  ThumbsUpIcon,
  VerifiedIcon,
} from "@/icons";

const EmailVerificationPage = () => {
  const searchParams = useSearchParams();
  const expires = searchParams.get("expires");
  const hash = searchParams.get("hash");
  const id = searchParams.get("id");
  const signature = searchParams.get("signature");

  if (!expires || !hash || !id || !signature) {
    notFound();
  }

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const verification = async () => {
      try {
        setLoading(true);
        const res = await axios
          .get(`/api/email/verify/${id}/${hash}?expires=${expires}&signature=${signature}`, {
            params: {
              expires,
              signature,
            },
            headers: {
              Accept: "application/json",
            },
          })
          .then((res) => res.data);

        if (res.status) {
          addToast({
            color: "success",
            description: res.message,
          });
          setSuccessMessage(res.message);
        } else {
          addToast({
            color: "danger",
            description: res.message,
          });
          setErrorMessage(res.message);
        }
      } catch (error) {
        const message =
          error?.response?.data?.message || error?.message || "An unknown error occurred";
        addToast({
          color: "danger",
          description: message,
        });
        setErrorMessage(message);
      } finally {
        setLoading(false);
      }
    };

    verification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section isHeroSection isCenterGradient>
      <div className="flex flex-col items-center justify-center gap-4">
        {isLoading && (
          <Spinner
            size="lg"
            color="current"
            variant="spinner"
            label="Verifying..."
            className="space-y-8"
            classNames={{ wrapper: "size-32", label: "text-xl font-bold" }}
          />
        )}

        {errorMessage && (
          <>
            <ErrorIcon className="size-48 text-danger-500" />
            <h3 className="text-2xl font-bold text-danger-500">An Error</h3>
            <div className="flex items-center gap-2 text-danger-600 bg-danger-50 border-2 border-solid border-danger-100 p-3 rounded-xl">
              <CircleExclamation className="text-danger-600" />
              <span>{errorMessage}</span>
            </div>
          </>
        )}

        {successMessage && (
          <>
            <VerifiedIcon className="size-48 text-success-500" />
            <h3 className="text-2xl font-bold text-success-500">Verified</h3>
            <div className="flex items-center gap-2 text-success-600 bg-success-50 border-2 border-solid border-success-100 p-3 rounded-xl">
              <ThumbsUpIcon name="check_circle" className="text-success-600" />
              <span>{successMessage}</span>
            </div>
          </>
        )}
      </div>
    </Section>
  );
};

export default EmailVerificationPage;
