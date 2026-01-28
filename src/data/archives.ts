export interface Archive {
  id: number
  name: string
  aliases: string[]
  period: string
  owner?: string
  communities?: string[]
  socials?: string[]
  archiveLinks?: string[]
  youtube?: string[]
  description?: string
  allPages?: string[]
  allCommunities?: string[]
}

export const archives: Archive[] = [
  {
    id: 24,
    name: "KislitGrief (krUzo)",
    aliases: ["Даня Мухин", "KislitGrief", "ArsheneGrief", "xSkilek", "KrUzo", "demonate (купленный у ландышева)"],
    period: "2016-2019",
    allPages: [
      "https://vk.com/id589724695",
      "https://vk.com/id556263539",
      "https://vk.com/id583632012",
      "https://vk.com/id577249758",
      "https://vk.com/id572536299",
      "https://vk.com/id588768188",
      "https://vk.com/id276846320",
      "https://vk.com/id560960242",
      "https://vk.com/id568025768",
      "https://vk.com/id245024828",
      "https://vk.com/id376212623",
      "https://vk.com/id215626366"
    ],
    allCommunities: [
      "https://vk.com/club193591544",
      "https://vk.com/public186818778",
      "https://vk.com/public187208745",
      "https://vk.com/club192567622",
      "https://vk.com/club191321643",
      "https://vk.com/club192032034",
      "https://vk.com/club192010877",
      "https://vk.com/club132498935",
      "https://vk.com/club134086315"
    ]
  },
  {
    id: 2,
    name: "Алексей Докс (Максим Докс)",
    aliases: ["Максим Докс", "Алексей Докс", "Алиса Преступления", "Leviatyan", "AliceCrimes"],
    period: "2017-2021",
    owner: "Владелец сообществ: «Leviathan» (2019)",
    communities: ["vk.com/club180210821"],
    socials: [
      "vk.com/ld1488i",
      "vk.com/lurkmoars",
      "vk.com/dox.xing",
      "vk.com/loldox",
      "vk.com/idloldox",
      "vk.com/id541404595",
      "vk.com/alicecrimes",
      "vk.com/bapholes",
      "vk.com/id549319166",
      "vk.com/id502537510",
      "t.me/+380933206109"
    ]
  },
  {
    id: 3,
    name: "Kykyzla Grief (Герман Ханин)",
    aliases: ["Герман Король", "Кукузла Гриф", "Герман Ханин", "kkzlss", "kkzlgrf", "Kykyzless"],
    period: "2016-2021",
    owner: "Владелец Сообщества: «Майнкрафт с Кукузлой» (2017)",
    socials: [
      "vk.ru/GermanHanin",
      "vk.me/german8713",
      "vk.ru/kykyzlagrief",
      "vk.ru/kykyzlahyz",
      "vk.ru/kkzlgrf"
    ],
    archiveLinks: ["https://archive.fo/X9wDA", "https://archive.fo/ydKW4"],
    youtube: ["https://youtube.com/@kykyzlagrief"]
  },
  {
    id: 4,
    name: "Денис Мертвый (Denis Dead)",
    aliases: ["Денис Мертвый", "Denis Dead"],
    period: "2019-2022",
    owner: "Владелец сообществ: SaintSouls (Founder) (2020)",
    communities: ["vk.ru/saintsouls"],
    socials: ["vk.com/id572738175"],
    archiveLinks: ["https://archive.fo/gJxT7"]
  },
  {
    id: 5,
    name: "Владислав Интерамов (NackenzieGrief)",
    aliases: [
      "Влад Интерамов",
      "Аврелиан Интерамнский",
      "Nackenzie Grief",
      "Imperator Nackenzie",
      "Иван Кесаримов/Кесаримский",
      "LorenzoGrief",
      "KollyGrief",
      "Neywood",
      "Kesarim",
      "Lackenzee"
    ],
    period: "2018-2021",
    owner: "Владелец сообществ: DirtyAlliance, SharmeCompany, UDPMonster, UDPAttack, Crimeless",
    communities: [
      "vk.com/DirtyAlliance",
      "vk.com/SharmeCompany",
      "vk.com/udpmonster",
      "vk.ru/jsdjkfojsdojifo"
    ],
    socials: [
      "vk.com/ImperatorNackenzie",
      "vk.com/NackenzieGrief",
      "vk.com/Nackenzie",
      "vk.com/behehfjsa",
      "instagram.com/imperatornackenzie",
      "instagram.com/nackenziegrief",
      "@nackenziegrief",
      "@nackenzie",
      "vk.ru/i.kesarimov",
      "vk.ru/Nackenzie",
      "t.me/dercetm"
    ],
    archiveLinks: ["https://archive.fo/4QC0s"]
  },
  {
    id: 6,
    name: "Александр Гаусс (Сейл)",
    aliases: ["Alexander Gaus", "SailGrief", "Гаусс"],
    period: "2017-2025",
    owner: "Владелец сообществ: FullD (Owner) (2017), DeanonSay (Owner), EvilVime (Founder) (2018), TeslaCrime (Founder) (2024), RiseDeanon (2020)",
    communities: [
      "t.me/fulldeanonymization",
      "http://t.me/+v8Zp6v5ef3AyNTk0",
      "http://t.me/+t_J3H2sZmmthNjJi",
      "http://t.me/+GfjkfWcJ0ShjMDE0",
      "vk.ru/risedeanon",
      "vk.ru/fulldeanon",
      "vk.ru/evilvime",
      "vk.ru/teslacrime"
    ],
    socials: ["vk.ru/sailgrief", "@sailgrief", "vk.ru/id452563574"],
    archiveLinks: ["https://archive.fo/CVFVp"]
  },
  {
    id: 7,
    name: "Мирослав Маньяк (Максим Хоменко)",
    aliases: ["Мирослав Маньяк", "Максим Хоменко"],
    period: "2016-2021",
    owner: "Владелец сообщества: «.sekhmet», «Eirene»",
    communities: ["vk.ru/eireneee", "vk.ru/sekhmettt"],
    socials: ["vk.ru/scarymaniac", "vk.ru/id636047162", "vk.ru/fuckingmaniac"],
    archiveLinks: ["https://archive.fo/rbqYY", "https://archive.fo/zIwyO"]
  },
  {
    id: 8,
    name: "Георгий Герасимов",
    aliases: ["Георгий Герасимов", "Андрей Чернов", "Себастьян Блантов"],
    period: "2016-2020",
    owner: "Владелец сообществ: TemporayCompanu, CounterLow",
    communities: ["vk.ru/TemporaryCompanu", "vk.ru/counterlow"],
    socials: ["vk.ru/id323021423"]
  },
  {
    id: 9,
    name: "Виталий Чаосов (KokosGrief)",
    aliases: ["Евгений Колофедин", "KokosGrief", "Виталий Чаосов"],
    period: "2020-2022",
    owner: "Владелец сообществ: chaosparadise (Founder) (2021)",
    communities: ["vk.ru/chaosparadise"],
    socials: ["vk.ru/kokosgrief", "vk.ru/crimeless"]
  },
  {
    id: 10,
    name: "Максим Ландышев (Демонейт)",
    aliases: [
      "Максим Ландышев",
      "Демонейт",
      "demonate",
      "Brain Show",
      "Максим Сумской",
      "Максим Демон",
      "MaxMaxMax",
      "SITOX",
      "мировид"
    ],
    period: "2017-2020",
    owner: "Владелец сообществ: SweezyLegend (2017)",
    communities: ["vk.ru/iconaazadel", "vk.ru/yt.demonate"],
    socials: [
      "vk.ru/demonate",
      "vk.ru/bn_show",
      "vk.ru/dameronbrittan",
      "vk.ru/mrdemonate",
      "youtube.com/@demonatehd777",
      "youtube.com/@demonatehd5404",
      "YouTube.com/@demonate9879",
      "youtube.com/@demonate811",
      "vk.com/id305593342",
      "vk.ru/tyler24"
    ]
  },
  {
    id: 11,
    name: "Desu Lt",
    aliases: ["Владислав Desu"],
    period: "2019-2022",
    owner: "Владелец сообщества: chaosparadise (Founder) (2021)",
    communities: ["vk.ru/chaosparadise"],
    socials: ["vk.com/desultt", "t.me/desulttt"],
    archiveLinks: ["https://archive.fo/A4XwH"]
  },
  {
    id: 12,
    name: "Алексей Преступление (Internet Crime)",
    aliases: [
      "Internet Kødeine",
      "Alex Crime",
      "Алексей Преступление",
      "Internet Crime",
      "Internet Foxy",
      "Charlotte Panic",
      "Алексей Мариуполь",
      "Apalon Panic"
    ],
    period: "2017-2022",
    communities: ["https://vk.ru/jsdjkfojsdojifo"],
    socials: [
      "vk.com/crimeanarhistkk",
      "vk.ru/IntelUser",
      "vk.ru/crypanica",
      "vk.ru/id627703405"
    ],
    archiveLinks: ["https://archive.fo/zAeur"]
  },
  {
    id: 13,
    name: "Клавдий Интерамнский",
    aliases: ["Клавдий Интерамнский", "slanegrief", "Akanori"],
    period: "2016-2022",
    communities: ["vk.ru/sekhmettt", "vk.ru/eireneee", "vk.ru/DirtyAlliance"],
    socials: ["vk.ru/allreadyleft", "vk.ru/id694515802"]
  },
  {
    id: 14,
    name: "FrightChronicles",
    aliases: [],
    period: "2020",
    owner: "Владелец сообщества: Edwin Garrison",
    description: "ФрайтХрониклс это паблик созданная в 2020 году, с целью деаномизации разных личностей, была довольно таки популярна под ведением Эдвина Гаррисона, в 2021 году паблик была продана Александру Гауссу, паблик потерял популярность из за прекращения постов и активности. Последующий владелец сообщества (текущий): Александр Гаусс",
    archiveLinks: ["https://archive.fo/Z4evv"]
  },
  {
    id: 15,
    name: "Яна Ашанова (Дропповод)",
    aliases: ["Яна Ашанова", "Дропповод"],
    period: "2019-2021",
    owner: "Владелец сообществ: Von8Iceland, kkarophobia",
    communities: ["vk.ru/Von8Iceland", "vk.ru/kkarophobia"],
    socials: ["vk.ru/id654702441"],
    archiveLinks: ["https://archive.fo/L5wky"]
  },
  {
    id: 16,
    name: "Акакий Гадюкин",
    aliases: ["Акакий Гадюкин", "Алексей Гадюкин"],
    period: "2016-2018",
    owner: "Владелец сообществ: SweezyLegend (2017)",
    socials: ["vk.ru/donteblan", "@dnnlegend"],
    archiveLinks: ["https://archive.fo/knaEa"]
  },
  {
    id: 17,
    name: ".sekhmet",
    aliases: [],
    period: "2016-2021",
    communities: ["vk.ru/sekhmettt", "vk.ru/eireneee"],
    description: ".sekhmet это сообщество созданная в 2016 году в социальной сети ВКонтакте, созданная такими людьми как Максим Хоменко, KislitGrief. Очень быстро обрела популярность благодаря частым контентам, заливами. В участников .sekhmet входили такие личности как Максим Ландышев, Яна Ашанова, Георгий Герасимов, Клавдий Интерамнский.",
    archiveLinks: ["https://archive.fo/kFBYa"]
  },
  {
    id: 18,
    name: "Asmodelphia",
    aliases: [],
    period: "2021",
    owner: "Administrators: Август Римский / Штраунхармер, Scarlett Katana",
    description: "Паблик, созданная с целью деаномизации разных личностей, быстро набрала популярность в 21 году благодаря деаномизации такой личности как Снэйл и сливу паблика Abbadon",
    archiveLinks: ["https://archive.fo/E952k"]
  },
  {
    id: 19,
    name: "Август Римский (Штраунхармер)",
    aliases: ["Штраунхармер", "Август Римский"],
    period: "2017-2022/2023",
    owner: "Владелец сообществ: Asmodelphia, Exorcism",
    communities: ["vk.ru/Asmodelphia", "vk.ru/ScreamExorcism"],
    socials: ["vk.ru/lenzlordov"],
    archiveLinks: ["https://archive.fo/uDPAo"]
  }
]