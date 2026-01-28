import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Archive } from "@/data/archives"
import Icon from "@/components/ui/icon"

interface ArchiveModalProps {
  archive: Archive | null
  isOpen: boolean
  onClose: () => void
}

export function ArchiveModal({ archive, isOpen, onClose }: ArchiveModalProps) {
  const [showVerificationError, setShowVerificationError] = useState(false)

  if (!archive) return null

  const handleShowMore = () => {
    setShowVerificationError(true)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-medium">{archive.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 mt-4">
          {archive.aliases.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Неймы:</h3>
              <p className="text-zinc-300">{archive.aliases.join(", ")}</p>
            </div>
          )}

          <div>
            <h3 className="text-sm font-medium text-zinc-400 mb-2">Дата пребывания:</h3>
            <p className="text-zinc-300">{archive.period}</p>
          </div>

          {archive.owner && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">
                {archive.owner}
              </h3>
            </div>
          )}

          {archive.description && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Краткий рассказ:</h3>
              <p className="text-zinc-300">{archive.description}</p>
            </div>
          )}

          {archive.allPages && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Все страницы ВКонтакте:</h3>
              <div className="relative">
                <div className="blur-sm select-none pointer-events-none">
                  {archive.allPages.slice(0, 3).map((page, idx) => (
                    <p key={idx} className="text-zinc-500 text-sm">
                      {page}
                    </p>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {!showVerificationError ? (
                    <Button
                      onClick={handleShowMore}
                      className="bg-white text-zinc-900 hover:bg-zinc-100"
                    >
                      Показать весь архив
                    </Button>
                  ) : (
                    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                      <Icon name="Lock" className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                      <p className="text-zinc-300 font-medium">Вы не верифицированы</p>
                      <p className="text-sm text-zinc-400 mt-1">Пожалуйста, пройдите верификацию</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {archive.allCommunities && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Все Сообщества:</h3>
              <div className="relative">
                <div className="blur-sm select-none pointer-events-none">
                  {archive.allCommunities.slice(0, 3).map((comm, idx) => (
                    <p key={idx} className="text-zinc-500 text-sm">
                      {comm}
                    </p>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {!showVerificationError ? (
                    <Button
                      onClick={handleShowMore}
                      className="bg-white text-zinc-900 hover:bg-zinc-100"
                    >
                      Показать весь архив
                    </Button>
                  ) : (
                    <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                      <Icon name="Lock" className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                      <p className="text-zinc-300 font-medium">Вы не верифицированы</p>
                      <p className="text-sm text-zinc-400 mt-1">Пожалуйста, пройдите верификацию</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {!archive.allPages && !archive.allCommunities && (
            <>
              {archive.communities && archive.communities.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Сообщества:</h3>
                  <div className="relative">
                    <div className="blur-sm select-none pointer-events-none">
                      {archive.communities.map((comm, idx) => (
                        <p key={idx} className="text-zinc-500 text-sm">
                          {comm}
                        </p>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {!showVerificationError ? (
                        <Button
                          onClick={handleShowMore}
                          className="bg-white text-zinc-900 hover:bg-zinc-100"
                        >
                          Показать весь архив
                        </Button>
                      ) : (
                        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                          <Icon name="Lock" className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                          <p className="text-zinc-300 font-medium">Вы не верифицированы</p>
                          <p className="text-sm text-zinc-400 mt-1">Пожалуйста, пройдите верификацию</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {archive.socials && archive.socials.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-2">Социальные сети:</h3>
                  <div className="relative">
                    <div className="blur-sm select-none pointer-events-none">
                      {archive.socials.map((social, idx) => (
                        <p key={idx} className="text-zinc-500 text-sm">
                          {social}
                        </p>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {!showVerificationError ? (
                        <Button
                          onClick={handleShowMore}
                          className="bg-white text-zinc-900 hover:bg-zinc-100"
                        >
                          Показать весь архив
                        </Button>
                      ) : (
                        <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                          <Icon name="Lock" className="w-8 h-8 mx-auto mb-2 text-zinc-400" />
                          <p className="text-zinc-300 font-medium">Вы не верифицированы</p>
                          <p className="text-sm text-zinc-400 mt-1">Пожалуйста, пройдите верификацию</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

          {archive.archiveLinks && archive.archiveLinks.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">Архивы страниц:</h3>
              <div className="flex flex-col gap-2">
                {archive.archiveLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                  >
                    {link}
                    <Icon name="ExternalLink" size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {archive.youtube && archive.youtube.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-zinc-400 mb-2">YouTube channel:</h3>
              <div className="flex flex-col gap-2">
                {archive.youtube.map((link, idx) => (
                  <a
                    key={idx}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2"
                  >
                    {link}
                    <Icon name="ExternalLink" size={14} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
