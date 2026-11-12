import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://centrooptovisao.com.br"),
  title: "Centro OptoVisão | Exame de Vista e Optometria em Santo Estêvão e Região",
  description:
    "Avaliação visual completa no Centro OptoVisão: acuidade visual, refração computadorizada (grau de óculos) e cuidados com Bacharel em Optometria. Atendimento na Praça 7 de Setembro em Santo Estêvão e também em Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe.",
  keywords: [
    "optometrista santo estevao",
    "exame de vista santo estevao ba",
    "clinica de olhos santo estevao",
    "consulta optometrica santo estevao",
    "grau de oculos santo estevao",
    "optometria coracao de maria",
    "optometria alagoinhas",
    "optometria candeias",
    "optometria conceicao do jacuipe",
    "Centro OptoVisão",
    "saúde visual bahia",
  ],
  alternates: {
    canonical: "https://www.centrooptovisao.com.br",
  },
  openGraph: {
    title: "Centro OptoVisão | Saúde Visual e Optometria em Santo Estêvão e Região",
    description:
      "Atendimento humanizado com Bacharel em Optometria. Consultório na Praça 7 de Setembro (Santo Estêvão) e atendimentos em Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe.",
    url: "https://www.centrooptovisao.com.br",
    siteName: "Centro OptoVisão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.centrooptovisao.com.br/images/og-image.jpg",
        secureUrl: "https://www.centrooptovisao.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Centro OptoVisão - Santo Estêvão",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Centro OptoVisão | Saúde Visual e Optometria",
    description:
      "Atendimento humanizado com Bacharel em Optometria em Santo Estêvão e região.",
    images: ["https://www.centrooptovisao.com.br/images/og-image.jpg"],
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
    "Centro especializado em cuidados primários da saúde visual, refração computadorizada para óculos e avaliação funcional na Praça 7 de Setembro em Santo Estêvão - BA, com atendimentos também em Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe. Atendimento por Bacharel em Optometria.",
  telephone: "+55-75-99180-8866",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Praça 7 de Setembro",
    addressLocality: "Santo Estêvão",
    addressRegion: "BA",
    addressCountry: "BR",
  },
  sameAs: [
    "https://instagram.com/centrooptovisao"
  ],
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
