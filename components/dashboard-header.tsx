import Link from "next/link"
import { Globe, Mail, LayoutDashboard} from "lucide-react"
import Image from 'next/image'

export function DashboardHeader() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex flex-col items-center md:flex-row justify-between">
        {/* Logo */}
        <div className="relative h-20 w-52 md:h-16 md:w-48">
          <Image
            src="/epamig_logo.svg"
            alt="EPAMIG Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Título e descrição centralizada */}
        <div className="flex flex-col items-center justify-center text-center mt-4 md:mt-0">
          <h1 className="text-green-700 text-lg md:text-2xl font-semibold leading-tight">
            Empresa de Pesquisa Agropecuária de Minas Gerais
          </h1>
          <p className="text-xs md:text-base text-gray-800 font-bold">
            Secretaria de Estado de Agricultura, Pecuária e Abastecimento de Minas Gerais
          </p>
        </div>

        {/* Links do topo direito */}
      <div className="flex gap-3 mt-3 md:mt-0">
          <Link
            href="https://epamig.br"
            className="flex items-center gap-2 text-sm text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe size={18} />
            <span>Site</span>
          </Link>
          <Link
            href="mailto:contato@epamig.br"
            className="flex items-center gap-2 text-sm text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md transition-all duration-300"
          >
            <Mail size={18} />
            <span>E-mail</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-sm text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md transition-all duration-300"
          >
            <LayoutDashboard size={18} />
            <span>Portal ADM</span>
          </Link>
        </div>
      </div>


            <div className="border-t-4 border-green-700"></div> {/* Linha de separação abaixo do header */}

    </header>
  )
}