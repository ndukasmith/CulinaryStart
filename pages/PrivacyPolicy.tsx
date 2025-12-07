import React from 'react';
import { BackButton } from '../components/BackButton';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-stone-200 mt-6 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Privacy Policy for CulinaryStart</h1>
          
          <div className="text-sm text-stone-500 mb-8 p-4 bg-stone-50 rounded-lg border border-stone-100 flex flex-col sm:flex-row sm:gap-8">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
          </div>

          <div className="prose prose-stone max-w-none text-stone-600">
            <p className="mb-4">
              CulinaryStart B.V. (“CulinaryStart,” “we,” “us,” or “our”) operates the CulinaryStart website (www.culinarystart.nl) and mobile application (collectively, the “Platform”). We are committed to protecting the privacy, security, and confidentiality of your personal data. This Privacy Policy explains how we collect, use, store, disclose, and protect your personal data when you access or use the Platform, register an account, list a kitchen, book a kitchen, or interact with our services.
            </p>
            <p className="mb-8">
              This Policy is compliant with the European Union’s General Data Protection Regulation (GDPR), the Dutch Data Protection Act (Wet bescherming persoonsgegevens, Wbp), and other applicable data protection laws. By using the Platform, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy. If you do not agree, please do not use the Platform.
            </p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Personal Data</strong>: Any information relating to an identified or identifiable natural person (“Data Subject”), such as name, contact details, address, payment information, and usage data.</li>
              <li><strong>Sensitive Personal Data</strong>: Special categories of personal data under GDPR, including health information, religious beliefs, or biometric data (we do not intentionally collect this data unless necessary and with explicit consent).</li>
              <li><strong>User</strong>: Any individual or entity accessing the Platform, including “Kitchen Owners” (those listing kitchens) and “Food Entrepreneurs” (those booking kitchens).</li>
              <li><strong>Processing</strong>: Any operation performed on personal data, including collection, storage, use, disclosure, and deletion.</li>
              <li><strong>Data Controller</strong>: CulinaryStart B.V., registered at [Insert Company Address], KVK Number [Insert KVK Number], responsible for determining the purposes and means of processing personal data.</li>
              <li><strong>Data Processor</strong>: Third-party service providers acting on our behalf to process personal data (e.g., payment processors, hosting providers).</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. Personal Data We Collect</h2>
            <p className="mb-4">We collect personal data from you directly, automatically through your use of the Platform, and from third-party sources (with your consent or as permitted by law). Below is a detailed breakdown of the data collected:</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.1 Data Collected Directly from You</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Account Registration Data</strong>:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>For all Users: Full name, email address, phone number, password (hashed), and language preference (Dutch/English).</li>
                  <li>For Kitchen Owners: Business name, KVK registration number, NVWA registration details, tax ID (VAT number), kitchen address, contact person details, and bank account information (for payouts).</li>
                  <li>For Food Entrepreneurs: Business name (if applicable), cuisine type, certifications (e.g., HACCP, organic), equipment preferences, and billing address.</li>
                </ul>
              </li>
              <li><strong>Booking & Transaction Data</strong>: Booking details (date, time, kitchen location, duration, number of users), Payment information (credit card details, iDEAL account info, PayPal ID – processed by third-party payment providers, we do not store full payment card data), Invoicing data (billing address, tax details, transaction IDs).</li>
              <li><strong>Profile & Listing Data</strong>:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>For Kitchen Owners: Kitchen photos/videos, equipment lists, pricing structures, availability calendars, cancellation policies, and descriptions of services (e.g., storage, cleaning).</li>
                  <li>For Food Entrepreneurs: Profile photos, business descriptions, customer reviews, and favorite kitchens.</li>
                </ul>
              </li>
              <li><strong>Communications Data</strong>: Content of messages sent via the Platform’s in-app chat (between Users), email correspondence with our support team, and feedback provided through surveys or forms.</li>
              <li><strong>Consent Data</strong>: Records of your consents (e.g., marketing preferences, data sharing with partners).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.2 Data Collected Automatically</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><strong>Usage Data</strong>: Device information (model, operating system, browser type, IP address, unique device identifiers), Access logs (pages visited, time spent on the Platform, search queries, filter usage, and booking history), Location data (approximate or precise, depending on your device settings) to enable “nearby kitchens” searches and location-based filters (you can disable location services in your device settings).</li>
              <li><strong>Cookies & Similar Technologies</strong>: Session cookies (temporary, deleted when you close your browser) to manage your login session, Persistent cookies (remain on your device) to remember your preferences (e.g., language, saved filters) and track usage for analytics, Third-party cookies (e.g., from Google Analytics, social media plugins) to measure Platform performance and deliver targeted ads (see Section 6 for cookie controls).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.3 Data Collected from Third Parties</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Payment Processors</strong>: Transaction status, payment confirmation, and fraud detection data (from Stripe, Adyen, PayPal, or iDEAL).</li>
              <li><strong>Identity Verification Providers</strong>: Data to verify your identity (e.g., KVK registration, NVWA certifications) to comply with legal requirements.</li>
              <li><strong>Partners</strong>: Data from our authorized partners (e.g., culinary schools, food suppliers) if you participate in joint programs (e.g., workshops, ingredient sourcing) – only with your explicit consent.</li>
              <li><strong>Social Media Platforms</strong>: If you log in via Google or Apple SSO, we collect your name, email address, and profile photo (as shared by the social media provider, subject to their privacy policies).</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. Legal Basis for Processing Personal Data</h2>
            <p className="mb-4">Under GDPR and Dutch law, we process your personal data only if we have a valid legal basis. The legal bases for our processing are:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li><strong>Performance of a Contract</strong>: To fulfill our obligations under the user agreement (e.g., processing bookings, facilitating payments, providing access to kitchens).</li>
              <li><strong>Compliance with Legal Obligations</strong>: To meet regulatory requirements (e.g., KVK/NVWA registration, tax reporting, food safety compliance, anti-money laundering checks).</li>
              <li><strong>Legitimate Interests</strong>: To operate and improve the Platform, prevent fraud, ensure safety, and provide personalized services (e.g., analytics, troubleshooting, enforcing our terms of service) – provided your interests and fundamental rights do not override our legitimate interests.</li>
              <li><strong>Explicit Consent</strong>: For processing activities that require your permission (e.g., sending marketing communications, sharing data with non-essential partners, using location data for non-essential features). You can withdraw consent at any time (see Section 10).</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. How We Use Your Personal Data</h2>
            <p className="mb-4">We use your personal data for the following purposes, based on the legal bases outlined above:</p>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.1 Core Platform Functionality</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Facilitate kitchen bookings and transactions (match Kitchen Owners with Food Entrepreneurs, process payments, send booking confirmations).</li>
              <li>Manage user accounts (allow login, profile updates, and access to personalized features).</li>
              <li>Enable communication between Users (in-app messaging, booking-related notifications).</li>
              <li>Provide customer support (respond to inquiries, resolve disputes, address technical issues).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.2 Platform Improvement & Optimization</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Analyze usage patterns to improve the Platform’s design, functionality, and user experience (e.g., optimizing search filters, adding popular equipment options).</li>
              <li>Test new features and updates (with a subset of Users, where applicable).</li>
              <li>Conduct surveys and gather feedback to enhance our services.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.3 Safety & Security</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Verify user identities (to prevent fraud, unauthorized access, and non-compliant listings).</li>
              <li>Monitor and detect suspicious activity (e.g., fraudulent bookings, spam, or violations of our terms of service).</li>
              <li>Enforce our policies (e.g., cancellation rules, food safety compliance) and protect the rights, property, or safety of CulinaryStart, Users, and third parties.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.4 Marketing & Promotions (With Consent)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Send you marketing communications (emails, push notifications) about new features, special offers, workshops, and partner promotions – only if you have opted in.</li>
              <li>Deliver targeted ads (on the Platform or third-party sites) based on your usage data (e.g., kitchen type preferences, booking history) – you can opt out of targeted ads (see Section 6).</li>
              <li>Share your data with partners for joint marketing activities (e.g., culinary school workshops) – only with your explicit consent.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.5 Legal & Administrative Purposes</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Comply with tax, accounting, and regulatory requirements (e.g., providing data to KVK, NVWA, or tax authorities).</li>
              <li>Defend against legal claims (e.g., sharing data with legal counsel in the event of a dispute).</li>
              <li>Maintain records for business operations (e.g., booking history, financial transactions).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.6 Aggregated & Anonymized Data Use</h3>
            <p className="mb-2">We may aggregate or anonymize your personal data (so it no longer identifies you) to:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Generate industry reports (e.g., “Top Kitchen Types in Amsterdam”).</li>
              <li>Share with partners or investors for market analysis.</li>
              <li>Improve our services (e.g., identifying peak booking times).</li>
            </ul>
            <p className="mb-4">Aggregated/anonymized data is not subject to this Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">5. Who We Share Your Personal Data With</h2>
            <p className="mb-4">We do not sell your personal data to third parties for marketing purposes. We share your data only with the following categories of recipients, in compliance with applicable law:</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.1 Service Providers (Data Processors)</h3>
            <p className="mb-2">We engage trusted third-party service providers to assist with Platform operations. These providers are contractually obligated to process your data only as directed by us and to implement appropriate security measures:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Payment Processors</strong>: Stripe, Adyen, PayPal, and iDEAL (to process payments, store payment details securely, and prevent fraud).</li>
              <li><strong>Hosting & Cloud Services</strong>: AWS, Azure (to store data and host the Platform).</li>
              <li><strong>Communication Tools</strong>: SendGrid (email notifications), Twilio (SMS alerts), and in-app chat providers.</li>
              <li><strong>Analytics & Marketing Tools</strong>: Google Analytics (usage tracking), Facebook Pixel (targeted ads) – see Section 6 for opt-outs.</li>
              <li><strong>Identity Verification Providers</strong>: Services to verify KVK/NVWA registrations and business credentials.</li>
              <li><strong>Legal & Accounting Partners</strong>: Lawyers, accountants, and auditors (to comply with legal and financial obligations).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.2 Other Users</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Kitchen Owners</strong>: Food Entrepreneurs’ name, business name, contact details (limited to booking-related communications), and booking details (to fulfill the booking).</li>
              <li><strong>Food Entrepreneurs</strong>: Kitchen Owners’ business name, kitchen address, contact details (limited to booking-related communications), and listing information (equipment, availability).</li>
              <li><strong>Reviews</strong>: User-generated reviews (including your name and profile photo) are visible to other Users on the Platform (you can delete your reviews at any time).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.3 Partners (With Consent)</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Food Suppliers</strong>: Sligro Food Group (to facilitate ingredient sourcing for your bookings).</li>
              <li><strong>Culinary Schools</strong>: Hotelschool The Hague (to share workshop opportunities or internship placements).</li>
              <li><strong>Food Delivery Services</strong>: Thuisbezorgd.nl (to integrate your kitchen with delivery platforms, if you opt in).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.4 Legal & Regulatory Authorities</h3>
            <p className="mb-4">We may disclose your personal data if required by law (e.g., a court order, subpoena, or request from NVWA, KVK, or tax authorities) or to protect our legal rights, safety, or the safety of others.</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.5 Business Transfers</h3>
            <p className="mb-4">In the event of a merger, acquisition, sale of assets, or bankruptcy, your personal data may be transferred to the acquiring entity – we will notify you of such a transfer and ensure the new entity complies with this Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">6. Cookies & Similar Technologies</h2>
            <p className="mb-4">We use cookies and similar technologies (e.g., web beacons, SDKs) to enhance your experience on the Platform. Below is a breakdown of cookie types and how to control them:</p>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.1 Cookie Types</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Necessary Cookies</strong>: Required for the Platform to function (e.g., managing login sessions, processing bookings). You cannot opt out of these cookies (disabling them will prevent you from using core features).</li>
              <li><strong>Functional Cookies</strong>: Remember your preferences (e.g., language, saved filters, favorite kitchens) to personalize your experience.</li>
              <li><strong>Analytics Cookies</strong>: Track usage data (e.g., pages visited, search queries) to improve the Platform (e.g., Google Analytics).</li>
              <li><strong>Marketing Cookies</strong>: Deliver targeted ads (e.g., Facebook Pixel, LinkedIn Ads) and measure the effectiveness of marketing campaigns.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.2 Cookie Controls</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Website</strong>: You can manage cookie preferences by clicking the “Cookie Settings” button on the Platform’s homepage. You can also disable cookies in your browser settings (note: disabling necessary cookies will limit functionality).</li>
              <li><strong>Mobile App</strong>: You can disable non-essential cookies in the app’s “Settings” > “Privacy” > “Cookie Preferences.”</li>
              <li><strong>Third-Party Ads</strong>: You can opt out of targeted ads from third parties by visiting the European Interactive Digital Advertising Alliance (EDAA) opt-out page (https://youronlinechoices.com/) or adjusting your device’s ad settings.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.3 Cookie Retention</h3>
            <p className="mb-4">Necessary cookies are retained for the duration of your session. Functional, analytics, and marketing cookies are retained for up to 24 months (or as required by law).</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">7. Data Storage & Security</h2>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.1 Data Storage Locations</h3>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Your personal data is stored on secure servers in the European Union (EU) or European Economic Area (EEA) (e.g., AWS data centers in Ireland, Azure data centers in the Netherlands) to comply with GDPR.</li>
              <li>If we transfer data outside the EU/EEA (e.g., to a service provider in the U.S.), we ensure the transfer is compliant with GDPR by using:
                 <ul className="list-circle pl-5 mt-1">
                    <li>EU-U.S. Data Privacy Framework (DPF) or Swiss-U.S. DPF certified providers.</li>
                    <li>Standard Contractual Clauses (SCCs) approved by the European Commission.</li>
                 </ul>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.2 Security Measures</h3>
            <p className="mb-2">We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Encryption of data in transit (SSL/TLS) and at rest (AES-256 encryption).</li>
              <li>Secure password storage (hashing with salt, no plain-text storage).</li>
              <li>Access controls (role-based permissions for employees and service providers).</li>
              <li>Regular security audits, vulnerability assessments, and penetration testing.</li>
              <li>Employee training on data protection and security best practices.</li>
            </ul>
            <p className="mb-4">Despite these measures, no security system is 100% secure. We cannot guarantee absolute security, but we will notify you and relevant authorities of any data breach that is likely to result in a high risk to your rights and freedoms (as required by GDPR).</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.3 Data Retention</h3>
            <p className="mb-2">We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, or as required by law:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li><strong>Account Data</strong>: Retained for as long as your account is active. If you delete your account, we retain data for 7 years to comply with tax, legal, and regulatory requirements (after which it is anonymized or deleted).</li>
              <li><strong>Booking & Transaction Data</strong>: Retained for 7 years (to comply with accounting and tax laws).</li>
              <li><strong>Marketing Data</strong>: Retained until you opt out of marketing communications (after which we delete or anonymize your data).</li>
              <li><strong>Cookies</strong>: Retained for up to 24 months (as outlined in Section 6).</li>
            </ul>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">8. Your Data Protection Rights</h2>
            <p className="mb-4">Under GDPR and Dutch law, you have the following rights regarding your personal data. To exercise these rights, contact our Data Protection Officer (DPO) at <a href="mailto:privacy@culinarystart.nl" className="text-primary-700 underline">privacy@culinarystart.nl</a> (see Section 13):</p>
            <ul className="list-disc pl-5 space-y-1 mb-6">
              <li><strong>Right to Access</strong>: Request a copy of the personal data we hold about you, including details of how it is processed.</li>
              <li><strong>Right to Rectification</strong>: Request correction of inaccurate or incomplete personal data.</li>
              <li><strong>Right to Erasure (“Right to be Forgotten”)</strong>: Request deletion of your personal data, provided we are not required to retain it by law (e.g., tax records).</li>
              <li><strong>Right to Restriction of Processing</strong>: Request that we limit processing of your data (e.g., if you dispute the accuracy of the data).</li>
              <li><strong>Right to Data Portability</strong>: Request a copy of your personal data in a structured, machine-readable format (e.g., CSV) to transfer to another data controller.</li>
              <li><strong>Right to Object</strong>: Object to processing of your data based on our legitimate interests (e.g., marketing, analytics) – we will cease processing unless we have compelling legitimate grounds.</li>
              <li><strong>Right to Withdraw Consent</strong>: Withdraw any consent you have given (e.g., marketing, data sharing with partners) at any time – this does not affect the lawfulness of processing before withdrawal.</li>
              <li><strong>Right to Lodge a Complaint</strong>: File a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens, AP) if you believe we have violated your data protection rights (https://www.autoriteitpersoonsgegevens.nl/).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">8.1 Exercise of Rights</h3>
            <p className="mb-2">To exercise your rights, please submit a written request to our DPO (see Section 13) with:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Your full name, email address, and phone number (to verify your identity).</li>
              <li>Details of the right you wish to exercise (e.g., “Request for access to my personal data”).</li>
            </ul>
            <p className="mb-4">We will respond to your request within 1 month (extendable by 2 months for complex requests) and will notify you of any extension. We may charge a reasonable fee for excessive or unfounded requests.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">9. Children’s Privacy</h2>
            <p className="mb-6">The Platform is not intended for use by children under the age of 16. We do not intentionally collect personal data from children under 16. If we become aware that we have collected data from a child under 16 without parental/guardian consent, we will delete the data immediately. If you believe a child has provided data to us, contact our DPO (Section 13).</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">10. Third-Party Links & Services</h2>
            <p className="mb-6">The Platform may contain links to third-party websites or services (e.g., partner food suppliers, social media platforms). This Privacy Policy does not apply to third-party sites – we are not responsible for their privacy practices. We recommend reviewing the privacy policies of any third-party sites you visit.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time to reflect changes in law, technology, or our business practices. We will notify you of material changes by:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>Posting the updated Policy on the Platform (with a new “Last Updated” date).</li>
              <li>Sending an email to your registered email address (for account holders).</li>
              <li>Displaying a pop-up notification on the Platform (for active Users).</li>
            </ul>
            <p className="mb-6">Material changes will take effect 14 days after notification. Your continued use of the Platform after the effective date constitutes acceptance of the updated Policy. We encourage you to review this Policy regularly.</p>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">12. Data Protection Officer (DPO)</h2>
            <p className="mb-4">For questions, concerns, or requests related to this Privacy Policy or your personal data, contact our DPO:</p>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 mb-6">
              <p><strong>Name:</strong> [Insert DPO Name]</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@culinarystart.nl" className="text-primary-700 underline">privacy@culinarystart.nl</a></p>
              <p><strong>Address:</strong> [Insert Company Address]</p>
            </div>

            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">13. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy or our data processing practices, contact us at:</p>
            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200 mb-6">
              <p><strong>CulinaryStart B.V.</strong></p>
              <p>[Insert Company Address]</p>
              <p><strong>Email:</strong> <a href="mailto:support@culinarystart.nl" className="text-primary-700 underline">support@culinarystart.nl</a></p>
              <p><strong>Phone:</strong> +31 6 80218178</p>
              <p><strong>KVK Number:</strong> [Insert KVK Number]</p>
              <p><strong>VAT Number:</strong> [Insert VAT Number]</p>
            </div>

            <hr className="my-12 border-stone-200" />
            
            <p className="text-sm text-stone-500 italic">
              By using the CulinaryStart Platform, you confirm that you have read and understood this Privacy Policy and agree to the collection, use, and disclosure of your personal data as described herein.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};