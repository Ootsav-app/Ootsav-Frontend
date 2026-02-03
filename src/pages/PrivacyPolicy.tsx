import React from 'react';
// Verify this import path matches your file structure exactly
import NavbarPrivacyPolicy from '../components/NavbarPrivacyPolicy';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-900">
      <NavbarPrivacyPolicy />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          
          {/* Header - Underline removed */}
          <div className="mb-12 pb-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-black">
              Privacy Policy
            </h1>
            <p className="text-lg text-black">
              Effective Date: February 2, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-10 text-base md:text-lg leading-relaxed text-black">
            
            {/* Introduction */}
            <section className="space-y-6">
              <p>
                This Privacy Policy ("Policy") describes how <strong>Ootsav Tech Solutions</strong> ("Ootsav", "we", "our", or "us") collects, uses, discloses, and safeguards personal information when you access or use our website, platform, or services (collectively, the "Platform") which is operated by:
              </p>
              
              <div className="pl-4 border-l-2 border-black space-y-2 py-2">
                <p><span className="font-bold">Company Name:</span> Ootsav Tech Solutions</p>
                <p><span className="font-bold">Entity Type:</span> Partnership</p>
                <p><span className="font-bold">Registration Number:</span> UDYAM-RJ-33-0112310</p>
                <p><span className="font-bold">Registered Office:</span> Orbit II, Udaipur, Rajasthan, India</p>
                <p><span className="font-bold">Contact Details:</span> 8867234016 | <a href="mailto:admin@ootsav.in" className="underline hover:text-gray-600">admin@ootsav.in</a></p>
              </div>

              <p>
                (In this Policy, you shall be referred as "you" or "your" or "user" or "users")
              </p>
              <p>
                This Policy applies to all users of the Platform, including hosts, guests, collaborators, and visitors. By using the Platform, you consent to the data practices described in this Policy. If you do not agree with any part of this Privacy Policy, please discontinue your use of the Platform.
              </p>
              <p>
                We are committed to protecting your privacy and handling your information responsibly and transparently. If you have any questions or concerns, you may contact us at: <a href="mailto:admin@ootsav.in" className="underline hover:text-gray-600">admin@ootsav.in</a>
              </p>
            </section>

            {/* 1. Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">1. Information We Collect</h2>
              <p className="mb-6">To provide a seamless event management experience, Ootsav collects certain types of information from users, guests, and collaborators. This information may be provided by you directly or collected automatically when you use our Platform.</p>
              
              <h3 className="text-xl font-bold mb-4">a) Information You Provide Us:</h3>
              <p className="mb-4">We collect the following categories of information when you voluntarily submit them while using the Platform:</p>
              <ul className="list-disc pl-6 space-y-4 mb-8">
                <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, mobile number, and any other details necessary to verify and create your account.</li>
                <li><strong>Event Details and Guest Information:</strong> To facilitate event planning, we collect details related to your events (e.g., event name, date, time, location, dress code), and guest-specific data such as names, contact details, RSVP responses, travel plans, staying preferences, and meal selections. <br/><em>When you provide guest information, you confirm that you have obtained the necessary consent or legal basis to share such data with Ootsav.</em></li>
                <li><strong>Communication Data:</strong> If you use our communication tools (e.g., email or WhatsApp) to send invites, reminders, or updates, we collect message content, delivery reports, response logs, and interaction metadata.</li>
                <li><strong>Uploaded Documents:</strong> If you use features requiring document uploads (such as ID verification, visa processing, or guest screening), we may collect and store files including Aadhaar, PAN, passports, or similar documents.</li>
                <li><strong>Payment and Financial Information:</strong> For users leveraging our payment tracking tools, we collect transaction-level data such as amounts paid, services booked, and payment status. <br/><em>Please note: We do not store payment card numbers or sensitive financial credentials—these are handled securely by third-party payment processors.</em></li>
                <li><strong>Support and Communications:</strong> When you contact our support team, we collect any relevant details from your inquiry, including issue type, timestamps, attachments, and communication history, to assist you and improve our services.</li>
              </ul>

              <h3 className="text-xl font-bold mb-4">b) Information We Collect Automatically:</h3>
              <p className="mb-4">We also collect certain data automatically to enhance platform security, performance, and user experience:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li><strong>Usage Data:</strong> Information on how you interact with the Platform, such as pages viewed, features used, buttons clicked, time spent on certain screens, and referring URLs. This data is collected through cookies and similar tracking technologies as per our Cookie Policy.</li>
                <li><strong>Device and Technical Data:</strong> We may collect your IP address, device type, browser name and version, operating system, and other technical identifiers. This information helps us maintain platform compatibility and security.</li>
                <li><strong>Third-Party Integrations:</strong> If you use integrated tools like WhatsApp for messaging, we may receive limited data necessary for the integration to function (e.g., recipient ID, delivery status). These services handle your data independently in accordance with their own privacy policies.</li>
              </ul>
            </section>

            {/* 2. Lawful Basis */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">2. Lawful Basis for Processing Personal Information</h2>
              <p className="mb-6">Ootsav processes personal data in accordance with applicable data protection laws. The lawful bases we rely on include:</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">a) Consent-Based Processing:</h3>
                  <p>We process your personal data with your explicit consent in situations such as:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>When you create an account or submit contact details;</li>
                    <li>When you upload guest information or documents;</li>
                    <li>When you opt in to receive updates, messages, or event-related notifications;</li>
                    <li>When you voluntarily connect your account to third-party services (e.g., WhatsApp)</li>
                  </ul>
                  <p className="mt-3 italic">You may withdraw your consent at any time by contacting admin@ootsav.in. Please note that withdrawal may limit your ability to use certain features of the Platform.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">b) Performance of a Contract:</h3>
                  <p>We process your data as necessary to fulfill our contractual obligations to you, including:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Creating and managing your account;</li>
                    <li>Enabling event planning, guest management, and RSVP tracking;</li>
                    <li>Facilitating communication and payment tracking;</li>
                    <li>Providing support and fulfilling service requests.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">c) Legitimate Interests:</h3>
                  <p>We process certain data based on our legitimate interests, provided those interests are not overridden by your rights. This includes:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Improving Platform usability and performance;</li>
                    <li>Securing your account and detecting fraud;</li>
                    <li>Responding to inquiries or feedback;</li>
                    <li>Conducting internal analytics to enhance services.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-2">d) Compliance with Legal Obligations:</h3>
                  <p>We may process or retain your personal information to comply with legal and regulatory requirements. This includes:</p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Financial record-keeping;</li>
                    <li>Fraud prevention;</li>
                    <li>Responding to lawful requests from public authorities or regulators.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 border-l-4 border-black pl-4 py-2">
                 <p><strong>Note for Account Holders:</strong> You are responsible for ensuring that any personal information shared with us about your guests or collaborators has been collected lawfully, and that you have an appropriate legal basis to provide and manage that data through the Platform.</p>
              </div>
            </section>

            {/* 3. How We Use Information */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">3. How We Use Your Information</h2>
              <p className="mb-6">Ootsav uses the information we collect to deliver, maintain, and enhance our platform and services. Your data is processed for the following purposes:</p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold mb-2">a) Service Delivery and Core Features</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To create, manage, and maintain your account;</li>
                        <li>To enable event setup, guest list management, and RSVP tracking;</li>
                        <li>To facilitate secure payment tracking and financial workflows;</li>
                        <li>To personalize the RSVP website and event dashboard features based on your preferences.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">b) Communication and Notifications</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To send invitations, updates, and reminders via integrated tools (e.g., WhatsApp, email);</li>
                        <li>To respond to support inquiries or platform notifications;</li>
                        <li>To provide onboarding guidance, service-related messages, or feature updates.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">c) Platform Security and Fraud Prevention</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To monitor login activity and access logs;</li>
                        <li>To detect unauthorized access, suspicious behavior, or potential misuse;</li>
                        <li>To maintain platform integrity and safeguard guest data.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">d) Legal and Contractual Compliance</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To retain records for audit, tax, or regulatory purposes;</li>
                        <li>To comply with applicable laws (e.g., KYC, financial reporting);</li>
                        <li>To respond to lawful requests from public authorities.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">e) Experience Optimization and Development</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To analyze how users interact with the Platform and improve navigation, features, and UX;</li>
                        <li>To run internal analytics for system performance and load balancing;</li>
                        <li>To improve future versions of the product through anonymized behavioral insights.</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">f) Third-Party Integrations</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>To enable optional tools (e.g., WhatsApp bulk messaging or payment gateways);</li>
                        <li>To ensure these integrations function smoothly and deliver the intended user experience.</li>
                    </ul>
                </div>
              </div>
            </section>

            {/* 4. Data Retention */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">4. Data Retention and Deleting Your Information</h2>
              
              <h3 className="text-lg font-bold mb-2">a) Data Retention:</h3>
              <p>We retain your personal information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>For as long as your account is active and you are using the Platform;</li>
                <li>As needed to deliver services, manage events, or fulfill legal, accounting, or regulatory obligations;</li>
                <li>For a limited period after account deactivation or inactivity (typically up to 12 months, unless otherwise required by law).</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">b) Deletion Requests:</h3>
              <p>You may request deletion of your personal information at any time by emailing admin@ootsav.in. We will verify your identity and, where eligible, process the request in a reasonable timeframe.</p>
              <p className="mt-2 font-bold">Please note:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Certain data may be retained in backups for disaster recovery or auditing purposes;</li>
                <li>We may decline a deletion request if the data is necessary for legal compliance, resolving disputes, or enforcing our rights.</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">c) Inactivity-Based Deletion:</h3>
              <p className="mb-6">If your account remains inactive for an extended period (e.g., 12 months), we may deactivate or delete your account and associated data. You will be notified in advance and given the opportunity to reactivate.</p>

              <h3 className="text-lg font-bold mb-2">d) Account Holder Responsibilities:</h3>
              <p className="mb-2">If you are an Account Holder who uploads guest or collaborator information:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>You are responsible for managing and deleting such data in accordance with applicable data protection laws;</li>
                <li>Upon deleting your account, associated guest data may also be removed unless otherwise retained under a lawful basis.</li>
              </ul>

              <h3 className="text-lg font-bold mb-2">e) Impact of Deletion:</h3>
              <p>Deletion of your personal data may affect your ability to use certain features of the Platform. Once deleted, information cannot be restored.</p>
            </section>

            {/* 5. Sharing Information */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">5. How We Share Your Information</h2>
              <p className="mb-6">We value transparency and limit the sharing of your personal information to what is necessary to provide and support our services. We may share your data in the following situations:</p>
              
              <ul className="space-y-4">
                <li><strong>a) Internal Access (Ootsav Employees):</strong> Your information may be accessed by authorized employees of Ootsav based on their role—such as support, compliance, or engineering—under strict confidentiality obligations.</li>
                <li>
                    <strong>b) Trusted Service Providers and Vendors:</strong> We may share your data with third-party service providers who help us operate the Platform, including:
                    <ul className="list-disc pl-6 mt-1">
                        <li>Payment processors</li>
                        <li>Cloud storage and hosting providers</li>
                        <li>Analytics and customer support tools</li>
                    </ul>
                    <span className="text-sm italic block mt-1">These partners are contractually bound to use your data only for the services they provide and must delete or return data once processing is complete, unless otherwise required by law.</span>
                </li>
                <li><strong>c) Third-Party Integrations (e.g., WhatsApp):</strong> If you use integrated services such as WhatsApp, we may share limited information (e.g., recipient name or ID) to enable those features. You are encouraged to review their respective privacy policies as they process data independently.</li>
                <li>
                    <strong>d) Legal and Regulatory Disclosures:</strong> We may disclose your information:
                    <ul className="list-disc pl-6 mt-1">
                        <li>To comply with applicable laws or legal processes;</li>
                        <li>In response to court orders, law enforcement requests, or government inquiries;</li>
                        <li>To investigate fraud, enforce agreements, or protect the rights and safety of Ootsav and its users.</li>
                    </ul>
                </li>
                <li>
                    <strong>e) With Your Consent or Instruction:</strong> We may share your information when:
                    <ul className="list-disc pl-6 mt-1">
                        <li>You explicitly direct us to (e.g., enabling a new integration);</li>
                        <li>You give permission to share event or guest information with collaborators or vendors.</li>
                    </ul>
                </li>
                <li><strong>f) Business Transfers:</strong> If Ootsav undergoes a merger, acquisition, asset sale, or corporate restructuring, your information may be transferred as part of that transaction. We will ensure that such transfers are done securely and in accordance with this Privacy Policy.</li>
                <li><strong>g) Anonymized Data for Analytics:</strong> We may use or share de-identified or anonymized data for internal research, product development, and system optimization. This data does not identify you or your guests and is used solely for aggregate analysis.</li>
              </ul>
            </section>

            {/* 6. Security */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">6. Storage and Security of Your Information</h2>
              <p className="mb-6">At Ootsav, safeguarding your personal and event-related information is a top priority. We implement industry-standard security practices to protect against unauthorized access, loss, misuse, or alteration of your data.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-1">a) Data Storage:</h3>
                  <p>Your data is stored on secure cloud infrastructure provided by trusted third-party hosting providers. Our primary servers are located in India, with physical and digital security controls in place. Data is retained only for as long as necessary to fulfil the purposes described in this Privacy Policy, or as required by applicable law. Once no longer needed, data is deleted or anonymized securely.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">b) Access Controls:</h3>
                  <p>Only authorized Ootsav employees and contractors have access to user data, based strictly on job responsibilities. All personnel are bound by confidentiality obligations and undergo training in secure data handling.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">c) Security Practices:</h3>
                  <p>We maintain a multi-layered security approach, including:</p>
                  <ul className="list-disc pl-6 mt-1">
                    <li>Encryption in transit and at rest;</li>
                    <li>Role-based access controls (RBAC);</li>
                    <li>Network monitoring and threat detection;</li>
                    <li>Periodic security audits and vulnerability assessments.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">d) Incident Response and Breach Notifications:</h3>
                  <p>Ootsav has an incident response plan in place. In the unlikely event of a data breach, we will take appropriate steps to contain the incident, notify affected users (as required by law), and work to remediate any harm.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">e) Backups and Disaster Recovery:</h3>
                  <p>Data backups are maintained for system recovery purposes and are automatically deleted after a defined retention period. Backup data is not actively accessed or used.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">f) No Absolute Guarantee:</h3>
                  <p>While we implement strong security measures, no internet-based platform can guarantee 100% security. By using the Platform, you acknowledge and accept this inherent risk.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">g) Account Holder Responsibility:</h3>
                  <p>As an Account Holder, you are responsible for choosing collaborators carefully and ensuring that access to your event data is granted only to trusted parties.</p>
                </div>
              </div>
            </section>

            {/* 7. Links to Third Party Sites */}
            <section>
                <h2 className="text-2xl font-bold uppercase mb-6 inline-block">7. Links to Third Party Sites</h2>
                <p className="mb-4">The Ootsav Platform may contain links to external websites, services, or applications that are not owned or operated by Ootsav. These are provided for your convenience—for example, to access resources, tools, or services that may assist in your event planning process.</p>
                <p className="mb-4">Once you click a third-party link, you are subject to the terms and privacy policies of that third-party site. We do not control, endorse, or assume any responsibility for:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li>The content or practices of any linked site or service;</li>
                    <li>Their collection, storage, or use of your personal data;</li>
                    <li>Any resulting consequences of your interaction with them.</li>
                </ul>
                <p>Third-party platforms may also set cookies or use tracking technologies independently of Ootsav. We encourage you to review the privacy policies of any such site you visit. By continuing beyond Ootsav through a third-party link, you acknowledge that your data may be subject to different legal protections and may be processed outside your home jurisdiction.</p>
            </section>

            {/* 8. DPDP Act Rights */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">8. Your Rights Under the DPDP Act, 2023</h2>
              <p className="mb-4">As a user of the Ootsav platform, you have certain rights under the Digital Personal Data Protection Act, 2023 (DPDP Act, 2023) regarding your personal information. These rights are specified in this section.</p>
              
              <div className="pl-4 border-l-2 border-black space-y-2 py-2 mb-6">
                <p className="font-bold">For the purposes of the applicable law, Data Fiduciary with respect to the information collected from Account Holder is:</p>
                <p><span className="font-semibold">Company Name:</span> Ootsav Tech Solutions</p>
                <p><span className="font-semibold">Entity Type:</span> Partnership</p>
                <p><span className="font-semibold">Registration Number:</span> UDYAM-RJ-33-0112310</p>
                <p><span className="font-semibold">Registered Office:</span> Orbit II, Udaipur, Rajasthan, India</p>
              </div>

              <div className="mb-6 font-bold uppercase text-sm">
                FOR THE PURPOSES OF THE APPLICABLE LAW, OOTSAV IS CONSIDERED YOUR DATA FIDUCIARY ONLY WITH RESPECT TO THE INFORMATION WE COLLECT DIRECTLY FROM YOU, THE USER. HOWEVER, IF YOU COLLECT PERSONAL INFORMATION FROM YOUR GUESTS OR OTHER INDIVIDUALS THROUGH OUR PLATFORM, YOU ARE THE DATA FIDUCIARY FOR THAT DATA, AND IT IS YOUR RESPONSIBILITY TO ENSURE COMPLIANCE WITH THE DPDP ACT, 2023 IN HANDLING AND PROCESSING THAT INFORMATION.
              </div>

              <p className="mb-4">Under the Digital Personal Data Protection Act, 2023, you have the following rights with respect to your personal information:</p>

              <div className="space-y-6">
                  <div>
                      <h3 className="font-bold text-lg">a) Right to Access:</h3>
                      <p>You have the right to know if Ootsav is processing your personal data. Upon request, we must provide you with a copy of the personal data we hold about you, along with details about how we are using it, the purposes of processing, and with whom it has been shared. This right allows you to understand how your data is being used and verify its accuracy. We have already specified this information in this Privacy Policy.</p>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">b) Right to Correction:</h3>
                      <p>If you find that any personal data we hold about you is inaccurate, incomplete, or outdated, you have the right to request that we correct or update it. This ensures that your information remains accurate and reliable.</p>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">c) Right to Erasure:</h3>
                      <p>Also known as the "right to be forgotten", this right allows you to request the deletion of your personal data when it is no longer necessary for the purposes for which it was collected, if you withdraw your consent (where consent was the legal basis for processing), or if you believe your data is being processed unlawfully. However, this right may be subject to certain exceptions, such as where the data must be retained for legal reasons.</p>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">d) Right to Data Portability:</h3>
                      <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format. This allows you to easily transfer your data to another service provider.</p>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">e) Right to Withdraw Consent:</h3>
                      <p>Where the processing of your personal data is based on your consent, you have the right to withdraw that consent at any time. Withdrawing consent will not affect the legality of processing conducted before your consent was withdrawn. However, withdrawing consent may impact your ability to use certain features of the platform that rely on that data.</p>
                  </div>
                  <div>
                      <h3 className="font-bold text-lg">f) Right to Grievance Redressal:</h3>
                      <p>If you have concerns or complaints about how your personal data is being handled, you have the right to file a grievance with our Grievance Officer whose details are provided in Section 14 below. We will respond to you within the timeline prescribed under the DPDP Act, 2023, and/or rules framed thereunder.</p>
                  </div>
              </div>

              <div className="mt-8 border p-4 border-black">
                  <h4 className="font-bold uppercase mb-2">Data Protection Board of India</h4>
                  <p>If you are unsatisfied with how Ootsav handles your grievance or if you believe your rights under the Digital Personal Data Protection Act, 2023, have been violated, you have the right to escalate your complaint to the Data Protection Board of India.</p>
                  <p className="mt-2">To make requests for exercising any of your rights, please contact us at <a href="mailto:admin@ootsav.in" className="underline">admin@ootsav.in</a>. Please note, we reserve the right to reject the request if you are not entitled to the right that you request to enforce.</p>
              </div>
            </section>

            {/* 9. Rights of Users from Other Jurisdictions */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">9. Rights of Users From Other Jurisdictions</h2>
              <p className="mb-4">If you are a resident of the European Union, United Kingdom, or any jurisdiction with enhanced data protection laws, you may have the following rights under applicable regulations such as the General Data Protection Regulation (GDPR).</p>
              
              <div className="pl-4 border-l-2 border-black space-y-2 py-2 mb-6">
                <p className="font-bold">Your data controller with respect to the personal information collected on the website is:</p>
                <p><span className="font-semibold">Company Name:</span> Ootsav Tech Solutions</p>
                <p><span className="font-semibold">Entity Type:</span> Partnership</p>
                <p><span className="font-semibold">Registration Number:</span> UDYAM-RJ-33-0112310</p>
                <p><span className="font-semibold">Registered Office:</span> Orbit II, Udaipur, Rajasthan, India</p>
              </div>

              <div className="mb-6 font-bold uppercase text-sm">
                FOR THE PURPOSES OF THE APPLICABLE LAW, OOTSAV IS CONSIDERED YOUR DATA CONTROLLER ONLY WITH RESPECT TO THE INFORMATION WE COLLECT DIRECTLY FROM YOU, THE USER. HOWEVER, IF YOU COLLECT PERSONAL INFORMATION FROM YOUR GUESTS OR OTHER INDIVIDUALS THROUGH OUR PLATFORM, YOU ARE THE DATA CONTROLLER FOR THAT DATA, AND IT IS YOUR RESPONSIBILITY TO ENSURE COMPLIANCE WITH THE APPLICABLE DATA PRIVACY LAW(S) IN HANDLING AND PROCESSING THAT INFORMATION.
              </div>

              <p className="mb-4">Depending upon the laws of your jurisdiction, you may be eligible for some or all the following rights in respect of your personal information:</p>

              <div className="space-y-4">
                  <p><strong>a) Right to Access:</strong> You have the right to request information about how we process your personal data, and to receive a copy of the personal information we hold about you.</p>
                  <p><strong>b) Right to Rectification:</strong> You have the right to request the correction or completion of any inaccurate or incomplete personal data we hold.</p>
                  <div>
                      <strong>c) Right to Erasure ("Right to Be Forgotten"):</strong>
                      <p className="inline"> You may request deletion of your personal data in certain situations, such as:</p>
                      <ul className="list-disc pl-6 mt-1">
                          <li>The data is no longer necessary for the purpose it was collected;</li>
                          <li>You withdraw your consent and there is no other legal basis for processing;</li>
                          <li>You object to processing and there are no overriding legitimate grounds;</li>
                          <li>The data has been processed unlawfully.</li>
                      </ul>
                  </div>
                  <div>
                      <strong>d) Right to Restrict Processing:</strong>
                      <p className="inline"> You may request that we restrict the use of your personal data where:</p>
                      <ul className="list-disc pl-6 mt-1">
                          <li>Its accuracy is contested;</li>
                          <li>The processing is unlawful, but you do not wish for it to be erased;</li>
                          <li>We no longer need the data, but you require it to establish or defend a legal claim;</li>
                          <li>You object to processing and we are assessing your request.</li>
                      </ul>
                  </div>
                  <p><strong>e) Right to Object:</strong> You may object to processing based on legitimate interests, including profiling or automated decision-making. We will cease processing unless we can demonstrate compelling legitimate grounds.</p>
                  <p><strong>f) Right to Data Portability:</strong> Where processing is based on your consent or a contract and carried out by automated means, you may request that we provide your personal data in a structured, machine-readable format, or transfer it to another data controller of your choice.</p>
                  <p><strong>g) Right to Withdraw Consent:</strong> If processing is based on your consent, you may withdraw it at any time. Please note that withdrawal may limit access to certain features of the Platform.</p>
                  <p><strong>h) Right to Information on Cross-Border Transfers:</strong> You may request information about the safeguards under which your personal data is transferred outside your jurisdiction.</p>
              </div>
              
              <p className="mt-4">To exercise any of these rights, please contact us at <a href="mailto:admin@ootsav.in" className="underline hover:text-gray-600">admin@ootsav.in</a>. We will respond in accordance with applicable data protection laws. Some requests may be refused if they conflict with legal obligations or legitimate interests, and where possible, we will explain the reason.</p>
            </section>

            {/* 10. Responding to Legal Requests */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">10. Responding to Legal Requests</h2>
              <p className="mb-4">We may access, preserve, and disclose your personal information in response to lawful requests from government authorities, courts, law enforcement agencies, tribunals, or regulatory bodies when we have a good faith belief that such disclosure is required by applicable law.</p>
              <p>This includes:</p>
              <ul className="list-disc pl-6 mb-4 mt-1">
                <li>Compliance with search warrants, court orders, subpoenas, summons, or lawful investigative demands;</li>
                <li>Requests made under cooperation treaties or international legal mechanisms (e.g., Mutual Legal Assistance Treaties).</li>
              </ul>
              <p>We may also access, preserve, or share your information if we have a good faith belief that doing so is necessary to:</p>
              <ul className="list-disc pl-6 mb-4 mt-1">
                <li>Detect, prevent, or investigate fraud, illegal activity, or potential violations of our Terms of Service;</li>
                <li>Protect the rights, safety, or property of Ootsav, our users, guests, or the general public;</li>
                <li>Prevent death or imminent physical harm.</li>
              </ul>
              <p className="mb-4">We may retain data from accounts that have been disabled or terminated due to violations of our Terms for at least one (1) year, or longer where legally required, to prevent repeat abuse or enforce our platform policies.</p>
              <p>Where legally permissible, we will notify you of such disclosures. However, in some cases, we may be prohibited from doing so by law or court order.</p>
            </section>

            {/* 11. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">11. Children's Privacy</h2>
              <p className="mb-4">The Ootsav Platform is not intended for use by individuals under the age of 18. We do not knowingly collect personal information directly from children under 18.</p>
              <p className="mb-4">If we become aware that we have inadvertently collected such information without appropriate consent, we will take prompt steps to delete or anonymize it. If you believe that we may have collected personal data of a child, please contact us at <a href="mailto:admin@ootsav.in" className="underline hover:text-gray-600">admin@ootsav.in</a>.</p>
              <p className="mb-4">If you are an Account Holder submitting guest data on behalf of minors (e.g., for family events), you confirm that you are the child's parent, legal guardian, or have obtained appropriate permission to do so.</p>
              <p>Ootsav complies with applicable data protection laws concerning the collection and processing of children's data.</p>
            </section>

            {/* 12. Opting Out */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">12. Opting Out and Withdrawing Consent</h2>
              <p className="mb-4">If you have previously provided consent for the collection, use, or sharing of your personal information, you have the right to withdraw that consent at any time. Depending on the context, withdrawing consent may impact your ability to access certain features of the Platform.</p>
              <p className="mb-4">You may opt out through the following methods:</p>
              
              <div className="space-y-4">
                  <div>
                      <h3 className="font-bold">a) Marketing and Promotional Communications:</h3>
                      <p>If you have subscribed to receive marketing or promotional communications from Ootsav, you may opt out at any time by:</p>
                      <ul className="list-disc pl-6 mt-1">
                          <li>Clicking the "unsubscribe" link included in our emails, or</li>
                          <li>Contacting us at admin@ootsav.in</li>
                      </ul>
                      <p className="text-sm mt-1 italic">Even after opting out, you may still receive non-promotional communications related to your account, billing, or ongoing event activity.</p>
                  </div>
                  <div>
                      <h3 className="font-bold">b) Third-Party Integrations and Data Sharing:</h3>
                      <p>If you use third-party integrations (e.g., WhatsApp), you may manage your data-sharing preferences via:</p>
                      <ul className="list-disc pl-6 mt-1">
                          <li>Your account settings, where available, or</li>
                          <li>By contacting admin@ootsav.in</li>
                      </ul>
                      <p className="text-sm mt-1 italic">Please note that opting out of certain integrations may limit your ability to use related features, such as guest messaging or RSVP follow-ups.</p>
                  </div>
                  <div>
                      <h3 className="font-bold">c) Cookies and Tracking Technologies:</h3>
                      <p>You can manage cookie preferences and disable certain types of tracking by:</p>
                      <ul className="list-disc pl-6 mt-1">
                          <li>Adjusting your browser settings, or</li>
                          <li>Using cookie consent tools on our website</li>
                      </ul>
                      <p className="text-sm mt-1 italic">For more detailed instructions, please refer to our Cookie Policy. Disabling cookies may affect the availability or functionality of some platform features.</p>
                  </div>
                  <div>
                      <h3 className="font-bold">d) Withdrawal of Consent for Data Processing:</h3>
                      <p>Where our processing relies on your explicit consent (e.g., use of optional features, certain types of guest data), you may withdraw this consent at any time by contacting us. We will process such requests promptly, subject to any legal or operational limitations.</p>
                  </div>
              </div>
            </section>

            {/* 13. Choice of Law */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">13. Choice of Law and Dispute Resolution</h2>
              <p className="mb-4">Unless otherwise required by applicable law in your jurisdiction, any dispute, claim, or controversy arising out of or in connection with this Privacy Policy—including its interpretation, breach, termination, or validity—shall be governed by the same laws and dispute resolution mechanism outlined in our Terms of Service.</p>
              <p>This means:</p>
              <ul className="list-disc pl-6 mb-4 mt-1">
                <li>The governing law shall be the laws of India, without regard to conflict of law principles;</li>
                <li>Disputes shall be subject to the exclusive jurisdiction of the courts of Udaipur, Rajasthan, India, unless otherwise required by applicable local law;</li>
                <li>Parties may choose to pursue mediation or arbitration where mutually agreed, as set out in the Terms of Service.</li>
              </ul>
              <p>This clause does not override mandatory legal protections you may have under the laws of your place of residence.</p>
            </section>

            {/* 14. Grievance Officer */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">14. Grievance Officer</h2>
              <div className="border border-black p-6">
                <p className="mb-4">If you have any concerns, complaints, or grievances relating to this Privacy Policy, your personal data, or any aspect of our services, you may contact our Grievance Officer using the details below.</p>
                <div className="space-y-1 mb-4">
                  <p><strong>Email:</strong> admin@ootsav.in</p>
                  <p><strong>Postal:</strong> Orbit II, Udaipur, Rajasthan, India</p>
                </div>
                <p className="font-bold">To help us respond effectively, please write to us from your registered email address and include:</p>
                <ul className="list-disc pl-6 mt-2 mb-4">
                    <li>Your full name</li>
                    <li>A description of your concern or complaint</li>
                    <li>Relevant screenshots, timestamps, or reference numbers (if applicable)</li>
                </ul>
                <p className="text-sm italic">We will acknowledge your grievance within 24 hours and aim to resolve it within 15 days of receipt, as per applicable law.</p>
              </div>
            </section>

            {/* 15. Updates */}
            <section>
              <h2 className="text-2xl font-bold uppercase mb-6 inline-block">15. Updates to This Policy</h2>
              <p className="mb-4">We may update, revise, or amend this Privacy Policy from time to time at our sole discretion, with or without prior notice. Updates may reflect changes in legal requirements, operational needs, product enhancements, or data processing practices.</p>
              <p className="mb-4">When we make material changes to this Policy, we will:</p>
              <ul className="list-disc pl-6 mb-4">
                  <li>Update the "Last Updated" date at the top of the document;</li>
                  <li>Provide notice through email, in-app notifications, or on the Platform, where appropriate.</li>
              </ul>
              <p>It is your responsibility to review this Policy periodically. Your continued use of the Platform or our services after any changes have been posted constitutes your acceptance of the updated Policy.</p>
            </section>
            
            <p className="pt-8 border-t border-black mt-12 font-bold">
              Last updated on February 2, 2026
            </p>

          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;