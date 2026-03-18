import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | Provis Biolabs",
    description: "Learn how Provis Biolabs collects, uses and protects your personal information when you visit our website or engage with our services.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[#F8FAFC]">
            <Navbar />

            <section className="pt-36 pb-20 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Legal</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A8A] leading-tight mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-[#64748B] text-base mb-12">
                        Last Updated: March 11, 2026
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-sm prose prose-slate max-w-none">

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mt-0 mb-4">1. Introduction</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            Provis Biolabs Private Limited (&quot;Provis Biolabs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose and safeguard your information when you visit our website at <strong>www.provisbiolabs.com</strong> or contact us regarding our biosimilar development and Contract Development and Manufacturing Organisation (CDMO) services.
                        </p>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            By using our website, you consent to the practices described in this policy. If you do not agree with the terms of this policy, please do not access the website.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. Information We Collect</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            We may collect two types of information: personal information you voluntarily provide to us and non-personal information collected automatically when you use our website.
                        </p>
                        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Personal Information</h3>
                        <p className="text-[#475569] leading-relaxed mb-3">
                            When you fill out a contact form, send us an email, or inquire about our services, you may provide us with:
                        </p>
                        <ul className="list-disc pl-5 mb-6 text-[#475569] space-y-2">
                            <li>Your full name and job title</li>
                            <li>Company or organisation name</li>
                            <li>Email address and phone number</li>
                            <li>The nature of your inquiry or partnership interest</li>
                            <li>Any other information you choose to share with us</li>
                        </ul>
                        <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">Non-Personal / Technical Information</h3>
                        <p className="text-[#475569] leading-relaxed mb-3">
                            When you visit our website, we may automatically collect:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>IP address and approximate geographic location</li>
                            <li>Browser type and version</li>
                            <li>Pages visited, time spent on pages and referring URLs</li>
                            <li>Device type and operating system</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. How We Use Your Information</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            The information we collect is used solely for legitimate business purposes, including:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>Responding to your inquiries about our CDMO services, biosimilar pipeline, or partnership opportunities</li>
                            <li>Providing information about our products, services and scientific publications</li>
                            <li>Improving the functionality and content of our website</li>
                            <li>Sending you relevant updates or communications that you have consented to receive</li>
                            <li>Complying with applicable legal and regulatory obligations</li>
                        </ul>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            We do not sell, rent, or share your personal information with third parties for their own marketing purposes.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. Cookies and Tracking Technologies</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            Our website uses cookies — small text files stored on your device — to enhance your browsing experience and analyse website traffic. We use the following types of cookies:
                        </p>
                        <ul className="list-disc pl-5 mb-6 text-[#475569] space-y-2">
                            <li><strong>Essential Cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site, so we can improve it. We may use tools such as Google Analytics for this purpose.</li>
                            <li><strong>Preference Cookies:</strong> Allow the website to remember your settings and preferences.</li>
                        </ul>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            You can control or disable cookies through your browser settings. However, disabling certain cookies may affect the functionality of some parts of our website. For more details, please refer to our <a href="/cookie-policy" className="text-[#F26522] underline">Cookie Policy</a>.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Data Sharing and Disclosure</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            We do not share your personal information except in the following limited circumstances:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li><strong>Service Providers:</strong> We may share data with trusted third-party service providers (e.g., email hosting, website analytics) who assist us in operating our website and conducting our business, subject to confidentiality obligations.</li>
                            <li><strong>Legal Compliance:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Data Security</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            We implement appropriate administrative, technical and physical security measures to protect your personal information from unauthorised access, use, alteration, or disclosure. However, no method of transmission over the Internet is 100% secure and we cannot guarantee absolute security.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Retention of Data</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, to comply with our legal obligations, or to resolve any disputes. When your information is no longer needed, we securely delete or anonymise it.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">8. Third-Party Links</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            Our website may contain links to external websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">9. Your Rights</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of any inaccurate information</li>
                            <li>Request deletion of your personal data, where applicable</li>
                            <li>Withdraw consent for communications at any time by contacting us or using the unsubscribe option in our emails</li>
                            <li>Lodge a complaint with the relevant data protection authority if you believe your rights have been violated</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">10. Changes to This Policy</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The revised policy will be posted on this page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">11. Contact Us</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:
                        </p>
                        <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0] mb-8">
                            <p className="text-[#475569] font-semibold mb-1">Provis Biolabs Private Limited</p>
                            <p className="text-[#475569] mb-1">Email: <a href="mailto:bd@provisbiolabs.com" className="text-[#F26522]">bd@provisbiolabs.com</a></p>
                            <p className="text-[#475569] mb-1">Phone (India): +91 9059284828</p>
                            <p className="text-[#475569]">Phone (USA): +1 (650) 996-4951</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
