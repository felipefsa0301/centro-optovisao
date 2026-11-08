---
name: Centro OptoVisão
description: Sistema de design clínico e humanizado para saúde visual e atenção primária em Santo Estêvão - BA
colors:
  primary: "#19336A"
  primary-dark: "#0F224A"
  primary-light: "#2A4C93"
  accent-cyan: "#0EA5E9"
  accent-emerald: "#10B981"
  neutral-bg: "#F8FAFC"
  neutral-surface: "#FFFFFF"
  neutral-text: "#1E293B"
  neutral-muted: "#64748B"
  neutral-border: "#E2E8F0"
typography:
  display:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0em"
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-whatsapp:
    backgroundColor: "{colors.accent-emerald}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  card-service:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "32px"
---

# Design System - Centro OptoVisão

## Overview

O Centro OptoVisão utiliza uma linguagem visual contemporânea voltada à **saúde visual e optometria clínica**. O design combina precisão científica e autoridade médica com acolhimento e clareza, priorizando legibilidade máxima, alto contraste e caminhos sem fricção para agendamento de consultas via canais diretos (WhatsApp).

## Colors

- **Primary (`#19336A`, `#0F224A`)**: Azul Marinho Profundo, transmitindo confiança, credibilidade e solidez institucional.
- **Accent Cyan (`#0EA5E9`)**: Ciano visual que remete à tecnologia diagnóstica computadorizada e precisão óptica.
- **Accent Emerald (`#10B981`)**: Verde esmeralda reservado prioritariamente para conversão, disponibilidade e contato direto no WhatsApp.
- **Neutrals (`#F8FAFC`, `#FFFFFF`, `#1E293B`, `#64748B`)**: Superfícies claras e neutras que garantem proporção de contraste superior a 4.5:1 (WCAG AA).

## Typography

A tipografia é baseada em sans-serif neutra de alta legibilidade, com escala clara e proporções balanceadas para conforto de pacientes com dificuldades refrativas:
- **Display / H1**: 3rem (48px) no desktop, peso 800 (Extra Bold), tracking levemente negativo (-0.025em).
- **H2 / Seções**: 2.25rem (36px), peso 800.
- **H3 / Cards de Exames**: 1.25rem (20px), peso 700.
- **Body**: 1rem (16px), peso 400 a 500, entrelinha de 1.6 para leitura confortável.
- **Labels / Badges**: 0.75rem (12px), uppercase, tracking expandido.

## Layout

- **Container Máximo**: 1152px (`max-w-6xl`) centralizado com padding responsivo (`px-4 sm:px-6`).
- **Ritmo Vertical**: Seções espaçadas generosamente com `py-16 sm:py-20`, mantendo hierarquia clara e respiração entre blocos de conteúdo.
- **Grid de Exames e Serviços**: 2 colunas no desktop (`grid-cols-1 md:grid-cols-2`), garantindo espaço de leitura generoso por teste.

## Elevation & Depth

- **Superfícies Planas com Bordas Suaves**: Uso predominante de bordas de 1px em cinza neutro (`border-slate-200`) e elevações discretas (`shadow-xs` a `shadow-sm`).
- **Cards em Destaque**: Sombras suaves e difusas com leve translação vertical no hover (`hover:shadow-md hover:-translate-y-0.5`).
- **Hero Card**: Gradiente suave de azul marinho com desfoque de fundo (backdrop blur) para elementos translúcidos de apoio.

## Shapes

- **Bordas Arredondadas (Radius)**:
  - Botões e inputs: 12px (`rounded-xl`).
  - Cards de serviço e diferenciais: 16px (`rounded-2xl`).
  - Hero e containers de destaque: 24px (`rounded-3xl`).
  - Badges e pílulas: 9999px (`rounded-full`).

## Components

- **Header Fixo**: Barra superior de 80px (`h-20`) com desfoque de fundo (`bg-white/95 backdrop-blur-md`), logotipo alinhado à esquerda, menu central e botão primário à direita.
- **Barra de Anúncio Superior**: Faixa em tom escuro (`bg-[#0F224A]`) exibindo horários, localização e link direto.
- **Cards de Exames**: Containers em fundo branco com ícone em caixa tonal, badge identificadora, título com checkmark verde e link direto de agendamento no rodapé do card.
- **FAQ Acordeão**: Botão com largura total, transição suave de rotação de ícone e separador sutil para a resposta.

## Do's and Don'ts

### Do's
- Mantenha o contraste de texto sempre acima de 4.5:1 para garantir acessibilidade a quem possui deficiência visual.
- Use o tom esmeralda/verde especificamente para ações de contato e agendamento pelo WhatsApp.
- Destaque a qualificação profissional como **Bacharel em Optometria** e o modelo de cuidado integrado com médicos especialistas.

### Don'ts
- Não utilize tipografias decorativas ilegíveis ou com baixo contraste em textos corridos.
- Não mencione procedimentos invasivos, cirurgias ou prescrição de fármacos alopáticos (escopo exclusivo médico).
- Não utilize efeitos neobrutalistas ou sombras duras sem blur.
- Não utilize ilustrações estilo cartoon genéricas; priorize ícones lineares consistentes ou fotografia limpa do consultório e aparelhos.
