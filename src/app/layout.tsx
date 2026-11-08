import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://centrooptovisao.com.br"),
  title: "Centro OptoVisão | Exame de Vista e Optometria em Santo Estêvão - BA",
  description:
    "Avaliação visual completa em Santo Estêvão: acuidade visual, refração computadorizada (grau de óculos), fundo de olho e testes motores com Bacharel em Optometria.",
  keywords: [
    "optometrista santo estevao",
    "exame de vista santo estevao ba",
    "clinica de olhos santo estevao",
    "consulta optometrica santo estevao",
    "grau de oculos santo estevao",
    "Centro OptoVisão",
    "saúde visual bahia",
  ],
  alternates: {
    canonical: "https://centrooptovisao.com.br",
  },
  openGraph: {
    title: "Centro OptoVisão | Saúde Visual e Optometria em Santo Estêvão",
    description:
      "Atendimento humanizado com Bacharel em Optometria. Agende sua Avaliação Visual Completa em Santo Estêvão - BA.",
    url: "https://centrooptovisao.com.br",
    siteName: "Centro OptoVisão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Centro OptoVisão - Santo Estêvão",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  name: "Centro OptoVisão",
  image: "https://centrooptovisao.com.br/images/logo.png",
  description:
    "Centro especializado em cuidados primários da saúde visual, refração computadorizada para óculos e avaliação funcional em Santo Estêvão - BA. Atendimento por Bacharel em Optometria.",
  telephone: "+55-11-99999-9999",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santo Estêvão",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.4303,
    longitude: -39.2514,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  medicalSpecialty: "Optometry",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="antialiased text-slate-800 bg-[#FAF9F6]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF9F6] selection:bg-[#19336A] selection:text-white">
        {children}
      </body>
    </html>
  );
}
