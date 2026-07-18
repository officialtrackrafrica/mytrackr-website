
const Terms = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-5xl font-bold text-[#091B37] mb-4">
            Our Data Privacy Policy
          </h1>
          <p className="text-[#475467] mb-2">
            In Compliance with the Nigeria Data Protection Act (NDPA) 2023
          </p>
          <p className="text-[#475467]">
            Effective Date: <span className="font-medium text-gray-900">January 2026</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[#475467] leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p className="mb-4">
              This Privacy Policy regulates how <strong>MYTRACKR SERVICES LIMITED</strong> will process the personal information of our data subjects such as: customers, employees, and visitors to this website.
            </p>
            <p className="mb-4">
              In compliance with the Nigeria Data Protection Act 2023 and other applicable data protection laws and regulations, MYTRACKR SERVICES LIMITED upholds established privacy principles that guide how we collect, use, record, organise, structure, store, adapt, retrieve, consult, disclose, disseminate, align, combine, restrict, erase, or destroy your personal data, as well as how we manage it throughout its lifecycle.
            </p>
            <blockquote className="border-l-4 border-[#1A56DB] pl-4 italic bg-blue-50 py-3 pr-4 rounded-r-lg text-gray-700">
              “MYTRACKR SERVICES LIMITED ("MYTRACKR", "we", "us", or "our") is a financial technology company incorporated under the laws of the Federal Republic of Nigeria. We operate an accounting Software-as-a-Service (SaaS) platform that helps growing Nigerian businesses track, manage, and gain insight into their business finances.”
            </blockquote>
          </section>

          {/* Principles */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Our Privacy Principles on Data Processing</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>We process your personal data in a fair, lawful, and transparent manner.</li>
              <li>We collect personal data only for specified, explicit, and legitimate purposes, and do not process it further in a way that is incompatible with those purposes.</li>
              <li>We ensure that personal data collected is adequate, relevant, and limited to what is necessary for the intended purpose.</li>
              <li>We retain personal data only for as long as necessary to fulfil the lawful purpose for which it was collected or further processed.</li>
              <li>We take reasonable steps to ensure that personal data is accurate, complete, not misleading, and kept up to date where required.</li>
              <li>We implement appropriate technical and organisational measures to safeguard personal data against unauthorised or unlawful processing, access, loss, destruction, damage, or any form of data breach.</li>
              <li>We uphold accountability in all data processing activities, exercise a duty of care to you, and maintain the confidentiality, integrity, and availability of your personal data.</li>
            </ul>
          </section>

          {/* Consent */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Consent of Data Subject</h2>
            <p>
              Unless required by law, your consent is central to how we process your data. You have the right to give, refuse, or withdraw your consent at any time.
            </p>
          </section>

          {/* Scope of Data Processing */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-6">Scope of Data Processing</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">A. Account Registration Data</h3>
                <p>
                  We collect basic identity and access information such as your business name, email address, business type/structure, and a securely hashed password. This information is provided directly by you during sign-up and is used to create and manage your account, authenticate users, enable access to the platform, personalise your experience, and communicate with you.
                </p>
                <p className="mt-2">
                  This processing is based on contractual necessity and the data is retained for the duration of your account and up to one year after closure.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">B. Financial Data (Open Banking via Mono, Paystack and Flutterwave)</h3>
                <p className="mb-3">
                  With your explicit consent, we retrieve “read-only” financial data from your bank and/or payment processor through Mono, Paystack and Flutterwave’s secure API (Meaning: We do not have the access to move money or perform transactions on your account.).
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Bank Transactions:</strong> This includes your transaction history, credits and debits, descriptions, and merchant details. It is used for financial tracking, categorisation, and reporting on your dashboard.</li>
                  <li><strong>Account Balances:</strong> We access your current and available balances to provide real-time financial insights and cash flow monitoring.</li>
                  <li><strong>Financial Analytics:</strong> We generate insights such as income and expense summaries, financial ratios, and trends based on your transaction data to support reporting and analytics features.</li>
                </ul>
                <p className="mb-3">
                  All financial data processing is based on your consent, the method you select and is retained for the duration of your account and up to one year thereafter. You may withdraw your consent at any time.
                </p>
                <ul className="space-y-1 text-sm text-[#1A56DB]">
                  <li><a href="https://mono.co/legal" target="_blank" rel="noopener noreferrer" className="hover:underline">Learn how Mono collects and uses information</a></li>
                  <li><a href="https://paystack.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">Learn how Paystack collects and uses information</a></li>
                  <li><a href="https://flutterwave.com/ug/privacy-notice" target="_blank" rel="noopener noreferrer" className="hover:underline">Learn how Flutterwave collects and uses information</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">C. Payment & Billing Data (Processed by Paystack)</h3>
                <p>
                  We process limited billing information such as your subscription plan, payment date, transaction reference, and payment status. This data is generated by Paystack upon successful payment and is used for subscription management, billing reconciliation, receipt issuance, and maintaining an audit trail.
                </p>
                <p className="mt-2">
                  This processing is based on contractual necessity, and records are retained for up to seven years in line with applicable financial regulations. Please note that we do not collect or store your card or bank details.
                </p>
                <p className="mt-2 text-sm text-[#1A56DB]">
                  <a href="https://paystack.com/terms" target="_blank" rel="noopener noreferrer" className="hover:underline">Learn how Paystack collects and uses information</a>
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">D. Usage & Technical Data</h3>
                <p className="mb-3">
                  We automatically collect certain technical information when you use our platform to ensure security and improve performance.
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Device & Access Logs:</strong> This includes your IP address, browser type, device information, operating system, login timestamps, and session duration. It helps us maintain platform security, detect fraud, and manage sessions.</li>
                  <li><strong>Behavioural & Feature Usage Data:</strong> This includes pages visited, features accessed, click activity, error logs, and performance diagnostics. It is used to monitor performance, fix bugs, improve user experience, and guide product development.</li>
                </ul>
                <p>
                  This processing is based on our legitimate interests and such data is retained for up to 12 months, after which it is anonymised or deleted.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">E. Communications Data</h3>
                <p className="mb-3">We process data related to how we communicate with you:</p>
                <ul className="list-disc pl-6 space-y-2 mb-3">
                  <li><strong>Transactional Communications:</strong> We send essential service-related messages such as password resets, security alerts, subscription confirmations, and billing notices.</li>
                  <li><strong>Marketing & Promotions:</strong> With your consent, we may send product updates, feature announcements, and promotional offers. You can opt out at any time.</li>
                  <li><strong>Support Communications:</strong> When you contact us, we collect and process your messages, support tickets, and feedback to resolve issues and improve our services.</li>
                </ul>
                <p>
                  Depending on the purpose, this processing is based on either contract or consent, and such data is typically retained for up to three years from your last interaction, or until you withdraw consent where applicable.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">F. Staff and Personnel Data (Employees & Contractors)</h3>
                <p className="mb-2">
                  We process personal data relating to our employees, contractors, and authorized personnel to effectively manage our workforce and business operations.
                </p>
                <p className="mb-2">
                  This may include identification details (such as name, contact information, and address), employment and engagement records, role and access permissions, payroll and financial information, performance records, and system access logs.
                </p>
                <p className="mb-2">
                  This data is collected directly from staff or generated during the course of employment or engagement and is used for purposes including recruitment, onboarding, workforce management, payroll administration, performance monitoring, compliance with legal obligations, and ensuring the security of our systems and services.
                </p>
                <p className="mb-2">
                  Processing of staff data is based on contractual necessity, compliance with legal obligations, and our legitimate interests in managing and securing our operations. Personal data is retained for the duration of employment or engagement and for a defined period thereafter in line with applicable labour, tax, and regulatory requirements.
                </p>
                <p>
                  We implement appropriate technical and organisational measures to ensure the confidentiality, integrity, and security of staff personal data, including restricting access to authorised personnel only.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
                <h4 className="font-bold text-gray-900 mb-2">Important Notes</h4>
                <p className="mb-2">
                  We are committed to protecting your data. We do not sell your personal data or share it with third parties for their own marketing purposes. Open banking access is strictly consent-based and can be revoked by you at any time.
                </p>
                <p>
                  The laws of the Federal Republic of Nigeria permit our platform to carry out these activities, subject to the informed consent of the user.
                </p>
              </div>
            </div>
          </section>

          {/* Rights of Data Subjects */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-6">Rights of Data Subjects</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm text-left border border-gray-200">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    <th className="px-6 py-4 border-b border-r border-gray-200 w-1/3">Category</th>
                    <th className="px-6 py-4 border-b border-gray-200">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right of Access</td>
                    <td className="px-6 py-4">You have the right to request a copy of the personal data we hold about you and information about how we process it.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Rectification</td>
                    <td className="px-6 py-4">You have the right to request correction of inaccurate or incomplete personal data we hold about you.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Erasure</td>
                    <td className="px-6 py-4">You have the right to request deletion of your personal data where it is no longer necessary for the purposes for which it was collected, or where you withdraw consent and no other lawful basis applies.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Restrict Processing</td>
                    <td className="px-6 py-4">You have the right to request that we restrict or suspend the processing of your data in certain circumstances, such as where you contest the accuracy of the data.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Data Portability</td>
                    <td className="px-6 py-4">You have the right to receive your personal data in a structured, commonly used, machine-readable format, and to request transfer to another data controller where technically feasible.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Object</td>
                    <td className="px-6 py-4">You have the right to object to processing of your personal data carried out on the basis of legitimate interests, including direct marketing. Where you object to marketing, we will cease processing immediately.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Withdraw Consent</td>
                    <td className="px-6 py-4">Where processing is based on your consent, you may withdraw that consent at any time without affecting the lawfulness of prior processing.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 border-r border-gray-200 font-medium text-gray-900">Right to Lodge a Complaint</td>
                    <td className="px-6 py-4">You have the right to lodge a complaint directly with the Nigeria Data Protection Commission (NDPC) at ndpc.gov.ng, if you believe your data protection rights have been violated.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Tracking Technologies */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Tracking Technologies (Cookies)</h2>
            <p className="mb-4">
              Cookies are small text files stored on your device when you visit a website. They help the site remember your actions and preferences, making your experience more efficient and personalised.
            </p>
            <p className="mb-4">
              When you use our website, we use cookies and similar technologies to recognise you and improve functionality. In doing so, we may collect technical information such as your IP address, device identifiers, browser type, operating system, usage data, and details of network-connected devices. This information enables us to deliver tailored content, enhance user experience, maintain account security, manage risk, and promote trust and safety on our platform.
            </p>
            <p className="mb-4">
              Cookies do not typically identify you personally. However, where we hold personal data about you, it may be linked to information collected through cookies.
            </p>
            <p>
              For more information on the specific types of cookies used on our Website, please see our <a href="/cookies" className="text-[#1A56DB] hover:underline">Cookie Policy</a>.
            </p>
          </section>

          {/* Data Protection Measures */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Data Protection Measures</h2>
            <p className="mb-4">
              We use advanced technologies and strong security measures to protect your personal data. We actively guard against cyber-attacks, unauthorised access, fraud, data loss, and corruption.
            </p>
            <p>
              We also comply with our legal data protection obligations by regularly reviewing our processes, conducting privacy impact assessments, training our staff, and requiring strict data protection commitments where necessary.
            </p>
          </section>

          {/* Purpose and Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Purpose and Data Retention</h2>
            <p className="mb-4">
              The purpose for which we collect and process your personal data determines how long we retain it. We only retain personal data that is necessary to provide our services, comply with legal obligations, and respond to legitimate business or regulatory requirements.
            </p>
            <p className="mb-4">
              For most categories of data, we retain your information for the duration of your relationship with us and for a limited period thereafter, in line with industry best practices and applicable data protection laws.
            </p>
            <p className="mb-4">
              However, certain records are subject to specific legal retention requirements. In particular, payment and billing records are retained for a period of seven (7) years from the date of the transaction, in compliance with applicable Nigerian tax and financial record-keeping obligations under the Federal Inland Revenue Service (FIRS) Act and the Finance Act.
            </p>
            <p className="mb-4">
              Where retention is no longer necessary, we securely delete, anonymise, or otherwise dispose of your personal data. In limited cases, we may retain data for longer periods where required for legal, regulatory, dispute resolution, or enforcement purposes.
            </p>
            <p>
              We are committed to safeguarding your privacy and handling all personal data in accordance with applicable laws, including your right to privacy under the Constitution of the Federal Republic of Nigeria.
            </p>
          </section>

          {/* Data Protection Unit */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Data Protection Unit (DPU)</h2>
            <p className="mb-4">
              We have appointed a Data Protection Officer (DPO) responsible for overseeing compliance with applicable data protection laws and ensuring timely action on all privacy-related concerns.
            </p>
            <p className="mb-6">
              You may contact the Data Protection Officer via: <a href="mailto:dpo@mytrackrservices.com" className="text-[#1A56DB] hover:underline font-medium">dpo@mytrackrservices.com</a>
            </p>
            <p className="mb-3 font-medium text-gray-900">The DPU provides, among others, the following services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitoring and ensuring compliance with applicable data protection regulations, including incident and breach management</li>
              <li>Data protection and privacy advisory services</li>
              <li>Data protection capacity building and training</li>
              <li>Drafting and review of data processing and data protection agreements</li>
              <li>Development and implementation of data breach response and remediation plans</li>
              <li>Conducting information privacy audits</li>
              <li>Performing data breach impact assessments</li>
              <li>Data protection and privacy due diligence investigations</li>
              <li>General Data Protection Officer support services</li>
            </ul>
          </section>

          {/* Data Breach */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Data Breach</h2>
            <p className="mb-4">
              At MYTRACKR SERVICES LIMITED, we are committed to safeguarding personal data and have implemented appropriate technical and organisational measures designed to prevent data breaches. Notwithstanding these safeguards, we maintain a formal data breach response framework to address any incidents involving personal data.
            </p>
            <p className="mb-4">
              A data breach includes any actual or suspected incident leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data, whether transmitted, stored, or otherwise processed.
            </p>
            <p className="mb-4">
              If you become aware of any actual or suspected breach, including compromise of your access credentials, you are encouraged to promptly contact our Data Protection Officer (DPO) so that we can take immediate steps to secure your data and systems.
            </p>
            <p className="mb-3">
              Where we become aware of a data breach that affects personal data, we will notify affected individuals and relevant regulatory authorities in accordance with applicable data protection laws and regulations. Such notification will include, where applicable:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>A description of the nature of the breach, including the categories of personal data affected</li>
              <li>The likely consequences of the breach</li>
              <li>The measures taken or proposed to address the breach, including steps to mitigate any adverse effects</li>
            </ul>
            <p className="mb-4">
              We will provide such notifications without undue delay and, where required by law, no later than 72 hours after becoming aware of the breach, except where exceptional circumstances prevent compliance within this timeframe.
            </p>
            <p className="mb-4">
              All personal data breaches will be documented, including facts relating to the incident, its effects, and remedial actions taken, and such records may be made available to relevant regulatory authorities upon request.
            </p>
            <p className="mb-4">
              We also encourage all users and customers to adopt good security practices, including the use of strong and unique passwords, regular updating of account credentials, and immediate reporting of any suspicious or unusual account activity.
            </p>
            <p>
              Where a breach is likely to result in a risk to the rights and freedoms of data subjects, we will notify the Nigeria Data Protection Commission (NDPC) within 72 hours of discovery, in accordance with applicable legal requirements.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">Changes to this Privacy Policy</h2>
            <p className="mb-4">
              We may update, revise, or amend this Privacy Policy from time to time to reflect changes in our technology, operations, or applicable legal and regulatory requirements.
            </p>
            <p className="mb-4">
              Where any material changes affect the way previously collected personal data is used or shared, we will provide appropriate notice and, where required by applicable law, obtain your consent before implementing such changes.
            </p>
            <p>
              The updated Privacy Policy will take effect from the effective date indicated on our website.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Terms;