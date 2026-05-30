"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-4xl mx-auto p-8 flex flex-col h-lg:mt-28 mt-14 h-lg:xl:mt-40 h-xl:mt-64">
      <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500">
        Effective Date: [{new Date().toLocaleDateString()}]
      </p>
      <p className="text-sm text-gray-500">Platform Name: Cali</p>
      <p className="text-sm text-gray-500">Owner: [Théo Fargeas]</p>
      <p className="text-sm text-gray-500">
        Contact Email: [theofargeas@gmail.com]
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
      <p>
        This Privacy Policy explains how Cali collects, uses, stores, and shares
        information when you use our aesthetic control center for your digital
        life. Cali helps users combine ambient backgrounds, music, Notion,
        Pinterest, weather, notes, tasks, and other widgets into one personal
        dashboard.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        2. Information We Collect
      </h2>
      <p>We may collect the following types of information:</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        A. Account Information
      </h3>
      <ul className="list-disc list-inside">
        <li>Name, email address, and login details</li>
        <li>Profile preferences and account settings</li>
        <li>Subscription, billing, and payment status information</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        B. Dashboard and Widget Data
      </h3>
      <ul className="list-disc list-inside">
        <li>Dashboard names, layouts, themes, and selected modes</li>
        <li>Notes, tasks, focus settings, and saved widget preferences</li>
        <li>Public Notion page links, Pinterest links, and embedded media URLs</li>
        <li>Weather location preferences and time-based mode preferences</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        C. Integration Data
      </h3>
      <p>
        If you connect third-party services, we may process information needed
        to show those services inside Cali. This may include public embed links,
        playlist identifiers, board identifiers, limited account metadata,
        tokens, synced tasks, notes, project names, notification previews, or
        inbox previews depending on the feature you enable.
      </p>

      <h3 className="text-xl font-semibold mt-4 mb-2">D. Usage Data</h3>
      <ul className="list-disc list-inside">
        <li>IP address, device type, browser, and operating system</li>
        <li>Pages visited, widgets used, clicks, and session duration</li>
        <li>Performance, crash, and diagnostic data</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        E. Cookies and Local Storage
      </h3>
      <p>We may use cookies, local storage, or similar technologies to:</p>
      <ul className="list-disc list-inside">
        <li>Keep you logged in</li>
        <li>Save dashboard preferences</li>
        <li>Remember theme, layout, and mode settings</li>
        <li>Measure usage and improve product quality</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        3. How We Use Your Information
      </h2>
      <p>We use your information to:</p>
      <ul className="list-disc list-inside">
        <li>Provide, operate, and improve Cali</li>
        <li>Save and sync your dashboards, widgets, notes, and preferences</li>
        <li>Display third-party embeds and connected-service data</li>
        <li>Support features like morning mode, focus mode, and smart layouts</li>
        <li>Process payments and manage subscriptions</li>
        <li>Monitor safety, prevent abuse, and debug technical issues</li>
        <li>Send transactional messages and product updates where allowed</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Third-Party Services and Embeds
      </h2>
      <p>
        Cali may embed or connect to services such as Notion, YouTube, Spotify,
        Pinterest, Gmail, Instagram, X, and weather providers. These services
        may collect information directly from you when their content is loaded
        or when you connect your account.
      </p>
      <p>
        We do not control third-party services. Their privacy policies and terms
        apply to their handling of your data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. How We Share Your Information
      </h2>
      <p>We may share information in the following cases:</p>
      <ul className="list-disc list-inside">
        <li>With service providers for hosting, analytics, payments, and email</li>
        <li>With third-party integrations you choose to connect</li>
        <li>With legal authorities when required by law</li>
        <li>In connection with a business transfer, merger, or acquisition</li>
      </ul>
      <p>We do not sell your personal data.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Payments and Subscriptions
      </h2>
      <p>
        Payments may be handled by third-party providers. We do not store full
        payment card details. Payment providers may collect and process billing
        data under their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Data Security</h2>
      <p>
        We use reasonable technical and organizational safeguards to protect
        your data from unauthorized access, loss, misuse, or alteration.
      </p>
      <p>
        No system is completely secure. You are responsible for protecting your
        account credentials and for reviewing what third-party links or accounts
        you connect.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">8. Data Retention</h2>
      <p>We retain your information:</p>
      <ul className="list-disc list-inside">
        <li>As long as your account is active</li>
        <li>As needed to provide dashboards, sync, and integrations</li>
        <li>As required for legal, tax, security, or dispute purposes</li>
      </ul>
      <p>
        When information is no longer needed, we delete or anonymize it where
        reasonably possible.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">9. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul className="list-disc list-inside">
        <li>Access a copy of your personal data</li>
        <li>Correct inaccurate or outdated information</li>
        <li>Delete your account and associated data</li>
        <li>Object to or restrict certain processing</li>
        <li>Withdraw consent for optional integrations or marketing</li>
      </ul>
      <p>To exercise these rights, contact us at: [theofargeas@gmail.com]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        10. International Data Transfers
      </h2>
      <p>
        If you access Cali from outside France, your information may be
        processed in countries with different data protection laws. We take
        reasonable steps to protect transferred data where required.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        11. Children&apos;s Privacy
      </h2>
      <p>
        Cali is not intended for children under 13. We do not knowingly collect
        personal information from children under 13. If we discover such data,
        we will delete it promptly.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        12. Changes to This Privacy Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with the updated effective date. Continued use of
        Cali indicates acceptance of the updated policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">13. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or how we handle
        your data, please contact us:
      </p>
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
