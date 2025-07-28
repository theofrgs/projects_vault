"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ToS() {
  return (
      <div className="prose prose-sm dark:prose-invert max-w-4xl mx-auto p-8 flex flex-col h-lg:mt-28 mt-14 h-lg:xl:mt-40 h-xl:mt-64">
      <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500">Effective Date: [{new Date().toLocaleDateString()}]</p>
      <p className="text-sm text-gray-500">
        Platform Name: Content Creator and Brand Dashboard
      </p>
      <p className="text-sm text-gray-500">Owner: [Théo Fargeas]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing or using the Content Creator and Brand Dashboard
        (“Platform”), you agree to comply with and be bound by these Terms of
        Service (“Terms”). If you do not agree, please do not use the Platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p>
        You must be at least 18 years old and capable of forming a legally
        binding contract.
      </p>
      <p>
        By using the Platform, you confirm you meet these eligibility
        requirements.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Platform Overview</h2>
      <p>
        The Platform connects content creators with brands for project
        collaboration. It provides:
      </p>
      <ul className="list-disc list-inside">
        <li>Profile creation</li>
        <li>Messaging tools</li>
        <li>Project management features</li>
        <li>Search & discovery functions</li>
        <li>Analytics dashboards</li>
        <li>Payment processing</li>
        <li>Community features</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. User Accounts</h2>
      <p>
        You must provide accurate, complete information during registration.
      </p>
      <p>You are responsible for safeguarding your account credentials.</p>
      <p>
        You may not share your login with others or impersonate another user.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. User Responsibilities
      </h2>
      <p>You agree to:</p>
      <ul className="list-disc list-inside">
        <li>Use the Platform in a professional, lawful manner.</li>
        <li>Respect other users rights and content.</li>
        <li>Refrain from harassment, spam, or any unauthorized use.</li>
      </ul>
      <p>Prohibited actions include:</p>
      <ul className="list-disc list-inside">
        <li>Uploading harmful or illegal content</li>
        <li>Infringing intellectual property rights</li>
        <li>Circumventing platform fees or processes</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. User Content and Licensing
      </h2>
      <p>
        You retain ownership of any content (e.g., portfolios, messages, project
        files) you upload.
      </p>
      <p>
        By submitting content, you grant us a limited license to display and use
        it within the Platform for operational purposes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Platform Fees and Payments
      </h2>
      <p>
        The Platform may charge fees or commissions for certain services (e.g.,
        completed projects, subscriptions).
      </p>
      <p>
        Payment processing is handled by third-party providers (e.g., Stripe,
        PayPal), and their terms also apply.
      </p>
      <p>
        You are responsible for providing accurate payment and tax-related
        information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        8. Project Engagements
      </h2>
      <p>
        Brands are responsible for project descriptions, timelines, and budgets.
      </p>
      <p>
        Content creators are responsible for timely delivery of agreed work.
      </p>
      <p>
        The Platform is not a party to contracts between users and disclaims
        responsibility for any disputes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        9. Termination and Suspension
      </h2>
      <p>We reserve the right to:</p>
      <ul className="list-disc list-inside">
        <li>Suspend or terminate your account if you violate these Terms.</li>
        <li>Remove content that violates our policies or laws.</li>
        <li>Discontinue access to any feature at our discretion.</li>
      </ul>
      <p>You may terminate your account at any time by contacting support.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Disclaimers</h2>
      <p>The Platform is provided “as is” and “as available.”</p>
      <p>We do not guarantee uninterrupted or error-free access.</p>
      <p>
        We are not liable for any damages resulting from your use of the
        Platform, including lost profits or reputational harm.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        11. Limitation of Liability
      </h2>
      <p>
        To the maximum extent allowed by law, our total liability will not
        exceed the amount you have paid to us in the last 12 months (if any). We
        are not liable for indirect, incidental, or consequential damages.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">12. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Astra, its
        officers, employees, and affiliates from any claims or liabilities
        arising from:
      </p>
      <ul className="list-disc list-inside">
        <li>Your use of the Platform</li>
        <li>Your content</li>
        <li>Your violation of these Terms</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        13. Governing Law and Dispute Resolution
      </h2>
      <p>These Terms are governed by the laws of [France].</p>
      <p>
        Any disputes will be resolved through [arbitration / courts of
        jurisdiction], unless prohibited by local law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">14. Changes to Terms</h2>
      <p>
        We may modify these Terms at any time. Updated Terms will be posted on
        this page with a new effective date. Your continued use of the Platform
        signifies your acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">15. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <p>Email: [theofargeas@gmail.com]</p>
      <p>Website: [In progress...]</p>

      <div className="mt-8 text-center">
        <Button asChild>
          <Link href="/">Go back to homepage</Link>
        </Button>
      </div>
    </div>
  );
}
