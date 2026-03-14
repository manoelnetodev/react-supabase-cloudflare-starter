import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-secondary">404</h1>
      <p className="mt-4 text-gray-600">Página não encontrada.</p>
      <Link to="/" className="mt-6 text-primary underline hover:text-primary/80">
        Voltar para o início
      </Link>
    </div>
  )
}
