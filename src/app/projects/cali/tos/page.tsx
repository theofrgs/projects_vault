"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ToS() {
  return (
    <div className="prose prose-sm dark:prose-invert max-w-4xl mx-auto p-8 flex flex-col h-lg:mt-28 mt-14 h-lg:xl:mt-40 h-xl:mt-64">
      <h1 className="text-3xl font-bold text-center mb-8">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500">
        Effective Date: [{new Date().toLocaleDateString()}]
      </p>
      <p className="text-sm text-gray-500">Platform Name: Cali</p>
      <p className="text-sm text-gray-500">Owner: [Théo Fargeas]</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p>
        By accessing or using Cali (&quot;Platform&quot;), you agree to comply
        with and be bound by these Terms of Service (&quot;Terms&quot;). If you
        do not agree, please do not use the Platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Cali. If you are under the age
        of majority in your jurisdiction, you may use the Platform only with
        permission from a parent or legal guardian.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Platform Overview</h2>
      <p>
        Cali is an aesthetic control center for your digital life. It lets users
        open one beautiful dashboard instead of juggling separate tools like
        YouTube, Spotify, Pinterest, Notion, weather, inboxes, and notes.
      </p>
      <p>The Platform may include:</p>
      <ul className="list-disc list-inside">
        <li>YouTube ambient videos or looping video backgrounds</li>
        <li>Spotify embeds and music widgets</li>
        <li>Clock, weather, notes, and task widgets</li>
        <li>Public Notion page embeds and future Notion task sync</li>
        <li>Pinterest boards, feeds, or inspiration image panels</li>
        <li>Morning mode, focus mode, and mood-based dashboards</li>
        <li>Multi-dashboard layouts, marketplace setups, and social sharing</li>
        <li>Optional browser new tab replacement features</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        4. Accounts and Dashboard Content
      </h2>
      <p>
        You may need an account to save dashboards, preferences, widgets,
        integrations, notes, tasks, and layouts. You are responsible for keeping
        your account credentials secure and for all activity under your account.
      </p>
      <p>
        You are responsible for the links, embeds, notes, tasks, images,
        dashboard names, and other content you add to Cali.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        5. Third-Party Services
      </h2>
      <p>
        Cali may display or connect to third-party services including Notion,
        YouTube, Spotify, Pinterest, Gmail, Instagram, X, weather providers, and
        other tools. These services are not controlled by Cali, and their own
        terms and privacy policies apply.
      </p>
      <p>
        You are responsible for making sure any page, playlist, feed, board, or
        account you connect or embed is yours to use and share.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        6. Acceptable Use
      </h2>
      <p>You agree not to:</p>
      <ul className="list-disc list-inside">
        <li>Use the Platform for unlawful, harmful, or abusive activity</li>
        <li>Upload, embed, or share content that infringes others&apos; rights</li>
        <li>Attempt to access accounts, dashboards, or data without permission</li>
        <li>Interfere with the Platform, its APIs, or connected services</li>
        <li>Use automation or scraping in a way that harms the Platform</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        7. Product Stage and Feature Changes
      </h2>
      <p>
        Cali is an evolving product built with technologies such as Next.js,
        TanStack, shadcn/ui, Tailwind CSS, Zustand, and Valibot. Some features
        may start as simple embeds, including the Notion MVP, and later evolve
        into deeper sync, smart playlists, advanced widgets, AI moods, or a
        unified life feed.
      </p>
      <p>
        We may add, change, limit, pause, or remove features at any time as the
        Platform develops.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        8. Subscriptions, Payments, and Marketplace
      </h2>
      <p>
        Cali may offer paid plans, premium widgets, templates, aesthetic
        dashboard setups, marketplace items, or other paid features. Prices,
        billing periods, and included features will be shown before purchase.
      </p>
      <p>
        Payment processing may be handled by third-party providers. Their terms
        and privacy policies also apply.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        9. Intellectual Property
      </h2>
      <p>
        You retain ownership of your notes, dashboard content, and user-created
        materials. By adding content to Cali, you grant us a limited license to
        host, display, process, and operate that content only as needed to
        provide the Platform.
      </p>
      <p>
        Cali, including its interface, branding, design direction, and software,
        remains the property of its owner or licensors.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        10. Termination and Suspension
      </h2>
      <p>
        We may suspend or terminate access if you violate these Terms, misuse
        the Platform, create legal risk, or interfere with connected services.
        You may stop using Cali at any time.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">11. Disclaimers</h2>
      <p>
        The Platform is provided &quot;as is&quot; and &quot;as
        available.&quot; We do not guarantee that integrations, embeds,
        dashboards, notifications, sync, playlists, feeds, or widgets will be
        uninterrupted, accurate, available, or error-free.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        12. Limitation of Liability
      </h2>
      <p>
        To the maximum extent allowed by law, our total liability will not
        exceed the amount you paid to us in the last 12 months, if any. We are
        not liable for indirect, incidental, consequential, or special damages,
        including lost data, lost productivity, or issues caused by third-party
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">13. Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Cali, its owner, employees, and
        affiliates from claims or liabilities arising from your use of the
        Platform, your content, your connected third-party services, or your
        violation of these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        14. Governing Law and Dispute Resolution
      </h2>
      <p>These Terms are governed by the laws of France.</p>
      <p>
        Any disputes will be resolved by the competent courts unless another
        dispute resolution process is required by applicable law.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">
        15. Changes to Terms
      </h2>
      <p>
        We may modify these Terms at any time. Updated Terms will be posted on
        this page with a new effective date. Your continued use of Cali
        signifies your acceptance of any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">16. Contact Us</h2>
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
