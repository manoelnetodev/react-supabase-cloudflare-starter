# React + Supabase Starter

Template frontend moderno pronto para uso. Clone, instale e comece a construir.

## Stack

- **React 19** + **TypeScript**
- **Vite 6** (bundler)
- **Tailwind CSS 4** (estilização)
- **React Router 6** (rotas SPA)
- **Supabase** (autenticação + banco de dados)
- **ESLint 9** (qualidade de código)

## Início rápido

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
npm install
cp .env.example .env
```

Preencha o `.env` com suas credenciais do Supabase:

```
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-anon-key
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build local |
| `npm run lint` | Verificação de código |

## Estrutura do projeto

```
src/
├── pages/          → Páginas da aplicação
├── components/     → Componentes reutilizáveis
├── services/       → Supabase client e integrações
├── hooks/          → Custom hooks
└── styles/         → CSS global e Tailwind
```

## Deploy (Cloudflare Pages)

O projeto já está configurado para deploy no Cloudflare Pages:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Variáveis de ambiente:** adicionar `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` no painel

O arquivo `public/_redirects` já garante o fallback SPA.

## Requisitos

- Node.js >= 18
- npm
