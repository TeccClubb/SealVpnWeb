
"use clie"
import EmailVerificationPage from "@/components/EmailVerificationPage";
import { Suspense } from "react";

export const metadata = {
  title: "Email Verification",
};

const Page = () => (
  <Suspense>
    <EmailVerificationPage></EmailVerificationPage>
  </Suspense>
);

export default Page;
