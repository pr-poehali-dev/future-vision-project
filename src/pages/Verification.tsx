import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Icon from "@/components/ui/icon"
import { motion } from "framer-motion"

const Verification = () => {
  return (
    <main style={{ backgroundColor: "#09090B" }} className="min-h-screen">
      <Navbar />
      
      <section className="relative pt-32 pb-24 px-6">
        <div className="w-full max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Icon name="ShieldCheck" size={40} className="text-white" />
              <h1 className="text-4xl font-medium text-white">Верификация</h1>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 space-y-6">
              <div>
                <h2 className="text-xl font-medium text-white mb-4">
                  Как пройти верификацию?
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Для получения доступа ко всем архивам и материалам необходимо пройти верификацию через администратора.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Инструкция:
                </h3>
                <ol className="space-y-3 text-zinc-400">
                  <li className="flex gap-3">
                    <span className="text-white font-medium">1.</span>
                    <span>Свяжитесь с администратором сайта в Telegram</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-medium">2.</span>
                    <span>Представьтесь и укажите цель доступа к архивам</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-medium">3.</span>
                    <span>Дождитесь подтверждения верификации</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white font-medium">4.</span>
                    <span>После верификации вам откроется полный доступ</span>
                  </li>
                </ol>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Контакт администратора:
                </h3>
                <a
                  href="https://t.me/kingofcevil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-zinc-900 px-6 py-3 rounded-lg hover:bg-zinc-100 transition-colors font-medium"
                >
                  <Icon name="Send" size={20} />
                  <span>@kingofcevil</span>
                  <Icon name="ExternalLink" size={16} />
                </a>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mt-6">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-300">
                      <strong className="text-white">Важно:</strong> Верификация проводится вручную администратором для обеспечения безопасности данных архива.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Verification
