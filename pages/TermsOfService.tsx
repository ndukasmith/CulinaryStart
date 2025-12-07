import React from 'react';
import { BackButton } from '../components/BackButton';
import { Link } from 'react-router-dom';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-stone-200 mt-6 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">Terms of Service for CulinaryStart</h1>
          
          <div className="text-sm text-stone-500 mb-8 p-4 bg-stone-50 rounded-lg border border-stone-100 flex flex-col sm:flex-row sm:gap-8">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> [Insert Date]</p>
          </div>

          <div className="prose prose-stone max-w-none text-stone-600">
            <p className="mb-4">
              These Terms of Service (“Terms”) constitute a legally binding agreement between CulinaryStart B.V. (“CulinaryStart,” “we,” “us,” or “our”) and you (“User,” “you”)—whether you access the CulinaryStart website (www.culinarystart.nl), mobile application (collectively, the “Platform”), register an account, list a kitchen (“Kitchen Owner”), book a kitchen (“Food Entrepreneur”), or otherwise interact with our services.
            </p>
            <p className="mb-8">
              By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, our <Link to="/privacy" className="text-primary-700 underline">Privacy Policy</Link>, Cookie Policy, and any additional rules, guidelines, or policies referenced herein or posted on the Platform (collectively, the “Agreements”). If you do not agree to the Agreements, you may not access or use the Platform or our services.
            </p>

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Account</strong>: A registered profile on the Platform, linked to a unique User (either a Kitchen Owner or Food Entrepreneur), verified through mandatory identity, background, and financial checks.</li>
                <li><strong>Booking</strong>: A binding reservation of a listed kitchen by a Food Entrepreneur, confirmed via the Platform following completion of all verification requirements.</li>
                <li><strong>Content</strong>: All materials uploaded, posted, or transmitted through the Platform, including text, photos, videos, reviews, messages, and listing details.</li>
                <li><strong>Food Entrepreneur</strong>: A User who registers an Account to book or use kitchens listed on the Platform, subject to mandatory background, financial, and business verification.</li>
                <li><strong>Kitchen Owner</strong>: A User who registers an Account to list kitchens, equipment, or related services on the Platform for booking by Food Entrepreneurs, subject to verification of legal ownership, insurance, and compliance with all Dutch regulations.</li>
                <li><strong>Platform</strong>: The CulinaryStart website, mobile application, and all associated services, features, and tools, including verification systems, audit trails, and dispute resolution mechanisms.</li>
                <li><strong>Fees</strong>: All charges associated with using the Platform, including booking fees, transaction fees, membership fees, verification fees, security deposits, and penalty fees (as detailed in Section 7).</li>
                <li><strong>Third-Party Services</strong>: External tools, providers, or partners integrated with the Platform (e.g., payment processors, background check providers, insurance carriers, law enforcement liaison services).</li>
                <li><strong>Security Deposit</strong>: A refundable or non-refundable amount held by CulinaryStart to cover potential damages, theft, or breaches of these Terms by a Food Entrepreneur (as specified in Section 7.5).</li>
                <li><strong>Verification Materials</strong>: Documentation required to register an Account, including but not limited to government-issued ID, business licenses, bank statements, tax records, insurance policies, and consent for background checks.</li>
            </ul>

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">2. Eligibility & Mandatory Account Verification (Non-Negotiable)</h2>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.1 Eligibility</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>You must be at least 21 years old to use the Platform (18 years old is insufficient due to the high-risk nature of property access). If acting on behalf of a business, you warrant that you are a senior executive or authorized signatory of the business, with full legal authority to bind the business to these Terms, and that the business has been in operation for at least 6 months (or provide a personal guarantee from a creditworthy individual if a startup).</li>
                <li>Kitchen Owners must: (i) hold valid legal ownership or exclusive operating rights to the kitchen property (evidenced by deed, lease agreement, or notarized authorization); (ii) possess active KVK registration, NVWA food safety certification (HACCP-compliant), fire safety certification, and all required municipal permits (e.g., catering license, environmental permits); (iii) maintain comprehensive insurance coverage (as detailed in Section 8); and (iv) pass a property safety audit conducted by CulinaryStart or an authorized third party.</li>
                <li>Food Entrepreneurs must: (i) provide proof of identity, residency, and legal right to work/operate in the Netherlands; (ii) submit to and pass mandatory background checks (including criminal history, credit check, and fraud database screening); (iii) provide financial verification (bank statements, tax returns, or proof of sufficient funds); and (iv) if operating a business, provide KVK registration, business insurance, and any required culinary or food safety certifications.</li>
                <li>You may not use the Platform if: (i) you have been convicted of theft, arson, fraud, property damage, or any crime involving moral turpitude; (ii) you have a history of violating rental agreements, defaulting on payments, or causing property damage; (iii) you have been banned or suspended by CulinaryStart or any similar platform; (iv) you lack the financial means to cover potential damages or fees; or (v) you are prohibited by law from accessing our services.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.2 Mandatory Verification Process (No Exceptions)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Identity Verification</strong>: All Users must submit a government-issued photo ID (passport, Dutch ID card, or residence permit) for facial recognition matching and validation through a certified third-party provider (e.g., Jumio, Onfido). CulinaryStart reserves the right to reject any ID deemed fraudulent, expired, or unreadable.</li>
                <li><strong>Background Checks</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Food Entrepreneurs: Mandatory criminal background check (covering the Netherlands and any country where the User has resided for 6+ months in the past 10 years), credit check (to assess financial responsibility), and screening against global fraud databases (e.g., Interpol, Dutch Fraud Authority). Users with felony convictions related to theft, arson, vandalism, fraud, or assault will be permanently barred from the Platform. Users with poor credit (e.g., unpaid debts, bankruptcies within the past 5 years) may be required to post an additional security deposit or denied access.</li>
                        <li>Kitchen Owners: Background check for the business owner/authorized signatory (same criteria as Food Entrepreneurs) and verification of business standing (no active bankruptcies, tax liens, or legal judgments).</li>
                    </ul>
                </li>
                <li><strong>Financial Verification</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Food Entrepreneurs: Submit 3 months of bank statements (personal or business) to demonstrate sufficient funds to cover booking fees, security deposits, and potential damages. Alternatively, provide a letter of credit from a recognized bank or a personal guarantee from a creditworthy co-signer.</li>
                        <li>Kitchen Owners: Submit proof of business bank account (in the business name), 6 months of financial statements, and tax returns to verify financial stability and ability to maintain the kitchen.</li>
                    </ul>
                </li>
                <li><strong>Business & Compliance Verification</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Kitchen Owners: Provide copies of KVK registration, NVWA certification, fire safety inspection report, municipal permits, lease agreement (if applicable), and proof of insurance (see Section 8). CulinaryStart may conduct an on-site or virtual inspection of the kitchen to verify compliance with safety and listing accuracy.</li>
                        <li>Food Entrepreneurs: Provide KVK registration (if a business), food safety certifications (e.g., HACCP, food handler’s permit), and any required licenses for their culinary activities (e.g., alcohol license if serving alcohol).</li>
                    </ul>
                </li>
                <li><strong>Ongoing Re-Verification</strong>: CulinaryStart reserves the right to re-verify any User’s information at any time (e.g., annually, following a dispute, or if suspicious activity is detected). Failure to complete re-verification within 7 days will result in Account suspension.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">2.3 Account Security & Responsibility</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>You are solely responsible for safeguarding your Account credentials (username, password, biometric data, two-factor authentication codes). You agree to enable two-factor authentication (2FA) for all Account access, and to notify CulinaryStart immediately (within 24 hours) of any unauthorized access or suspected breach. CulinaryStart is not liable for damages resulting from your failure to protect your credentials, but will assist in investigating breaches where evidence of negligence is not present.</li>
                <li>Your Account is non-transferable, non-sharable, and tied exclusively to your verified identity. You may not allow any third party (including employees, contractors, or family members) to use your Account without prior written approval from CulinaryStart, and any such approval will require the third party to complete the same verification process. Unauthorized Account sharing will result in immediate termination and potential legal action.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">3. User Obligations & Strict Conduct Rules (Zero Tolerance for Misconduct)</h2>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">3.1 General Conduct (Breach Results in Immediate Termination & Liability)</h3>
            <p className="mb-2">You agree to use the Platform only for lawful, authorized purposes and to comply with all Dutch laws, regulations, and these Terms. You acknowledge that any violation of these conduct rules will result in: (i) permanent Account termination; (ii) forfeiture of all security deposits; (iii) liability for all damages, fees, and legal costs; (iv) reporting to law enforcement; and (v) inclusion in a shared industry blacklist (preventing access to similar platforms).</p>
            <p className="mb-2">You may NOT:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Engage in any criminal activity, including but not limited to theft, arson, vandalism, fraud, assault, or unauthorized use of the kitchen for illegal purposes (e.g., drug production, unlicensed alcohol sales).</li>
                <li>Damage, destroy, or misuse any kitchen equipment, property, or facilities (including but not limited to intentional or negligent damage to appliances, fixtures, walls, or inventory).</li>
                <li>Steal or misappropriate any property (including kitchen equipment, tools, ingredients, or the Kitchen Owner’s personal/business items) or intellectual property (e.g., recipes, trade secrets).</li>
                <li>Violate the Kitchen Owner’s rules or the terms of the booking (e.g., exceeding maximum occupancy, using the kitchen for unapproved purposes, accessing restricted areas).</li>
                <li>Provide false, misleading, or fraudulent information during verification or while using the Platform (e.g., fake ID, doctored bank statements, misrepresentation of business activities).</li>
                <li>Interfere with the Platform’s security or functionality (e.g., hacking, scraping, using bots, or attempting to bypass verification checks).</li>
                <li>Harass, threaten, or harm the Kitchen Owner, their staff, or other Users.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">3.2 Food Entrepreneur-Specific Obligations (Strict Liability for Damages)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>You warrant that you and all individuals accessing the kitchen under your booking (employees, contractors, etc.) have completed the Platform’s mandatory safety training (provided during Account registration) and are familiar with kitchen safety protocols (e.g., fire prevention, equipment use, emergency procedures).</li>
                <li>You are strictly liable for any and all damage to the kitchen, equipment, or property caused by you or anyone under your supervision during the booking period. This includes but is not limited to: (i) equipment malfunctions due to improper use; (ii) fire, water damage, or structural damage; (iii) theft or loss of the Kitchen Owner’s property; and (iv) damage to neighboring properties or third parties caused by your actions.</li>
                <li>You must: (i) adhere to the exact dates, times, and duration of the booking (no extensions without prior written approval from the Kitchen Owner and CulinaryStart); (ii) limit access to the kitchen to only those individuals disclosed during booking (all of whom must be verified by CulinaryStart); (iii) store all personal/business items in designated areas and remove them entirely at the end of the booking; (iv) comply with all food safety, hygiene, and waste disposal requirements (as per NVWA and the Kitchen Owner’s rules); (v) report any damage, theft, or safety hazards to the Kitchen Owner and CulinaryStart immediately (within 1 hour of discovery); and (vi) cooperate fully with investigations into any incidents.</li>
                <li>You may not: (i) use the kitchen for residential purposes, events open to the public, or activities unrelated to culinary production (unless explicitly approved in writing); (ii) bring hazardous materials, weapons, or illegal substances into the kitchen; (iii) tamper with security systems (e.g., cameras, alarms, locks); (iv) disable or modify kitchen equipment without the Kitchen Owner’s written consent; or (v) leave the kitchen unattended during the booking period.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">3.3 Kitchen Owner-Specific Obligations (Strict Compliance & Liability)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>You warrant and represent that: (i) the kitchen is in full compliance with all Dutch laws and regulations (food safety, fire safety, zoning, accessibility, environmental); (ii) all equipment is regularly inspected, maintained, and in safe working order (with documentation of maintenance provided to CulinaryStart upon request); (iii) the kitchen is equipped with functional safety devices (e.g., fire extinguishers, smoke detectors, first-aid kits, sprinkler systems) that meet Dutch safety standards; (iv) the listing is 100% accurate (no misrepresentation of equipment, size, location, or amenities); and (v) you have disclosed all known hazards or limitations (e.g., construction nearby, equipment restrictions) in the listing.</li>
                <li>You are responsible for: (i) conducting regular security checks (e.g., locking doors, monitoring cameras) before and after bookings; (ii) providing clear access instructions and emergency contact information to Food Entrepreneurs; (iii) responding to emergency requests within 30 minutes; (iv) maintaining accurate inventory of all kitchen equipment and personal property; and (v) reporting any theft, damage, or suspicious activity to CulinaryStart and law enforcement within 24 hours.</li>
                <li>You must maintain the following insurance coverage (with limits no lower than the amounts specified, and CulinaryStart named as an additional insured): (i) Commercial General Liability Insurance (minimum €2,000,000 per occurrence) covering bodily injury, property damage, and personal injury; (ii) Property Insurance (covering the kitchen structure, equipment, and inventory for theft, fire, vandalism, and other perils, with no deductible exceeding €1,000); (iii) Food Safety Liability Insurance (minimum €1,000,000 per occurrence) covering foodborne illnesses or contamination; and (iv) Cyber Liability Insurance (minimum €500,000) if collecting or storing User data on-site. You must provide updated insurance certificates to CulinaryStart annually or upon policy renewal. Failure to maintain adequate insurance will result in immediate listing removal and Account suspension.</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">4. Listings & Bookings (Auditable, Secure, and Liability-Mitigated)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.1 Listing Guidelines for Kitchen Owners (100% Accuracy Required)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Listings must include: (i) high-resolution photos/videos of the entire kitchen (no hidden areas); (ii) a detailed inventory of all equipment (make, model, condition, and functionality); (iii) exact dimensions of the kitchen and workspace; (iv) all safety features (fire extinguishers, alarms, first-aid kits); (v) accessibility information; (vi) strict rules for use (e.g., no open flames, maximum occupancy); (vii) cancellation policy (non-negotiable terms per Section 4.3); (viii) security deposit amount (minimum €500, or 20% of the booking total, whichever is higher); and (ix) proof of all certifications and permits.</li>
                <li>You must update the listing immediately (within 24 hours) if: (i) equipment breaks or is replaced; (ii) safety features are modified; (iii) rules or pricing change; or (iv) the kitchen becomes non-compliant with any regulations. Failure to update listings will result in listing removal, Account suspension, and liability for any damages caused by misrepresentation.</li>
                <li>You may not: (i) list a kitchen you do not own or have exclusive rights to operate; (ii) hide defects, hazards, or non-compliance issues; (iii) set misleading pricing (all fees must be disclosed upfront, excluding only CulinaryStart’s transaction fees); or (iv) discriminate against Food Entrepreneurs based on race, gender, religion, national origin, disability, or any other protected characteristic (violations will result in permanent termination and reporting to anti-discrimination authorities).</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.2 Booking Process & Security Measures</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Food Entrepreneurs may only initiate a booking after completing all verification steps and posting the required security deposit. Bookings are not confirmed until: (i) the security deposit is processed; (ii) the Kitchen Owner approves (or the Platform auto-approves per listing settings); and (iii) the Food Entrepreneur acknowledges and signs a digital “Liability Waiver & Code of Conduct” (via the Platform).</li>
                <li>All bookings include an audit trail: (i) time-stamped access logs (when the Food Entrepreneur enters/exits the kitchen, if access is via keycard or digital lock); (ii) communication logs (all messages between User and Kitchen Owner); (iii) payment records; and (iv) post-booking inspection reports (submitted by the Kitchen Owner within 24 hours of booking end).</li>
                <li>CulinaryStart may cancel a booking at any time if: (i) suspicious activity is detected (e.g., mismatched ID, fraudulent payment); (ii) the Food Entrepreneur’s verification status changes (e.g., new criminal charge); (iii) the Kitchen Owner’s insurance or compliance lapses; or (iv) there is a reasonable belief the booking may result in damage or misconduct.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">4.3 Booking Modifications, Cancellations, and Penalties</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Modifications</strong>: Food Entrepreneurs may request modifications (date, time, duration) only if: (i) the request is made at least 72 hours before the booking start time; (ii) the Kitchen Owner approves; and (iii) the Food Entrepreneur pays any additional fees (e.g., price increases). No modifications are allowed within 72 hours of the booking start time, except in emergency situations (as determined solely by CulinaryStart).</li>
                <li><strong>Cancellations by Food Entrepreneurs</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Cancellation 14+ days before booking: Full refund of booking fee (less non-refundable transaction fee), full refund of security deposit.</li>
                        <li>Cancellation 7-13 days before booking: 50% refund of booking fee (less transaction fee), full refund of security deposit.</li>
                        <li>Cancellation 1-6 days before booking: No refund of booking fee, 50% refund of security deposit.</li>
                        <li>Cancellation less than 24 hours before booking or no-show: No refund of booking fee or security deposit. Security deposit may be used to cover lost revenue for the Kitchen Owner.</li>
                    </ul>
                </li>
                <li><strong>Cancellations by Kitchen Owners</strong>: Kitchen Owners may only cancel a booking in extreme circumstances (e.g., emergency repairs, natural disaster, government order). Cancellations require: (i) immediate notification to the Food Entrepreneur and CulinaryStart; (ii) a full refund of all fees and security deposit to the Food Entrepreneur; and (iii) CulinaryStart’s assistance in finding an alternative kitchen (if available). Kitchen Owners who cancel without valid cause will be charged a penalty equal to 100% of the booking fee, and may face Account suspension.</li>
                <li><strong>No-Shows</strong>: Food Entrepreneurs who fail to appear for a booking (without prior cancellation) will forfeit all fees and security deposits, be banned from future bookings for 6 months, and have their Account flagged. Repeat no-shows will result in permanent termination.</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">5. Security Deposits & Liability for Damages (Full Financial Accountability)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.1 Security Deposit Requirements (Non-Negotiable)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>All Food Entrepreneurs must post a security deposit before confirming a booking. The deposit amount is set by the Kitchen Owner (minimum €500) or CulinaryStart (if the Kitchen Owner’s amount is deemed insufficient), and is based on: (i) the value of kitchen equipment; (ii) booking duration; (iii) the Food Entrepreneur’s verification status (e.g., new Users may be required to post a higher deposit); and (iv) historical data (e.g., Users with prior damage claims will have higher deposits).</li>
                <li>Security deposits are held by CulinaryStart in a segregated trust account (separate from operational funds) and are not accessible to either User until the booking is completed and any damage claims are resolved.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.2 Damage Claims & Deposit Forfeiture</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Reporting Damage</strong>: Kitchen Owners must inspect the kitchen within 24 hours of the booking end and submit a damage claim (with photo/video evidence, inventory lists, and repair estimates) via the Platform. Failure to report damage within 24 hours will result in forfeiture of the right to claim damages.</li>
                <li><strong>Investigation</strong>: CulinaryStart will investigate all damage claims within 3 business days, reviewing evidence from both Users, audit trails, and any security footage. The burden of proof lies with the Kitchen Owner to demonstrate the damage was caused by the Food Entrepreneur.</li>
                <li><strong>Deposit Disbursement</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>If no damage is reported: Security deposit is refunded to the Food Entrepreneur within 5 business days of booking end.</li>
                        <li>If damage is confirmed: CulinaryStart will deduct the cost of repairs/replacement from the security deposit and disburse the funds to the Kitchen Owner. If the deposit is insufficient to cover damages, the Food Entrepreneur is liable for the remaining amount (see Section 5.3).</li>
                        <li>If the claim is disputed: CulinaryStart may hold the deposit until the dispute is resolved (via mediation, arbitration, or legal action).</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">5.3 Full Liability for Damages (No Limitations)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Food Entrepreneurs are fully, personally liable for any and all damages caused by their actions (or the actions of those under their supervision) during the booking period, including but not limited to: (i) repair or replacement of damaged equipment/fixtures; (ii) loss of inventory or personal property; (iii) cleaning fees (if the kitchen is left in an unacceptably dirty condition); (iv) lost revenue for the Kitchen Owner (e.g., if the kitchen is unusable due to damage); (v) legal fees and court costs; and (vi) third-party damages (e.g., damage to neighboring properties).</li>
                <li>CulinaryStart reserves the right to: (i) pursue collection of unpaid damages via third-party collection agencies; (ii) file a civil lawsuit against the Food Entrepreneur; (iii) report the debt to credit bureaus; and (iv) share the Food Entrepreneur’s information with law enforcement (if the damage constitutes a criminal offense).</li>
                <li>Kitchen Owners are liable for damages caused by: (i) defective equipment (if not disclosed in the listing); (ii) failure to maintain safety standards; (iii) misrepresentation of the kitchen; or (iv) negligence (e.g., failing to repair a broken fire extinguisher).</li>
            </ul>

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">6. Auditing & Monitoring (Full Transparency and Accountability)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.1 Platform Audits</h3>
            <p className="mb-4">CulinaryStart conducts regular audits of: (i) User accounts (to verify ongoing compliance with verification requirements); (ii) listings (to ensure accuracy and compliance); (iii) bookings (to detect fraud or misconduct); and (iv) payment records (to ensure proper disbursement of funds). Users must cooperate with all audits (providing additional documentation or access to the kitchen if requested) or face Account suspension.</p>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.2 Kitchen Monitoring</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Kitchen Owners may install security cameras (in public areas of the kitchen, not in restrooms or private spaces) provided: (i) the cameras are disclosed in the listing; (ii) Food Entrepreneurs are notified in writing before the booking; and (iii) footage is stored securely (encrypted, with access limited to the Kitchen Owner and CulinaryStart). Footage may be used to investigate damage claims, theft, or misconduct, and may be provided to law enforcement if required.</li>
                <li>CulinaryStart may require Kitchen Owners to share security footage (for up to 30 days after a booking) to resolve disputes. Failure to provide footage may result in the Kitchen Owner’s claim being denied.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">6.3 Transaction Audits</h3>
            <p className="mb-4">All payments, deposits, and disbursements are tracked in a secure, immutable ledger (blockchain-backed for maximum auditability). Users may request a copy of their transaction history at any time, and CulinaryStart will provide documentation for tax or legal purposes upon request.</p>

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">7. Fees, Payments, and Financial Accountability</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.1 Fee Structure (Transparent, Non-Negotiable)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li><strong>Transaction Fees</strong>: CulinaryStart charges a 12-15% transaction fee to Food Entrepreneurs (based on booking total) and an 8-10% transaction fee to Kitchen Owners (deducted from payouts). Fees are disclosed upfront at the time of booking/listing and are non-refundable (even if the booking is canceled).</li>
                <li><strong>Verification Fees</strong>: A one-time verification fee of €50 (Food Entrepreneurs) or €100 (Kitchen Owners) to cover the cost of background checks, identity verification, and compliance audits. This fee is non-refundable, even if the User is denied access to the Platform.</li>
                <li><strong>Security Deposit Fees</strong>: A non-refundable processing fee of €25 to cover the cost of holding and administering the security deposit.</li>
                <li><strong>Penalty Fees</strong>:
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Late cancellation by Food Entrepreneur (less than 24 hours): €200 penalty (in addition to forfeiting fees/deposit).</li>
                        <li>No-show: €300 penalty.</li>
                        <li>Unauthorized Account sharing: €500 penalty.</li>
                        <li>Misrepresentation in listing/verification: €1,000 penalty (plus liability for damages).</li>
                        <li>Damage to kitchen: Cost of repairs + 20% administrative fee.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.2 Payment Processing (Secure, Irrevocable)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Payments must be made via approved methods (iDEAL, Visa, Mastercard, PayPal, or bank transfer). Cash payments are strictly prohibited.</li>
                <li>Food Entrepreneurs must pay the full booking fee and security deposit at the time of booking. Payments are processed immediately and are irrevocable (except for approved refunds per Section 4.3).</li>
                <li>Kitchen Owners receive payouts (booking fee minus transaction fees) 7 business days after the booking end (to allow time for damage claims). Payouts are made to the verified business bank account only.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">7.3 Non-Payment & Default</h3>
            <p className="mb-4">Failure to pay fees, deposits, or damages will result in: (i) immediate Account suspension; (ii) forfeiture of any pending refunds; (iii) collection actions (including third-party agencies and legal action); (iv) reporting to credit bureaus; and (v) permanent ban from the Platform.</p>

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">8. Insurance Requirements (Mandatory, No Exceptions)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">8.1 Food Entrepreneur Insurance</h3>
            <p className="mb-4">Food Entrepreneurs must maintain: (i) General Liability Insurance (minimum €1,000,000 per occurrence) covering bodily injury and property damage; and (ii) Professional Liability Insurance (if providing catering or food services to third parties). Proof of insurance must be submitted during verification and renewed annually. Failure to maintain insurance will result in Account suspension.</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">8.2 Kitchen Owner Insurance (As Detailed in Section 3.3)</h3>
            <p className="mb-4">No exceptions to insurance requirements. Kitchen Owners who let their insurance lapse will have their listings removed immediately and may be held liable for all damages occurring during bookings.</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">8.3 CulinaryStart Insurance</h3>
            <p className="mb-4">CulinaryStart maintains a Platform Liability Insurance policy (minimum €5,000,000 per occurrence) to cover claims against the Platform (e.g., negligence in verification). This policy is in addition to User insurance and does not replace or limit User liability.</p>

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">9. Liability & Indemnification (Strict, Comprehensive)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">9.1 Limitation of CulinaryStart’s Liability</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>CulinaryStart acts as an intermediary between Users and does not own, operate, or control kitchens. To the maximum extent permitted by law, CulinaryStart is not liable for: (i) damages caused by Users (theft, arson, vandalism); (ii) injuries to persons or property resulting from use of the kitchen; (iii) breaches of contract between Users; (iv) equipment malfunctions (unless caused by CulinaryStart’s negligence); or (v) indirect, consequential, or punitive damages.</li>
                <li>CulinaryStart’s total liability for any claim (including negligence) shall not exceed the total amount paid by the User to CulinaryStart in the 12 months prior to the claim.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">9.2 Indemnification (Full Reimbursement)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>You agree to indemnify, defend, and hold harmless CulinaryStart, its affiliates, employees, directors, and partners from any and all claims, damages, liabilities, fines, penalties, and expenses (including reasonable legal fees) arising from: (i) your use of the Platform; (ii) your breach of these Terms; (iii) your misconduct (theft, damage, fraud); (iv) your failure to maintain insurance; (v) your violation of any laws; or (vi) claims by third parties (e.g., customers of the Food Entrepreneur, neighbors of the Kitchen Owner).</li>
                <li>This indemnification obligation survives termination of these Terms and your Account.</li>
            </ul>

            {/* Section 10 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">10. Termination & Consequences (Permanent, Far-Reaching)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">10.1 Termination by CulinaryStart</h3>
            <p className="mb-4">CulinaryStart may terminate or suspend your Account immediately (with or without notice) if: (i) you violate any provision of these Terms; (ii) you fail verification or re-verification; (iii) you engage in misconduct (theft, damage, fraud); (iv) you fail to pay fees or damages; (v) your insurance lapses; (vi) you are convicted of a relevant crime; or (vii) CulinaryStart determines your use of the Platform poses a risk to other Users or the business.</p>
            
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">10.2 Consequences of Termination</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Upon termination: (i) your right to use the Platform ceases immediately; (ii) all pending bookings are canceled (with fees/deposits forfeited per Section 4.3); (iii) you remain liable for all damages, fees, and obligations; (iv) your information is added to an industry blacklist (shared with similar platforms); (v) CulinaryStart may pursue legal action to recover unpaid amounts; and (vi) your data is retained in accordance with the Privacy Policy (for audit, legal, and law enforcement purposes).</li>
            </ul>

            {/* Section 11 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">11. Dispute Resolution & Legal Action (Efficient, Binding)</h2>
            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">11.1 Mandatory Mediation</h3>
            <p className="mb-4">All disputes between Users must first be submitted to mediation through CulinaryStart’s designated third-party mediator. Mediation is mandatory and must be completed within 30 days of the dispute being filed. Users agree to cooperate with mediation and to share all relevant evidence.</p>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">11.2 Arbitration (Binding, No Class Actions)</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>If mediation fails, all disputes shall be resolved through binding arbitration conducted in Amsterdam, Netherlands, in accordance with the Rules of the Netherlands Arbitration Institute (NAI). Arbitration shall be conducted in Dutch or English (at the User’s choice), and the decision of the arbitrator(s) shall be final and enforceable in any court of competent jurisdiction.</li>
                <li>Users waive their right to file a class action lawsuit or participate in a class action. All disputes must be resolved on an individual basis.</li>
            </ul>

            <h3 className="text-xl font-bold text-stone-900 mt-6 mb-3">11.3 Law Enforcement Cooperation</h3>
            <p className="mb-4">CulinaryStart reserves the right to report any criminal activity (theft, arson, fraud, vandalism) to Dutch law enforcement and to provide all relevant information (User data, audit trails, evidence) to assist in investigations and prosecutions.</p>

            {/* Section 12 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">12. Miscellaneous (Enforceable, Comprehensive)</h2>
            <ul className="list-disc pl-5 space-y-2 mb-6">
                <li><strong>Force Majeure</strong>: CulinaryStart is not liable for delays or failures to perform due to circumstances beyond our reasonable control (e.g., natural disasters, cyberattacks, government orders), but will notify Users promptly and take reasonable steps to mitigate impacts.</li>
                <li><strong>Severability</strong>: If any provision of these Terms is deemed invalid or unenforceable, the remaining provisions shall remain in full force and effect.</li>
                <li><strong>Waiver</strong>: Failure by CulinaryStart to enforce any provision of these Terms shall not constitute a waiver of that provision.</li>
                <li><strong>Assignment</strong>: You may not assign these Terms without CulinaryStart’s prior written consent. CulinaryStart may assign these Terms to a third party in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Notices</strong>: All notices must be in writing and sent via email (to support@culinarystart.nl for CulinaryStart, or your registered email address for you). Notices are deemed received 24 hours after sending.</li>
            </ul>

            {/* Section 13 */}
            <h2 className="text-2xl font-bold text-stone-900 mt-8 mb-4">13. Contact Us</h2>
            <p className="mb-4">If you have any questions, concerns, or complaints about these Terms or the Platform, contact us at:</p>
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
              By accessing or using the CulinaryStart Platform, you confirm that you have read, understood, and agreed to these Terms of Service—including all mandatory verification requirements, security deposit obligations, liability provisions, and zero-tolerance policies for theft, damage, and misconduct. You acknowledge that any breach of these Terms will result in severe consequences, including permanent Account termination, financial liability, and potential legal action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};