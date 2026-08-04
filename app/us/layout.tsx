import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.provisbiolabs.com'),
  alternates: {
    canonical: 'https://www.provisbiolabs.com/us',
    languages: {
      'en-US': 'https://www.provisbiolabs.com/us',
      'en-IN': 'https://www.provisbiolabs.com',
      'en-GB': 'https://www.provisbiolabs.com', 
      'x-default': 'https://www.provisbiolabs.com',
    }
  }
};

export default function USLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="us-market-wrapper relative bg-white">
      {children}
    </div>
  );
}
