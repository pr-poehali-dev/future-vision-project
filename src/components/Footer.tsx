import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-12 px-6" style={{ backgroundColor: "#09090B" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Archive" className="w-5 h-5 text-zinc-500" />
            <span className="text-zinc-500 text-sm">dnnarchive © 2026</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="/verification" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Верификация
            </a>
            <a 
              href="/support" 
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              Поддержка
            </a>
            <a 
              href="https://t.me/kingofcevil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              Контакт
              <Icon name="ExternalLink" size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
