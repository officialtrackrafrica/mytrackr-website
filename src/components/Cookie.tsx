
const CookiePolicy = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-8 md:p-16 shadow-[0_2px_20px_rgba(0,0,0,0.03)] border border-gray-100">
        
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-5xl font-bold text-[#091B37] mb-4">
            Our Cookie Policy
          </h1>
          <p className="text-[#475467]">
            Effective Date: <span className="font-medium text-gray-900">January 2026</span>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[#475467] leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">1. Introduction</h2>
            <p className="mb-4">
              MyTrackr Services Limited ("MyTrackr", "we", "us", or "our") is committed to protecting the privacy and personal data of users of our web-based accounting platform ("Platform"). This Cookie Policy explains what cookies are, how we use them on our Platform, the legal basis for their use, and the choices available to you regarding their management.
            </p>
            <p className="mb-4">
              This policy should be read in conjunction with our Privacy Policy, which provides a broader explanation of how we collect, use, and safeguard your personal data in accordance with the Nigeria Data Protection Act, 2023 ("NDPA") and its implementing regulations.
            </p>
            <p>
              By continuing to use the MyTrackr Platform after being presented with our cookie consent notice, you acknowledge that you have read and understood this Cookie Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">2. What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website or use a web-based application. They are widely used to make websites and platforms work, or work more efficiently, and to provide operational information to the platform owner.
            </p>
            <p className="mb-3 font-medium text-gray-900">Cookies can be classified in several ways:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>First-party cookies:</strong> Set directly by MyTrackr on our Platform.</li>
              <li><strong>Third-party cookies:</strong> Set by external service providers whose services are integrated into our Platform (e.g., payment processors).</li>
              <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser.</li>
              <li><strong>Persistent cookies:</strong> Cookies that remain on your device for a set period of time or until you delete them.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">3. How We Use Cookies</h2>
            <p className="mb-4">
              MyTrackr uses only strictly necessary cookies. We do not use advertising, marketing, retargeting, or non-essential analytics cookies. The cookies deployed on our Platform are limited to those that are essential to enable core functionality and to ensure the security of the service you have requested.
            </p>
            <p className="mb-3 font-medium text-gray-900">The specific purposes for which we use strictly necessary cookies are:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Authentication:</strong> To recognise you when you log in to your account and to keep you securely signed in during your session.</li>
              <li><strong>Security:</strong> To support and enable security features, detect and prevent fraudulent activity, and protect the integrity of your financial data.</li>
              <li><strong>Session management:</strong> To maintain your session state as you navigate through the Platform, ensuring a consistent and uninterrupted user experience.</li>
              <li><strong>User preferences:</strong> To remember basic settings necessary for the Platform to function correctly.</li>
              <li><strong>Load balancing:</strong> To distribute traffic across servers and ensure Platform stability and performance.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-6">4. Cookies We Use</h2>
            <p className="mb-4">
              The table below provides details of the strictly necessary cookies currently in use on the MyTrackr Platform:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm text-left border border-gray-200">
                <thead className="bg-gray-50 text-gray-900">
                  <tr>
                    <th className="px-4 py-3 border-b border-r border-gray-200 font-bold w-1/4">Cookie Name / Type</th>
                    <th className="px-4 py-3 border-b border-r border-gray-200 font-bold w-1/3">Purpose</th>
                    <th className="px-4 py-3 border-b border-r border-gray-200 font-bold">Duration</th>
                    <th className="px-4 py-3 border-b border-gray-200 font-bold">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">Session ID Cookie</td>
                    <td className="px-4 py-3 border-r border-gray-200">Authenticates your logged-in session and maintains continuity as you navigate the Platform.</td>
                    <td className="px-4 py-3 border-r border-gray-200">Session (expires on browser close)</td>
                    <td className="px-4 py-3">MyTrackr (First-party)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">CSRF Token</td>
                    <td className="px-4 py-3 border-r border-gray-200">Protects against Cross-Site Request Forgery attacks by validating that form submissions originate from our Platform.</td>
                    <td className="px-4 py-3 border-r border-gray-200">Session</td>
                    <td className="px-4 py-3">MyTrackr (First-party)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">Auth Token</td>
                    <td className="px-4 py-3 border-r border-gray-200">Stores your encrypted authentication credentials to keep you securely signed in during an active session.</td>
                    <td className="px-4 py-3 border-r border-gray-200">Session / Short-term persistent</td>
                    <td className="px-4 py-3">MyTrackr (First-party)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">Consent Preference Cookie</td>
                    <td className="px-4 py-3 border-r border-gray-200">Records your cookie consent choice to ensure we do not ask for consent on every subsequent page visit.</td>
                    <td className="px-4 py-3 border-r border-gray-200">12 months</td>
                    <td className="px-4 py-3">MyTrackr (First-party)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">Paystack Session Cookie</td>
                    <td className="px-4 py-3 border-r border-gray-200">Supports secure payment processing when you subscribe to or renew a MyTrackr plan. Paystack does not use this cookie to store card data on our Platform.</td>
                    <td className="px-4 py-3 border-r border-gray-200">Session</td>
                    <td className="px-4 py-3">Paystack (Third-party)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-r border-gray-200 font-medium text-gray-900">Open Banking Session Cookie</td>
                    <td className="px-4 py-3 border-r border-gray-200">Facilitates the secure retrieval of your financial data from your bank through our open banking service provider during an active session.</td>
                    <td className="px-4 py-3 border-r border-gray-200">Session</td>
                    <td className="px-4 py-3">Open Banking Provider (Third-party)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Note</h4>
              <p className="text-sm">
                MyTrackr does not store credit or debit card information. Payment transactions are processed entirely by Paystack, a PCI-DSS compliant payment processor. Please refer to Paystack's privacy and cookie policy for full details of cookies set by Paystack during payment processing.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">5. Legal Basis for Using Cookies</h2>
            <p className="mb-4">
              Under the Nigeria Data Protection Act, 2023 (NDPA), the processing of personal data must be grounded in a lawful basis. Our use of strictly necessary cookies is based on the following:
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-2">5.1 Consent</h3>
            <p>
              Where any future cookies beyond strictly necessary cookies are introduced (for example, analytics or performance cookies), MyTrackr will obtain your prior, freely given, specific, informed, and unambiguous consent before setting such cookies, in full compliance with Section 25 of the NDPA and the Nigeria Data Protection Regulation.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">6. Third-Party Cookies</h2>
            <p className="mb-6">
              Our Platform integrates with the following third-party service providers, which may set their own cookies in connection with the services they provide to us:
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">6.1 Paystack</h3>
            <p className="mb-6">
              Paystack is our payment processing partner. When you initiate a payment transaction on the MyTrackr Platform, Paystack may set session cookies strictly for the purpose of facilitating a secure transaction. MyTrackr does not have access to or control over Paystack's cookies. For more information, please review Paystack's Privacy Policy and Cookie Policy at <a href="https://www.paystack.com" target="_blank" rel="noopener noreferrer" className="text-[#1A56DB] hover:underline">www.paystack.com</a>.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">6.2 Open Banking Service Provider</h3>
            <p className="mb-6">
              To enable the financial data aggregation features of the MyTrackr Platform, we work with a licensed open banking service provider. During active sessions in which your financial data is retrieved, this provider may set session cookies. These cookies are strictly necessary for the secure and accurate transmission of your data and expire at the end of your session. MyTrackr does not have control over the cookies set by this provider. Please refer to your open banking provider's privacy documentation for further details.
            </p>
            
            <p className="font-medium text-gray-900">
              MyTrackr does not permit any third-party advertising networks, social media platforms, or marketing technology providers to set cookies on our Platform.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-6">7. Managing and Controlling Cookies</h2>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">7.1 Cookie Consent Banner</h3>
            <p className="mb-6">
              When you first access the MyTrackr Platform, you will be presented with a cookie consent notice that informs you of our use of cookies and your choices. Given that we currently use only strictly necessary cookies, this notice is provided for transparency. When non-strictly necessary cookies are introduced in the future, you will be asked for your consent at that time.
            </p>
            
            <h3 className="text-lg font-bold text-gray-900 mb-2">7.2 Browser Settings</h3>
            <p className="mb-3">
              You may control and manage cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>View cookies stored on your device and delete them individually or in bulk.</li>
              <li>Block all cookies or block cookies from specific websites.</li>
              <li>Set your browser to notify you when a cookie is being set.</li>
            </ul>
            <p className="mb-6">
              For guidance on how to manage cookies in your specific browser, please refer to your browser's help documentation or visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#1A56DB] hover:underline">www.allaboutcookies.org</a>.
            </p>
            
            <div className="border-l-4 border-[#1A56DB] pl-4 italic bg-blue-50 py-3 pr-4 rounded-r-lg text-gray-700">
              <strong>Important Notice:</strong> Because our Platform relies on strictly necessary cookies to function, disabling or blocking these cookies through your browser settings may impair or entirely prevent your ability to log in to and use the MyTrackr Platform. We therefore advise against blocking cookies if you intend to use our services.
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-2xl font-bold text-[#091B37] mb-4">8. Updates to This Cookie Policy</h2>
            <p className="mb-4">
              MyTrackr reserves the right to update or amend this Cookie Policy at any time to reflect changes in technology, applicable law, or our business practices. When we make material changes to this policy, we will notify you by posting a prominent notice on the Platform and updating the effective date at the top of this document.
            </p>
            <p>
              We encourage you to review this Cookie Policy periodically to stay informed of how we use cookies. Your continued use of the Platform following the posting of any changes constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default CookiePolicy;