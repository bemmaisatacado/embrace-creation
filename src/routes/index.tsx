import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novo Projeto — Página Inicial" },
      { name: "description", content: "Um projeto em branco pronto para ser construído." },
      { property: "og:title", content: "Novo Projeto — Página Inicial" },
      { property: "og:description", content: "Um projeto em branco pronto para ser construído." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="w-full border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <span className="text-sm font-semibold tracking-tight">Novo Projeto</span>
          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Início
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Sobre
            </Link>
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contato
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Projeto em Branco
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Seu projeto começa aqui
          </h1>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted-foreground">
            Uma base limpa, minimalista e pronta para receber qualquer ideia. Aqui você pode construir
            landing pages, dashboards, lojas, blogs ou apps completos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Começar a construir
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section className="border-t border-border/50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Design System"
            description="Tokens semânticos, cores oklch e tipografia prontos para serem customizados."
          />
          <Card
            title="Rotas Prontas"
            description="TanStack Router configurado para adicionar novas páginas com facilidade."
          />
          <Card
            title="Backend Opcional"
            description="Quando precisar, é possível ativar banco de dados, auth e server functions."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 px-6 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Novo Projeto</span>
          <span>Feito com Lovable</span>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-4 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <div className="h-3 w-3 rounded-full bg-primary" />
      </div>
      <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
