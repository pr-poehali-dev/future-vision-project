import { useState } from "react"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { archives } from "@/data/archives"
import { ArchiveModal } from "./ArchiveModal"
import type { Archive } from "@/data/archives"

export function ArchiveCards() {
  const [selectedArchive, setSelectedArchive] = useState<Archive | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenArchive = (archive: Archive) => {
    setSelectedArchive(archive)
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="w-full flex justify-center px-6 py-24" style={{ backgroundColor: "#09090B" }}>
        <div className="w-full max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">
              Архивы комьюнити
            </h2>
            <p className="text-lg text-zinc-400">
              {archives.length} профилей из истории сообщества
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {archives.map((archive, index) => (
              <motion.div
                key={archive.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden bg-zinc-800 flex items-center justify-center">
                  <Icon name="User" size={64} className="text-zinc-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-white mb-2">{archive.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{archive.period}</p>
                  <button
                    onClick={() => handleOpenArchive(archive)}
                    className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Открыть архив</span>
                    <Icon name="ArrowRight" size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ArchiveModal
        archive={selectedArchive}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
