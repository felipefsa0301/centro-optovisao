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
  HelpCircle,
  ArrowRight,
  Award,
  HeartHandshake,
  Menu,
  X,
  Building2,
  Sparkles
} from "lucide-react";

// Configuração oficial de contato - Centro OptoVisão Santo Estêvão - BA
const WHATSAPP_NUMBER = "5575999999999";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20no%20Centro%20OptoVis%C3%A3o%20em%20Santo%20Est%C3%AAv%C3%A3o.`;

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const services = [
    {
      title: "Acuidade Visual",
      desc: "Análise minuciosa da nitidez da sua visão para perto e longe, identificando os primeiros sinais de fadiga ou diminuição da resolução visual.",
      icon: Eye,
      tag: "Teste de Nitidez",
      message: "Gostaria de agendar uma avaliação de Acuidade Visual",
    },
    {
      title: "Refração Computadorizada",
      desc: "Medição exata da compensação óptica para miopia, astigmatismo, hipermetropia e presbiopia, garantindo conforto milimétrico nos seus novos óculos.",
      icon: Glasses,
      tag: "Prescrição de Grau",
      message: "Gostaria de agendar o exame de Refração para prescrição de óculos",
    },
    {
      title: "Fundo de Olho Preventivo",
      desc: "Inspeção cuidadosa e não invasiva das estruturas internas do olho e da retina, essencial para a saúde ocular preventiva.",
      icon: Activity,
      tag: "Saúde Interna",
      message: "Gostaria de agendar a avaliação de Fundo de Olho",
    },
    {
      title: "Testes Motores e Visão Binocular",
      desc: "Avaliação da convergência e alinhamento dos olhos ao trabalhar em conjunto. Fundamental para quem trabalha longas horas em computadores e telas.",
      icon: HeartHandshake,
      tag: "Conforto em Telas",
      message: "Gostaria de agendar a avaliação de Testes Motores e Visão Binocular",
    },
  ];

  const differentiators = [
    {
      icon: Award,
      title: "Bacharel em Optometria",
      desc: "Profissional de nível superior com formação científica rigorosa, legalmente habilitado no Brasil para a atenção primária da visão (STF - ADPF 131 e CBO 2263-05).",
    },
    {
      icon: Sparkles,
      title: "Equipamentos Computadorizados",
      desc: "Tecnologia de ponta para diagnósticos confiáveis, testes rápidos e prescrições com precisão máxima para o seu grau.",
    },
    {
      icon: UserCheck,
      title: "Atendimento com Tempo Dedicado",
      desc: "Consultas individuais, sem pressa e com escuta atenta sobre sua rotina, iluminação de trabalho e queixas do dia a dia.",
    },
    {
      icon: ShieldCheck,
      title: "Cuidado Integrado e Ético",
      desc: "Triagem responsável e encaminhamento seguro a médicos oftalmologistas caso seja identificada qualquer alteração patológica.",
    },
  ];

  const faqs = [
    {
      q: "Qual a diferença entre o Optometrista e o Oftalmologista?",
      a: "O Optometrista é o profissional de nível superior (Bacharel em Optometria) focado na saúde visual primária: ele avalia a nitidez, o sistema refrativo (grau dos olhos) e o funcionamento binocular, prescrevendo a compensação óptica em óculos de grau. O Oftalmologista é o médico cirurgião especialista em patologias oculares, intervenções cirúrgicas e tratamentos medicamentosos. Atuamos de forma complementar e responsável: detectada qualquer alteração clínica, realizamos a triagem preventiva e o encaminhamento ao médico.",
    },
    {
      q: "O exame realizado pelo Optometrista é reconhecido pela lei brasileira?",
      a: "Sim. A profissão é reconhecida pelo Ministério do Trabalho (CBO 2263-05) e reafirmada pelo Supremo Tribunal Federal (STF - ADPF 131), assegurando aos profissionais graduados plena habilitação legal para consultas visuais primárias, refração e prescrição de óculos.",
    },
    {
      q: "Com que frequência devo realizar a avaliação visual?",
      a: "O recomendável é realizar uma consulta preventiva uma vez ao ano para adultos e crianças em idade escolar. Quem trabalha muitas horas em telas ou sente dores de cabeça frequentes deve realizar o acompanhamento assim que notar desconforto.",
    },
    {
      q: "Como funciona o agendamento no Centro OptoVisão?",
      a: "Você escolhe o dia e horário que melhor se adapta à sua rotina diretamente pelo nosso WhatsApp. Trabalhamos com horário marcado para garantir um atendimento pontual, exclusivo e sem filas de espera.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased">
      {/* Barra de Aviso Superior */}
      <div className="bg-[#0F224A] text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-sky-950">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-center sm:text-left">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" /> Santo Estêvão - BA
            </span>
            <span className="hidden md:inline-block text-slate-500">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" /> Seg a Sex: 08h às 18h | Sáb: 08h às 12h
            </span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] sm:min-h-0 inline-flex items-center gap-1.5 py-1 px-2.5 text-sky-300 hover:text-white font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>Fale com a Recepção no WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Cabeçalho Fixo */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
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
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#sobre" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Sobre a Clínica
            </a>
            <a href="#exames" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Exames
            </a>
            <a href="#diferenciais" className="py-2 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">
              Diferenciais
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
              className="inline-flex items-center gap-2 bg-[#19336A] hover:bg-[#0F224A] text-white px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#19336A] min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-sky-300 shrink-0" />
              <span>Agendar Consulta</span>
            </a>

            {/* Botão Menu Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Colapsável */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-2 shadow-lg">
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Sobre a Clínica
            </a>
            <a
              href="#exames"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Exames e Avaliações
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Diferenciais
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 px-3 text-base font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              Perguntas Frequentes
            </a>
          </div>
        )}
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1">
        {/* Hero Section - Amplificada (Bolder) */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-50 py-20 sm:py-28 border-b border-slate-200">
          {/* Círculo sutil de iluminação de fundo */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-7">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#19336A] tracking-tight leading-[1.1]">
                  Sua visão nítida, confortável e protegida.
                </h1>

                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl font-normal">
                  No <strong>Centro OptoVisão</strong> em Santo Estêvão, cuidamos da sua saúde visual primária com tecnologia computadorizada, tempo dedicado para você e prescrição exata para seus novos óculos.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4.5 rounded-2xl text-base font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[52px]"
                  >
                    <MessageCircle className="w-5 h-5 text-white" />
                    <span>Agendar pelo WhatsApp</span>
                  </a>

                  <a
                    href="#exames"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 px-7 py-4.5 rounded-2xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[52px] shadow-xs"
                  >
                    <span>Conhecer Exames</span>
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </a>
                </div>

                {/* Diferenciais Rápidos com Alta Presença Visual */}
                <div className="pt-6 border-t border-slate-200/90 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="text-base font-black text-[#19336A]">Santo Estêvão - BA</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Atendimento local de excelência</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="text-base font-black text-[#19336A]">Bacharel em Optometria</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Atenção primária especializada</div>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-sky-300 transition-colors">
                    <div className="text-base font-black text-[#19336A]">Sem Filas de Espera</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">Horário exclusivo e pontual</div>
                  </div>
                </div>
              </div>

              {/* Card de Alerta de Sintomas - Presença Imponente */}
              <div className="lg:col-span-5">
                <div className="relative bg-gradient-to-br from-[#19336A] via-[#152C5B] to-[#0F224A] rounded-3xl p-7 sm:p-9 text-white shadow-2xl border border-white/10 overflow-hidden">
                  {/* Detalhe luminoso discreto */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-sky-400/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-6 relative z-10">
                    <div className="inline-flex p-3.5 bg-white/15 rounded-2xl backdrop-blur-md border border-white/15">
                      <Eye className="w-9 h-9 text-sky-300" />
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug">
                      Quando foi a sua última consulta visual?
                    </h2>

                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                      Sintomas comuns como dores de cabeça ao fim do dia, cansaço em frente a telas e visão embaçada para perto ou longe indicam a necessidade de uma avaliação detalhada.
                    </p>

                    <div className="space-y-3 pt-1">
                      <div className="flex items-center gap-3.5 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-3.5 backdrop-blur-md text-sm border border-white/10 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                        <span>Avaliação refracional computadorizada</span>
                      </div>
                      <div className="flex items-center gap-3.5 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-3.5 backdrop-blur-md text-sm border border-white/10 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                        <span>Análise preventiva da saúde ocular</span>
                      </div>
                      <div className="flex items-center gap-3.5 bg-white/10 hover:bg-white/15 transition-colors rounded-xl p-3.5 backdrop-blur-md text-sm border border-white/10 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
                        <span>Prescrição personalizada para óculos</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[52px]"
                      >
                        <span>Verificar Horários Disponíveis</span>
                        <ChevronRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Clínica e Escopo Legal */}
        <section id="sobre" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19336A] tracking-tight">
                  Compromisso com o seu bem-estar e nitidez diária
                </h2>
                <p className="text-slate-600 leading-relaxed text-base">
                  O <strong>Centro OptoVisão</strong> é dedicado aos cuidados primários da visão em Santo Estêvão, com atendimento conduzido por <strong>Bacharel em Optometria</strong> (graduação de nível superior), em plena consonância com a legislação e jurisprudência brasileiras (STF - ADPF 131 e CBO 2263-05).
                </p>
                <p className="text-slate-600 leading-relaxed text-base">
                  O optometrista é o especialista responsável por avaliar o sistema visual, diagnosticar disfunções de refração e prescrever óculos com exatidão. Atuamos com ética rigorosa: nosso papel não substitui a oftalmologia médica (cirurgias e tratamento de doenças), promovendo uma triagem segura e encaminhamento ágil a médicos sempre que necessário.
                </p>

                <ul className="space-y-3 pt-2">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Ambiente planejado e climatizado</strong> para garantir total conforto e precisão durante os testes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Equipamentos modernos</strong> calibrados periodicamente para resultados seguros.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700"><strong>Ética profissional</strong> e encaminhamento ágil a médicos oftalmologistas caso haja indício de doenças oculares.</span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-3xl font-bold text-[#19336A]">100%</div>
                  <h3 className="text-sm font-semibold text-slate-800">Adaptação Garantida</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Acompanhamento dedicado até a perfeita adaptação dos seus novos óculos.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-3xl font-bold text-[#19336A]">Pontual</div>
                  <h3 className="text-sm font-semibold text-slate-800">Sem Filas de Espera</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Consultas com horário exclusivo reservado para o seu atendimento.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-sky-100 rounded-xl text-sky-700 shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">Localização Acessível em Santo Estêvão</h3>
                      <p className="text-xs text-slate-500">Clínica estruturada para atender com conforto toda a comunidade regional.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exames - Avaliação Visual Completa */}
        <section id="exames" className="py-20 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19336A] tracking-tight">
                Avaliação Visual Completa 👁️
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A sua saúde visual está em excelentes mãos em Santo Estêvão. O seu atendimento será realizado por um <strong>Bacharel em Optometria</strong>, profissional de nível superior especialista no cuidado primário e funcional da visão no Brasil.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((item, idx) => {
                const Icon = item.icon;
                const serviceLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! ${item.message} no Centro OptoVisão em Santo Estêvão.`)}`;
                return (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3 bg-[#19336A]/5 rounded-xl text-[#19336A]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-50 text-[#19336A] border border-sky-100">
                          {item.tag}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <h3 className="text-xl font-bold text-[#19336A] tracking-tight">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <a
                        href={serviceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] py-2 px-1 text-sm font-semibold text-[#19336A] hover:text-sky-600 inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md"
                      >
                        <span>Agendar este exame</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cuidado Integrado Banner */}
            <div className="mt-10 bg-white border border-sky-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2 text-[#19336A] font-bold text-lg">
                  <ShieldCheck className="w-6 h-6 text-sky-600 shrink-0" />
                  <span>Cuidado Integrado</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Triagem preventiva e encaminhamento seguro para médicos especialistas, caso seja identificada qualquer alteração clínica.
                </p>
              </div>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl text-sm shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section id="diferenciais" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#19336A] tracking-tight">
                Excelência e Atenção aos Detalhes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Conheça os pilares que tornam a experiência no Centro OptoVisão referência em confiança.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-slate-300 transition-all space-y-3"
                  >
                    <div className="p-2.5 w-fit rounded-xl bg-white text-[#19336A] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800">
                      {diff.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 space-y-3">
              <h2 className="text-3xl font-extrabold text-[#19336A] tracking-tight">
                Tire suas dúvidas antes de agendar
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                  >
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#19336A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] min-h-[48px]"
                    >
                      <span className="text-sm sm:text-base">{faq.q}</span>
                      <HelpCircle className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-sky-600" : ""}`} />
                    </button>
                    {isOpen && (
                      <div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3"
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

        {/* CTA Final */}
        <section className="py-16 bg-[#19336A] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Eye className="w-8 h-8 text-sky-300" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Pronto para ver o mundo com total nitidez e conforto?
            </h2>

            <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Agende hoje mesmo sua consulta no Centro OptoVisão em Santo Estêvão. Nossa equipe está pronta para lhe atender com o cuidado que seus olhos merecem.
            </p>

            <div className="pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-600 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Falar com a Recepção no WhatsApp</span>
              </a>
            </div>

            <p className="text-xs text-slate-300 pt-2">
              Horários flexíveis e atendimento personalizado com hora marcada.
            </p>
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-white border-t border-slate-200 py-12 text-slate-600 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="relative w-40 h-12">
              <Image
                src="/images/logo.png"
                alt="Centro OptoVisão"
                fill
                sizes="160px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs text-slate-500 text-center md:text-left">
              Centro OptoVisão — Excelência em Optometria e Saúde Visual em Santo Estêvão - BA.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé" className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-600">
            <a href="#sobre" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Sobre</a>
            <a href="#exames" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Exames</a>
            <a href="#diferenciais" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Diferenciais</a>
            <a href="#faq" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Perguntas Frequentes</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="min-h-[44px] sm:min-h-0 py-2 sm:py-0 inline-flex items-center hover:text-[#19336A] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19336A] rounded-md">Agendamento</a>
          </nav>

          <div className="text-xs text-slate-500 text-center md:text-right">
            © 2026 Centro OptoVisão. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
