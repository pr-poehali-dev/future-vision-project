import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Icon from "@/components/ui/icon"
import { motion } from "framer-motion"

const Support = () => {
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
              <Icon name="MessageCircle" size={40} className="text-white" />
              <h1 className="text-4xl font-medium text-white">Поддержка</h1>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 space-y-6">
              <div>
                <h2 className="text-xl font-medium text-white mb-4">
                  Как задать вопрос?
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Если у вас возникли вопросы по работе с архивом, проблемы с доступом или предложения по улучшению сайта — свяжитесь с администратором.
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-lg font-medium text-white mb-4">
                  Контакт для связи:
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
                <p className="text-sm text-zinc-500 mt-4">
                  Telegram — основной канал для связи с администрацией
                </p>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h3 className="text-lg font-medium text-white mb-3">
                  Частые вопросы:
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Как получить доступ к закрытым архивам?
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Необходимо пройти верификацию. Перейдите в раздел "Верификация" и следуйте инструкции.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Могу ли я предложить добавить архив?
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Да, напишите администратору в Telegram с информацией о предлагаемом архиве.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Как долго обрабатываются запросы?
                    </h4>
                    <p className="text-zinc-400 text-sm">
                      Администратор отвечает в течение 24-48 часов.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 mt-6">
                <div className="flex gap-3">
                  <Icon name="Clock" size={20} className="text-zinc-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-zinc-300">
                      Время ответа может варьироваться в зависимости от загруженности администратора
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

export default Support
