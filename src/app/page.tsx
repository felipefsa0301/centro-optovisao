"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Calendar,
  Clock,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Eye,
  Glasses,
  Activity,
  UserCheck,
  MessageCircle,
  ArrowRight,
  Award,
  HeartHandshake,
  Menu,
  X,
  Building2,
  Sparkles,
  Monitor,
  SunMedium,
  ScanEye,
  Plus,
  Minus
} from "lucide-react";

// Ícone SVG personalizado do Instagram
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Configuração oficial de contato - Centro OptoVisão
const PHONE_DISPLAY = "(75) 99180-8866";
const WHATSAPP_NUMBER = "5575991808866";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20no%20Centro%20OptoVis%C3%A3o.`;
const INSTAGRAM_URL = "https://instagram.com/centrooptovisao";
const INSTAGRAM_HANDLE = "@centrooptovisao";

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const symptoms = [
    {
      icon: Activity,
      title: "Dor de cabeça no fim do dia",
      desc: "Cefaleia frontal ou peso ao redor dos olhos após ler, estudar ou trabalhar indica esforço visual contínuo.",
      symptomMsg: "Olá! Tenho sentido dores de cabeça ao final do dia e gostaria de agendar uma avaliação visual"
    },
    {
      icon: Monitor,
      title: "Cansaço em frente às telas",
      desc: "Ardência, visão turva temporária ou olhos secos ao usar celular e computador por longos períodos.",
      symptomMsg: "Olá! Sinto muito cansaço visual no celular/computador e gostaria de agendar uma consulta"
    },
    {
      icon: ScanEye,
      title: "Dificuldade para perto ou longe",
      desc: "Precisar afastar o celular para ler letras pequenas ou apertar os olhos para enxergar placas e rostos.",
      symptomMsg: "Olá! Estou com dificuldade para focar de perto/longe e gostaria de avaliar meu grau"
    },
    {
      icon: SunMedium,
      title: "Sensibilidade à luz e reflexos",
      desc: "Incômodo excessivo com a claridade ou dificuldade para enxergar com nitidez ao dirigir à noite.",
      symptomMsg: "Olá! Tenho sentido sensibilidade à luz e gostaria de agendar uma avaliação optométrica"
    }
  ];

  const services = [
    {
      num: "01",
      icon: Eye,
      title: "Medida da Acuidade Visual",
      desc: "Avaliação precisa da sua capacidade de enxergar detalhes de perto e de longe, identificando precocemente qualquer redução na nitidez visual.",
      tag: "Nitidez e Foco",
      message: "Gostaria de agendar uma Medida da Acuidade Visual"
    },
    {
      num: "02",
      icon: Glasses,
      title: "Exame de Refração (Grau dos Óculos)",
      desc: "Determinação computadorizada e subjetiva do grau exato para correção de miopia, hipermetropia, astigmatismo e presbiopia (vista cansada).",
      tag: "Prescrição Exata",
      message: "Gostaria de agendar meu Exame de Refração (Grau dos Óculos)"
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Avaliação de Fundo de Olho",
      desc: "Inspeção preventiva das estruturas internas oculares (retina, vasos e nervo óptico) através de retinoscopia e oftalmoscopia para triagem de saúde.",
      tag: "Prevenção Ocular",
      message: "Gostaria de agendar uma Avaliação Preventiva com Fundo de Olho"
    },
    {
      num: "04",
      icon: Activity,
      title: "Testes Motores e Sensoriais",
      desc: "Análise completa do alinhamento ocular, motilidade, convergência e visão binocular para eliminar fadiga visual e dores de cabeça.",
      tag: "Conforto Visual",
      message: "Gostaria de agendar uma Avaliação com Testes Motores e Sensoriais"
    }
  ];

  const journeySteps = [
    {
      step: "Etapa 01",
      title: "Escuta Atenta & Anamnese",
      desc: "Conversamos sem pressa sobre a sua rotina, hábitos em telas, histórico de saúde e desconfortos visuais antes de iniciar os testes."
    },
    {
      step: "Etapa 02",
      title: "Exame Computadorizado & Funcional",
      desc: "Realizamos a leitura objetiva e o refinamento subjetivo lente a lente, além de avaliar a coordenação muscular e o fundo de olho."
    },
    {
      step: "Etapa 03",
      title: "Prescrição Segura & Orientação",
      desc: "Você recebe sua receita detalhada, entende exatamente o que seus olhos precisam e conta com nosso acompanhamento na adaptação."
    }
  ];

  const differentiators = [
    {
      icon: Award,
      title: "Bacharel em Optometria",
      desc: "Atendimento realizado por profissional com formação superior universitária, especialista no cuidado primário da visão."
    },
    {
      icon: Sparkles,
      title: "Tecnologia Computadorizada",
      desc: "Equipamentos ópticos modernos que garantem medições precisas e conforto na adaptação dos seus novos óculos."
    },
    {
      icon: HeartHandshake,
      title: "Tempo Dedicado a Você",
      desc: "Consultas sem pressa, com escuta atenta às suas queixas, rotina de trabalho em telas e histórico visual."
    },
    {
      icon: UserCheck,
      title: "Cuidado Integrado e Ético",
      desc: "Triagem preventiva rigorosa: ao identificar qualquer sinal patológico, encaminhamos imediatamente ao médico oftalmologista."
    }
  ];

  const faqs = [
    {
      q: "O que faz um Bacharel em Optometria?",
      a: "O Bacharel em Optometria é o profissional da área da saúde, com formação superior universitária, especialista na atenção primária da visão. Ele realiza exames completos de refração (prescrição do grau de óculos), avalia a função motora e sensorial dos olhos e faz a triagem preventiva da saúde ocular, encaminhando ao médico oftalmologista caso identifique sinais de patologias oculares."
    },
    {
      q: "O exame já inclui a receita para fazer meus óculos?",
      a: "Sim! Ao final da Avaliação Visual Completa, após os testes computadorizados e subjetivos de refração, você já recebe a sua prescrição óptica (receita de óculos) detalhada e personalizada para a sua rotina."
    },
    {
      q: "Quanto tempo dura a consulta no Centro OptoVisão?",
      a: "Nossas consultas duram em média de 30 a 45 minutos. Prezamos por um atendimento calmo, humanizado e minucioso, testando todas as funções visuais para que você tenha 100% de conforto e segurança com seus novos óculos."
    },
    {
      q: "Atendem crianças, adultos e idosos?",
      a: "Sim, realizamos avaliações visuais personalizadas para diferentes faixas etárias em Santo Estêvão, adaptando os testes motores, sensoriais e de acuidade visual conforme a necessidade de cada paciente."
    },
    {
      q: "Onde fica o consultório e quais cidades são atendidas?",
      a: "O endereço principal do Centro OptoVisão fica localizado na Praça 7 de Setembro em Santo Estêvão - BA. Além do consultório fixo, a optometrista realiza atendimentos periódicos agendados nas cidades vizinhas: Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe. Consulte pelo WhatsApp as próximas datas para a sua cidade."
    },
    {
      q: "Como faço para agendar minha consulta?",
      a: "O agendamento é rápido e direto pelo nosso WhatsApp no número (75) 99180-8866 ou através do nosso Instagram oficial @centrooptovisao. Basta clicar em qualquer botão de agendamento nesta página para falar com nossa equipe."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800">
      {/* Barra de Aviso Superior */}
      <div className="bg-[#0F224A] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-center md:text-left">
            <span className="flex items-center gap-1.5 font-medium whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" /> Praça 7 de Setembro — Santo Estêvão - BA
            </span>
            <span className="hidden xl:inline-block text-slate-500">•</span>
            <span className="text-slate-300 text-xs">
              Atendimentos também em Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga o Centro OptoVisão no Instagram"
              className="inline-flex items-center gap-1.5 py-1 px-2 text-slate-300 hover:text-white font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              <InstagramIcon className="w-3.5 h-3.5 shrink-0 text-pink-400" />
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
            <span className="text-slate-600">•</span>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-1 px-2 text-sky-300 hover:text-white font-medium transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Cabeçalho Fixo Editorial */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="relative w-40 sm:w-52 h-12 sm:h-14">
              <Image
                src="/images/logo.png"
                alt="Centro OptoVisão"
                fill
                sizes="(max-width: 640px) 160px, 208px"
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#sinais" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Sinais de Alerta
            </a>
            <a href="#sobre" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Sobre a Clínica
            </a>
            <a href="#exames" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Exames
            </a>
            <a href="#jornada" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Como Funciona
            </a>
            <a href="#faq" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Dúvidas
            </a>
          </nav>

          {/* Ações Cabeçalho */}
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#19336A] hover:bg-[#0F224A] text-white px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs transition-all duration-200 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#19336A] min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Agendar Consulta</span>
            </a>

            {/* Botão Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-stone-200/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Colapsável */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F6] px-4 py-4 space-y-1.5 shadow-lg">
            <a
              href="#sinais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-stone-200/40 rounded-xl"
            >
              Quando Procurar
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-stone-200/40 rounded-xl"
            >
              Sobre a Clínica
            </a>
            <a
              href="#exames"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-stone-200/40 rounded-xl"
            >
              Exames e Avaliações
            </a>
            <a
              href="#jornada"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-stone-200/40 rounded-xl"
            >
              Como Funciona a Consulta
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-stone-200/40 rounded-xl"
            >
              Perguntas Frequentes
            </a>
          </div>
        )}
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Hero Section - Editorial Acolhedor & Humanizado */}
        <section className="relative overflow-hidden bg-[#FAF9F6] pt-10 pb-16 sm:pt-16 sm:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* Selo Editorial */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F3F1EC] border border-stone-300/70 text-[#19336A] text-xs font-semibold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>Saúde Visual Primária em Santo Estêvão — BA</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-[#19336A] tracking-tight leading-[1.12]">
                  Sua visão nítida,{" "}
                  <span className="font-editorial italic font-normal text-sky-700 text-[1.14em] pr-1">
                    confortável
                  </span>{" "}
                  e protegida todos os dias.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                  No <strong className="text-slate-800 font-semibold">Centro OptoVisão</strong>, unimos precisão computadorizada e escuta acolhedora. Cada exame é conduzido sem pressa por Bacharel em Optometria para entregar a receita exata que seus olhos merecem.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 rounded-full text-base font-semibold shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[50px]"
                  >
                    <MessageCircle className="w-5 h-5 text-white shrink-0" />
                    <span>Agendar pelo WhatsApp</span>
                  </a>

                  <a
                    href="#exames"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3F1EC] text-[#19336A] border border-stone-300 px-6 py-4 rounded-full text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[50px]"
                  >
                    <span>Conhecer Avaliações</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                </div>

                {/* Pilares Editoriais Sem Caixinhas Repetitivas */}
                <div className="pt-7 mt-2 border-t border-stone-200/90 grid grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <div className="font-editorial italic text-2xl sm:text-3xl text-[#19336A]">
                      Nível Superior
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Bacharel em Optometria
                    </p>
                  </div>
                  <div className="border-l border-stone-200/90 pl-4 sm:pl-6">
                    <div className="font-editorial italic text-2xl sm:text-3xl text-[#19336A]">
                      30 a 45 min
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Tempo dedicado e sem filas
                    </p>
                  </div>
                  <div className="border-l border-stone-200/90 pl-4 sm:pl-6">
                    <div className="font-editorial italic text-2xl sm:text-3xl text-[#19336A]">
                      100% Digital
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Refração de alta precisão
                    </p>
                  </div>
                </div>
              </div>

              {/* Fotografia Editorial com Moldura Orgânica e Vidro Fosco */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Fundo orgânico deslocado em tom areia/marfim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-[2rem] bg-[#E8E4DC] border border-stone-300/60"
                  />

                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-100 shadow-md">
                    <Image
                      src="/images/hero-optometria.jpg"
                      alt="Optometrista realizando exame de vista computadorizado no Centro OptoVisão em Santo Estêvão"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F224A]/75 via-[#0F224A]/10 to-transparent" />

                    {/* Selo Flutuante em Vidro Fosco */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-white/90 backdrop-blur-md p-4 shadow-sm border border-white/80">
                      <div className="flex items-start gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#19336A] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-5 h-5 text-sky-300" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#19336A] leading-snug">
                            Consultório Planejado em Santo Estêvão
                          </p>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            Equipamentos calibrados e atendimento individualizado com hora marcada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faixa Editorial Marinho Profundo - Sinais de Alerta */}
        <section id="sinais" className="py-16 sm:py-24 bg-[#0F224A] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-300">
                  Prevenção e Bem-Estar Diário
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Quando foi a sua última{" "}
                  <span className="font-editorial italic font-normal text-sky-300 text-[1.14em]">
                    consulta visual?
                  </span>
                </h2>
              </div>
              <p className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed">
                Muitas vezes nos acostumamos com pequenos desconfortos diários sem perceber que nossos olhos estão fazendo esforço excessivo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {symptoms.map((item, idx) => {
                const Icon = item.icon;
                const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${item.symptomMsg} no Centro OptoVisão.`)}`;
                return (
                  <div
                    key={idx}
                    className="bg-[#19336A]/80 hover:bg-[#19336A] border border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-colors duration-200"
                  >
                    <div className="space-y-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-sky-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-white/10">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] py-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded-md"
                      >
                        <span>Sinto isso • Avaliar agora</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sobre a Clínica + Bento Grid Assimétrico */}
        <section id="sobre" className="py-16 sm:py-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                  Sobre o Centro OptoVisão
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#19336A] tracking-tight leading-tight">
                  Compromisso ético com a sua{" "}
                  <span className="font-editorial italic font-normal text-sky-700 text-[1.14em]">
                    nitidez diária
                  </span>
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  O <strong className="text-slate-800">Centro OptoVisão</strong> é dedicado aos cuidados primários da visão em Santo Estêvão, com atendimento conduzido por <strong className="text-slate-800">Bacharel em Optometria</strong> (graduação de nível superior), em plena consonância com a legislação e jurisprudência brasileiras (STF - ADPF 131 e CBO 2263-05).
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  O optometrista é o especialista responsável por avaliar o sistema visual, identificar disfunções de refração e prescrever óculos com exatidão. Atuamos com ética rigorosa: nosso papel não substitui a oftalmologia médica (cirurgias e tratamento de patologias), promovendo uma triagem segura e encaminhamento ágil sempre que necessário.
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {differentiators.map((diff, idx) => {
                    const Icon = diff.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F3F1EC]/80 border border-stone-200/80">
                        <div className="p-2 rounded-xl bg-white text-[#19336A] shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-[#19336A]">{diff.title}</h3>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{diff.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bento Grid Assimétrico */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-4">
                {/* Card Principal Bento - Marinho */}
                <div className="sm:col-span-7 bg-[#19336A] text-white p-7 rounded-3xl flex flex-col justify-between space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-300 text-xs font-medium w-fit">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Garantia de Precisão</span>
                  </div>
                  <div className="space-y-2">
                    <div className="font-editorial italic text-5xl text-sky-300">
                      100%
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      Adaptação Acompanhada
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                      Acompanhamento dedicado desde a prescrição da receita até a perfeita adaptação das lentes dos seus novos óculos.
                    </p>
                  </div>
                </div>

                {/* Card Vertical Bento - Areia */}
                <div className="sm:col-span-5 bg-[#F3F1EC] border border-stone-200/90 p-6 rounded-3xl flex flex-col justify-between space-y-5">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#19336A] shadow-xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="font-editorial italic text-3xl text-[#19336A]">
                      Hora Marcada
                    </div>
                    <h3 className="text-base font-bold text-slate-800">
                      Sem Filas de Espera
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Horário reservado exclusivamente para você, garantindo tranquilidade em cada teste.
                    </p>
                  </div>
                </div>

                {/* Card Horizontal Largo Bento - Branco Editorial */}
                <div className="sm:col-span-12 bg-white border border-stone-200/90 p-6 sm:p-7 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 shadow-xs">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-sky-50 border border-sky-100 rounded-2xl text-[#19336A] shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#19336A]">
                        Endereço Principal na Praça 7 de Setembro — Santo Estêvão - BA
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                        Consultório climatizado, moderno e acessível no coração de Santo Estêvão. Além disso, a optometrista realiza atendimentos periódicos e avaliações em <strong>Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe</strong>.
                      </p>
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 min-h-[44px] px-4 py-2.5 rounded-full bg-[#F3F1EC] hover:bg-stone-200/80 text-[#19336A] text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Consultar agenda</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exames - Vitrine Editorial */}
        <section id="exames" className="py-16 sm:py-24 bg-[#F3F1EC]/70 border-t border-b border-stone-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Especialidades do Consultório
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#19336A] tracking-tight">
                Avaliação Visual{" "}
                <span className="font-editorial italic font-normal text-sky-700 text-[1.14em]">
                  Completa
                </span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Cada consulta reúne quatro etapas essenciais de investigação óptica e funcional para que seus óculos entreguem nitidez imediata.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((item, idx) => {
                const Icon = item.icon;
                const serviceLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! ${item.message} no Centro OptoVisão em Santo Estêvão.`)}`;
                return (
                  <div
                    key={idx}
                    className="bg-white p-7 sm:p-8 rounded-3xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-editorial italic text-3xl text-slate-400">
                            {item.num}
                          </span>
                          <div className="p-2.5 bg-[#FAF9F6] border border-stone-200/80 rounded-xl text-[#19336A]">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-[#19336A] border border-sky-100">
                          {item.tag}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#19336A] tracking-tight pt-1">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-stone-100 flex items-center justify-between">
                      <a
                        href={serviceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] py-2 px-1 text-sm font-semibold text-[#19336A] hover:text-sky-700 inline-flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md"
                      >
                        <span>Solicitar agendamento deste exame</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cuidado Integrado Banner */}
            <div className="mt-10 bg-white border border-stone-200/90 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2.5 text-[#19336A] font-bold text-lg">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Cuidado Integrado e Triagem Preventiva</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Caso seja identificada qualquer alteração que exija tratamento médico ou cirúrgico durante o exame, realizamos o encaminhamento documentado ao médico especialista.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-[#19336A] hover:bg-[#0F224A] text-white font-semibold px-6 py-3.5 rounded-full text-sm shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#19336A] min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-sky-300" />
                <span>Tirar Dúvidas no WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Como Funciona Sua Consulta - Jornada em 3 Passos */}
        <section id="jornada" className="py-16 sm:py-24 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Experiência do Paciente
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#19336A] tracking-tight">
                Como funciona a sua{" "}
                <span className="font-editorial italic font-normal text-sky-700 text-[1.14em]">
                  consulta
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Um protocolo pensado para que você se sinta acolhido, seguro e bem informado do início ao fim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {journeySteps.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-7 rounded-3xl border border-stone-200/80 shadow-xs space-y-4 relative"
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F3F1EC] text-[#19336A] font-editorial italic text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#19336A]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section Editorial */}
        <section id="faq" className="py-16 sm:py-24 bg-[#F3F1EC]/60 border-t border-stone-200/80">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Perguntas Frequentes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#19336A] tracking-tight">
                Tire suas dúvidas antes de{" "}
                <span className="font-editorial italic font-normal text-sky-700 text-[1.14em]">
                  agendar
                </span>
              </h2>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-colors"
                  >
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[52px]"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <span className="w-7 h-7 rounded-full bg-[#FAF9F6] border border-stone-200 flex items-center justify-center shrink-0 text-[#19336A]">
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-stone-100 pt-3.5"
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Final Editorial */}
        <section className="py-16 sm:py-20 bg-[#FAF9F6] px-4 sm:px-6">
          <div className="max-w-5xl mx-auto bg-[#0F224A] rounded-[2.25rem] p-8 sm:p-14 text-center text-white space-y-6 border border-white/10 shadow-md">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 rounded-full text-xs font-medium text-sky-300">
              <Eye className="w-4 h-4" />
              <span>Atendimento em Santo Estêvão — BA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
              Pronto para enxergar com total{" "}
              <span className="font-editorial italic font-normal text-sky-300 text-[1.12em]">
                nitidez e conforto?
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Reserve seu horário pelo WhatsApp. Nossa recepção encontra o melhor dia e turno para a sua rotina.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-semibold shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[52px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Consulta pelo WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-slate-400">
              Seg a Sex: 08h às 18h • Sáb: 08h às 12h • Hora marcada sem filas
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-[#FAF9F6] border-t border-stone-200/90 py-12 text-slate-600 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="relative w-36 h-11">
              <Image
                src="/images/logo.png"
                alt="Centro OptoVisão"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-500 text-center md:text-left max-w-sm">
              Centro OptoVisão — Praça 7 de Setembro, Santo Estêvão - BA.
              <br />
              Atendimentos também em Coração de Maria, Alagoinhas, Candeias e Conceição do Jacuípe.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold pt-1">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-pink-700 hover:text-pink-800 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-600">
            <a href="#sinais" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Sinais de Alerta</a>
            <a href="#sobre" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Sobre</a>
            <a href="#exames" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Exames</a>
            <a href="#jornada" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Como Funciona</a>
            <a href="#faq" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Dúvidas</a>
          </nav>

          <div className="text-xs text-slate-500 text-center md:text-right">
            © 2026 Centro OptoVisão. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Botão Flutuante Discreto de WhatsApp */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-md border border-white/20 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[48px]"
      >
        <MessageCircle className="w-5 h-5 shrink-0" />
        <span className="text-xs sm:text-sm font-semibold pr-1">Agendar agora</span>
      </a>
    </div>
  );
}
