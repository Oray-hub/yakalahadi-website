import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'YakalaHadi - Fırsatları Kaçırma',
  description: 'YakalaHadi ile gerçek zamanlı fırsat ve kampanyaları kaçırma. Hemen indir, fırsatları yakala!',
  robots: {
    index: false,
    follow: false,
  },
};

export default function QRLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#6A0DAD" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
