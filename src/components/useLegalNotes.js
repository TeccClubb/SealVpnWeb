"use client";

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const useLegalNotes = () => {
  const [legalNotes, setLegalNotes] = useState({
    termsAndConditions: null,
    privacyPolicy: null,
    aboutUs: null,
  });
  const [isLegalNotesLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchLegalNotes = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_REST_API_BASE_URL}/options`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (res.status === 200) {
          console.log(res.data);
          setLegalNotes({
            termsAndConditions: res.data.tos,
            privacyPolicy: res.data.privacy_policy,
            aboutUs: res.data.about_us,
          });
        } else {
          setErrorMessage("Failed to load legal notes");
        }
      } catch (error) {
        setErrorMessage(
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to load legal notes"
        );
      } finally {
        setLoading(false);
        if (errorMessage) {
          toast.error(errorMessage);
        }
      }
    };

    fetchLegalNotes();
  }, []);

  return {
    isLegalNotesLoading,
    errorMessage,
    legalNotes,
  };
};
