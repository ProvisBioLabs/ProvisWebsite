import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
    title: 'Terms and Conditions | Provis Biolabs',
    description: 'Terms and conditions governing the use of the Provis Biolabs website and services.',
};

export default function TermsPage() {
    return (
        <main className="bg-[#F8FAFC]">
            <Navbar />

            <section className="pt-36 pb-20 relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F26522] to-[#FF8C55]" />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-sm font-bold tracking-widest uppercase text-[#F26522] mb-3">Legal</p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A8A] leading-tight mb-4">
                        Terms and Conditions
                    </h1>
                    <p className="text-[#64748B] text-base mb-12">
                        Last Updated: March 11, 2026
                    </p>

                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#E2E8F0] shadow-sm">

                        <p className="text-[#475569] leading-relaxed mb-8 text-base">
                            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website operated by <strong>Provis Biolabs Private Limited</strong> (&quot;Provis Biolabs&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) at <strong>www.provisbiolabs.com</strong>. By accessing or using this website, you agree to be bound by these Terms. If you do not agree, please discontinue use of this website immediately.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mt-0 mb-4">1. About Provis Biolabs</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            Provis Biolabs Private Limited is a biopharmaceutical company headquartered in India, specialising in biosimilar development and offering Contract Development and Manufacturing Organisation (CDMO) services. The content on this website is intended for informational purposes related to our scientific capabilities, biosimilar pipeline, regulatory expertise, and partnership opportunities.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">2. Use of This Website</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others. Specifically, you must not:
                        </p>
                        <ul className="list-disc pl-5 mb-8 text-[#475569] space-y-2">
                            <li>Use the website in any way that violates applicable local, national, or international laws or regulations</li>
                            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
                            <li>Attempt to gain unauthorised access to any part of the website or its related systems or servers</li>
                            <li>Reproduce, duplicate, scrape, or exploit any part of the website for commercial purposes without our express written consent</li>
                            <li>Introduce viruses, malware, or any other harmful code to our website or its infrastructure</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">3. Intellectual Property</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            All content on this website — including but not limited to text, graphics, logos, images, data, and scientific information — is the intellectual property of Provis Biolabs Private Limited or its licensors and is protected under applicable copyright and intellectual property laws.
                        </p>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            You may view and print pages from this website for personal, non-commercial use only. Any other use, including reproduction, modification, distribution, or transmission of any content, requires prior written permission from Provis Biolabs.
                        </p>
                        <div className="bg-[#1E3A8A] text-white p-6 rounded-2xl mt-4 mb-8">
                            <p className="font-bold text-lg mb-2">© 2026 Provis Biolabs Private Limited. All rights reserved.</p>
                            <p className="text-white/80 leading-relaxed text-sm">
                                Unauthorised reproduction or use of any content from this website in violation of these Terms may result in civil or criminal legal action.
                            </p>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">4. Trademarks</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            The Provis Biolabs name, logo, and all related product or service names are trademarks or registered trademarks of Provis Biolabs Private Limited. Third-party trademarks referenced on this website belong to their respective owners. Nothing on this website grants any licence or right to use any trademark without the express written permission of the owner.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">5. Disclaimer of Warranties</h2>
                        <p className="text-[#475569] leading-relaxed mb-4">
                            The information on this website is provided for general informational purposes only. While we strive to keep all content accurate and up to date, Provis Biolabs makes no representations or warranties of any kind, express or implied, regarding:
                        </p>
                        <ul className="list-disc pl-5 mb-6 text-[#475569] space-y-2">
                            <li>The accuracy, completeness, or timeliness of the content</li>
                            <li>The suitability of our products or services for any particular purpose</li>
                            <li>The uninterrupted or error-free operation of this website</li>
                        </ul>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            Nothing on this website constitutes medical, regulatory, legal, or investment advice. For specific professional guidance, please contact us directly.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">6. Limitation of Liability</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            To the fullest extent permitted by applicable law, Provis Biolabs shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of, or inability to use, this website or any content therein. This includes, but is not limited to, loss of data, loss of business, or financial loss.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">7. Third-Party Links</h2>
                        <div className="space-y-4 mb-8">
                            <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                                <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">Links to External Sites</h3>
                                <p className="leading-relaxed text-[#475569]">
                                    This website may contain links to third-party websites for your convenience. These links do not constitute an endorsement by Provis Biolabs of the content, products, or services offered by those sites. We have no control over, and accept no responsibility for, external websites.
                                </p>
                            </div>
                            <div className="p-6 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
                                <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">Linking to Our Website</h3>
                                <p className="leading-relaxed text-[#475569]">
                                    You may link to our homepage provided you do so in a way that is fair, legal, and does not damage our reputation. You must not link in a way that suggests any form of association, approval, or endorsement without our prior written consent.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">8. Privacy</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            Your use of this website is also governed by our <a href="/privacy-policy" className="text-[#F26522] underline">Privacy Policy</a>, which is incorporated into these Terms by reference. Please review the Privacy Policy to understand our data practices.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">9. Modifications to These Terms</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            Provis Biolabs reserves the right to update or modify these Terms at any time without prior notice. Any changes will be effective immediately upon posting on this page, with an updated &quot;Last Updated&quot; date. Your continued use of the website after any such changes constitutes your acceptance of the revised Terms.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">10. Governing Law and Jurisdiction</h2>
                        <p className="text-[#475569] leading-relaxed mb-8">
                            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms or the use of this website shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana, India.
                        </p>

                        <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4">11. Contact Us</h2>
                        <p className="text-[#475569] leading-relaxed mb-6">
                            If you have any questions about these Terms and Conditions, please reach out to us:
                        </p>
                        <div className="bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0] mb-4">
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
