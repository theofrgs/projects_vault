"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
      <div className="prose prose-sm dark:prose-invert max-w-4xl mx-auto p-8 flex flex-col h-lg:mt-28 mt-14 h-lg:xl:mt-40 h-xl:mt-64">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500">Effective Date: [{new Date().toLocaleDateString()}]</p>
      <p className="text-sm text-gray-500">
        Platform Name: Content Creator and Brand Dashboard
      </p>
      <p className="text-sm text-gray-500">Owner: [Théo Fargeas]</p>
      <p className="text-sm text-gray-500">Contact Email: [theofargeas@gmail.com]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Introduction
      </h2>
      <p>
        This Privacy Policy explains how we collect, use, store, and share your personal information when you use the Content Creator and Brand Dashboard (“Platform”). By using the Platform, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
      <p>We collect the following types of information:</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">A. Personal Information</h3>
      <ul className="list-disc list-inside">
        <li>Name, email address, and contact details</li>
        <li>Profile information (e.g., portfolio, pricing, location, bio)</li>
        <li>Payment and billing information</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">B. Project and Communication Data</h3>
      <ul className="list-disc list-inside">
        <li>Project descriptions, proposals, messages, files, and attachments</li>
        <li>Collaboration history and project metadata</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">C. Usage Data</h3>
      <ul className="list-disc list-inside">
        <li>IP address, device type, browser, operating system</li>
        <li>Pages visited, clicks, session duration</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">D. Cookies and Tracking Technologies</h3>
      <p>We use cookies and similar technologies to:</p>
      <ul className="list-disc list-inside">
        <li>Keep you logged in</li>
        <li>Track platform usage</li>
        <li>Provide analytics</li>
      </ul>
      <p>You can manage cookie preferences through your browser settings.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc list-inside">
        <li>Provide, operate, and improve the Platform</li>
        <li>Facilitate collaboration between creators and brands</li>
        <li>Process payments and generate invoices</li>
        <li>Monitor platform activity for safety and fraud prevention</li>
        <li>Send transactional and marketing communications (with consent)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. How We Share Your Information</h2>
      <p>We only share your data in the following cases:</p>
      <ul className="list-disc list-inside">
        <li>With other users (e.g., profile visibility for collaboration)</li>
        <li>With service providers (e.g., hosting, payment processing, analytics)</li>
        <li>With legal authorities when required by law or to enforce our Terms</li>
        <li>In connection with a business transfer (e.g., merger or acquisition)</li>
      </ul>
      <p>We do not sell your personal data to third parties.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Payments</h2>
      <p>Payments are handled via third-party providers (e.g., Stripe, PayPal). We do not store your full payment information. These providers are responsible for securing your financial data and may collect additional information as per their own privacy policies.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Data Security</h2>
      <p>We implement reasonable technical and organizational safeguards to protect your data from unauthorized access, loss, or misuse.</p>
      <p>However, no system is 100% secure. You are responsible for protecting your login credentials.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Your Rights</h2>
      <p>Depending on your location, you may have the following rights:</p>
      <ul className="list-disc list-inside">
        <li>Access – Request a copy of your personal data</li>
        <li>Update – Correct inaccurate or outdated information</li>
        <li>Delete – Request deletion of your account and data</li>
        <li>Restrict/Opt-out – Limit use of your data (e.g., for marketing)</li>
      </ul>
      <p>To exercise these rights, contact us at: [theofargeas@gmail.com]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Data Retention</h2>
      <p>We retain your personal information:</p>
      <ul className="list-disc list-inside">
        <li>As long as your account is active</li>
        <li>As needed to comply with legal obligations or resolve disputes</li>
      </ul>
      <p>Once data is no longer needed, we securely delete or anonymize it.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. International Data Transfers</h2>
      <p>If you access the Platform from outside [Your Country/State], your data may be transferred to and processed in countries with different data protection laws. We take steps to ensure adequate protections are in place (e.g., contractual clauses).</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">10. Children’s Privacy</h2>
      <p>The Platform is not intended for users under 18. We do not knowingly collect personal information from minors. If we discover such data, we will delete it promptly.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">11. Changes to This Privacy Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated effective date. Continued use of the Platform indicates acceptance of the updated policy.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">12. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
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