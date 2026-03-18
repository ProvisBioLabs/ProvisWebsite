import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | Provis Biolabs',
    description: 'Learn about how Provis Biolabs uses cookies and similar technologies to enhance your experience.',
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-white pt-32 pb-24 font-outfit">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] mb-4">Cookie Policy</h1>
                    <p className="text-[#64748B] text-lg">Last Updated: March 2024</p>
                </div>

                <div className="prose prose-lg prose-slate max-w-none text-[#475569]">
                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">1. Introduction</h2>
                    <p className="mb-6">
                        Provis Biolabs Private Limited ("we", "our", or "us") uses cookies and similar technologies on our website. This Cookie Policy explains what cookies are, how we use them and your choices regarding our use of cookies, in compliance with the General Data Protection Regulation (GDPR) and other applicable data privacy laws.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">2. What Are Cookies?</h2>
                    <p className="mb-6">
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information and personalized experiences.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">3. Types of Cookies We Use</h2>
                    <div className="space-y-6 mb-8">
                        <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0]">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Essential Cookies</h3>
                            <p>These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.</p>
                        </div>

                        <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0]">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Analytical/Performance Cookies</h3>
                            <p>These cookies allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</p>
                        </div>

                        <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-[#E2E8F0]">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">Functionality Cookies</h3>
                            <p>These are used to recognize you when you return to our website. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">4. Managing Your Cookie Preferences</h2>
                    <p className="mb-6">
                        You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Banner that appears upon your first visit to our site.
                        Additionally, most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#F26522] hover:underline">www.allaboutcookies.org</a>.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">5. Updates to this Policy</h2>
                    <p className="mb-6">
                        We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>

                    <h2 className="text-2xl font-bold text-[#1E3A8A] mt-8 mb-4">6. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:bd@provisbiolabs.com" className="text-[#F26522] hover:underline">bd@provisbiolabs.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
