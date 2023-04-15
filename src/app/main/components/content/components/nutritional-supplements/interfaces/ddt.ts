const newArray = [
  {
    name: "Третичный бутилгидрохинон Е319",
    descrus: "Третичный бутилгидрохинон - это пищевая добавка, которая широко используется как антиоксидант в жирных продуктах питания, таких как масло, жирное мясо, молоко и т.д. Он получается путем химической реакции из гидрохинона и изобутилена.",
    desclat: "Tertiary butylhydroquinone is a food additive that is widely used as an antioxidant in fatty food products such as oil, fatty meats, milk, etc. It is obtained by a chemical reaction from hydroquinone and isobutylene."
  },
  {
    name: "Краситель E100",
    descrus: "Краситель E100 - это натуральный желтый пищевой краситель, получаемый из корня куркумы. Он широко используется в различных продуктах питания, таких как сыры, маргарины, кондитерские изделия и т.д.",
    desclat: "Colorant E100 is a natural yellow food dye obtained from the root of turmeric. It is widely used in various food products such as cheese, margarine, confectionery, etc."
  },
  {
    name: "Рибофлавин (витамин B2) E101",
    descrus: "Рибофлавин - это пищевая добавка, являющаяся витамином B2. Он получается из растительных и животных источников и используется в различных продуктах питания, таких как молоко, йогурт, хлеб и макаронные изделия.",
    desclat: "Riboflavin is a food additive that is a vitamin B2. It is obtained from plant and animal sources and is used in various food products such as milk, yogurt, bread, and pasta."
  },
  {
    name: "Тартразин E102",
    descrus: "Тартразин - это искусственный пищевой краситель, который широко используется в различных продуктах питания, таких как напитки, конфеты и т.д. Он получается из каменноугольной смолы.",
    desclat: "Tartrazine is an artificial food dye that is widely used in various food products such as drinks, candies, etc. It is obtained from coal tar."
  },
  {
    name: "Алканет E103",
    descrus: "Алканет - это натуральный краситель, обычно используемый в продуктах мясной промышленности и кондитерских изделиях. Он получается из корня алканета.",
    desclat: "Alkanet is a natural dye commonly used in meat products and confectionery. It is obtained from the root of the alkanet plant."
  },
  {
    name: "Желтый хинолиновый E104",
    descrus: "Желтый хинолиновый E104 - это синтетическая органическая краска, широко используемая в пищевой промышленности для придания яркого желтого цвета различным продуктам, таким как кондитерские изделия, напитки, десерты и т.д.",
    desclat: "Yellow Quinoline E104 is a synthetic organic dye widely used in the food industry to give a bright yellow color to various products such as confectionery, beverages, desserts, etc."
  },
  {
    name: "Желтый прочный AB E105",
    descrus: "Желтый прочный AB E105 - это искусственный краситель, который применяется в пищевой промышленности для придания ярко-желтого цвета различным продуктам, таким как кондитерские изделия, напитки и мороженое. Он получается синтетическим путем из составных частей, содержащих азот и серу.",
    desclat: "Yellow AB Strong E105 is an artificial colorant that is used in the food industry to give a bright yellow color to various products such as confectionery, beverages, and ice cream. It is synthetically produced from compounds containing nitrogen and sulfur."
  },
  {
    name: "Рибофлавин-5' -фосфат натрия, натриевая соль витамина В2 E106",
    descrus: "Рибофлавин-5' -фосфат натрия, натриевая соль витамина В2 E106 - это пищевая добавка, которая обычно используется в качестве источника витамина В2 для продуктов питания. Она получается путем синтеза из рибофлавина и фосфорной кислоты и обычно добавляется в продукты питания в качестве пищевого красителя.",
    desclat: "Riboflavin-5'-phosphate sodium, sodium salt of vitamin B2 E106 is a food additive that is commonly used as a source of vitamin B2 for food products. It is synthesized from riboflavin and phosphoric acid and is typically added to food products as a food coloring agent."
  },
  {
    name: "Желтый 2G E107",
    descrus: "Желтый 2G E107 - это синтетический краситель, который добавляется в пищевые продукты для придания им желтого цвета. Он обычно получается синтетически путем смешивания триметиламмонийидихлорида и лакта из синтетического происхождения.",
    desclat: "Yellow 2G E107 is a synthetic colorant that is added to food products to give them a yellow color. It is typically synthetically produced by mixing trimethylammonium dichloride and lacta from synthetic origins."
  },
  {
    name: "Желтый Солнечный закат E110",
    descrus: "Желтый краситель синтетического происхождения. Используется в пищевой промышленности для окрашивания продуктов. Получают путем синтеза анилина, ацетонитрила и натрия.",
    desclat: "Sunset Yellow E110 is a synthetic yellow colorant used in the food industry. It is obtained by synthesizing aniline, acetonitrile, and sodium."
  },
  {
    name: "Фермент инвертаза E1103",
    descrus: "Фермент инвертаза E1103 используется в производстве пищевых продуктов для гидролиза сахарозы на глюкозу и фруктозу. Фермент получают из дрожжей.",
    desclat: "Invertase enzyme E1103 is used in the production of food products for the hydrolysis of sucrose into glucose and fructose. The enzyme is obtained from yeast."
  },
  {
    name: "Фермент лизоцим E1105",
    descrus: "Фермент лизоцим E1105 используется как консервант в пищевой промышленности. Этот фермент получают из яичных белков.",
    desclat: "Lysozyme enzyme E1105 is used as a preservative in the food industry. This enzyme is obtained from egg whites."
  },
  {
    name: "Кошениль/карминовая кислота E120",
    descrus: "Кошениль/карминовая кислота E120 – это краситель, получаемый из жуков-кокцид. Используется в пищевой промышленности для окрашивания продуктов.",
    desclat: "Cochineal/Carmine acid E120 is a dye obtained from cochineal insects. It is used in the food industry for coloring products."
  },
  {
    name: "Полидекстроза E1200",
    descrus: "Полидекстроза E1200 – это используемый в пищевой промышленности загуститель и стабилизатор. Получают её из крахмала при помощи ферментативного гидролиза.",
    desclat: "Polydextrose E1200 is a thickener and stabilizer used in the food industry. It is obtained from starch through enzymatic hydrolysis."
  },
  {
    name: "Поливинилпирролидон E1201",
    descrus: "Дополнительный стабилизатор при производстве кондитерских изделий, соусов, супов. Применяется во французкой выпечке. Получают из мономера винилпирролидона.",
    desclat: "Additional stabilizer in the production of confectionery products, sauces, soups. Used in French baking. Obtained from the monomer vinylpyrrolidone."
  },
  {
    name: "Краситель E122",
    descrus: "Ярко-красный краситель на основе азофарбов. Используется для придания цвета кондитерским изделиям. Получается синтетически.",
    desclat: "Bright red synthetic azo dye used to color confectionery products."
  },
  {
    name: "Краситель E123",
    descrus: "Краситель желтого цвета, получаемый искусственно. Используется в производстве кондитерских изделий и газированных напитков.",
    desclat: "Artificial yellow dye used in the production of confectionery products and soft drinks."
  },
  {
    name: "Пунцовый 4R E124",
    descrus: "Красный краситель на основе азофарбов, получаемый синтетически. Используется для придания яркого цвета продуктам питания, таким как конфеты и печенье.",
    desclat: "Red synthetic azo dye used to give bright color to food products such as candy and biscuits."
  },
  {
    name: "Краситель E125",
    descrus: "Краситель красно-оранжевого цвета. Является синтетической краской, используемой в производстве продуктов питания.",
    desclat: "A red-orange color dye. It is a synthetic colorant used in the production of food products."
  },
  {
    name: "Краситель E126",
    descrus: "Краситель, получаемый из кошачьей мочи. Широко применяется в производстве кондитерских изделий и напитков.",
    desclat: "A dye obtained from cat urine. Widely used in the production of confectionery products and beverages."
  },
  {
    name: "Краситель E127",
    descrus: "Красный краситель, получаемый из кошенили. Используется в производстве кондитерских изделий, напитков, джемов и т.д.",
    desclat: "A red dye obtained from cochineal. Used in the production of confectionery products, drinks, jams, etc."
  },
  {
    name: "Краситель E128",
    descrus: "Синий краситель на основе индиго. Применяется для придания цвета в производстве многих продуктов питания, например, сладостей, молочных продуктов, ликеров.",
    desclat: "A blue dye based on indigo. Used to color many food products such as sweets, dairy products, liqueurs, etc."
  },
  {
    name: "Краситель E129",
    descrus: "Оранжево-красный краситель, используемый в пищевой промышленности.",
    desclat: "An orange-red dye used in the food industry."
  },
  {
    name: "Краситель E131",
    descrus: "Синий краситель, получаемый из водорослей. Применяется в пищевой промышленности для придания синего цвета продуктам питания.",
    desclat: "A blue dye obtained from algae. Used in the food industry to color food products blue."
  },
  {
    name: "Краситель E132",
    descrus: "Синий краситель, получаемый из индиго. Применяется для придания голубого цвета в пищевой промышленности.",
    desclat: "A blue dye obtained from indigo. Used in the food industry to color food products light blue."
  },
  {
    name: "Хлорофилл E140",
    descrus: "Хлорофилл E140 – природный краситель зеленого цвета, получаемый из растительных источников, таких как шпинат, листья петрушки и укропа, а также из водорослей.",
    desclat: "Chlorophyll E140 - a natural green pigment obtained from plant sources, such as spinach, parsley leaves, and dill, as well as from algae."
  },
  {
    name: "Декстрин E1400",
    descrus: "Декстрин E1400 - пищевая добавка, получаемая из крахмала. Она используется как загуститель, стабилизатор и для придания текстуры продуктам.",
    desclat: "Dextrin E1400 - a food additive obtained from starch. It is used as a thickener, stabilizer, and to give texture to products."
  },
  {
    name: "Крахмал, обработанный кислотой E1401",
    descrus: "Крахмал, обработанный кислотой E1401 - пищевая добавка, получаемая из крахмала с помощью использования кислоты. Она используется как загуститель и стабилизатор.",
    desclat: "Acid-treated starch E1401 - a food additive obtained from starch using acid. It is used as a thickener and stabilizer."
  },
  {
    name: "Крахмал окисленный E1404",
    descrus: "Крахмал окисленный E1404 - пищевая добавка, получаемая из крахмала с помощью окисления. Она используется как загуститель, стабилизатор и для придания текстуры продуктам.",
    desclat: "Oxidized starch E1404 - a food additive obtained from starch by oxidation. It is used as a thickener, stabilizer, and to give texture to products."
  },
  {
    name: "Медные комплексы хлорофиллов E141",
    descrus: "Медные комплексы хлорофиллов E141 - пищевая добавка, получаемая из хлорофилла с помощью добавления меди. Она используется как краситель и антиоксидант.",
    desclat: "Copper complexes of chlorophyllins E141 - a food additive obtained from chlorophyll by adding copper. It is used as a colorant and antioxidant."
  },
  {
    name: "Загуститель, стабилизатор E1410",
    descrus: "Загуститель, стабилизатор E1410 - пищевая добавка, получаемая из растительных источников, таких как камеди, арахис и маниоковый крахмал. Она используется для улучшения текстуры и структуры продуктов.",
    desclat: "Stabilizer, thickener E1410 - a food additive obtained from plant sources, such as cassava, peanuts and tapioca starch. It is used to improve the texture and structure of products."
  },
  {
    name: "Дикрахмалфосфат E1412",
    descrus: "Дикрахмалфосфат E1412 - пищевая добавка, получаемая из крахмала с помощью добавления фосфорной кислоты. Она используется как загуститель, стабилизатор и эмульгатор.",
    desclat: "Diphosphates of starch E1412 - a food additive obtained from starch by adding phosphoric acid. It is used as a thickener, stabilizer and emulsifier."
  },
  {
    name: "Фосфатированный дикрахмалфосфат E1413",
    descrus: "Фосфатированный дикрахмалфосфат E1413 - пищевая добавка, получаемая из крахмала с помощью добавления фосфорной кислоты и аммиака. Она используется как загуститель, стабилизатор и для придания текучести продуктам.",
    desclat: "Phosphated distarch phosphate E1413 - a food additive obtained from starch by adding phosphoric acid and ammonia. It is used as a thickener, stabilizer, and to give flow to products."
  },
  {
    name: "Зеленый S",
    descrus: "Зеленый S - это краситель синтетического происхождения. Получают его путем окрашивания пищевых продуктов и напитков. В небольших количествах не представляет опасности для здоровья.",
    desclat: "Green S is a synthetic food colorant used to impart green color to food products and beverages. In small quantities, it is considered safe for human consumption.",
  },
  {
    name: "Ацетилированный крахмал",
    descrus: "Ацетилированный крахмал E1420 - пищевая добавка, используемая в производстве кондитерских изделий, напитков и суповых бульонов. Получают его путем обработки крахмала уксусной кислотой.",
    desclat: "Acetylated Starch E1420 - a food additive used in the manufacture of confectionery products, beverages, and soup stocks. It is derived from starch by treatment with acetic acid.",
  },
  {
    name: "Ацетилированный дикрахмалфосфат",
    descrus: "Ацетилированный дикрахмалфосфат E1422 – пищевая добавка, получаемая с помощью ацетилирования дикрахмалфосфата. Широко применяется в различных продуктах питания, таких как соусы, десерты и другие изделия. ",
    desclat: "Acetylated Distarch Phosphate E1422 - a food additive derived from the acetylation of distarch phosphate. It is widely used in various food products such as sauces, desserts, and other items.",
  },
  {
    name: "Гидроксипропил дикрахмалфосфат",
    descrus: "Гидроксипропил дикрахмалфосфат E1442 - пищевая добавка, используемая как загуститель в различных продуктах, включая молочные и кондитерские изделия, супы, соусы и др. Получают его из крахмала путем гидроксипропилирования и фосфатирования.",
    desclat: "Hydroxypropyl Distarch Phosphate E1442 - a food additive used as a thickener in various food products, including dairy and bakery items, soups, sauces, and others. It is derived from starch by hydroxypropylation and phosphorylation.",
  },
  {
    name: "Эфир крахмала и натриевой соли октенилянтарной кислоты E1450",
    descrus: "E1450 - это эфир крахмала и натриевой соли октенилкарбоновой кислоты. Он производится путем замены гидроксильных групп в молекуле крахмала на группы октенилкарбоновой кислоты. Используется в пищевой промышленности в качестве загустителя, стабилизатора и эмульгатора.",
    desclat: "E1450 - is an ether of starch and octenyl succinic anhydride. It is produced by substituting hydroxyl groups in the starch molecule with octenyl succinic groups. It is used in the food industry as a thickener, stabilizer, and emulsifier."
  },
  {
    name: "Ацетилированный окисленный крахмал E1451",
    descrus: "E1451 - это ацетилированный окисленный крахмал, получаемый путем обработки крахмала ацетик-пероксидполитолуолефиновой кислотой. Эта пищевая добавка используется для улучшения консистенции и структуры продуктов и как загуститель.",
    desclat: "E1451 - is an acetylated oxidized starch obtained by treating starch with acetic-peroxypolitolene acid. This food additive is used to improve the consistency and structure of the products and as a thickener."
  },
  {
    name: "Сахарный колер с химическими добавками E150 (A-D)",
    descrus: "E150 - это смесь сахарных колеров, содержащая одну или несколько из следующих химических добавок: E150a, E150b, E150c или E150d. Они получаются из обработки сахара различными реагентами и используются как красители в различных продуктах питания, таких как напитки, сладости и пряности.",
    desclat: "E150 - is a mixture of caramel colors containing one or more of the following chemical additives: E150a, E150b, E150c, or E150d. They are obtained by processing sugar with various reagents and are used as colorants in various food products such as drinks, sweets, and spices."
  },
  {
    name: "Триэтилцитрат E1505",
    descrus: "Триэтилцитрат — это пищевая добавка, которая используется в качестве эмульгатора, консерванта, ароматизатора и регулятора кислотности",
    desclat: "Triethyl citrate is a food additive that is used as an emulsifier, preservative, flavoring agent, and acidity regulator. It can be obtained by esterification of citric acid with ethyl alcohol."
  },
  {
    name: "Черный блестящий BN E151",
    descrus: "Черный блестящий BN E151 — это пищевая добавка, которая используется в качестве красителя в пищевой промышленности",
    desclat: "Brilliant Black BN E151 is a food additive that is used as a colorant in the food industry. It can be obtained by synthesis of aniline and diazonium salts."
  },
  {
    name: "Триацетин E1518",
    descrus: "Триацетин — это пищевая добавка, которая используется в качестве регулятора кислотности и эмульгатора",
    desclat: "Triacetin is a food additive that is used as an acidity regulator and emulsifier. It can be obtained by esterification of glycerol with acetic acid."
  },
  {
    name: "Пропиленгликоль E1520",
    descrus: "Пропиленгликоль — это пищевая добавка, которая используется в качестве регулятора кислотности, эмульгатора и консерванта",
    desclat: "Propylene glycol is a food additive that is used as an acidity regulator, emulsifier, and preservative. It can be obtained by hydration of propylene oxide."
  },
  {
    name: "Уголь растительный E153",
    descrus: "Уголь растительный E153 — это пищевая добавка, которая получается из древесины. Она используется как краситель в продуктах, также она обладает адсорбирующими свойствами",
    desclat: "Vegetable carbon E153 is a food additive that is obtained from wood. It is used as a coloring agent in products, and it also has adsorbent properties"
  },
  {
    name: "Коричневый FK E154",
    descrus: "Коричневый FK E154 — это пищевая добавка, которая используется как краситель. Она получается из обжаренного сахара",
    desclat: "Brown FK E154 is a food additive that is used as a coloring agent. It is obtained from roasted sugar"
  },
  {
    name: "Коричневый HT E155",
    descrus: "Коричневый HT E155 — это пищевая добавка, которая используется как краситель. Она получается из обжаренного сахара",
    desclat: "Brown HT E155 is a food additive that is used as a coloring agent. It is obtained from roasted sugar"
  },
  {
    name: "Альфа-, бета-, гамма-каротины E160A",
    descrus: "Альфа-, бета-, гамма-каротины E160A — это пищевая добавка, которая получается из натуральных источников, таких как морковь, абрикосы и тыква. Они используются как краситель и ароматизатор",
    desclat: "Alpha-, beta-, gamma-carotenes E160A are food additives that are obtained from natural sources, such as carrots, apricots, and pumpkin. They are used as a coloring agent and flavor enhancer"
  },
  {
    name: "Аннато, биксин, норбиксин E160B",
    descrus: "Аннато, биксин, норбиксин E160B — это пищевые добавки, которые получают из плодов дерева аннато. Они используются как краситель и ароматизатор.",
    desclat: "Annatto, bixin, norbixin E160B are food additives that are obtained from the fruit of the annatto tree. They are used as a coloring agent and flavor enhancer."
  },
  {
      name: "Капсантин, капсорубин E160C",
      descrus: "Капсантин и капсорубин E160C — это пищевые добавки, которые получают из перца. Они используются как красители.",
      desclat: "Capsanthin and capsorubin E160C are food additives that are obtained from pepper. They are used as coloring agents."
  },
  {
      name: "Ликопин E160D",
      descrus: "Ликопин E160D — это пищевая добавка, которая получается из томатов. Она используется как краситель и антиоксидант.",
      desclat: "Lycopene E160D is a food additive that is obtained from tomatoes. It is used as a coloring agent and antioxidant."
  },
  {
      name: "Каротиновый альдегид E160E",
      descrus: "Каротиновый альдегид E160E — это пищевая добавка, которая получается из клеток кукурузы. Она используется как краситель.",
      desclat: "Beta-apo-8'-carotenal (C30) E160E is a food additive that is obtained from corn cells. It is used as a coloring agent."
  },
  {
    name: "Этиловый эфир каротиновой кислоты E160F",
    descrus: "Этиловый эфир каротиновой кислоты E160F — это пищевая добавка, которая получается преимущественно из микроводорослей. Он используется как краситель и антиоксидант.",
    desclat: "Ethyl ester of beta-apo-8'-carotenoic acid (C30) E160F is a food additive that is primarily obtained from microalgae. It is used as a coloring agent and antioxidant."
  },
  {
      name: "Флавоксантин E161A",
      descrus: "Флавоксантин E161A – это пищевая добавка, которую получают из корней моркови и желтых цветов. Она используется в качестве красителя.",
      desclat: "Flavoxanthin E161A is a food additive that is obtained from carrots roots and yellow flowers. It is used as a coloring agent."
  },
  {
      name: "Лютеин E161B",
      descrus: "Лютеин E161B – это пищевая добавка, которую получают из календулы и ряда других растений. Она используется как краситель и антиоксидант.",
      desclat: "Lutein E161B is a food additive that is obtained from marigold and several other plants. It is used as a coloring agent and antioxidant."
  },
  {
    name: "Криптоксантин E161C",
    descrus: "Криптоксантин E161C – это пищевая добавка, которую получают из японской мандаринки и некоторых других растений. Она используется как краситель и антиоксидант.",
    desclat: "Cryptoxanthin E161C is a food additive that is obtained from satsuma mandarin and some other plants. It is used as a coloring agent and antioxidant."
  },
  {
    name: "Рубиксантин E161D",
    descrus: "Рубиксантин E161D - это пищевая добавка, которую получают из плодов арбуза. Он используется в качестве красителя.",
    desclat: "Rubixanthin E161D is a food additive that is obtained from watermelon fruit. It is used as a coloring agent."
  },
  {
      name: "Виолоксантин E161E",
      descrus: "Виолоксантин E161E - это пищевая добавка, которую получают из пурпурной моркови. Он используется как краситель.",
      desclat: "Violoxanthin E161E is a food additive that is obtained from purple carrot. It is used as a coloring agent."
  },
  {
      name: "Родоксантин E161F",
      descrus: "Родоксантин E161F - это пищевая добавка, которую получают из красного апельсина. Он используется как краситель.",
      desclat: "Rhodoxanthin E161F is a food additive that is obtained from blood orange. It is used as a coloring agent."
  },
  {
      name: "Кантаксантин E161G",
      descrus: "Кантаксантин E161G - это пищевая добавка, которую получают из зеленых водорослей. Он используется как краситель.",
      desclat: "Cantaxanthin E161G is a food additive that is obtained from green algae. It is used as a coloring agent."
  },
  {
    name: "Свекольный красный, бетанин E162",
    descrus: "Бетанин E162 - это натуральный краситель, получаемый из свеклы. Он используется как добавка в многих продуктах питания, таких как напитки, десерты и продукты из мяса.",
    desclat: "Beetroot red, E162 - is a natural colorant obtained from beets. It is used as an additive in many food products such as beverages, desserts, and meat products."
  },
  {
    name: "Антоцианы E163",
    descrus: "Антоцианы E163 - это группа красителей, которые получают из свежих или замороженных ягод и фруктов. Они широко используются в пищевой промышленности, чтобы придать продуктам красочный вид.",
    desclat: "Anthocyanins E163 - are a group of colorants that are obtained from fresh or frozen berries and fruits. They are widely used in the food industry to give products a colorful appearance."
  },
  {
    name: "Карбонаты кальция E170",
    descrus: "Карбонаты кальция E170 - это пищевая добавка, содержащая кальций, который необходим для здоровых костей и зубов. Он используется в многих продуктах питания, таких как молочные продукты, хлеб и выпечка.",
    desclat: "Calcium carbonate E170 - is a food additive that contains calcium, which is necessary for healthy bones and teeth. It is used in many food products such as dairy products, bread, and baked goods."
  },
  {
    name: "Диоксид титана E171",
    descrus: "Диоксид титана E171 - это белый порошок, используемый как пищевая добавка, чтобы улучшить внешний вид продуктов. Он может использоваться в конфетах, печенье, кексы и других продуктах.",
    desclat: "Titanium dioxide E171 - is a white powder used as a food additive to improve the appearance of products. It can be used in candies, cookies, cakes, and other products."
  },
  {
    name: "Оксиды и гидроксиды железа E172",
    descrus: "Оксиды и гидроксиды железа E172 - пищевые добавки, которые используют для окрашивания продуктов в коричневый или красный цвет. Добавки получаются путем окисления железа.",
    desclat: "Iron oxides and hydroxides E172 - food additives that are used to color products brown or red. Additives are obtained by oxidizing iron."
  },
  {
    name: "Алюминий E173",
    descrus: "Алюминий E173 - это пищевая добавка, которая используется как антиоксидант и стабилизатор. Ее получают из оксида алюминия.",
    desclat: "Aluminum E173 - is a food additive that is used as an antioxidant and stabilizer. It is obtained from aluminum oxide."
  },
  {
    name: "Серебро E174",
    descrus: "Серебро E174 - это пищевая добавка, которая используется в качестве консерванта и антибактериального средства. Ее получают из чистого серебра.",
    desclat: "Silver E174 - is a food additive that is used as a preservative and antibacterial agent. It is obtained from pure silver."
  },
  {
    name: "Золото E175",
    descrus: "Золото E175 - это пищевая добавка, которая используется в качестве консерванта и антиоксиданта. Ее получают из чистого золота.",
    desclat: "Gold E175 - is a food additive that is used as a preservative and antioxidant. It is obtained from pure gold."
  },
  {
    name: "Рубиновый литол ВК E180",
    descrus: "Рубиновый литол ВК Е180 является красительным пигментом красно-розового цвета и используется для окрашивания различных продуктов питания",
    desclat: "Ruby Litol VK E180 is a red-pink colorant pigment used to color various food products. It is a food coloring additive and is made by the reaction of phthalic anhydride with 3-amino-4-methoxyphenol"
  },
  {
    name: "Сорбиновая кислота Е200",
    descrus: "Сорбиновая кислота Е200 является консервантом и используется для сохранения продуктов питания, таких как мясо, сыр, йогурт, патоку и вина",
    desclat: "Sorbic acid E200 is a preservative used to preserve food products such as meat, cheese, yogurt, fruit juices and wine. It inhibits the growth of fungi, yeast, and molds in food products and is made by reacting crotonaldehyde with ketene"
  },
  {
    name: "Сорбат натрия Е201",
    descrus: "Сорбат натрия Е201 является консервантом, используемым для увеличения срока хранения продуктов питания, таких как хлеб, сыры, мясные изделия, вина и пиво",
    desclat: "Sodium sorbate E201 is a preservative used to increase the shelf life of food products such as bread, cheese, meat products, wine and beer. It inhibits the growth of yeast, mold, and bacteria in food products and is made by reacting sorbic acid with sodium hydroxide"
  },
  {
    name: "Сорбат калия Е202",
    descrus: "Сорбат калия Е202 является пищевым консервантом, который обладает свойствами, необходимыми для увеличения срока хранения различных продуктов питания и напитков, таких как йогурт, сыры, пиво и вино",
    desclat: "Potassium sorbate E202 is a food preservative that has the necessary properties to increase the shelf life of various food products and drinks such as yogurt, cheese, beer and wine. It inhibits the growth of mold, yeast, and bacteria in food products and is made by reacting sorbic acid with potassium hydroxide"
  },
  {
    name: "Сорбат кальция Е203",
    descrus: "Сорбат кальция E203 - консервант, используется для продления срока хранения различных пищевых продуктов, таких как мармелад, варенье и печенье. Получают его путем взаимодействия сорбиновой кислоты и карбоната кальция.",
    desclat: "Calcium sorbate E203 is a preservative used to extend the shelf life of various food products, such as jelly, jam and biscuits. It is made by reacting sorbic acid with calcium carbonate."
  },
  {
    name: "Бензойная кислота Е210",
    descrus: "Бензойная кислота E210 - пищевая добавка, используется в качестве консерванта для предотвращения роста плесневых грибов, дрожжей, бактерий в различных продуктах питания, таких как напитки, кондитерские изделия и вино. Получают ее путем окисления толуола.",
    desclat: "Benzoic acid E210 is a food additive used as a preservative to prevent the growth of mold, yeast, and bacteria in various food products, such as beverages, confectionery and wine. It is made by oxidizing toluene."
  },
  {
    name: "Бензоат натрия Е211",
    descrus: "Бензоат натрия E211 - пищевая добавка, используется в качестве консерванта для продления срока годности продуктов питания, таких как напитки, кондитерские изделия и соки. Получают её путём реакции бензойной кислоты и натрия.",
    desclat: "Sodium benzoate E211 is a food additive used as a preservative to extend the shelf life of food products such as beverages, confectionery and juices. It is made by reacting benzoic acid with sodium hydroxide."
  },
  {
    name: "Бензоат калия Е212",
    descrus: "Бензоат калия E212 - пищевая добавка, используется в качестве консерванта для предотвращения роста плесневых грибов, дрожжей, бактерий в различных продуктах питания, таких как напитки, кондитерские изделия и вино. Получают её путём реакции бензойной кислоты и калия.",
    desclat: "Potassium benzoate E212 is a food additive used as a preservative to prevent the growth of mold, yeast, and bacteria in various food products, such as beverages, confectionery and wine. It is made by reacting benzoic acid with potassium hydroxide."
  },
  {
    name: "Бензоат кальция Е213",
    descrus: "Бензоат кальция E213 - это пищевая добавка, которая используется в качестве консерванта для продления срока годности различных типов продуктов, например, желе, конфет, мясных изделий и шоколада. Он производится путем реакции бензойной кислоты с оксидом кальция.",
    desclat: "Calcium benzoate E213 is a food additive that is used as a preservative to extend the shelf life of various types of food products, such as jelly, candy, meat products, and chocolate. It is made by reacting benzoic acid with calcium oxide."
  },
  {
      name: "Пара-гидроксибензойной кислоты этиловый эфир Е214",
      descrus: "Пара-гидроксибензойной кислоты этиловый эфир E214 - это пищевая добавка, используемая в качестве антиоксиданта и консерванта для продления срока годности различных продуктов, таких как жирные продукты, маринады и соки. Его производят с помощью реакции пара-гидроксибензойной кислоты и этанола.",
      desclat: "Ethyl para-hydroxybenzoate E214 is a food additive used as an antioxidant and preservative to extend the shelf life of various food products, such as fatty products, marinades, and juices. It is produced by reacting para-hydroxybenzoic acid with ethanol."
  },
  {
      name: "Пара-гидроксибензойной кислоты этилового эфира натриевая соль Е215",
      descrus: "Пара-гидроксибензойной кислоты этилового эфира натриевая соль E215 - это пищевая добавка, которая используется в качестве антиоксиданта и консерванта. Она увеличивает срок хранения различных продуктов, таких как консервы, соки, вина и пива. Она получается путем реакции пара-гидроксибензойной кислоты, этанола и гидроксида натрия.",
      desclat: "Sodium ethyl para-hydroxybenzoate E215 is a food additive used as an antioxidant and preservative that increases the shelf life of various products, such as canned foods, juices, wine, and beer. It is produced by reacting para-hydroxybenzoic acid, ethanol and sodium hydroxide."
  },
  {
    name: "Пара-оксибензойной кислоты пропиловый эфир Е216",
    descrus: "Пара-оксибензойной кислоты пропиловый эфир E216 - это пищевая добавка, которая используется как антиоксидант и консервант для увеличения срока хранения различных продуктов, таких как соки, напитки и кондитерские изделия. Он получается путем реакции пара-оксибензойной кислоты с пропанолом.",
    desclat: "Propyl para-hydroxybenzoate E216 is a food additive that is used as an antioxidant and preservative for increasing the shelf life of various products, such as juices, drinks, and baked goods. It is produced by reacting para-hydroxybenzoic acid with propanol."
  },
  {
      name: "Пара-оксибензойной кислоты пропилового эфира натриевая соль Е217",
      descrus: "Пара-оксибензойной кислоты пропилового эфира натриевая соль E217 - это пищевая добавка, которую используют в качестве антиоксиданта и консерванта, чтобы увеличить срок хранения продуктов, таких как кондитерские изделия, соки и напитки. Она получается путем реакции пара-оксибензойной кислоты пропилового эфира с гидроксидом натрия.",
      desclat: "Sodium propyl para-hydroxybenzoate E217 is a food additive used as an antioxidant and preservative to increase the shelf life of products such as baked goods, juices, and drinks. It is produced by reacting propyl para-hydroxybenzoate with sodium hydroxide."
  },
  {
      name: "Пара-гидроксибензойной кислоты метиловый эфир Е218",
      descrus: "Пара-гидроксибензойной кислоты метиловый эфир E218 - это пищевая добавка, которая используется в качестве антиоксиданта и консерванта для продления срока годности продуктов, таких как соки, вина и пиво. Она получается из пара-гидроксибензойной кислоты и метанола.",
      desclat: "Methyl para-hydroxybenzoate E218 is a food additive used as an antioxidant and preservative to extend the shelf life of products such as juices, wine, and beer. It is produced from para-hydroxybenzoic acid and methanol."
  },
  {
    name: "Пара-гидроксибензойной кислоты метилового эфира натриевая соль Е219",
    descrus: "Пара-гидроксибензойной кислоты метилового эфира натриевая соль Е219 - это пищевая добавка, которую используют в качестве антиоксиданта и консерванта для увеличения срока хранения различных продуктов, например, вина, пива и соков. Эта добавка получается путем обработки метилового эфира пара-гидроксибензойной кислоты гидроксидом натрия.",
    desclat: "Sodium methylparaben E219 is a food additive used as an antioxidant and preservative to increase the shelf life of various products such as wine, beer, and juices. This additive is produced by treating the methyl ester of para-hydroxybenzoic acid with sodium hydroxide."
  },
  {
    name: "Диоксид серы Е220",
    descrus: "Диоксид серы Е220 - это пищевая добавка, которая используется для консервирования и предотвращения окисления продуктов, таких как сухофрукты, соки, вина и др. Она получается путем сжигания серы и добычи газа, который затем пропускают через воду для получения раствора диоксида серы.",
    desclat: "Sulfur dioxide E220 is a food additive used for preservation and prevention of oxidation of products such as dried fruits, juices, wine, etc. It is produced by burning sulfur and extracting gas, which is then passed through water to obtain a solution of sulfur dioxide."
  },
  {
    name: "Сульфит натрия Е221",
    descrus: "Сульфит натрия Е221 - это пищевая добавка, используемая как консервант для увеличения срока хранения различных продуктов, таких как вино, соки, маринованные овощи. Она получается путем обработки сернистой кислоты гидроксидом натрия.",
    desclat: "Sodium sulfite E221 is a food additive used as a preservative to increase the shelf life of various products such as wine, juices, pickled vegetables, etc. It is produced by treating sulfuric acid with sodium hydroxide."
  },
  {
    name: "Гидросульфит натрия Е222",
    descrus: "Гидросульфит натрия Е222 - это пищевая добавка, которая используется в качестве консерванта и антиоксиданта, чтобы продукты, такие как соки, вино и пиво, могли дольше сохранять свою свежесть. Эта добавка получается из сероводородного газа путем обработки его гидроксидом натрия.",
    desclat: "Sodium hydrosulfite E222 is a food additive used as a preservative and antioxidant to help products such as juices, wine, and beer maintain freshness for longer. This additive is produced from hydrogen sulfide gas by treating it with sodium hydroxide."
  },
  {
    name: "Пиросульфит натрия Е223",
    descrus: "Пиросульфит натрия Е223 - это пищевая добавка, которая используется для предотвращения окисления продуктов и увеличения их срока хранения. Она получается путем обработки сернистой кислоты гидроксидом натрия.",
    desclat: "Sodium pyrosulfite E223 is a food additive used to prevent oxidation of products and increase their shelf life. It is produced by treating sulfuric acid with sodium hydroxide."
  },
  {
    name: "Пиросульфит калия Е224",
    descrus: "Пиросульфит калия Е224 - это пищевая добавка, которая используется в качестве антиоксиданта и консерванта для увеличения срока хранения различных продуктов, таких как вино, соки, маринованные овощи. Эта добавка получается путем обработки сернистой кислоты гидроксидом калия.",
    desclat: "Potassium pyrosulfite E224 is a food additive used as an antioxidant and preservative to increase the shelf life of various products such as wine, juices, and pickled vegetables. This additive is produced by treating sulfuric acid with potassium hydroxide."
  },
  {
    name: "Сульфит калия Е225",
    descrus: "Сульфит калия Е225 - это пищевая добавка, которую используют для консервирования и предотвращения окисления различных продуктов, таких как вино, сухофрукты, соки и др. Она получается из сернистой кислоты путем обработки гидроксидом калия.",
    desclat: "Potassium sulfite E225 is a food additive used for preservation and prevention of oxidation of various products such as wine, dried fruits, juices, etc. It is produced from sulfuric acid by treating it with potassium hydroxide."
  },
  {
    name: "Сульфит кальция Е226",
    descrus: "Сульфит кальция Е226 - это пищевая добавка, используемая для консервирования различных продуктов, например вина, сухофруктов и соков. Она получается из сернистой кислоты с помощью оксида кальция.",
    desclat: "Calcium sulfite E226 is a food additive used for preservation of various products such as wine, dried fruits, and juices. It is produced from sulfuric acid by treating it with calcium oxide."
  },
  {
    name: "Гидросульфит кальция Е227",
    descrus: "Гидросульфит кальция Е227 - это пищевая добавка, используемая в качестве консерванта для сохранения свежести продуктов, таких как соки, вино и пиво. Эта добавка получается из сероводородного газа путем обработки его гидроксидом кальция.",
    desclat: "Calcium hydrosulfite E227 is a food additive used as a preservative to maintain freshness of products such as juices, wine, and beer. This additive is produced from hydrogen sulfide gas by treating it with calcium hydroxide."
  },
  {
    name: "Гидросульфит калия Е228",
    descrus: "Гидросульфит калия Е228 - это пищевая добавка, которая используется как консервант для увеличения срока хранения продуктов, таких как вино, соки и пиво. Она производится из сероводородного газа путем обработки его гидроксидом калия.",
    desclat: "Potassium hydrosulfite E228 is a food additive used as a preservative to increase the shelf life of products such as wine, juices, and beer. It is produced from hydrogen sulfide gas by treating it with potassium hydroxide."
  },
  {
    name: "Бифенил, дифенил Е230",
    descrus: "Бифенил, дифенил Е230 - это пищевая добавка, которая используется в качестве консерванта для различных продуктов, таких как масло, сыр, кондитерские изделия и красители для пищевых продуктов. Она получается путем химической реакции между бензолом и хлором.",
    desclat: "Biphenyl, diphenyl E230 is a food additive used as a preservative for various products such as oil, cheese, confectionery, and food colorings. It is produced by a chemical reaction between benzene and chlorine."
  },
  {
    name: "Ортофенилфенол Е231",
    descrus: "Ортофенилфенол Е231 - это пищевая добавка, которая используется в качестве консерванта для мяса и рыбы, а также в производстве бумаги и древесных материалов. Она получается из фенола и хлора.",
    desclat: "Orthophenylphenol E231 is a food additive used as a preservative for meat and fish, as well as in the production of paper and wood materials. It is produced from phenol and chlorine."
  },
  {
    name: "Ортофенилфенол натрия Е232",
    descrus: "Ортофенилфенол натрия Е232 - это пищевая добавка, которая используется в качестве консерванта для мяса и рыбы, а также в производстве бумаги и древесных материалов. Она получается из фенола, хлора и гидроксида натрия.",
    desclat: "Sodium orthophenylphenol E232 is a food additive used as a preservative for meat and fish, as well as in the production of paper and wood materials. It is produced from phenol, chlorine, and sodium hydroxide."
  },
  {
    name: "Тиабендазол Е233",
    descrus: "Тиабендазол Е233 - это пищевая добавка, используемая в качестве консерванта для фруктов и овощей. Она также используется в производстве лекарственных препаратов. Она получается синтетически.",
    desclat: "Thiabendazole E233 is a food additive used as a preservative for fruits and vegetables. It is also used in the production of medicinal drugs. It is produced synthetically."
  },
  {
    name: "Низин Е234",
    descrus: "Низин Е234 - это пищевая добавка, используемая как консервант для сыра и дрожжей. Она получается из бактерии Lactococcus lactis.",
    desclat: "Nisin E234 is a food additive used as a preservative for cheese and yeast. It is produced from the bacteria Lactococcus lactis."
  },
  {
    name: "Натамицин Е235",
    descrus: "Натамицин Е235 - это пищевая добавка, используемая в качестве консерванта для сыра и мяса, а также в производстве сомнительного качества вина. Она получается синтетически.",
    desclat: "Natamycin E235 is a food additive used as a preservative for cheese and meat, as well as in the production of low-quality wine. It is produced synthetically."
  },
  {
    name: "Гексаметилентетрамин E239",
    descrus: "Гексаметилентетрамин Е239 - это пищевая добавка, используемая в качестве консерванта для молочных продуктов, мяса и яиц. Она получается путем реакции формальдегида и аммиака.",
    desclat: "Hexamethylenetetramine E239 is a food additive used as a preservative for dairy products, meat, and eggs. It is produced by the reaction of formaldehyde and ammonia."
  },
  {
    name: "Диметилдикарбонат E242",
    descrus: "Диметилдикарбонат Е242 - это пищевая добавка, используемая в качестве консерванта для пива, вина, сидра, соков и некоторых молочных продуктов. Она получается синтетически.",
    desclat: "Dimethyl dicarbonate E242 is a food additive used as a preservative for beer, wine, cider, juices and some dairy products. It is produced synthetically."
  },
  {
    name: "Нитрит калия E249",
    descrus: "Нитрит калия E249 - это пищевая добавка, которая используется в качестве консерванта для мясных изделий, в том числе для колбас и ветчины. Нитрит калия E249 получают путем реакции натрия с азотной кислотой.",
    desclat: "Potassium nitrite E249 is a food additive that is used as a preservative for meat products, including sausages and ham. It is obtained by reacting sodium with nitric acid."
  },
  {
    name: "Нитрит натрия E250",
    descrus: "Нитрит натрия E250 - это пищевая добавка, которая используется в качестве консерванта для мясных продуктов, таких как колбасы, ветчина, бекон, и рыба. Она получается из натрата натрия путём использования аммиака и концентрированной соляной кислоты.",
    desclat: "Sodium nitrite E250 is a food additive that is used as a preservative for meat products such as sausages, ham, bacon, and fish. It is obtained from sodium nitrate using ammonia and concentrated hydrochloric acid."
  },
  {
    name: "Нитрат натрия E251",
    descrus: "Нитрат натрия E251 - это пищевая добавка, которая используется в качестве консерванта в мясных продуктах. Она получается добавлением смеси азотной и серной кислот к натрию и потом отделение нерастворимого нитрата.",
    desclat: "Sodium nitrate E251 is a food additive that is used as a preservative in meat products. It is obtained by adding a mixture of nitric and sulfuric acid to sodium and then separating the insoluble nitrate."
  },
  {
    name: "Нитрат калия E252",
    descrus: "Нитрат калия E252 - это пищевая добавка, которая используется в качестве консерванта, антиоксиданта и антисептика в мясных продуктах. Нитрат калия E252 получают многими способами, но основной является процесс окисления аммиака азотной кислотой.",
    desclat: "Potassium nitrate E252 is a food additive that is used as a preservative, antioxidant, and antiseptic in meat products. Potassium nitrate E252 is obtained by various methods, but the main one is the oxidation of ammonia with nitric acid."
  },
  {
    name: "Уксусная кислота E260",
    descrus: "Уксусная кислота E260 – это пищевая добавка, которая широко используется в жизни человека, и является важным компонентом в кулинарии. Эта добавка получается синтетически путем окисления или брожения углеводов и является безопасной для потребления человеком в небольших количествах.",
    desclat: "Acetic acid E260 is a food additive that is widely used in human life and is an important component of culinary arts. This additive is synthetically obtained by oxidation or fermentation of carbohydrates and is safe for human consumption in small amounts."
  },
  {
    name: "Ацетат калия E261",
    descrus: "Ацетат калия E261 – это пищевая добавка, которая используется для консервирования пищевых продуктов, а также для регулирования кислотности. Добавка получается синтетически из соляной кислоты и калиевого гидроксида. Калиевый ацетат безопасен для человека и почти не имеет побочных эффектов при употреблении в нормативных количествах.",
    desclat: "Potassium acetate E261 is a food additive that is used for food preservation and acid regulation. The additive is synthetically obtained from hydrochloric acid and potassium hydroxide. Potassium acetate is safe for human consumption and has almost no side effects when consumed in regulatory amounts."
  },
  {
    name: "Ацетат натрия E262",
    descrus: "Ацетат натрия E262 – это пищевая добавка, которая широко используется в пищевой промышленности в качестве консерванта и регулятора кислотности. Ее получают синтетически из уксусной кислоты и натриевого гидроксида. Ацетат натрия безопасен для здоровья и может быть употреблен в небольшом количестве без каких-либо заметных побочных эффектов.",
    desclat: "Sodium acetate E262 is a food additive that is widely used in the food industry as a preservative and acid regulator. It is synthetically obtained from acetic acid and sodium hydroxide. Sodium acetate is safe for health and can be consumed in small quantities without any noticeable side effects."
  },
  {
    name: "Ацетат кальция E263",
    descrus: "Ацетат кальция E263 – пищевая добавка, используемая в животноводстве и птицеводстве в качестве источника кальция и консерванта. По своей структуре это кальциевая соль уксусной кислоты. Получают синтетически путем реакции уксусной кислоты с гидроксидом кальция. Ацетат кальция безопасен для потребления человеком и может использоваться в пищевых продуктах в небольших количествах.",
    desclat: "Calcium acetate E263 is a food additive used in livestock and poultry farming as a source of calcium and preservative. Structurally, it is the calcium salt of acetic acid. It is synthetically obtained by reacting acetic acid with calcium hydroxide. Calcium acetate is safe for human consumption and can be used in food products in small quantities."
  },
  {
    name: "Ацетат аммония E264",
    descrus: "Ацетат аммония E264 – пищевая добавка, используемая в качестве регулятора кислотности в пищевых продуктах. По своей структуре это соль уксусной кислоты и аммиака. Изготавливается синтетически путем реакции уксусной кислоты с аммиаком. В небольших количествах ацетат аммония безопасен для здоровья и не имеет побочных эффектов.",
    desclat: "Ammonium acetate E264 is a food additive used as an acidity regulator in food products. Structurally, it is the salt of acetic acid and ammonia. It is synthesized by reacting acetic acid with ammonia. In small quantities, ammonium acetate is safe for health and has no side effects."
  },
  {
    name: "Молочная кислота E270",
    descrus: "Молочная кислота E270 – пищевая добавка, используемая для регулирования кислотности в пищевых продуктах и как консервант. Получается синтетически из сахаров методом микробного брожения. Молочная кислота безопасна для здоровья человека и может использоваться в пищевых продуктах в нормальных количествах.",
    desclat: "Lactic acid E270 is a food additive used to regulate acidity in food products and as a preservative. It is synthetically obtained from sugars using microbial fermentation. Lactic acid is safe for human consumption and can be used in food products in normal quantities."
  },
  {
    name: "Пропионовая кислота E280",
    descrus: "Пропионовая кислота E280 – пищевая добавка, используемая как консервант. Является синтетической кислотой и используется в пищевой промышленности в качестве добавки для улучшения качества продуктов. Получается методом ферментации молочного сахара. Пропионовая кислота безопасна и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Propionic acid E280 is a food additive used as a preservative. It is a synthetic acid and is used in the food industry as an additive to improve the quality of products. It is obtained by fermenting lactose. Propionic acid is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Пропионат натрия E281",
    descrus: "Пропионат натрия E281 – пищевая добавка, используемая как консервант. Является синтетической солью пропионовой кислоты. получается синтетически. Пропионат натрия безопасен и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Sodium propionate E281 is a food additive used as a preservative. It is a synthetic salt of propionic acid and is obtained synthetically. Sodium propionate is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Пропионат кальция E282",
    descrus: "Пропионат кальция E282 – пищевая добавка, используемая как консервант. Является синтетической солью пропионовой кислоты. Получается синтетически. Пропионат кальция безопасен и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Calcium propionate E282 is a food additive used as a preservative. It is a synthetic salt of propionic acid and is obtained synthetically. Calcium propionate is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Пропионат калия E283",
    descrus: "Пропионат калия E283 – пищевая добавка, используемая как консервант. Является синтетической солью пропионовой кислоты. Получается синтетически. Пропионат калия безопасен и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Potassium propionate E283 is a food additive used as a preservative. It is a synthetic salt of propionic acid and is obtained synthetically. Potassium propionate is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Борная кислота E284",
    descrus: "Борная кислота E284 – пищевая добавка, используемая как консервант и антиоксидант. Является белым кристаллическим порошком. Получается из натуральных кварцевых руд. Борная кислота безопасна и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Boric acid E284 is a food additive used as a preservative and antioxidant. It is a white crystalline powder. It is obtained from natural quartz ores. Boric acid is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Тетраборат натрия (боракс) E285",
    descrus: "Тетраборат натрия (боракс) E285 – пищевая добавка, используемая как консервант и эмульгатор. Получается из натуральных кварцевых руд. Тетраборат натрия (боракс) безопасен и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Sodium tetraborate (borax) E285 is a food additive used as a preservative and emulsifier. It is obtained from natural quartz ores. Sodium tetraborate (borax) is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Диоксид углерода E290",
    descrus: "Диоксид углерода E290 - пищевая добавка, используемая как консервант и газообразующее вещество. Получается синтетически из углекислого газа. Добавка обеспечивает необходимое давление в качестве газообразующего агента. Диоксид углерода безопасен для использования в пищевых продуктах в указанных количествах.",
    desclat: "Carbon dioxide E290 is a food additive used as a preservative and gas-forming agent. It is obtained synthetically from carbon dioxide. The additive provides the necessary pressure as a gas-forming agent. Carbon dioxide is safe for use in food products in the specified quantities."
  },
  {
    name: "Яблочная кислота E296",
    descrus: "Яблочная кислота E296 - пищевая добавка, используемая как кислотный регулятор, ароматизатор и консервант. Является органической кислотой, получаемой синтетически или из натуральных источников, таких как яблочный сок. Яблочная кислота является безопасной и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Malic acid E296 is a food additive used as an acid regulator, flavoring agent and preservative. It is an organic acid obtained synthetically or from natural sources such as apple juice. Malic acid is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Фумаровая кислота E297",
    descrus: "Фумаровая кислота E297 - пищевая добавка, используемая как кислотный регулятор, антиоксидант и консервант. Является органической кислотой, получаемой синтетически или из натуральных источников, таких как фрукты. Фумаровая кислота безопасна и допускается к применению в пищевых продуктах в небольших количествах.",
    desclat: "Fumaric acid E297 is a food additive used as an acid regulator, antioxidant and preservative. It is an organic acid obtained synthetically or from natural sources such as fruit. Fumaric acid is safe and is permitted for use in food products in small quantities."
  },
  {
    name: "Аскорбиновая кислота (Витамин С) E300",
    descrus: "Аскорбиновая кислота (Витамин C) E300 - пищевая добавка, используемая в качестве антиоксиданта и консерванта. Является витамином C, который получают синтетически. Добавка благотворно влияет на здоровье и безопасна для употребления в пищевых продуктах.",
    desclat: "Ascorbic acid (Vitamin C) E300 is a food additive used as an antioxidant and preservative. It is a synthetic vitamin C. The additive has a positive effect on health and is safe for use in food products."
  },
  {
    name: "Аскорбат натрия E301",
    descrus: "Аскорбат натрия E301 - пищевая добавка, используемая в качестве антиоксиданта и консерванта. Является комплексом аскорбиновой кислоты и натрия, получаемым синтетически. Добавка безопасна и улучшает качество пищевых продуктов.",
    desclat: "Sodium ascorbate E301 is a food additive used as an antioxidant and preservative. It is a complex of ascorbic acid and sodium, obtained synthetically. The additive is safe and improves the quality of food products."
  },
  {
    name: "Аскорбат кальция E302",
    descrus: "Аскорбат кальция E302 - пищевая добавка, используемая в качестве антиоксиданта и консерванта. Является комплексом аскорбиновой кислоты и кальция, получаемым синтетически. Добавка безопасна и улучшает качество пищевых продуктов.",
    desclat: "Calcium ascorbate E302 is a food additive used as an antioxidant and preservative. It is a complex of ascorbic acid and calcium, obtained synthetically. The additive is safe and improves the quality of food products."
  },
  {
    name: "Аскорбилпальмитат E304",
    descrus: "Аскорбилпальмитат E304 - пищевая добавка, является эфиром липофильной аскорбиновой кислоты. Применяется как антиокислитель для продления срока годности продуктов и сохранения их качества. Получают синтетически.",
    desclat: "Ascorbyl palmitate E304 is a food additive, which is an ester of lipophilic ascorbic acid. It is used as an antioxidant to extend the shelf life of products and preserve their quality. It is obtained synthetically."
  },
  {
    name: "Антиоксидант - витамин Е E306",
    descrus: "Антиоксидант - витамин Е E306 - пищевая добавка, используемая как антиоксидант для продления срока годности продуктов и сохранения их качества. Является витамином Е, получаемым синтетически.",
    desclat: "Antioxidant - vitamin E E306 is a food additive used as an antioxidant to extend the shelf life of products and preserve their quality. It is a vitamin E obtained synthetically."
  },
  {
    name: "Синтетический Альфа-токоферол E307",
    descrus: "Синтетический Альфа-токоферол E307 - пищевая добавка, используемая как антиоксидант для продления срока годности продуктов и сохранения их качества. Является витамином Е, получаемым синтетически.",
    desclat: "Synthetic alpha-tocopherol E307 is a food additive used as an antioxidant to extend the shelf life of products and preserve their quality. It is a vitamin E obtained synthetically."
  },
  {
    name: "Синтетический Гамма-токоферол E308",
    descrus: "Синтетический Гамма-токоферол E308 - пищевая добавка, используемая как антиоксидант для продления срока годности продуктов и сохранения их качества. Является витамином Е, получаемым синтетически.",
    desclat: "Synthetic gamma-tocopherol E308 is a food additive used as an antioxidant to extend the shelf life of products and preserve their quality. It is a vitamin E obtained synthetically."
  },
  {
    name: "Синтетический Дельта-токоферол E309",
    descrus: "Синтетический Дельта-токоферол E309 - пищевая добавка, является формой витамина Е, получаемой синтетически. Применяется как антиокислитель для продления срока годности продуктов и сохранения их качества.",
    desclat: "Synthetic Delta-tocopherol E309 is a food additive which is a form of vitamin E obtained synthetically. It is used as an antioxidant to extend the shelf life of products and preserve their quality."
  },
  {
    name: "Пропилгаллат E310",
    descrus: "Пропилгаллат E310 - пищевая добавка, получаемая синтетически. Применяется в качестве антиокислителя для продления срока годности продуктов и сохранения их качества.",
    desclat: "Propyl gallate E310 is a food additive obtained synthetically. It is used as an antioxidant to extend the shelf life of products and preserve their quality."
  },
  {
    name: "Октилгаллат E311",
    descrus: "Октилгаллат E311 - пищевая добавка, получаемая синтетически. Применяется в качестве антиокислителя для продления срока годности продуктов и сохранения их качества.",
    desclat: "Octyl gallate E311 is a food additive obtained synthetically. It is used as an antioxidant to extend the shelf life of products and preserve their quality."
  },
  {
    name: "Додецилгаллат E312",
    descrus: "Додецилгаллат E312 - пищевая добавка, получаемая синтетически. Является антиокислителем, применяемым для продления сроков годности продуктов.",
    desclat: "Dodecyl gallate E312 is a food additive obtained synthetically. It is an antioxidant used to extend the shelf life of products."
  },
  {
    name: "Эриторбовая кислота E315",
    descrus: "Эриторбовая кислота E315 - пищевая добавка, является формой витамина C, получаемой синтетически. Применяется для улучшения структуры и цвета продуктов, а также как антиокислитель.",
    desclat: "Erythorbic acid E315 is a food additive which is a form of vitamin C obtained synthetically. It is used to improve the texture and color of products, as well as an antioxidant."
  },
  {
    name: "Эриторбат натрия E316",
    descrus: "Эриторбат натрия E316 - пищевая добавка, является формой витамина C, получаемой синтетически. Применяется как антиокислитель и консервант для продуктов, также улучшает внешний вид и структуру пищевых продуктов.",
    desclat: "Sodium erythorbate E316 is a food additive which is a form of vitamin C obtained synthetically. It is used as an antioxidant and preservative for products, and also improves the appearance and texture of food products."
  },
  {
    name: "Бутилгидроксианизол E320",
    descrus: "Бутилгидроксианизол E320 - пищевая добавка, является антиокислителем, получаемым синтетически. Применяется для продления срока годности продуктов и сохранения их качества.",
    desclat: "Butylated hydroxyanisole E320 is a food additive which is an antioxidant obtained synthetically. It is used to extend the shelf life of products and preserve their quality."
  },
  {
    name: "Бутилгидрокситолуол E321",
    descrus: "Бутилгидрокситолуол E321 - пищевая добавка, получаемая синтетически. Является антиокислителем, применяемым для продления сроков годности продуктов.",
    desclat: "Butylated hydroxytoluene E321 is a food additive obtained synthetically. It is an antioxidant used to extend the shelf life of products."
  },
  {
    name: "Лецитин E322",
    descrus: "Лецитин E322 - пищевая добавка, получаемая из соевых бобов или яичного желтка. Является эмульгатором, применяемым в мясной и кондитерской промышленности.",
    desclat: "Lecithin E322 is a food additive obtained from soybeans or egg yolks. It is an emulsifier used in the meat and confectionery industries."
  },
  {
    name: "Лактат натрия E325",
    descrus: "Лактат натрия E325 - пищевая добавка, производимая из молочной кислоты. Является регулятором кислотности, применяемым для консервации продуктов.",
    desclat: "Sodium lactate E325 is a food additive produced from lactic acid. It is an acidity regulator used for food preservation."
  },
  {
    name: "Лактат калия E326",
    descrus: "Лактат калия E326 - пищевая добавка, получаемая из молочной кислоты. Является регулятором кислотности, применяемым для консервации продуктов.",
    desclat: "Potassium lactate E326 is a food additive produced from lactic acid. It is an acidity regulator used for food preservation."
  },
  {
    name: "Лактат кальция E327",
    descrus: "Лактат кальция E327 - пищевая добавка, получаемая из молочной кислоты. Она является регулятором кислотности, применяемым в кондитерской промышленности для улучшения текстуры, а также в молочной и мясной промышленности для увеличения срока годности продуктов.",
    desclat: "Calcium lactate E327 is a food additive obtained from lactic acid. It is an acidity regulator used to improve texture in the confectionery industry and to increase the shelf life of products in the dairy and meat industries."
  },
  {
    name: "Лимонная кислота E330",
    descrus: "Лимонная кислота E330 - пищевая добавка, получаемая синтетически или из натуральных источников, таких как лимонный сок или косточки абрикоса. Она является регулятором кислотности, применяемым в пищевой промышленности для улучшения вкуса и консервации продуктов.",
    desclat: "Citric acid E330 is a food additive obtained synthetically or from natural sources such as lemon juice or apricot kernels. It is an acidity regulator used in the food industry to improve taste and preserve products."
  },
  {
    name: "Цитраты натрия E331",
    descrus: "Цитраты натрия E331 - пищевая добавка, получаемая синтетически или из натуральных источников, таких как фруктовый сок. Они являются регулятором кислотности, применяемым для консервации продуктов и улучшения текстуры.",
    desclat: "Sodium citrates E331 are a food additive obtained synthetically or from natural sources such as fruit juice. They are an acidity regulator used for food preservation and to improve texture."
  },
  {
    name: "Цитраты калия E332",
    descrus: "Цитраты калия E332 - пищевая добавка, получаемая синтетически или из натуральных источников, таких как фруктовый сок. Они являются регулятором кислотности, применяемым для консервации продуктов и улучшения текстуры. Также они используются как стабилизатор, эмульгатор и защита от окисления.",
    desclat: "Potassium citrates E332 are a food additive obtained synthetically or from natural sources such as fruit juice. They are an acidity regulator used for food preservation and to improve texture. They are also used as a stabilizer, emulsifier, and antioxidant."
  },
  {
    name: "Л141: Цитраты кальция E333",
    descrus: "Цитраты кальция (E333) представляют собой солеобразную пищевую добавку в виде мелких бесцветных кристаллов. Она является искусственным аналогом кальция, который получают из мрамора или природного известняка. Цитраты кальция используются в пищевой промышленности, где они выполняют роль регулятора кислотности и консерванта.",
    desclat: "Calcium citrate (E333) is a salt-like food additive that comes in small colorless crystals. It is an artificial analog of calcium derived from marble or natural limestone. Calcium citrate is used in the food industry, where it performs the role of an acidity regulator and preservative."
  },
  {
    name: "Л142: Винная кислота E334",
    descrus: "Винная кислота (E334) является натуральной органической кислотой, которую получают путем биохимической обработки растительных материалов. Эта пищевая добавка используется как регулятор кислотности, консервант и антиоксидант.",
    desclat: "Tartaric acid (E334) is a natural organic acid obtained by biochemical processing of plant materials. This food additive is used as an acidity regulator, preservative, and antioxidant."
  },
  {
    name: "Л143: Тартраты натрия E335",
    descrus: "Тартраты натрия (E335) являются искусственными солями, которые получают из винной кислоты. Они используются в пищевой промышленности, как регулятор кислотности и консервант.",
    desclat: "Sodium tartrates (E335) are artificial salts derived from tartaric acid. They are used in the food industry as an acidity regulator and preservative."
  },
  {
    name: "Л144: Тартраты калия E336",
    descrus: "Тартраты калия (E336) являются пищевой добавкой, которая получается из винной кислоты. Они используются в пищевой промышленности, как регулятор кислотности, консервант и антиоксидант.",
    desclat: "Potassium tartrates (E336) are a food additive derived from tartaric acid. They are used in the food industry as an acidity regulator, preservative, and antioxidant."
  },
  {
    name: "Тартраты калия-натрия E337",
    descrus: "Тартраты калия-натрия (E337) - это искусственная смесь кислот, которая получается с помощью химического синтеза. Они используются в пищевой промышленности, как регулятор кислотности, консервант и антиоксидант.",
    desclat: "Potassium-sodium tartrates (E337) is an artificial mixture of acids that is obtained through chemical synthesis. They are used in the food industry as an acidity regulator, preservative, and antioxidant."
  },
  {
    name: "Ортофосфорная кислота E338",
    descrus: "Ортофосфорная кислота (E338) представляет собой бесцветную жидкость, которая является искусственным соединением фосфора. Она используется в пищевой промышленности, как регулятор кислотности, консервант и пищевая добавка.",
    desclat: "Orthophosphoric acid (E338) is a colorless liquid that is an artificial compound of phosphorus. It is used in the food industry as an acidity regulator, preservative, and food additive."
  },
  {
    name: "Фосфаты натрия E339",
    descrus: "Фосфаты натрия (E339) - это искусственные соли, которые получают из ортофосфорной кислоты. Они используются в пищевой промышленности, как регулятор кислотности, консервант и пищевая добавка.",
    desclat: "Sodium phosphates (E339) are artificial salts derived from orthophosphoric acid. They are used in the food industry as an acidity regulator, preservative, and food additive."
  },
  {
    name: "Фосфаты калия E340",
    descrus: "Фосфаты калия (E340) - это искусственные соли, которые получают из ортофосфорной кислоты. Они используются в пищевой промышленности, как регулятор кислотности, консервант и пищевая добавка.",
    desclat: "Potassium phosphates (E340) are artificial salts derived from orthophosphoric acid. They are used in the food industry as an acidity regulator, preservative, and food additive."
  },
  {
    name: "Фосфаты кальция E341",
    descrus: "Фосфаты кальция (E341) - это искусственные соли, которые получают из ортофосфорной кислоты. Они обычно используются в пищевой промышленности, как регулятор кислотности, консервант, антиоксидант и стабилизатор.",
    desclat: "Calcium phosphates (E341) are artificial salts derived from orthophosphoric acid. They are commonly used in the food industry as an acidity regulator, preservative, antioxidant, and stabilizer."
  },
  {
    name: "Фосфаты магния E343",
    descrus: "Фосфаты магния (E343) - это искусственные соли, которые получают из ортофосфорной кислоты и магния. Они используются в пищевой промышленности, как регулятор кислотности, консервант, антиоксидант и стабилизатор.",
    desclat: "Magnesium phosphates (E343) are artificial salts derived from orthophosphoric acid and magnesium. They are used in the food industry as an acidity regulator, preservative, antioxidant, and stabilizer."
  },
  {
    name: "Малат натрия E350",
    descrus: "Малат натрия (E350) - это искусственные соли яблочной кислоты. Они используются в пищевой промышленности, как регулятор кислотности, ароматизатор и консервант.",
    desclat: "Sodium malate (E350) is an artificial salt of apple acid. It is used in the food industry as an acidity regulator, flavoring agent, and preservative."
  },
  {
    name: "Малат калия E351",
    descrus: "Малат калия (E351) - это искусственные соли яблочной кислоты и калия. Они используются в пищевой промышленности, как регулятор кислотности, ароматизатор и консервант.",
    desclat: "Potassium malate (E351) are artificial salts of apple acid and potassium. They are used in the food industry as an acidity regulator, flavoring agent, and preservative."
  },
  {
    name: "Малат кальция E352",
    descrus: "Малат кальция (E352) - это добавка, использующаяся в пищевой промышленности в качестве регулятора кислотности, ароматизатора и консерванта. Эта добавка получается путем реакции кальция и яблочной кислоты.",
    desclat: "Calcium malate (E352) is a food additive used in the food industry as an acidity regulator, flavoring agent, and preservative. This additive is obtained through the reaction of calcium and apple acid."
  },
  {
    name: "Мета-винная кислота E353",
    descrus: "Мета-винная кислота (E353) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, консерванта и антиоксиданта. Она получается из метанольного сырья и поступающего в него оксида углерода.",
    desclat: "Meta-vinic acid (E353) is a food additive used in the food industry as an acidity regulator, preservative, and antioxidant. It is obtained from methanol raw material and carbon dioxide entering it."
  },
  {
    name: "Тартрат кальция E354",
    descrus: "Тартрат кальция (E354) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, консерванта и антиоксиданта. Она получается из винной кислоты и солей кальция.",
    desclat: "Calcium tartrate (E354) is a food additive used in the food industry as an acidity regulator, preservative, and antioxidant. It is obtained from wine acid and calcium salts."
  },
  {
    name: "Адипиновая кислота E355",
    descrus: "Адипиновая кислота (E355) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, консерванта и антиоксиданта. Эта добавка получается синтетическим путем из бензола и циклопентанона.",
    desclat: "Adipinic acid (E355) is a food additive used in the food industry as an acidity regulator, preservative, and antioxidant. This additive is synthesized from benzene and cyclopentanone."
  },
  {
    name: "Адипат натрия E356",
    descrus: "Адипат натрия (E356) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, консерванта и антиоксиданта. Она получается путем реакции адипиновой кислоты с натрием.",
    desclat: "Sodium adipate (E356) is a food additive used in the food industry as an acidity regulator, preservative, and antioxidant. It is obtained through the reaction of adipinic acid with sodium."
  },
  {
    name: "Адипат калия E357",
    descrus: "Адипат калия (E357) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, консерванта и антиоксиданта. Она получается путем реакции адипиновой кислоты с калием.",
    desclat: "Potassium adipate (E357) is a food additive used in the food industry as an acidity regulator, preservative, and antioxidant. It is obtained through the reaction of adipinic acid with potassium."
  },
  {
    name: "Янтарная кислота E363",
    descrus: "Янтарная кислота (E363) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, ароматизатора и консерванта. Она получается естественным путем, как результат метаболизма растительных и животных клеток.",
    desclat: "Succinic acid (E363) is a food additive used in the food industry as an acidity regulator, flavoring agent, and preservative. It is obtained naturally, as a result of the metabolism of plant and animal cells."
  },
  {
    name: "Гептонолактон E370",
    descrus: "Гептонолактон (E370) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности, ароматизатора и консерванта. Она получается синтетическим путем из гептона.",
    desclat: "Heptanolactone (E370) is a food additive used in the food industry as an acidity regulator, flavoring agent, and preservative. It is obtained synthetically from heptanone."
  },
  {
    name: "Никотиновая кислота E375",
    descrus: "Никотиновая кислота (E375) - это добавка, используемая в пищевой промышленности в качестве витамина группы В, регулятора обмена веществ, а также для предотвращения мигрени. Она получается синтетическим путем из никотина.",
    desclat: "Nicotinic acid (E375) is a food additive used in the food industry as a vitamin B group, metabolic regulator, and for the prevention of migraines. It is obtained synthetically from nicotine."
  },
  {
    name: "Цитрат аммония E380",
    descrus: "Цитрат аммония (E380) - это добавка, используемая в пищевой промышленности в качестве уксуснокислого регулятора, консерванта и антиоксиданта. Она получается путем реакции аммиака с лимонной кислотой и уксусной кислотой.",
    desclat: "Ammonium citrate (E380) is a food additive used in the food industry as an acetic acid regulator, preservative, and antioxidant. It is obtained through the reaction of ammonia with citric and acetic acid."
  },
  {
    name: "Железо-аммонийный цитрат E381",
    descrus: "Железо-аммонийный цитрат (E381) - это добавка, используемая в пищевой промышленности в качестве регулятора кислотности и стабилизатора цвета. Она получается путем реакции железа, аммония и лимонной кислоты.",
    desclat: "Ferrous ammonium citrate (E381) is a food additive used in the food industry as an acidity regulator and color stabilizer. It is obtained through the reaction of iron, ammonium, and citric acid."
  },
  {
    name: "Этилендиаминтетраацетат кальция-натрия E385",
    descrus: "Этилендиаминтетраацетат кальция-натрия (E385) - это добавка, используемая в пищевой промышленности в качестве стабилизатора вкуса, ароматизатора и консерванта. Она получается путем синтеза этилендиаминтетрауксусной кислоты с кальцием и натрием.",
    desclat: "Calcium disodium EDTA (E385) is a food additive used in the food industry as a taste stabilizer, flavoring agent, and preservative. It is obtained through the synthesis of ethylenediaminetetraacetic acid with calcium and sodium."
  },
  {
    name: "Альгиновая кислота E400",
    descrus: "Альгиновая кислота (E400) - это добавка, используемая в пищевой промышленности в качестве загустителя и стабилизатора. Она получается из бурых или красных водорослей. Альгиновая кислота не усваивается организмом, поэтому считается безопасной для употребления в пищу.",
    desclat: "Alginate (E400) is a food additive used in the food industry as a thickener and stabilizer. It is obtained from brown or red seaweed. Alginate is not absorbed by the body, so it is considered safe for consumption."
  },
  {
    name: "Альгинат натрия E401",
    descrus: "Альгинат натрия (E401) - это добавка, используемая в пищевой промышленности в качестве загустителя и стабилизатора. Она получается из бурых или красных водорослей. Альгинат натрия не усваивается организмом, поэтому считается безопасной для употребления в пищу.",
    desclat: "Sodium alginate (E401) is a food additive used in the food industry as a thickener and stabilizer. It is obtained from brown or red seaweed. Sodium alginate is not absorbed by the body, so it is considered safe for consumption."
  },
  {
    name: "Альгинат калия E402",
    descrus: "Альгинат калия (E402) - это добавка, используемая в пищевой промышленности в качестве загустителя и стабилизатора. Она получается из бурых или красных водорослей. Альгинат калия не усваивается организмом, поэтому считается безопасной для употребления в пищу.",
    desclat: "Potassium alginate (E402) is a food additive used in the food industry as a thickener and stabilizer. It is obtained from brown or red seaweed. Potassium alginate is not absorbed by the body, so it is considered safe for consumption."
  },
  {
    name: "Альгинат аммония E403",
    descrus: "Альгинат аммония (E403) - это добавка, используемая в пищевой промышленности в качестве загустителя и стабилизатора. Она получается из бурых или красных водорослей. Аммонийный альгинат добавляют в продукты питания, чтобы предотвратить их изменение во время пищевой обработки и хранения. Он безопасен для употребления в пищу.",
    desclat: "Ammonium alginate (E403) is a food additive used in the food industry as a thickener and stabilizer. It is obtained from brown or red seaweed. Ammonium alginate is added to food products to prevent them from changing during food processing and storage. It is safe for consumption."
  },
  {
    name: "Альгинат кальция E404",
    descrus: "Альгинат кальция (E404) - это добавка, используемая в пищевой промышленности в качестве загустителя, стабилизатора и гелеобразователя. Она получается из бурых или красных водорослей. Кальциевый альгинат добавляется в продукты питания, чтобы уменьшить текучесть, увеличить вязкость и создать желейную консистенцию. Он безопасен для употребления в пищу.",
    desclat: "Calcium alginate (E404) is a food additive used in the food industry as a thickener, stabilizer, and gelling agent. It is obtained from brown or red seaweed. Calcium alginate is added to food products to reduce flow, increase viscosity, and create a jelly-like consistency. It is safe for consumption."
  },
  {
    name: "Пропан-1,2-диол альгинат E405",
    descrus: "Пропан-1,2-диол альгинат (E405) - это добавка, используемая в пищевой промышленности в качестве загустителя, стабилизатора и эмульгатора. Она получается из бурых или красных водорослей и пропан-1,2-диола. Пропан-1,2-диол альгинат добавляют в продукты питания, чтобы улучшить консистенцию, структуру и внешний вид, а также для улучшения срока хранения. Он безопасен для употребления в пищу.",
    desclat: "Propylene glycol alginate (E405) is a food additive used in the food industry as a thickener, stabilizer, and emulsifier. It is obtained from brown or red seaweed and propylene glycol. Propylene glycol alginate is added to food products to improve texture, structure, appearance, and shelf life. It is safe for consumption."
  },
  {
    name: "Агар E406",
    descrus: "Агар (E406) – добавка, изготавливаемая из красных водорослей. Используется в пищевой промышленности как загуститель, стабилизатор и эмульгатор. Добавляют в продукты питания, чтобы увеличить вязкость, хранить жидкости, создавать кондитерские изделия, джемы, мороженое, различные десерты. Безопасен для употребления в пищу.",
    desclat: "Agar (E406) is an additive made from red seaweed. It is used in the food industry as a thickener, stabilizer, and emulsifier. It is added to food products to increase viscosity, store liquids, create bakery products, jams, ice cream, various desserts. It is safe for consumption."
  },
  {
    name: "Каррагенан E407",
    descrus: "Каррагенан (E407) – загуститель, получаемый из красных водорослей. Используется в пищевой промышленности как эмульгатор, стабилизатор и загуститель. Добавляют в продукты питания, чтобы улучшать текстуру, вязкость и качество консистенции. Безопасен для употребления в пищу.",
    desclat: "Carrageenan (E407) is a thickener obtained from red seaweed. It is used in the food industry as an emulsifier, stabilizer, and thickener. It is added to food products to improve texture, viscosity, and consistency quality. It is safe for consumption."
  },
  {
    name: "Камедь рожкового дерева E410",
    descrus: "Камедь рожкового дерева (E410) - загуститель и стабилизатор, который извлекается из семян плодов рожкового дерева. Обычно используется в пищевой промышленности как загуститель, подавитель пены, стабилизатор и эмульгатор. Он добавляется в продукты питания, чтобы улучшить текстуру и вязкость, а также для поддержания изменения pH. Безопасен для употребления в пищу.",
    desclat: "Carob bean gum (E410) is a thickener and stabilizer extracted from the seeds of the carob tree fruit. It is commonly used in the food industry as a thickener, foam suppressor, stabilizer, and emulsifier. It is added to food products to improve texture, viscosity, and to maintain pH levels. It is safe for consumption."
  },
  {
    name: "Гуаровая камедь E412",
    descrus: "Гуаровая камедь (E412) – загуститель, получаемый из семян растения гуар. Используется в пищевой промышленности как стабилизатор и загуститель. Добавляют в продукты питания, чтобы увеличить вязкость, улучшить консистенцию и предотвратить образование льда в мороженом. Безопасен для употребления в пищу.",
    desclat: "Guar gum (E412) is a thickener obtained from the seeds of the guar plant. It is used in the food industry as a stabilizer and thickener. It is added to food products to increase viscosity, improve consistency and prevent the formation of ice crystals in ice cream. It is safe for consumption."
  },
  {
    name: "Трагакант E413",
    descrus: "Трагакант (E413) – загуститель, получаемый из сока стволов растения астрагаль. Используется в пищевой промышленности как загуститель и эмульгатор. Добавляют в продукты питания, чтобы увеличить вязкость, стабилизировать эмульсии и улучшать качество текстуры. Безопасен для употребления в пищу.",
    desclat: "Tragacanth (E413) is a thickener obtained from the sap of the stems of the astragalus plant. It is used in the food industry as a thickener and emulsifier. It is added to food products to increase viscosity, stabilize emulsions, and improve texture quality. It is safe for consumption."
  },
  {
    name: "Гуммиарабик E414",
    descrus: "Гуммиарабик (E414) – добавка, получаемая из сока африканского стеблевого дерева. Используется в пищевой промышленности как загуститель, эмульгатор и стабилизатор. Добавляют в продукты питания, чтобы увеличить вязкость, стабилизировать эмульсии, сохранять влагу и предотвращать кристаллизацию сахара в кондитерских изделиях. Безопасен для употребления в пищу.",
    desclat: "Gum arabic (E414) is an additive obtained from the sap of the African acacia tree. It is used in the food industry as a thickener, emulsifier, and stabilizer. It is added to food products to increase viscosity, stabilize emulsions, retain moisture, and prevent sugar crystallization in confectionery products. It is safe for consumption."
  },
  {
    name: "Ксантановая камедь E415",
    descrus: "Ксантановая камедь (E415) – пищевая добавка, получаемая бактериальным брожением. Широко используется в пищевой промышленности как загуститель. Добавляют в продукты питания, чтобы увеличить вязкость и стабилизировать эмульсии. Безопасен для употребления в пищу.",
    desclat: "Xanthan gum (E415) is a food additive obtained through bacterial fermentation. Widely used in the food industry as a thickener. It is added to food products to increase viscosity and stabilize emulsions. It is safe for consumption."
  },
  {
    name: "Карайи камедь E416",
    descrus: "Карайи камедь (E416) – добавка в пищу, получаемая из сока стволов карайя. Используется в пищевой промышленности как стабилизатор. Добавляют в продукты питания, чтобы улучшить консистенцию и увеличить время хранения. Безопасен для употребления в пищу.",
    desclat: "Karaya gum (E416) is a food additive obtained from the sap of the stems of the karaya tree. It is used in the food industry as a stabilizer. It is added to food products to improve consistency and increase shelf life. It is safe for consumption."
  },
  {
    name: "Тары камедь E417",
    descrus: "Тары камедь (E417) – пищевая добавка, получаемая из сока пальмы Acacia senegal. Используется в пищевой промышленности как загуститель и стабилизатор. Добавляют в продукты питания, чтобы улучшить консистенцию, изменить вкус и предотвратить кристаллизацию сахара в конфетах и других кондитерских изделиях. Безопасен для употребления в пищу.",
    desclat: "Tara gum (E417) is a food additive obtained from the sap of the Acacia senegal tree. It is used in the food industry as a thickener and stabilizer. It is added to food products to improve consistency, modify taste, and prevent sugar crystallization in candies and other confectionery products. It is safe for consumption."
  },
  {
    name: "Геллановая камедь E418",
    descrus: "Геллановая камедь (E418) – пищевая добавка, получаемая бактериальным брожением. Используется в пищевой промышленности как загуститель и стабилизатор. Добавляют в продукты питания, чтобы увеличить вязкость и улучшить текстуру. Безопасен для употребления в пищу.",
    desclat: "Gellan gum (E418) is a food additive obtained through bacterial fermentation. Widely used in the food industry as a thickener and stabilizer. It is added to food products to increase viscosity and improve texture. It is safe for consumption."
  },
  {
    name: "Сорбит E420",
    descrus: "Сорбит (E420) — пищевая добавка, получаемая из глюкозы. Используется в пищевой промышленности как подсластитель и увлажнитель. Добавляют в продукты питания для уменьшения калорийности, улучшения вкуса и консистенции. Безопасен для употребления в пищу.",
    desclat: "Sorbitol (E420) is a food additive obtained from glucose. Used in the food industry as a sweetener and moisturizer. It is added to food products to reduce calorie content, improve taste and consistency. It is safe for consumption."
  },
  {
    name: "Маннит E421",
    descrus: "Маннит (E421) — пищевая добавка, производимая из маннозы. Используется в пищевой промышленности как подсластитель и увлажнитель. Добавляют в продукты питания для уменьшения калорийности, улучшения вкуса и консистенции. Безопасен для употребления в пищу.",
    desclat: "Mannitol (E421) is a food additive produced from mannose. Used in the food industry as a sweetener and moisturizer. It is added to food products to reduce calorie content, improve taste and consistency. It is safe for consumption."
  },
  {
    name: "Глицерин E422",
    descrus: "Глицерин является натуральным веществом, образуемым в результате гидролиза растительных и животных жиров",
    desclat: "Glycerin is a natural substance formed by the hydrolysis of plant and animal fats"
  },
  {
    name: "Коньяк смола E425",
    descrus: "Коньяк-смола - продукт получаемый в результате обработки коньячного брожка смолой",
    desclat: "Konjac resin is a product obtained by treating konjac lees with resin"
  },
  {
    name: "Полиоксиэтилена (8) стеарат E430",
    descrus: "Полиоксиэтиленстеарат — это поверхностно-активное вещество, которое образуется путем этиленокислотного полимеризации стеариновой кислоты",
    desclat: "Polyoxyethylene (8) stearate is a surfactant that is formed by ethylene oxide polymerization of stearic acid"
  },
  {
    name: "Полиоксиэтилен (40) стеарат E431",
    descrus: "Полиоксиэтилен стеарат - это эмульгатор, который получают смешиванием стеарата и полиоксиэтилена",
    desclat: "Polysorbate 40 is an emulsifier obtained by mixing stearate and polyoxyethylene"
  },
  {
    name: "Полиоксиэтиленсорбитан (20) монолаурат/полисорбат 20 E432",
    descrus: "Полисорбат 20 - эмульгатор, получаемый смешиванием сорбитана и полиоксиэтилена c монолауратом. Он улучшает растворимость жиров в воде. Полисорбат 20 может быть использован как стабилизатор пены",
    desclat: "Polysorbate 20 is an emulsifier obtained by mixing sorbitan and polyoxyethylene with monolaurate. It enhances the solubility of fats in water. Polysorbate 20 can be used as a foam stabilizer."
  },
  {
    name: "Полиоксиэтиленсорбитан (20) моноолеат/полисорбат 80 E433",
    descrus: "Полисорбат 80 - эмульгатор, получаемый смешиванием сорбитана и полиоксиэтилена с моноолеатом. Он улучшает растворимость жиров в воде, помогает стабилизировать эмульсии и кремы, а также предотвращает рост бактерий и грибков",
    desclat: "Polysorbate 80 is an emulsifier obtained by mixing sorbitan and polyoxyethylene with monooleate. It enhances the solubility of fats in water, helps to stabilize emulsions and creams, and also prevents the growth of bacteria and fungi."
  },
  {
    name: "Полиоксиэтиленсорбитан (20) монопальмитат/полисорбат 40 E434",
    descrus: "Полисорбат 40 - эмульгатор, получаемый смешиванием сорбитана и полиоксиэтилена c монопальмитатом. Он улучшает растворимость жиров в воде, увеличивает срок годности продуктов и используется в качестве добавки, улучшающей консистенцию",
    desclat: "Polysorbate 40 is an emulsifier obtained by mixing sorbitan and polyoxyethylene with monopalmitate. It enhances the solubility of fats in water, increases the shelf life of products, and is used as an additive to improve consistency."
  },
  {
    name: "Полиоксиэтилен сорбитан (20) моностеарат/полисорбат 60 E435",
    descrus: "Полисорбат 60 - это эмульгатор, который получают смешивая сорбитан и полиоксиэтилен c моностеаратом. Эта пищевая добавка помогает смешивать воду с жиром, что может быть полезным для кондитерских изделий, супов, соусов и салатных заправок.",
    desclat: "Polysorbate 60 is an emulsifier obtained by mixing sorbitan and polyoxyethylene with monostearate. This food additive helps to mix water with fat, which can be beneficial for confectionery products, soups, sauces, and salad dressings."
  },
  {
    name: "Полиоксиэтиленсорбитан (20) тристеарат/полисорбат 65 E436",
    descrus: "Полисорбат 65 - это эмульгатор, который получают смешивая сорбитан и полиоксиэтилен c тристеаратом. Эта добавка помогает стабилизировать эмульсии, поэтому она часто используется в хлебобулочных изделиях и молочных продуктах.",
    desclat: "Polysorbate 65 is an emulsifier obtained by mixing sorbitan and polyoxyethylene with tristearate. This food additive helps to stabilize emulsions, so it is often used in bakery products and dairy products."
  },
  {
    name: "Пектин E440A",
    descrus: "Пектин E440A - это загуститель и стабилизатор, получаемый из растительных материалов, таких как яблоки и цитрусовые. Он обычно используется для придания желейной консистенции десертам, желе и фруктовым наполнителям.",
    desclat: "Pectin E440A is a thickener and stabilizer obtained from plant materials such as apples and citrus fruits. It is typically used to give a jelly-like consistency to desserts, jellies, and fruit fillings."
  },
  {
    name: "Амидированный пектин E440B",
    descrus: "Амидированный пектин E440B - это модифицированный пектин, получаемый из обычного пектина и амидированных крахмалов. Он используется как загуститель и стабилизатор в продуктах с низким содержанием жира и для создания густых соусов.",
    desclat: "Amidated pectin E440B is a modified pectin obtained from regular pectin and amidated starches. It is used as a thickener and stabilizer in low-fat products and for creating thick sauces."
  },
  {
    name: "Желатин E441",
    descrus: "Желатин - это гидролизованный коллаген, получаемый из костей, кожи и соединительной ткани животных. Он используется в качестве загустителя и стабилизатора в продуктах, таких как желе, маршмеллоу и молочные продукты.",
    desclat: "Gelatin is hydrolyzed collagen obtained from the bones, skin, and connective tissue of animals. It is used as a thickener and stabilizer in products such as jelly, marshmallow, and dairy products."
  },
  {
    name: "Фосфатида аммонийные соли E442",
    descrus: "Фосфатида аммонийные соли - это добавки, получаемые из фосфатидной кислоты, которые используются в качестве эмульгаторов и антиоксидантов в масляных продуктах, таких как маргарин и соусы.",
    desclat: "Ammonium phosphatide salts are additives obtained from phosphatidic acid, which are used as emulsifiers and antioxidants in oil-based products such as margarine and sauces."
  },
  {
    name: "Сахарозы ацетат изобутират E444",
    descrus: "Сахарозы ацетат изобутират - это эфирные добавки, которые получают смешением сахарозы, уксусной кислоты и изобутирической кислоты. Они используются в качестве эмульгаторов и стабилизаторов в напитках, молочных продуктах и кондитерских изделиях.",
    desclat: "Sucrose acetate isobutyrate is an ether additive obtained by mixing sucrose, acetic acid, and isobutyric acid. They are used as emulsifiers and stabilizers in beverages, dairy products, and confectionery products."
  },
  {
    name: "Эфиры глицерина и смоляных кислот E445",
    descrus: "Эфиры глицерина и смоляных кислот - это добавки, получаемые в результате реакции переработки природных жиров и смол. Они используются в качестве эмульгаторов, стабилизаторов и консервантов в продуктах, таких как дрожжи, желе, майонез, молочные продукты и многое другое.",
    desclat: "Glycerol esters of wood rosin and gum rosin are additives obtained by reacting natural fats and resins. They are used as emulsifiers, stabilizers and preservatives in products such as yeast, jelly, mayonnaise, dairy products and much more."
  },
  {
    name: "Фосфаты и полифосфаты натрия и калия E450 A,B,C",
    descrus: "Фосфаты и полифосфаты натрия и калия - это добавки, получаемые из соединений натрия и калия и фосфорной кислоты. Они используются в качестве стабилизаторов, эмульгаторов и консервантов в продуктах, таких как мясо, рыба, молочные и кондитерские изделия.",
    desclat: "Sodium and potassium phosphates and polyphosphates are additives obtained from sodium and potassium compounds and phosphoric acid. They are used as stabilizers, emulsifiers and preservatives in products such as meat, fish, dairy and confectionery products."
  },
  {
    name: "Трифосфаты E451",
    descrus: "Трифосфаты - это добавки, получаемые из фосфорной кислоты. Они используются в качестве стабилизаторов, эмульгаторов и консервантов в продуктах, таких как мясо, рыба, молочные и кондитерские изделия.",
    desclat: "Triphosphates are additives obtained from phosphoric acid. They are used as stabilizers, emulsifiers and preservatives in products such as meat, fish, dairy and confectionery products."
  },
  {
    name: "Полифосфаты E452",
    descrus: "Полифосфаты натрия - это добавки, получаемые из соединений натрия и фосфорной кислоты. Они используются в качестве стабилизаторов, эмульгаторов и консервантов в продуктах, таких как мясо, колбасы, сыры и др.",
    desclat: "Sodium polyphosphates are additives obtained from sodium compounds and phosphoric acid. They are used as stabilizers, emulsifiers and preservatives in products such as meat, sausages, cheeses and more."
  },
  {
    name: "Бета-циклодекстрин E459",
    descrus: "Бета-циклодекстрин - это добавка, получаемая из крахмала. Она используется в качестве стабилизатора и эмульгатора в продуктах, таких как напитки, десерты, мороженое, супы, соусы и многое другое.",
    desclat: "Beta-cyclodextrin is an additive obtained from starch. It is used as a stabilizer and emulsifier in products such as beverages, desserts, ice cream, soups, sauces and more."
  },
  {
    name: "Микрокристаллическая целлюлоза, целлюлоза в порошке E460",
    descrus: "Микрокристаллическая целлюлоза - это добавка, получаемая из древесной целлюлозы и являющаяся безвредным веществом, используемым в качестве загустителя и стабилизатора в широком спектре продуктов питания, таких как сыр, соусы, кондитерские изделия и т.д.",
    desclat: "Microcrystalline cellulose is an additive obtained from wood cellulose and is a harmless substance used as a thickener and stabilizer in a wide range of food products such as cheese, sauces, confectionery products, etc."
  },
  {
    name: "Метилцеллюлоза E461",
    descrus: "Метилцеллюлоза - это добавка, получаемая из целлюлозы. Она используется в качестве загустителя и стабилизатора в таких продуктах, как соусы, десерты, напитки и многое другое.",
    desclat: "Methylcellulose is an additive obtained from cellulose. It is used as a thickener and stabilizer in products such as sauces, desserts, beverages and more."
  },
  {
    name: "Гидроксипропилцеллюлоза E463",
    descrus: "Гидроксипропилцеллюлоза является полусинтетическим полимером, получаемым из целлюлозы растительного происхождения путем обработки ее эпоксидированными дериватами и гидролиза.",
    desclat: "Hydroxypropyl cellulose is a semi-synthetic polymer obtained from plant cellulose by treating it with epoxidized derivatives and hydrolysis.",
  },
  {
    name: "Гидроксипропилметилцеллюлоза E464",
    descrus: "Гидроксипропилметилцеллюлоза - это полудеградированный гетерогенный карбоксиметилцеллюлозный эфир, получаемый химический модификацией целлюлозы.",
    desclat: "Hydroxypropyl methylcellulose is a semi-degraded heterogeneous carboxymethylcellulose ether obtained by chemically modifying cellulose.",
  },
  {
    name: "Этилметилцеллюлоза E465",
    descrus: "Этилметилцеллюлоза - это полимер, получаемый из нативной целлюлозы путем частичной этерификации этанолом и метанолом.",
    desclat: "Ethylmethylcellulose is a polymer obtained from native cellulose by partial etherification with ethanol and methanol.",
  },
  {
    name: "Карбоксиметилцеллюлоза E466",
    descrus: "Карбоксиметилцеллюлоза представляет собой полимер целлюлозы, модифицированный путем замены гидроксильных групп целлюлозы метилцеллюлозы карбоксиметильными группами.",
    desclat: "Carboxymethylcellulose is a cellulose polymer modified by replacing the hydroxyl groups of cellulose with carboxymethyl groups. ",
  },
  {
    name: "Этилгидроксиэтилцеллюлоза E467",
    descrus: "Этилгидроксиэтилцеллюлоза - это водорастворимый полисахарид, получаемый синтетически путем этилирования целлюлозы и гидроксиэтилирования полученного этанолцеллюлозного эфира.",
    desclat: "Ethyl hydroxyethyl cellulose is a water-soluble polysaccharide obtained synthetically by ethylating cellulose and hydroxyethylating the resulting ethyl cellulose ether.",
  },
  {
    name: "Карбоксиметилцеллюлозы натриевая соль трехмерная E468",
    descrus: "Карбоксиметилцеллюлоза натриевая соль трехмерная (CMC) - это полисахарид, получаемый путем метилирования целлюлозы и последующей модификации производными хлоруксусной кислоты.",
    desclat: "Sodium carboxymethylcellulose (CMC) is a polysaccharide obtained by methylating cellulose and subsequently modifying it with derivatives of chloroacetic acid.",
  },
  {
    name: "Гидролизуемая под действием ферментнов карбоксиметилцеллюлоза E469",
    descrus: "Гидролизуемая под действием ферментов карбоксиметилцеллюлоза (СMС N) - это полимер, получаемый из целлюлозы путем модификации ее метилцеллюлозой и далее подвергнутый гидролизу ферментами.",
    desclat: "Enzyme-hydrolyzable carboxymethyl cellulose (CMC N) is a polymer obtained from cellulose by modifying it with methylcellulose and then subjecting it to enzyme hydrolysis.",
  },
  {
    name: "Жирных кислотсоли калия, кальция, натрия E470",
    descrus: "Жирные кислоты являются продуктом переработки животных и растительных жиров. Калиевые, кальциевые или натриевые соли жирных кислот (E470) получают путем реакции жирных кислот с гидроксидами соответствующих металлов.",
    desclat: "Fatty acids are products of the processing of animal and vegetable fats. Potassium, calcium or sodium salts of fatty acids (E470) are obtained by reacting fatty acids with hydroxides of the corresponding metals.",
  },
  {
    name: "Моно- и диглицериды жирных кислот E471",
    descrus: "Моно- и диглицериды жирных кислот - это продукты реакции масел с глицерином. Они добавляются в пищевые продукты в качестве эмульгаторов, улучшают консистенцию и структуру продукта.",
    desclat: "Mono- and diglycerides of fatty acids are products of the reaction of oils with glycerol. They are added to food products as emulsifiers, enhance the consistency and structure of the product.",
  },
  {
    name: "Различные эфиры моно- и диглицеридов жирных кислот E472",
    descrus: "Эфиры моно- и диглицеридов жирных кислот - это продукты реакции масел с глицерином и жирными кислотами. Они добавляются в пищевые продукты в качестве эмульгаторов, улучшают консистенцию и структуру продукта.",
    desclat: "Esters of mono- and diglycerides of fatty acids are products of the reaction of oils with glycerol and fatty acids. They are added to food products as emulsifiers, enhance the consistency and structure of the product.",
  },
  {
    name: "Эфиры глицерина, диацетилвинной и жирных кислот E472E",
    descrus: "Эфиры глицерина, диацетилвинной и жирных кислот - это продукты реакции глицерина с жирными кислотами и диацетилвинной кислотой. Они добавляются в пищевые продукты в качестве эмульгаторов, улучшают консистенцию и структуру продукта.",
    desclat: "Esters of glycerol with diacetyl tartaric and fatty acids are products of the reaction of glycerol with fatty acids and diacetyl tartaric acid. They are added to food products as emulsifiers, enhance the consistency and structure of the product.",
  },
  {
    name: "Эфиры сахарозы и жирных кислот E473",
    descrus: "Эфиры сахарозы и жирных кислот - это продукты реакции жирных кислот и сахарозы. Они добавляются в пищевые продукты в качестве эмульгаторов, улучшают консистенцию и структуру продукта.",
    desclat: "Sucrose esters of fatty acids are products of the reaction of fatty acids with sucrose. They are added to food products as emulsifiers, enhance the consistency and structure of the product.",
  },
  {
    name: "Сахароглицериды E474",
    descrus: "Сахароглицериды - продукты конденсации жирных кислот и сахарозы. Их используют в пищевых продуктах в качестве эмульгаторов. Они улучшают текстуру и увеличивают срок годности продукта.",
    desclat: "Sucroglycerides are condensation products of fatty acids and sucrose. They are used in food products as emulsifiers. They improve the texture and increase the shelf life of the product.",
  },
  {
    name: "Эфиры полиглицеридов и жирных кислот E475",
    descrus: "Эфиры полиглицеридов и жирных кислот - это продукты конденсации полиглицеридов и жирных кислот. Они добавляются в пищевые продукты в качестве эмульгаторов, улучшают консистенцию продукта и позволяют организовать смешение водных и жировых ингредиентов, которые без них не смогут держаться вместе. Они также улучшают структуру пищевых продуктов.",
    desclat: "Esters of polyglycerol and fatty acids are condensation products of polyglycerols and fatty acids. They are added to food products as emulsifiers, improve the consistency of the product, and allow the mixing of aqueous and fatty ingredients that otherwise would not be compatible. They also enhance the structure of food products.",
  },
  {
    name: "Полиглицерин, полирицинолеаты E476",
    descrus: "Полиглицерин и полирицинолеаты - это эмульгаторы, изготовленные на основе глицерина и рицинолеатов. Они также могут использоваться как стабилизаторы для кремообразных продуктов и для увеличения их срока годности.",
    desclat: "Polyglycerol polyricinoleate are emulsifiers made from glycerin and ricinoleates. They can also be used as stabilizers for cream-like products and to extend their shelf life.",
  },
  {
    name: "Пропан-1,2-диоловые эфиры жирных кислот E477",
    descrus: "Пропан-1,2-диоловые эфиры жирных кислот — продукты реакции жирных кислот и пропандиола. Они могут использоваться в качестве эмульгаторов и антиоксидантов в пищевых продуктах, увеличивая срок их годности.",
    desclat: "Propylene glycol esters of fatty acids are the products of the reaction between propylene glycol and fatty acids. They can be used as emulsifiers and antioxidants in food products, and can extend their shelf life."
  },
  {
      name: "Эфиры лактилированных жирных кислот глицерина и пропиленгликоля E478",
      descrus: "Эфиры лактилированных жирных кислот глицерина и пропиленгликоля получают путем конденсации глицерина, пропиленгликоля и лактичной кислоты с жирными кислотами. Они применяются как эмульгаторы, стабилизаторы и антиоксиданты в пищевых продуктах, для продления срока годности и улучшения качества продуктов.",
      desclat: "Propylene glycol esters of lactic acid and fatty acids are condensation products of glycerin, propylene glycol, lactic acid and fatty acids. They are used as emulsifiers, stabilizers, and antioxidants in food products, to extend the shelf life and improve the quality of food products."
  },
  {
      name: "Термически окисленное соевое и бобовое масло с моно- и диглицеридами жирных кислот E479B",
      descrus: "Моно- и диглицериды жирных кислот получают из естественных жиров и масел путем обработки в сочетании с моно- и диглицеридами при воздействии на них тепла и кислорода. Эти добавки могут использоваться в качестве эмульгаторов в кондитерских изделиях, молочных продуктах, масле и жирах, для улучшения их текстуры и структуры.",
      desclat: "Mono- and diglycerides of fatty acids are obtained from natural fats and oils by processing in combination with mono- and diglycerides under the influence of heat and oxygen. These additives can be used as emulsifiers in confectionery, dairy products, oils and fats, to improve their texture and structure."
  },
  {
    name: "Стеароил-2-лактилат натрия E481",
    descrus: "Стеароил-2-лактилат натрия — емкость-образователь и стабилизатор, получаемый путем реакции молочной кислоты и стеариновой кислоты в сочетании с натриевой солью. Эта добавка применяется в пищевых продуктах, таких как хлеб, сгущенное молоко, и магазинного сыра, чтобы улучшить структуру продукта, ускорить процесс замешивания и повысить степень выхода масла или жира",
    desclat: "Sodium stearoyl lactylate is an emulsifier and stabilizer obtained by reacting lactic acid and stearic acid in combination with sodium salt. This additive is used in food products such as bread, condensed milk, and processed cheese, to improve the texture of the product, speed up the kneading process, and increase the degree of oil or fat yield."
  },
  {
    name: "Стеароил-2-лактилат кальция E482",
    descrus: "Стеароил-2-лактилат кальция — эмульгатор и стабилизатор, получаемый из стеариновой кислоты, молочной кислоты и солями кальция. Это пищевая добавка используется в изделиях из заменителей сливочного масла, кондитерских изделий, молочных продуктов для улучшения структуры, повышения степени выхода масла или жира и улучшения эмульгирования.",
    desclat: "Calcium stearoyl lactylate is an emulsifier and stabilizer obtained from stearic acid, lactic acid, and calcium salts. This food additive is used in butter substitute products, confectionery, and dairy products to improve structure, increase oil or fat yield and improve emulsification."
  },
  {
    name: "Стеарилтартрат E483",
    descrus: "Стеарилтартрат — эмульгатор, получаемый путем соединения стеариновой кислоты с винной кислотой. Это пищевая добавка применяется в различных продуктах, от хлеба до масла, чтобы улучшить текстуру продуктов и предотвратить быстрое прогоркание.",
    desclat: "Stearyl tartrate is an emulsifier obtained by combining stearic acid with tartaric acid. This food additive is used in various products, from bread to oils, to improve the texture of products and prevent rapid spoilage."
  },
  {
    name: "Сорбитан моностеарат E491",
    descrus: "Сорбитан моностеарат получают путем эфирного синтеза сорбитана и стеариновой кислоты. Эта пищевая добавка используется в качестве эмульгатора и стабилизатора в многих продуктах, таких как мясные изделия, молоко, сливочное масло, маргарин и другие жирные продукты. Он также используется в пищевых кондитерских изделиях, для улучшения консистенции и продления срока хранения.",
    desclat: "Sorbitan monostearate is obtained by ester synthesis of sorbitan and stearic acid. This food additive is used as an emulsifier and stabilizer in many products, such as meat products, milk, butter, margarine, and other fatty products. It is also used in food confectionery to improve texture and extend shelf life."
  },
  {
    name: "Сорбитан тристеарат E492",
    descrus: "Сорбитан тристеарат — пищевая добавка, получаемая эфирным синтезом сорбитана и стеариновой кислоты. Она используется как эмульгатор и стабилизатор в пищевых продуктах. Она широко применяется в многих продуктах, таких как выпечка, конфеты, жевательная резинка и другие сладости. Кроме того, она используется в качестве продлителя срока годности продуктов.",
    desclat: "Sorbitan tristearate is a food additive obtained by ester synthesis of sorbitan and stearic acid. It is used as an emulsifier and stabilizer in food products. It is widely used in many products, such as bakery goods, candies, chewing gum and other sweets. Additionally, it is used as a preservative to extend the shelf life of products."
  },
  {
    name: "Сорбитан монолаурат E493",
    descrus: "Сорбитан монолаурат получают путем эфирного синтеза сорбитана и лауриновой кислоты. Эта пищевая добавка обычно используется как эмульгатор и стабилизатор в продуктах, таких как конфеты, печенье, кексы и пирожные. Кроме того, она может использоваться в качестве продлителя срока хранения некоторых продуктов, улучшая их консистенцию и устойчивость к окислению.",
    desclat: "Sorbitan monolaurate is obtained by ester synthesis of sorbitan and lauric acid. This food additive is commonly used as an emulsifier and stabilizer in products such as candies, cookies, cakes, and pastries. Additionally, it can be used as a preservative to extend the shelf life of some products, improving their consistency and resistance to oxidation."
  },
  {
    name: "Сорбитан моноолеат E494",
    descrus: "Сорбитан моноолеат — пищевая добавка, получаемая путем синтеза сорбитана и олеиновой кислоты. Она применяется как эмульгатор и стабилизатор в различных продуктах, таких как сыры, маргарин, жировые покрытия для конфет, хлебобулочные изделия, а также жидкие молочные продукты. Сорбитан моноолеат помогает сохранять форму и консистенцию продуктов, увеличивать срок хранения и улучшать вкус и аромат.",
    desclat: "Sorbitan monooleate is a food additive obtained by synthesis of sorbitan and oleic acid. It is used as an emulsifier and stabilizer in various products such as cheeses, margarine, fat coatings for confectionery, bakery products, and liquid dairy products. Sorbitan monooleate helps maintain the shape and consistency of products, increase shelf life and improve taste and aroma."
  },
  {
    name: "Сорбитан монопальмитат E495",
    descrus: "Сорбитан монопальмитат получают путем эфирного синтеза сорбитана и пальмитиновой кислоты. Она широко используется в пищевой промышленности как эмульгатор и стабилизатор в различных продуктах, включая жировые покрытия, конфеты, бисквиты и масла для глазирования. Эта добавка также может использоваться в качестве продлителя срока годности и улучшателя вкуса.",
    desclat: "Sorbitan monopalmitate is obtained by ester synthesis of sorbitan and palmitic acid. It is widely used in the food industry as an emulsifier and stabilizer in various products, including fat coatings, candies, biscuits, and glazing oils. This additive can also be used as a preservative and taste enhancer."
  },
  {
    name: "Карбонат натрия E500",
    descrus: "Карбонат натрия — пищевая добавка, получаемая из руды или морской воды. Он широко используется в пищевой промышленности в качестве регулятора кислотности, стабилизатора и продукта, улучшающего текстуру, в различных продуктах, таких как печенье, хлеб, мороженое и газированные напитки.",
    desclat: "Sodium carbonate is a food additive obtained from ore or seawater. It is widely used in the food industry as an acidity regulator, stabilizer, and texture improver in various products such as biscuits, bread, ice cream, and carbonated drinks."
  },
  {
    name: "Карбонат калия E501",
    descrus: "Карбонат калия — пищевая добавка, получаемая из руды калийных солей. Он широко используется в пищевой промышленности как регулятор кислотности, стабилизатор и продукт, улучшающий текстуру в различных продуктах, включая жареные продукты, соленые закуски, мороженое и сыр.",
    desclat: "Potassium carbonate is a food additive obtained from potassium salt ores. It is widely used in the food industry as an acidity regulator, stabilizer, and texture improver in various products, including fried foods, salty snacks, ice cream, and cheese."
  },
  {
    name: "Карбонат аммония E503",
    descrus: "Карбонат аммония получают путем реакции соляной кислоты, ксенотропной соли и аммиака. Он широко используется в печении как разрыхлитель теста, а также в производстве печенья, кексов и вафель. Кроме того, он также может использоваться для изготовления некоторых видов шоколада и конфет.",
    desclat: "Ammonium carbonate is obtained by the reaction of hydrochloric acid, xenotropic salt, and ammonia. It is widely used in baking as a leavening agent and in the production of cookies, cakes, and waffles. Additionally, it can also be used to make some types of chocolate and candy."
  },
  {
    name: "Карбонат магния E504",
    descrus: "Карбонат магния производится путем соединения карбоната и магния. Он широко используется в пищевой промышленности как сухой порошок, который добавляется в различные продукты, включая сыр, пикантные продукты, напитки и десерты, чтобы предотвратить склеивание ингредиентов и улучшить текстуру.",
    desclat: "Magnesium carbonate is produced by combining carbonate and magnesium. It is widely used in the food industry as a dry powder that is added to various products, including cheese, spicy foods, beverages, and desserts, to prevent ingredients from sticking together and improve texture."
  },
  {
    name: "Соляная кислота E507",
    descrus: "Соляная кислота производится путем обработки соли хлороводородной кислотой. Она широко используется в пищевой промышленности для регулирования кислотности и сохранения продуктов. Она также используется в качестве консерванта, антиокислителя и регулятора вязкости в различных продуктах, включая сыр, молоко, консервы и мясо.",
    desclat: "Hydrochloric acid is produced by treating salt with hydrochloric acid. It is widely used in the food industry for acid regulation and preservation of products. It is also used as a preservative, antioxidant, and viscosity regulator in various products, including cheese, milk, canned foods, and meat."
  },
  {
    name: "Хлорид калия E508",
    descrus: "Хлорид калия производится из калийных руд химическим методом. Он широко используется в пищевой промышленности как подкислитель, консервант и регулятор текстуры в различных продуктах, включая молоко, сыр, мясо, консервы и напитки.",
    desclat: "Potassium chloride is produced from potassium ore using a chemical method. It is widely used in the food industry as an acidifier, preservative, and texture regulator in various products, including milk, cheese, meat, canned foods, and beverages."
  },
  {
    name: "Хлорид кальция E509",
    descrus: "Хлорид кальция получают из природных минералов или через химический синтез. Он используется в пищевой промышленности как уплотнитель и консервант в продуктах, таких как консервированные овощи, замороженные продукты и молочные продукты, а также в качестве средства для уменьшения жесткости воды.",
    desclat: "Calcium chloride is obtained from natural minerals or through chemical synthesis. It is used in the food industry as a thickener and preservative in products such as canned vegetables, frozen products, and dairy products, as well as a means of reducing water hardness."
  },
  {
    name: "Хлорид аммония E510",
    descrus: "Хлорид аммония выпускают путем смешивания аммиака с Хлороводородной кислотой. Он используется в пищевой промышленности как регулятор кислотности, а также в производстве конфет, жевательной резинки и других продуктов.",
    desclat: "Ammonium chloride is produced by mixing ammonia with hydrochloric acid. It is used in the food industry as an acid regulator, as well as in the production of candy, chewing gum, and other products."
  },
  {
    name: "Хлорид магния E511",
    descrus: "Хлорид магния производится путем соединения карбоната магния с соляной кислотой. Он используется в пищевой промышленности как консервант, а также в качестве усилителя вкуса в различных продуктах, таких как мороженое и закуски.",
    desclat: "Magnesium chloride is produced by combining magnesium carbonate with hydrochloric acid. It is used in the food industry as a preservative, as well as a flavor enhancer in various products, such as ice cream and snacks."
  },
  {
    name: "Хлорид олова E512",
    descrus: "Хлорид олова получают из руд олова или путем смешивания хлористого олова и гидроокиси олова. Он используется в пищевой промышленности как антиокислитель, консервант и усилитель красного цвета в некоторых морепродуктах, консервах и других продуктах.",
    desclat: "Tin chloride is obtained from tin ores or by mixing tin chloride and tin hydroxide. It is used in the food industry as an antioxidant, preservative, and color enhancer in some seafood, canned foods, and other products."
  },
  {
    name: "Серная кислота E513",
    descrus: "Серная кислота получается путем производства диоксида серы и воды. Она широко используется в пищевой промышленности как регулятор кислотности и консервант в некоторых продуктах, таких как консервы, желе и сиропы.",
    desclat: "Sulfuric acid is produced by manufacturing sulfur dioxide and water. It is widely used in the food industry as an acid regulator and preservative in some products, such as canned foods, jellies, and syrups."
  },
  {
    name: "Сульфат натрия E514",
    descrus: "Сульфат натрия получают из природных минералов или производят химически. Он используется в пищевой промышленности как консервант и регулятор текстуры в некоторых красках, морепродуктах, консервах и других продуктах.",
    desclat: "Sodium sulfate is obtained from natural minerals or produced chemically. It is used in the food industry as a preservative and texture regulator in some paints, seafood, canned foods, and other products."
  },
  {
    name: "Сульфат калия E515",
    descrus: "Сульфат калия получают из природных минералов и производят химически. Он используется в пищевой промышленности как консервант, регулятор кислотности и текстуры в различных продуктах, включая сыр, морепродукты, консервы и виноградный сок.",
    desclat: "Potassium sulfate is obtained from natural minerals and produced chemically. It is used in the food industry as a preservative, acid and texture regulator in various products, including cheese, seafood, canned foods, and grape juice."
  },
  {
    name: "Сульфат кальция E516",
    descrus: "Сульфат кальция получают из гипса или карбоната кальция. Он используется в пищевой промышленности как консервант, регулятор кислотности и связующее в некоторых продуктах, таких как сыр, соусы и кондитерские изделия.",
    desclat: "Calcium sulfate is obtained from gypsum or calcium carbonate. It is used in the food industry as a preservative, acid regulator, and binder in some products like cheese, sauces, and pastries."
  },
  {
    name: "Сульфат аммония E517",
    descrus: "Сульфат аммония получают с помощью реакции сульфата меди с аммиаком. Он используется в пищевой промышленности как сгуститель, регулятор кислотности и улучшитель теста в различных кондитерских изделиях, хлебобулочных изделиях и пиве.",
    desclat: "Ammonium sulfate is obtained by reaction between copper sulfate and ammonia. It is used in the food industry as a coagulant, acid regulator, and dough improver in various pastries, bakery products, and beer."
  },
  {
    name: "Сульфат магния E518",
    descrus: "Сульфат магния получают путем выделения магния из соляной кислоты и остатков добычи калийных солей. Он используется в пищевой промышленности как регулятор кислотности, текстурный усилитель и минеральный добавка.",
    desclat: "Magnesium sulfate is obtained by extracting magnesium from hydrochloric acid and residue from potassium salt mining. It is used in the food industry as an acid regulator, texture enhancer, and mineral supplement."
  },
  {
    name: "Сульфат алюминия E520",
    descrus: "Сульфат алюминия получают из нефелинового сырья посредством трехступенчатой кислотной обработки. Он используется в пищевой промышленности как регулятор кислотности, стабилизатор и мутагенезирующее средство в некоторых продуктах, таких как мятные конфеты.",
    desclat: "Aluminum sulfate is obtained from nepheline raw materials through three-stage acid treatment. It is used in the food industry as an acid regulator, stabilizer, and mutagenic agent in some products like mint candies."
  },
  {
    name: "Сульфат алюминия-натрия E521",
    descrus: "Сульфат алюминия-натрия - это синтетическая пищевая добавка, получаемая с помощью реакции сульфата алюминия и натрия. Она используется в пищевой промышленности как регулятор кислотности и стабилизатор.",
    desclat: "Sodium aluminum sulfate is a synthetic food additive obtained by reaction between aluminum sulfate and sodium. It is used in the food industry as an acidity regulator and stabilizer."
  },
  {
    name: "Сульфат алюминия-калия E522",
    descrus: "Сульфат алюминия-калия - это синтетическая пищевая добавка, получаемая путем реакции сульфата алюминия и калия. Она используется в пищевой промышленности в качестве консерванта, регулятора кислотности и обработки маслосодержащих продуктов.",
    desclat: "Potassium aluminum sulfate is a synthetic food additive obtained by reaction between aluminum sulfate and potassium. It is used in the food industry as a preservative, acid regulator, and processing aid for oil-containing products."
  },
  {
    name: "Сульфат алюминия-аммония E523",
    descrus: "Сульфат алюминия-аммония - это синтетическая пищевая добавка, получаемая путем реакции сульфата алюминия и аммиака. Она используется в пищевой промышленности как регулятор кислотности, стабилизатор и связующее в некоторых продуктах, таких как кондитерские изделия, мороженое и сухие завтраки.",
    desclat: "Ammonium aluminum sulfate is a synthetic food additive obtained by reaction between aluminum sulfate and ammonia. It is used in the food industry as an acid regulator, stabilizer, and binder in some products like confections, ice cream, and dry breakfast cereals."
  },
  {
    name: "Гидроксид натрия E524",
    descrus: "Гидроксид натрия, также известный как щелочь, производится путем электролиза растворов солей. Эта пищевая добавка используется в качестве регулятора кислотности, растворителя, стабилизатора и ароматизатора в некоторых продуктах, таких как шоколад и сыры.",
    desclat: "Sodium hydroxide, also known as caustic soda, is produced by electrolysis of salt solutions. This food additive is used as an acidity regulator, solvent, stabilizer, and flavoring agent in some products like chocolate and cheese."
  },
  {
    name: "Гидроксид калия E525",
    descrus: "Гидроксид калия получается путем электролиза растворов калийных солей. Он используется в качестве регулятора кислотности, стабилизатора и ароматизатора в продуктах, таких как пиво, конфеты и жевательная резинка.",
    desclat: "Potassium hydroxide is produced by electrolysis of potassium salt solutions. It is used as an acidity regulator, stabilizer, and flavoring agent in products like beer, candies, and chewing gum."
  },
  {
    name: "Гидроксид кальция E526",
    descrus: "Гидроксид кальция получают, смешивая известь и воду. Он используется в качестве регулятора кислотности, стабилизатора, добавляется в желе и мармелад.",
    desclat: "Calcium hydroxide is obtained by mixing lime and water. It is used as an acidity regulator, stabilizer, and is added to jellies and marmalades."
  },
  {
    name: "Гидроксид аммония E527",
    descrus: "Гидроксид аммония получают путем реакции газообразного аммиака со водой. Он используется как регулятор кислотности, стабилизатор, ароматизатор, а также в производстве шоколада и как пенизатор в качестве ингредиента для приготовления зефира и маршмеллоу.",
    desclat: "Ammonium hydroxide is obtained by reacting gaseous ammonia with water. It is used as an acidity regulator, stabilizer, flavoring agent, and is also used in chocolate production and as a foaming agent in ingredients for marshmallows and marshmallows."
  },
  {
    name: "Гидроксид магния E528",
    descrus: "Гидроксид магния — белый порошок, получаемый взаимодействием гидроксида кальция с сульфатом магния. Это водорастворимая пищевая добавка, которая используется как средство для увеличения pH, а также как стабилизатор и загуститель в молочных продуктах, соусах и конфетах.",
    desclat: "Magnesium hydroxide is a white powder obtained by reacting calcium hydroxide and magnesium sulfate. It is a water-soluble food additive used as a pH regulator, stabilizer, and thickener in dairy products, sauces, and candies."
  },
  {
    name: "Оксид кальция E529",
    descrus: "Оксид кальция — белый порошок, получаемый путем нагревания извести до высоких температур. Эта пищевая добавка используется в качестве регулятора кислотности и стабилизатора в продуктах, таких как жевательная резинка и конфеты.",
    desclat: "Calcium oxide is a white powder obtained by heating limestone to high temperatures. This food additive is used as an acidity regulator and stabilizer in products like chewing gum and candies."
  },
  {
    name: "Оксид магния E530",
    descrus: "Оксид магния — белый порошок, получаемый путем нагревания магнезита. Эта пищевая добавка используется в качестве регулятора кислотности, стабилизатора и антиокислителя в продуктах, таких как мука, макароны, сыры и конфеты.",
    desclat: "Magnesium oxide is a white powder obtained by heating magnesite. This food additive is used as an acidity regulator, stabilizer, and antioxidant in products like flour, pasta, cheese, and candies."
  },
  {
    name: "Ферроцианид натрия E535",
    descrus: "Ферроцианид натрия — белый порошок с синим оттенком, получаемый путем реакции мочевины, натрия и железа. Эта пищевая добавка используется в качестве антиокислителя и антиконденсата в продуктах, таких как сыры, майонез и кетчуп.",
    desclat: "Sodium ferrocyanide is a white powder with a blue tint, obtained by reacting urea, sodium, and iron. This food additive is used as an antioxidant and anticaking agent in products like cheeses, mayonnaise, and ketchup."
  },
  {
    name: "Ферроцианид калия E536",
    descrus: "Ферроцианид калия — белый порошок, получаемый с помощью реакции синтеза между цианидом калия и гексацианоферратом железа(II). Используется в пищевой промышленности в качестве антиокислителя, консерванта и красителя. ",
    desclat: "Potassium ferrocyanide is a white powder obtained by the synthesis reaction between potassium cyanide and iron(II) hexacyanoferrate. It is used in the food industry as an antioxidant, preservative, and coloring agent."
  },
  {
    name: "Ферроцианид кальция E538",
    descrus: "Ферроцианид кальция — белый порошок, получаемый с помощью реакции между раствором кальция и ферроцианидом калия. Используется в пищевой промышленности в качестве антиокислителя, консерванта и красителя.",
    desclat: "Calcium ferrocyanide is a white powder obtained by reacting a calcium solution with potassium ferrocyanide. It is used in the food industry as an antioxidant, preservative, and coloring agent."
  },
  {
    name: "Дикальция дифосфат E540",
    descrus: "Дикальция дифосфат — белый порошок, получаемый путем взаимодействия фосфорной кислоты и кальция. Используется в пищевой промышленности в качестве пищевого добавки как средство для контроля рН, стабилизатор, вспомогательное средство для разделения, загуститель и др.",
    desclat: "Dicalcium phosphate is a white powder obtained by the interaction of phosphoric acid and calcium. It is used in the food industry as a food additive as a pH control agent, stabilizer, separating agent, thickener, and more."
  },
  {
    name: "Алюмофосфат натрия E541",
    descrus: "Алюмофосфат натрия — белый порошок, получаемый путем смешивания фосфатов натрия и алюминия. Используется в пищевой промышленности в качестве антиконденсата, термостабилизатора, стабилизатора красителей, загустителя и др.",
    desclat: "Sodium aluminophosphate is a white powder obtained by mixing sodium and aluminum phosphates. It is used in the food industry as an anticaking agent, thermal stabilizer, dye stabilizer, thickener, and more."
  },
  {
    name: "Костный фосфат E542",
    descrus: "Костный фосфат - получают из костей скота. Представляет собой белый порошок, используется в пищевой промышленности в качестве стабилизатора, регулятора кислотности и антиоксиданта.",
    desclat: "Bone phosphate is obtained from animal bones. It is a white powder that is used in the food industry as a stabilizer, acidity regulator, and antioxidant."
  },
  {
    name: "Полифосфат кальция E544",
    descrus: "Полифосфат кальция -  получают с помощью взаимодействия фосфорной кислоты и гидроксида кальция. Представляет собой белый порошок, используется в пищевой промышленности в качестве консерванта, пищевого добавка, загустителя и эмульгатора.",
    desclat: "Calcium polyphosphate is obtained by the interaction of phosphoric acid and calcium hydroxide. It is a white powder that is used in the food industry as a preservative, food additive, thickener, and emulsifier."
  },
  {
    name: "Полифосфат аммония E545",
    descrus: "Полифосфат аммония - получают с помощью взаимодействия фосфорной кислоты и аммония. Представляет собой белый порошок, используется в пищевой промышленности в качестве консерванта, пищевого добавка, загустителя и эмульгатора.",
    desclat: "Ammonium polyphosphate is obtained by the interaction of phosphoric acid and ammonia. It is a white powder that is used in the food industry as a preservative, food additive, thickener, and emulsifier."
  },
  {
    name: "Силикат натрия E550",
    descrus: "Силикат натрия - представляет собой белый порошок, получаемый путем смешения кремнекислого натрия и натрия гидроксида. Используется в пищевой промышленности в качестве антиконденсата, регулятора кислотности, загустителя и др.",
    desclat: "Sodium silicate is a white powder obtained by mixing sodium silicate and sodium hydroxide. It is used in the food industry as an anticaking agent, acidity regulator, thickener, and more."
  },
  {
    name: "Диоксид кремния E551",
    descrus: "Диоксид кремния - представляет собой белый порошок, получаемый из кремнеземистой руды. Используется в пищевой промышленности в качестве антиконденсата, противоследящего агента, абразива и др.",
    desclat: "Silicon dioxide is a white powder obtained from silica ore. It is used in the food industry as an anticaking agent, antifoaming agent, abrasive, and more."
  },
  {
    name: "Силикат кальция E552",
    descrus: "Силикат кальция - представляет собой белый порошок, получаемый из кремнекислых и кальцийсодержащих руд. Используется в пищевой промышленности в качестве антиконденсата, загустителя и др.",
    desclat: "Calcium silicate is a white powder obtained from silica and calcium-containing ores. It is used in the food industry as an anticaking agent, thickener, and more."
  },
  {
    name: "Силикат магния/тальк E553",
    descrus: "Силикат магния/тальк - представляет собой белый порошок, получаемый из природного минерала талька. Используется в пищевой промышленности в качестве антиконденсата, загустителя, абсорбента и др.",
    desclat: "Magnesium silicate/talc is a white powder obtained from the natural mineral talc. It is used in the food industry as an anticaking agent, thickener, absorbent, and more."
  },
  {
    name: "Алюмосиликат натрия E554",
    descrus: "Алюмосиликат натрия - представляет собой белый порошок, получаемый с помощью реакции кремнекислого натрия и глинозема. Используется в пищевой промышленности в качестве антиконденсата, загустителя, абсорбента и др.",
    desclat: "Sodium aluminosilicate is a white powder obtained by reacting sodium silicate and alumina. It is used in the food industry as an anticaking agent, thickener, absorbent, and more."
  },
  {
    name: "Алюмосиликат калия E555",
    descrus: "Алюмосиликат калия - представляет собой белый порошок, содержащий в своем составе кремнезем, оксид алюминия и калий. Получается путем реакции между кремнекислым калием и силикатом алюминия. Используется в пищевой промышленности в качестве антиконденсата, загустителя, стабилизатора и др.",
    desclat: "Potassium aluminum silicate is a white powder that contains silicon dioxide, aluminum oxide and potassium. It is obtained by reacting potassium silicate and aluminum silicate. It is used in the food industry as an anticaking agent, thickener, stabilizer, and more."
  },
  {
    name: "Алюмосиликат кальция E556",
    descrus: "Алюмосиликат кальция - представляет собой белый порошок, содержащий в своем составе кремнезем, оксид кальция и алюминия. Получается путем смешивания кремнекислого кальция и силиката алюминия. Используется в пищевой промышленности в качестве антиконденсата, загустителя, стабилизатора и др.",
    desclat: "Calcium aluminum silicate is a white powder that contains silicon dioxide, calcium oxide and aluminum. It is obtained by mixing calcium silicate and aluminum silicate. It is used in the food industry as an anticaking agent, thickener, stabilizer, and more."
  },
  {
    name: "Бентонит E558",
    descrus: "Бентонит - это глина, состоящая главным образом из монтмориллонита и некоторых связанных минералов, обычно кремнезема. Получается иногда изза выветривания пепла вулкана. Используется в пищевой промышленности в качестве антиконденсата, эмульгатора, загустителя и др.",
    desclat: "Bentonite is a clay mainly composed of montmorillonite and some associated minerals, typically silica. It is occasionally obtained from the weathering of volcanic ash. It is used in the food industry as an anticaking agent, emulsifier, thickener, and more."
  },
  {
    name: "Алюмосиликат (Каолин) E559",
    descrus: "Алюмосиликат (Каолин) - это пищевая добавка в виде белого сильнодисперсного порошка, получаемого из глины. Он используется как антиконденсатор, загуститель и стабилизатор продуктов питания.",
    desclat: "Kaolin (Aluminum Silicate) E559 is a food additive that is a white highly dispersed powder, obtained from clay. It is used as an anticaking agent, thickener, and stabilizer in food products."
  },
  {
    name: "Стеариновая кислота E570",
    descrus: "Стеариновая кислота - это пищевая добавка, получаемого путем гидролиза жиров. Она используется для улучшения консистенции продуктов, стабилизации пены и эмульгирования жидкости и сухих ингредиентов.",
    desclat: "Stearic Acid E570 is a food additive obtained by hydrolysis of fats. It is used to improve consistency of food products, stabilize foam, and emulsify liquids and dry ingredients."
  },
  {
    name: "Стеарат магния E572",
    descrus: "Стеарат магния - это пищевая добавка, которая представляет собой магниевую соль стеариновой кислоты. Это белый порошок, который используется в пищевой промышленности для улучшения консистенции продуктов.",
    desclat: "Magnesium Stearate E572 is a food additive that is a magnesium salt of stearic acid. It is a white powder that is used in the food industry to improve the consistency of food products."
  },
  {
    name: "Глюконовая кислота E574",
    descrus: "Глюконовая кислота - это пищевая добавка, получаемая путем биотехнологического синтеза глюкозы. Это кристаллический белый порошок, используемый в пищевой промышленности как регулятор кислотности и антиокислитель.",
    desclat: "Glucono-delta-Lactone E574 is a food additive obtained by biotechnological synthesis of glucose. It is a crystalline white powder used in the food industry as an acidity regulator and antioxidant."
  },
  {
    name: "Глюконо-дельта-лактон E575",
    descrus: "Глюконо-дельта-лактон - это пищевая добавка, получаемая биотехнологическим способом из глюкозы. Он используется в пищевой промышленности как приготовление заквасок, как заменитель кислоты и консервант.",
    desclat: "Glucono-delta-lactone E575 is a food additive obtained by biotechnological synthesis from glucose. It is used in the food industry as a preparation of coagulants, as a replacement for acid and a preservative."
  },
  {
    name: "Глюконат натрия E576",
    descrus: "Глюконат натрия - это пищевая добавка, представляет собой натриевую соль глюконовой кислоты. Он широко используется в пищевой промышленности как регулятор кислотности и стабилизатор эмульсий.",
    desclat: "Sodium Gluconate E576 is a food additive that is a sodium salt of gluconic acid. It is widely used in the food industry as an acidity regulator and emulsion stabilizer."
  },
  {
    name: "Глюконат калия E577",
    descrus: "Глюконат калия - это пищевая добавка, которая представляет собой калиевую соль глюконовой кислоты. Он используется в пищевой промышленности как регулятор кислотности и стабилизатор продуктов.",
    desclat: "Potassium Gluconate E577 is a food additive that is a potassium salt of gluconic acid. It is used in the food industry as an acidity regulator and stabilizer of food products."
  },
  {
    name: "Глюконат кальция E578",
    descrus: "Глюконат кальция - это пищевая добавка, которая представляет собой кальциевую соль глюконовой кислоты. Это белый кристаллический порошок, который используется в пищевой промышленности в качестве регулятора кислотности, усилителя вкуса и консерванта.",
    desclat: "Calcium Gluconate E578 is a food additive that is a calcium salt of gluconic acid. It is a white crystalline powder that is used in the food industry as an acidity regulator, flavor enhancer, and preservative."
  },
  {
    name: "Лактат железа E585",
    descrus: "Лактат железа - это пищевая добавка, являющаяся солью молочной кислоты и железа. Он получается с помощью реакции между лактатом кальция и сульфатом железа. Он используется в пищевой промышленности как источник железа.",
    desclat: "Iron lactate E585 is a food additive that is a salt of lactic acid and iron. It is obtained by reacting calcium lactate with iron sulphate. It is used in the food industry as a source of iron."
  },
  {
    name: "Глутаминовая кислота E620",
    descrus: "Глутаминовая кислота - это пищевая добавка, которая является аминокислотой. Он получается из глутамата натрия. Он используется в пищевой промышленности как ароматизатор и усилитель вкуса.",
    desclat: "Glutamic acid E620 is a food additive that is an amino acid. It is obtained from sodium glutamate. It is used in the food industry as a flavor enhancer and taste improver."
  },
  {
    name: "Глютамат натрия E621",
    descrus: "Глютамат натрия - это пищевая добавка, которая является натриевой солью глутаминовой кислоты. Он получается с помощью бактерий или синтезирования из ацетоацината. Он используется в пищевой промышленности как ароматизатор и усилитель вкуса.",
    desclat: "Monosodium glutamate (MSG) E621 is a food additive that is a sodium salt of glutamic acid. It is produced by bacteria or synthesized from acetoacetate. It is used in the food industry as a flavor enhancer and taste improver."
  },
  {
    name: "Глутамат калия однозамещенный E622",
    descrus: "Глутамат калия - это пищевая добавка, которая является калиевой солью глутаминовой кислоты. Это белый кристаллический порошок, который получается из глутамата натрия. Он используется в пищевой промышленности как ароматизатор и усилитель вкуса.",
    desclat: "Mono-potassium glutamate E622 is a food additive that is a potassium salt of glutamic acid. It is a white crystalline powder that is obtained from sodium glutamate. It is used in the food industry as a flavor enhancer and taste improver."
  },
  {
    name: "Диглутамат кальция E623",
    descrus: "Диглутамат кальция – это пищевая добавка, получаемая с помощью процесса брожения крахмала кассы и мочевины бактерией Bacillus subtilis. Он используется в пищевой промышленности в качестве усилителя вкуса. Добавка обычно добавляется в супы, бульоны, соусы, консервы, рыбные и мясные продукты, снэки, чипсы и т.д.",
    desclat: "Calcium diglutamate E623 is a food additive that is obtained through the fermentation process of cassava starch and urea by Bacillus subtilis bacteria. It is used in the food industry as a flavor enhancer. The additive is typically added to soups, broths, sauces, canned goods, fish and meat products, snacks, chips, etc."
  },
  {
    name: "Глутамат аммония однозамещенный E624",
    descrus: "Глутамат аммония однозамещенный - это пищевая добавка, являющаяся солями глутаминовой кислоты и аммония. Добавка получается с помощью бактериального брожения и используется в пищевой промышленности в качестве усилителя вкуса. Обычно его добавляют в супы, бульоны, соусы и другие продукты.",
    desclat: "Monoammonium glutamate E624 is a food additive that is salts of glutamic acid and ammonium. The additive is obtained by bacterial fermentation and used in the food industry as a flavor enhancer. It is normally added to soups, broths, sauces, and other products."
  },
  {
    name: "Диглутамат магния E625",
    descrus: "Диглутамат магния - это пищевая добавка, получаемая из солей глутаминовой кислоты и магния. Он получается с помощью бактериального брожения. Он является усилителем вкуса, который используется в пищевой промышленности. Обычно добавляется в супы, бульоны, соусы и другие продукты.",
    desclat: "Magnesium diglutamate E625 is a food additive that is obtained from salts of glutamic acid and magnesium. It is obtained by bacterial fermentation. It is a flavor enhancer that is used in the food industry. It is typically added to soups, broths, sauces, and other products."
  },
  {
    name: "Гуаниловая кислота E626",
    descrus: "Гуаниловая кислота - это натуральный нуклеотид, изготавливаемый бактериальным брожением. Она используется в качестве усилителя вкуса в пищевых продуктах, таких как супы, бульоны, чипсы, консервы, соусы, и др.",
    desclat: "Guanylic acid E626 is a natural nucleotide produced by bacterial fermentation. It is used as a flavor enhancer in food products such as soups, broths, chips, canned goods, sauces, etc."
  },
  {
    name: "Гуанилат натрия E627",
    descrus: "Гуанилат натрия - это пищевая добавка, производимая путем бактериального брожения глутамата мононатрия и инозитола. Он используется в качестве усилителя вкуса в пищевых продуктах, таких как супы, бульоны, чипсы, консервы, соусы, и др.",
    desclat: "Disodium guanylate E627 is a food additive produced by bacterial fermentation of monosodium glutamate and inositol. It is used as a flavor enhancer in food products such as soups, broths, chips, canned goods, sauces, etc."
  },
  {
    name: "5-гуанилат калия двузамещенный E628",
    descrus: "5-гуанилат калия двузамещенный - это пищевая добавка, получаемая бактериальным брожением глутамата монокалия и инозитола. Он используется в качестве усилителя вкуса в пищевых продуктах, таких как супы, бульоны, чипсы, консервы, соусы, и др.",
    desclat: "Dipotassium guanylate E628 is a food additive produced by bacterial fermentation of monopotassium glutamate and inositol. It is used as a flavor enhancer in food products such as soups, broths, chips, canned goods, sauces, etc."
  },
  {
    name: "5-гуанилат кальция E629",
    descrus: "5-гуанилат кальция - это натуральный нуклеотид, получаемый бактериальным брожением глутамата моно-Кальция и инозитола. Он применяется в качестве усилителя вкуса и аромата в пищевых продуктах, таких как супы, бульоны, консервы, чипсы, соусы и т. д. Он обеспечивает усиление вкуса при небольших дозировках и способствует уменьшению уровня натрия в продуктах питания.",
    desclat: "Calcium guanylate E629 is a natural nucleotide produced by bacterial fermentation of monocalcium glutamate and inositol. It is used as a flavor enhancer and aroma in food products such as soups, broths, canned goods, chips, sauces, etc. It provides flavor enhancement at low dosages and helps to reduce the level of sodium in food products."
  },
  {
    name: "Инозиновая кислота E630",
    descrus: "Инозиновая кислота - это нуклеотид, получаемый бактериальным брожением рибонуклеотидов и вкусовых экстрактов. Он используется в качестве усилителя вкуса и аромата в таких пищевых продуктах, как мясные продукты, супы, бульоны, соусы и т. д.",
    desclat: "Inosinic acid E630 is a nucleotide produced by bacterial fermentation of ribonucleotides and flavor extracts. It is used as a flavor enhancer and aroma in food products such as meat products, soups, broths, sauces, etc."
  },
  {
    name: "Инозинат натрия двузамещенный E631",
    descrus: "Инозинат натрия двузамещенный - это пищевая добавка, получаемая смешением инозиновой кислоты, произведенной бактериальным брожением рибонуклеотидов, и глутамат натрия. Он широко применяется в пищевой промышленности благодаря своей способности усиливать вкус и аромат пищевых продуктов.",
    desclat: "Disodium inosinate E631 is a food additive produced by blending inosinic acid, produced by bacterial fermentation of ribonucleotides, and sodium glutamate. It is widely used in the food industry for its ability to enhance the flavor and aroma of food products."
  },
  {
    name: "Инозинат калия двузамещенный E632",
    descrus: "Инозинат калия двузамещенный - это пищевая добавка, получаемая смешением инозиновой кислоты, произведенной бактериальным брожением рибонуклеотидов, и калия. Он применяется в качестве усилителя вкуса и аромата в пищевых продуктах, таких как мясо, рыба, супы, бульоны, консервы, чипсы, соусы и т. д. Он обеспечивает усиление вкуса при небольших дозировках.",
    desclat: "Disodium inosinate E632 is a food additive produced by blending inosinic acid, produced by bacterial fermentation of ribonucleotides, and potassium. It is used as a flavor enhancer and aroma in food products such as meat, fish, soups, broths, canned goods, chips, sauces, etc. It provides flavor enhancement at low dosages."
  },
  {
    name: "5-инозинат кальция E633",
    descrus: "5-инозинат кальция - это пищевая добавка, получаемая бактериальным брожением рибонуклеотидов с добавлением кальция. Он применяется в качестве усилителя вкуса и аромата в пищевых продуктах, таких как мясо, рыба, супы, бульоны, консервы, чипсы, соусы и т. д. Он обеспечивает усиление вкуса при небольших дозировках.",
    desclat: "Calcium inosinate E633 is a food additive produced by bacterial fermentation of ribonucleotides with the addition of calcium. It is used as a flavor enhancer and aroma in food products such as meat, fish, soups, broths, canned goods, chips, sauces, etc. It provides flavor enhancement at low dosages."
  },
  {
    name: "5-рибонуклеотиды кальция E634",
    descrus: "5-рибонуклеотиды кальция - пищевая добавка, получаемая бактериальным брожением рибонуклеотидов с добавлением кальция. Она применяется как усилитель вкуса и аромата в пищевых продуктах, таких как консервы, супы, соусы и другие продукты. Добавка обеспечивает усиление вкуса при небольших дозировках.",
    desclat: "Calcium ribonucleotides E634 is a food additive produced by bacterial fermentation of ribonucleotides with the addition of calcium. It is used as a flavor enhancer and aroma in food products such as canned goods, soups, sauces, and other products. This additive provides flavor enhancement at low dosages."
  },
  {
    name: "5-рибонуклеотиды натрия двузамещенные E635",
    descrus: "5-рибонуклеотиды натрия - пищевая добавка, получаемая бактериальным брожением рибонуклеотидов, произведенных с использованием микроорганизмов, и натрия. Она применяется в качестве усилителя вкуса и аромата в пищевых продуктах, таких как мясо, рыба, супы, бульоны, консервы, соусы, чипсы и т. д. Добавка обеспечивает усиление вкуса при небольших дозировках.",
    desclat: "Disodium ribonucleotides E635 is a food additive produced by bacterial fermentation of ribonucleotides using microorganisms and sodium. It is used as a flavor enhancer and aroma in food products such as meat, fish, soups, broths, canned goods, chips, sauces, etc. This additive provides flavor enhancement at low dosages."
  },
  {
    name: "Мальтол E636",
    descrus: "Мальтол - пищевая добавка, получаемая из мальты зерновых культур. Она используется в качестве ароматизатора в различных пищевых продуктах, таких как хлеб, выпечка, десерты, напитки, кондитерские изделия и т. д. Добавка обеспечивает приятный сладкий вкус.",
    desclat: "Maltol E636 is a food additive obtained from malt of cereal crops. It is used as a flavoring agent in various food products such as bread, bakery products, desserts, beverages, confectionery products, etc. The additive provides a pleasant sweet taste."
  },
  {
    name: "Этилмальтол E637",
    descrus: "Пищевая добавка E637, известная как этилмальтол, является искусственным ароматизатором. Она производится путем обработки мальтола этилированием. Она применяется в различных типах пищевых продуктов, таких как черный чай, молочные напитки и кондитерские изделия. Она обладает сладким, карамельным ароматом.",
    desclat: "Food additive E637, also known as ethyl maltol, is an artificial flavoring agent. It is produced by treating maltol with ethylation. It is used in various types of food products, such as black tea, dairy drinks and confectionery. It has a sweet, caramel-like flavor."
  },
  {
    name: "Глицин и его натриевые соли E640",
    descrus: "Пищевая добавка E640, также известная как глицин и его натриевые соли, является аминокислотой. Она синтезируется естественным путем или из гелатина. Она используется в качестве регулятора кислотности, антиоксиданта и усилителя аромата.",
    desclat: "Food additive E640, also known as glycine and its sodium salts, is an amino acid. It is synthesized naturally or from gelatin. It is used as an acidity regulator, antioxidant and flavor enhancer."
  },
  {
    name: "Ацетат цинка E650",
    descrus: "Пищевая добавка E650, известная как ацетат цинка, является синтетической солью. Она производится путем реакции уксусной кислоты и оксида цинка. Она применяется как консервант и антиоксидант в различных продуктах, таких как соки, варенье и маринованные овощи.",
    desclat: "Food additive E650, also known as zinc acetate, is a synthetic salt. It is produced by reacting acetic acid and zinc oxide. It is used as a preservative and antioxidant in various products, such as juices, jams and pickled vegetables."
  },
  {
    name: "Диметилполисилоксан E900",
    descrus: "Пищевая добавка E900, известная как диметилполисилоксан, является синтетическим полимером. Она производится путем синтеза кремнийорганических соединений. Она применяется для уменьшения пенообразования и стабилизации пены в напитках и жирах.",
    desclat: "Food additive E900, also known as dimethylpolysiloxane, is a synthetic polymer. It is produced by synthesizing organosilicon compounds. It is used to reduce foaming and stabilize foam in beverages and fats."
  },
  {
    name: "Пчелиный воск E901",
    descrus: "Пищевая добавка E901, известная как пчелиный воск, является натуральным веществом, производимым пчелами. Она используется в качестве покрытия для конфет, фруктов и жевательной резинки. Она также используется в качестве глазировочного средства для фруктов, орехов и конфет.",
    desclat: "Food additive E901, also known as beeswax, is a natural substance produced by bees. It is used as a coating for candies, fruits and chewing gum. It is also used as a glazing agent for fruits, nuts and candies."
  },
  {
    name: "Воск карнаубский E902",
    descrus: "Пищевая добавка E902, также известная как воск карнаубский, является натуральным полимером, полученным из листьев карнаубской пальмы. Он широко используется в качестве глазировочного и защитного средства в жевательной резинке, конфетах и фруктах.",
    desclat: "Food additive E902, also known as carnauba wax, is a natural polymer obtained from the leaves of the carnauba palm. It is widely used as a glazing and protective agent in chewing gum, candies and fruits."
  },
  {
    name: "Воск свечной E903",
    descrus: "Пищевая добавка E903, также известная как воск свечной, является натуральным веществом, полученным из нефтяного сырья. Она используется в качестве глазировочного и защитного средства для фруктов, конфет и жевательной резинки.",
    desclat: "Food additive E903, also known as beeswax, is a natural substance obtained from petroleum. It is used as a glazing and protective agent for fruits, candies and chewing gum."
  },
  {
    name: "Шеллак E904",
    descrus: "Пищевая добавка E904, также известная как шеллак, является натуральным веществом, полученным из секреций жуков-лавровиков. Она широко используется в качестве глазировочного и защитного средства для конфет и других сладостей.",
    desclat: "Food additive E904, also known as shellac, is a natural substance obtained from the secretions of lac bugs. It is widely used as a glazing and protective agent for candies and other sweets."
  },
  {
    name: "Парафины E905",
    descrus: "Пищевая добавка E905, также известная как парафины, является продуктом нефтепереработки. Она применяется как глазировочное и защитное средство для фруктов, орехов и конфет.",
    desclat: "Food additive E905, also known as paraffins, is a product of petroleum refining. It is used as a glazing and protective agent for fruits, nuts and candies."
  },
  {
    name: "Поли-1-децен гидрогенизированный E907",
    descrus: "Пищевая добавка E907, также известная как поли-1-децен гидрогенизированный, является синтетическим полимером, полученным из нефти. Он широко используется в качестве эмульгатора, стабилизатора и консистентера в продуктах питания, таких как сливочное масло, йогурты, молочные напитки, соусы, десерты и многое другое.",
    desclat: "Food additive E907, also known as hydrogenated poly-1-decene, is a synthetic polymer derived from petroleum. It is widely used as an emulsifier, stabilizer and thickener in food products such as butter, yogurts, milk drinks, sauces, desserts and many more."
  },
  {
    name: "Эфиры монтаниновой кислоты E912",
    descrus: "Пищевая добавка E912, также известная как эфиры монтаниновой кислоты, является натуральным веществом, полученным из жира овец. Он применяется как ароматизатор в продуктах питания, таких как сыры, мясные изделия, мороженое и другие.",
    desclat: "Food additive E912, also known as montanic acid esters, is a natural substance obtained from sheep's wool fat. It is used as a flavoring agent in food products such as cheeses, meat products, ice cream and others."
  },
  {
    name: "Ланолин E913",
    descrus: "Пищевая добавка E913, также известная как ланолин, является натуральным веществом, полученным из жировых желез овец. Он используется в качестве эмульгатора, стабилизатора и консистентера в продуктах питания, таких как маргарин, сливочное масло, йогурты, десерты и другие.",
    desclat: "Food additive E913, also known as lanolin, is a natural substance obtained from the sebaceous glands of sheep. It is used as an emulsifier, stabilizer and thickener in food products such as margarine, butter, yogurts, desserts and others."
  },
  {
    name: "Окисленный полиэтиленовый воск E914",
    descrus: "Пищевая добавка E914, также известная как окисленный полиэтиленовый воск, является синтетическим полимером, полученным из нефти. Он используется в качестве глазировочного и защитного средства для жевательной резинки, фруктов, конфет и других сладостей.",
    desclat: "Food additive E914, also known as oxidised polyethylene wax, is a synthetic polymer derived from petroleum. It is used as a glazing and protective agent for chewing gum, fruits, candies and other sweets."
  },
  {
    name: "L-цистеин E920",
    descrus: "Пищевая добавка E920, также известная как L-цистеин, является аминокислотой, полученной из волос и перьев животных, а также из растительных источников. Он используется в качестве антиоксиданта, стабилизатора и улучшителя качества теста в хлебопекарной промышленности.",
    desclat: "Food additive E920, also known as L-cysteine, is an amino acid derived from animal hair and feathers, as well as from plant sources. It is used as an antioxidant, stabilizer and dough quality improver in the baking industry."
  },
  {
    name: "Бромат калия E924",
    descrus: "Пищевая добавка E924, также известная как бромат калия, является синтетическим веществом, полученным путем бромирования раствора гидроксида калия. Он используется в качестве отбеливающего средства и улучшителя качества теста в хлебопекарной промышленности.",
    desclat: "Food additive E924, also known as potassium bromate, is a synthetic substance obtained by brominating potassium hydroxide solution. It is used as a bleaching agent and dough quality improver in the baking industry."
  },
  {
    name: "Хлор E925",
    descrus: "Пищевая добавка E925, также известная как хлор, является синтетическим веществом, получаемым электролизом раствора хлорида натрия. Он используется как отбеливающее и консервирующее средство для овощей, фруктов и других продуктов.",
    desclat: "Food additive E925, also known as chlorine, is a synthetic substance obtained by electrolysis of sodium chloride solution. It is used as a bleaching and preserving agent for vegetables, fruits and other products."
  },
  {
    name: "Диоксид хлора E926",
    descrus: "Пищевая добавка E926, также известная как диоксид хлора, представляет собой газообразное вещество, получаемое электролизом раствора хлористого аммония. Он используется для обеззараживания питьевой воды и обработки поверхностей в пищевой промышленности.",
    desclat: "Food additive E926, also known as chlorine dioxide, is a gaseous substance obtained by electrolysis of ammonium chloride solution. It is used for disinfecting drinking water and processing surfaces in the food industry."
  },
  {
    name: "Карбамид E927B",
    descrus: "Пищевая добавка E927B, также известная как карбамид, является соединением, полученным из уреи. Он используется в качестве антиоксиданта в пищевой промышленности.",
    desclat: "Food additive E927B, also known as carbamide, is a compound obtained from urea. It is used as an antioxidant in the food industry."
  },
  {
    name: "Аргон E938",
    descrus: "Пищевая добавка E938, также известная как аргон, представляет собой инертный газ, получаемый из воздуха. Он используется для замораживания и хранения пищевых продуктов, а также для защиты продуктов от окисления.",
    desclat: "Food additive E938, also known as argon, is an inert gas obtained from air. It is used for freezing and storing food products, as well as for protecting products from oxidation."
  },
  {
    name: "Гелий E939",
    descrus: "Пищевая добавка E939, также известная как гелий, представляет собой инертный газ, получаемый из сжиженного природного газа. Он используется для защиты продуктов от окисления.",
    desclat: "Food additive E939, also known as helium, is an inert gas obtained from liquefied natural gas. It is used for protecting products from oxidation."
  },
  {
    name: "Дихлордифторметан E940",
    descrus: "Пищевая добавка E940, также известная как дихлордифторметан, является пропеллентом, используемым в аэрозольных канистрах в качестве распылителя. Он получается из метана и содержит хлор.",
    desclat: "Food additive E940, also known as dichlorodifluoromethane, is a propellant used in aerosol cans as a spray. It is obtained from methane and contains chlorine."
  },
  {
    name: "Азот E941",
    descrus: "Пищевая добавка E941, также известная как азот, представляет собой инертный газ, который является частью воздуха. Он используется в пищевой промышленности для создания атмосферы, имитирующей атмосферу внутри упаковки.",
    desclat: "Food additive E941, also known as nitrogen, is an inert gas that is part of the atmosphere. It is used in the food industry to create an atmosphere that mimics the atmosphere inside the packaging."
  },
  {
    name: "Закись азота E942",
    descrus: "Пищевая добавка E942, также известная как закись азота, является инертным газом, получаемым путём сгущения воздуха. Она используется для добавления пены в напитки, а также в качестве аэрозоля и газа для охлаждения пищи.",
    desclat: "Food additive E942, also known as nitrogen oxide, is an inert gas obtained by compressing air. It is used to add foam to drinks, as well as as an aerosol and gas for cooling food."
  },
  {
    name: "Бутан E943A",
    descrus: "Пищевая добавка E943A, также известная как бутан, является газом, получаемым из природного газа. Он используется в пищевой промышленности как аэрозоль, чтобы разгонять спреи и делать более легкой выдачу масел из различных продуктов.",
    desclat: "Food additive E943A, also known as butane, is a gas obtained from natural gas. It is used in the food industry as an aerosol to propel sprays and make dispensing oils from various products easier."
  },
  {
    name: "Изобутан E943B",
    descrus: "Пищевая добавка E943B, также известная как изобутан, является газообразным углеводородом, получаемым из нефти и природного газа. Он используется в пищевой промышленности как аэрозоль, для подачи газа в кондитерских изделиях и напитках",
    desclat: "Food additive E943B, also known as isobutane, is a gaseous hydrocarbon obtained from crude oil and natural gas. It is used in the food industry as an aerosol to deliver gas in confectionery and beverages."
  },
  {
    name: "Пропан E944",
    descrus: "Пищевая добавка E944, также известная как пропан, является газом, получаемым из нефти и природного газа. Он используется в пищевой промышленности как аэрозоль, для быстрой доставки жиров и других ингредиентов в различные продукты.",
    desclat: "Food additive E944, also known as propane, is a gas obtained from crude oil and natural gas. It is used in the food industry as an aerosol for quick delivery of fats and other ingredients into various products."
  },
  {
    name: "Водород E949",
    descrus: "Пищевая добавка E949, также известная как водород, является газом, получаемым из нефти и природного газа. Он используется в пищевой промышленности для создания газообразной атмосферы внутри упаковки, что уменьшает окисление продуктов и сохраняет свежесть.",
    desclat: "Food additive E949, also known as hydrogen, is a gas obtained from crude oil and natural gas. It is used in the food industry to create a gaseous atmosphere inside packaging, which reduces product oxidation and preserves freshness."
  },
  {
    name: "Аспартам E951",
    descrus: "Пищевая добавка E951, также известная как аспартам, является искусственным сладким веществом, получаемым при полимеризации аспарагиновой кислоты и фениланина. Используется в пищевой промышленности как заменитель сахара, с низкой калорийностью.",
    desclat: "Food additive E951, also known as aspartame, is an artificial sweetener obtained by polymerizing aspartic acid and phenylalanine. It is used in the food industry as a sugar substitute, with low calorie count."
  },
  {
    name: "Изомальтит E953",
    descrus: "Пищевая добавка E953, также известная как изомальтит, используется как заменитель сахара в пищевой промышленности. Он производится в результатах ферментации кукурузного крахмала и является вкусным и бесцветным соединением.",
    desclat: "Food additive E953, also known as isomalt, is used as a sugar substitute in the food industry. It is produced from the fermentation of cornstarch and is a tasty and colorless compound."
  },
  {
    name: "Сахарин E954",
    descrus: "Пищевая добавка E954, также известная как сахарин, является одним из старейших искусственных подсластителей, широко используемых в пищевой промышленности. Он производится из толуолсульфонилхлорида и используется в производстве сладких напитков и выпечки.",
    desclat: "Food additive E954, also known as saccharin, is one of the oldest artificial sweeteners widely used in the food industry. It is produced from toluenesulfonamide chloride and is used in the production of sweetened drinks and baked goods."
  },
  {
    name: "Мальтит E965",
    descrus: "Пищевая добавка E965, также известная как мальтит, является заменителем сахара, производимым преимущественно из крахмал-содержащего материала (кукуруза, рис, ячмень). Он широко применяется в кондитерских изделиях, безалкогольных напитках и жевательной резинке.",
    desclat: "Food additive E965, also known as maltitol, is a sugar substitute mainly produced from starch-containing material (corn, rice, barley). It is widely used in confectionery products, soft drinks and chewing gum."
  },
  {
    name: "Лактит E966",
    descrus: "Пищевая добавка E966, также известная как лактит, является натуральным заменителем сахара, производимым из молочного сахара. Он используется в производстве конфет, мороженого и других сладостей, а также в качестве субстанции для изменения консистенции и вязкости продуктов.",
    desclat: "Food additive E966, also known as lactitol, is a natural sugar substitute produced from lactose. It is used in the production of sweets, ice cream and other confectionery products, as well as a substance for changing the consistency and viscosity of products."
  },
  {
    name: "Тауматин E967",
    descrus: "Пищевая добавка E967, известная как тауматин, является натуральным подсластителем, получаемым из плодов некоторых видов африканских растений. Вкусовые качества тауматина много раз превосходили сахар, а его использование не вызывает повышения уровня глюкозы в крови.",
    desclat: "Food additive E967, also known as thaumatin, is a natural sweetener obtained from the fruits of certain species of African plants. The taste qualities of thaumatin have many times surpassed sugar, and its use does not cause an increase in blood glucose levels."
  },
  {
    name: "Экстракт Квиллайи E999",
    descrus: "Пищевая добавка E999, также известная как экстракт квиллайи, получается из квиллайя, американского растения, которое растет в областях, находящихся на границе между США и Мексикой. Экстракт квиллайи используется как подсластитель в пищевой промышленности.",
    desclat: "Food additive E999, also known as quillaia extract, is obtained from quillaia, an American plant that grows in areas on the border between the US and Mexico. Quillaia extract is used as a sweetener in the food industry."
  },
  {
    name: "Уксусная кислота",
    descrus: "Пищевая добавка уксусная кислота является органическим соединением, получаемым синтетическим путем. Она используется как консервант и регулятор кислотности в пищевой промышленности, а также в качестве ингредиента для производства уксуса.",
    desclat: "Food additive acetic acid is an organic compound obtained synthetically. It is used as a preservative and acidity regulator in the food industry, as well as an ingredient in vinegar production."
  },
  {
    name: "Ацетон",
    descrus: "Пищевая добавка ацетон, получаемая синтетическим путем, используется в пищевой промышленности как растворитель для экстракции вкусовых и ароматических веществ. Она также используется в качестве ингредиента для производства некоторых видов эссенций.",
    desclat: "Food additive acetone, obtained synthetically, is used in the food industry as a solvent for the extraction of flavor and aromatic substances. It is also used as an ingredient in the production of some types of essences."
  },
  {
    name: "Аденозин 5' -монофосфат",
    descrus: "Пищевая добавка Аденозин 5' -монофосфат используется как усилитель вкуса и аромата. Получается путем биохимических процессов.",
    desclat: "Food additive Adenosine 5'-monophosphate is used as a flavor and aroma enhancer. It is obtained through biochemical processes."
  },
  {
    name: "Агар",
    descrus: "Пищевая добавка Агар используется как стабилизатор и загуститель. Получается из морских водорослей в результате экстракции.",
    desclat: "Food additive Agar is used as a stabilizer and thickener. It is obtained from marine algae through extraction."
  },
  {
    name: "Альбумин",
    descrus: "Пищевая добавка Альбумин используется как стабилизатор, загуститель и эмульгатор. Получается из яиц в результате очистки.",
    desclat: "Food additive Albumin is used as a stabilizer, thickener and emulsifier. It is obtained from eggs through purification."
  },
  {
    name: "Алкоголь как растворитель для придания аромата",
    descrus: "Пищевая добавка Алкоголь используется в качестве растворителя для придания аромата и вкуса продуктам. Получается путем спиртового брожения с последующей очисткой и разбавлением.",
    desclat: "Food additive Alcohol is used as a solvent to give products flavor and aroma. It is obtained through alcoholic fermentation, followed by purification and dilution."
  },
  {
    name: "Алкоголь в сухой форме в качестве ингредиента",
    descrus: "Пищевая добавка Алкоголь в сухой форме используется как ингредиент для придания продуктам определенного вкуса и аромата. Получается путем распыления жидкого алкоголя и последующей сушки.",
    desclat: "Food additive Alcohol in dry form is used as an ingredient to give products a specific taste and aroma. It is obtained by spraying liquid alcohol and then drying it."
  },
  {
    name: "Альгин",
    descrus: "Пищевая добавка Альгин используется как загуститель, стабилизатор и эмульгатор. Получается из бурых водорослей в результате экстракции и очистки.",
    desclat: "Food additive Alginate is used as a thickener, stabilizer and emulsifier. It is obtained from brown algae through extraction and purification."
  },
  {
    name: "Душистый перец",
    descrus: "Пищевая добавка Душистый перец используется как приправа для придания продуктам остроты и аромата. Получается путем молотья сушеных плодов душистого перца.",
    desclat: "Food additive Black pepper is used as a seasoning to give products spiciness and aroma. It is obtained by grinding dried fruits of black pepper."
  },
  {
    name: "Квасцы",
    descrus: "Пищевая добавка Квасцы используется как средство для брожения и закваски теста. Получается путем выращивания определенных микроорганизмов.",
    desclat: "Food additive Yeast is used as a means of fermenting and leavening dough. It is obtained by growing certain microorganisms."
  },
  {
    name: "Сульфат алюминия",
    descrus: "Пищевая добавка Сульфат алюминия используется в качестве сухопроводящего, стабилизатора и сверловочного агента. Она получается путем обработки алюминия серной кислотой.",
    desclat: "Food additive Aluminum sulfate is used as a flocculating, stabilizing, and drilling agent. It is obtained by treating aluminum with sulfuric acid."
  },
  {
    name: "Аммоний (бикарбонат, карбонат, хлорид, сульфат)",
    descrus: "Пищевые добавки на основе аммония - бикарбонат, карбонат, хлорид, сульфат - используются как регуляторы кислотности, консерванты, вспомогательные вещества. Они получаются путем смешения аммиака и кислоты (соответственно для разных добавок).",
    desclat: "Ammonium-based food additives - bicarbonate, carbonate, chloride, sulfate - are used as acidity regulators, preservatives, and auxiliary substances. They are obtained by mixing ammonia and acid (for different additives accordingly)."
  },
  {
    name: "Альфа-амилаза",
    descrus: "Пищевая добавка Альфа-амилаза используется как фермент для расщепления крахмала на мальтозу и глюкозу. Получается путем производства микроорганизмами.",
    desclat: "Food additive Alpha-amylase is used as an enzyme to break down starch into maltose and glucose. It is produced by microorganisms."
  },
  {
    name: "Анис",
    descrus: "Пищевая добавка Анис используется как ароматизатор и приправа для продуктов. Получается из плодов одноименного растения.",
    desclat: "Food additive Anise is used as a flavoring and seasoning for products. It is obtained from the fruits of the plant of the same name."
  },
  {
    name: "Аннатто",
    descrus: "Пищевая добавка Аннатто используется как натуральный краситель в пищевых продуктах. Получается путем выделения красительного вещества из семян растения годжи.",
    desclat: "Food additive Annatto is used as a natural coloring in food products. It is obtained by extracting the coloring substance from the seeds of the goji plant."
  },
  {
    name: "Арроурут",
    descrus: "Пищевая добавка Арроурут используется как загуститель и стабилизатор в пищевых продуктах. Получается путем измельчения корней растения Маранта.",
    desclat: "Food additive Arrowroot is used as a thickener and stabilizer in food products. It is obtained by grinding the roots of the Maranta plant."
  },
  {
    name: "Искусственные красители",
    descrus: "Пищевые добавки Искусственные красители используются для придания цвета различным продуктам. Они получаются на основе неорганических и органических веществ, которые обрабатываются различными химическими реагентами.",
    desclat: "Artificial coloring food additives are used to give color to various products. They are based on inorganic and organic substances that are treated with various chemical reagents."
  },
  {
    name: "Искусственные ароматизаторы",
    descrus: "Пищевые добавки Искусственные ароматизаторы используются для придания продуктам определенного запаха и вкуса. Они получаются путем синтеза химических веществ, которые воспроизводят определенные ароматы и вкусы.",
    desclat: "Artificial flavoring food additives are used to give products a certain aroma and taste. They are obtained by synthesizing chemical substances that reproduce certain scents and flavors."
  },
  {
    name: "Аскорбиновая кислота",
    descrus: "Пищевая добавка Аскорбиновая кислота, или витамин С, используется в качестве антиоксиданта и консерванта. Получается путем синтеза из глюкозы.",
    desclat: "Food additive Ascorbic acid or Vitamin C, is used as an antioxidant and preservative. It is obtained by synthesizing from glucose."
  },
  {
    name: "Аспартам",
    descrus: "Пищевая добавка Аспартам используется как подсластитель в пищевых продуктах. Получается путем синтеза из аминокислот фенилаланина и аспарагиновой кислоты.",
    desclat: "Food additive Aspartame is used as a sweetener in food products. It is obtained by synthesizing from the amino acids phenylalanine and aspartic acid."
  },
  {
    name: "Азодикарбонамид",
    descrus: "Пищевая добавка Азодикарбонамид используется как улучшитель хлебопекарных и кондитерских изделий. Получается путем синтеза из гидразина и мочевины.",
    desclat: "Food additive Azodicarbonamide is used as an improver of bakery and confectionery products. It is obtained by synthesizing from hydrazine and urea."
  },
  {
    name: "Бекон",
    descrus: "Бекон является продуктом, который получается из свиной спины, и используется в качестве ароматизатора в пищевых продуктах.",
    desclat: "Bacon is a product obtained from the back of a pig and is used as a flavoring agent in food products."
  },
  {
    name: "Кусочки бекона",
    descrus: "Кусочки бекона (бекон-битс) являются пищевой добавкой, которая производится из обработанного бекона путем измельчения.",
    desclat: "Bacon bits are a food additive that are produced from processed bacon by chopping it up."
  },
  {
    name: "Пекарские дрожжи",
    descrus: "Пекарские дрожжи являются пищевой добавкой, используемой как поднимающее вещество в выпечке. Они получаются путем культивирования грибов Saccharomyces cerevisiae.",
    desclat: "Baker's yeast is a food additive used as a leavening agent in baked goods. They are obtained by culturing the fungi Saccharomyces cerevisiae."
  },
  {
    name: "Экстракт пекарских дрожжей",
    descrus: "Экстракт пекарских дрожжей - это пищевая добавка, которая получается из пекарских дрожжей путем экстрагирования. Обычно используется в качестве поднимающего вещества в пищевых продуктах.",
    desclat: "Baker's yeast extract is a food additive that is obtained from baker's yeast by extraction. It is typically used as a leavening agent in food products."
  },
  {
    name: "Разрыхлитель теста",
    descrus: "Разрыхлитель теста - это пищевая добавка, используемая для улучшения текстуры выпечки. Она получается путем культивирования грибов Saccharomyces cerevisiae и добавления полученного продукта в тесто.",
    desclat: "Dough conditioner is a food additive used to improve the texture of baked goods. It is obtained by culturing the fungi Saccharomyces cerevisiae and adding the resulting product to the dough."
  },
  {
    name: "Пищевая сода",
    descrus: "Пищевая сода - это пищевая добавка, которая используется в качестве поднимающего вещества в выпечке. Она получается путем химической реакции между натрием и кислородом.",
    desclat: "Baking soda is a food additive that is used as a leavening agent in baked goods. It is obtained through a chemical reaction between sodium and oxygen."
  },
  {
    name: "Бальзамический уксус",
    descrus: "Бальзамический уксус - это пищевая добавка, которая получается путем ферментации виноградного сока или тростникового сахара. Он используется в качестве приправы для салатов и других блюд.",
    desclat: "Balsamic vinegar is a food additive that is obtained through the fermentation of grape juice or cane sugar. It is used as a seasoning for salads and other dishes."
  },
  {
    name: "Базилик",
    descrus: "Базилик - это пищевая добавка, которая производится из сушеных листьев базилика. Он используется в качестве приправы для блюд, таких как паста и пицца.",
    desclat: "Basil is a food additive that is produced from dried basil leaves. It is used as a seasoning for dishes such as pasta and pizza."
  },
  {
    name: "Лавровый лист",
    descrus: "Лавровый лист - природный пряный продукт, используется в кулинарии для ароматизации и придания вкуса блюдам",
    desclat: "Bay leaves - natural spice product, used in cuisine for flavoring and giving taste to dishes. Obtained from the leaves of the bay laurel tree."
  },
  {
    name: "Пиво",
    descrus: "Пиво - алкогольный напиток, изготавливаемый путем брожения солодового экстракта, является основным напитком в различных культурах",
    desclat: "Beer - an alcoholic beverage, made by fermenting malt extract, is a primary drink in various cultures."
  },
  {
    name: "Ароматизатор пива",
    descrus: "Ароматизатор пива - пищевая добавка, используется для улучшения вкусовых свойств пива",
    desclat: "Beer flavor enhancer - a food additive, used to improve the flavor properties of beer."
  },
  {
    name: "Пчелиный воск",
    descrus: "Пчелиный воск - естественный продукт, получаемый из пчелиных сот",
    desclat: "Beeswax - a natural product, obtained from beeswax."
  },
  {
    name: "Бензальдегид",
    descrus: "Бензальдегид - пищевая добавка, используется как ароматизатор и консервант в пищевой промышленности. Образуется при окислении толуола или при перегонке мигдалевого масла.",
    desclat: "Benzaldehyde - a food additive, used as a flavoring and preservative in the food industry. Formed by the oxidation of toluene or by the distillation of almond oil."
  },
  {
    name: "Бензойная кислота",
    descrus: "Бензойная кислота - пищевая добавка, получаемая из бензойной альдегида. Используется в качестве консерванта в пищевой промышленности.",
    desclat: "Benzoic acid - a food additive, obtained from benzaldehyde. Used as a preservative in the food industry."
  },
  {
    name: "Бета-каротин",
    descrus: "Бета-каротин - пищевая добавка, получаемая из растительных продуктов. Используется как краситель, антиоксидант и источник витамина А в пищевой промышленности. ",
    desclat: "Beta-carotene - a food additive, obtained from plant products. Used as a colorant, antioxidant, and source of vitamin A in the food industry."
  },
  {
    name: "Бутилоксианизол или бутилгидрокситолуол",
    descrus: "Бутилоксианизол и бутилгидрокситолуол - пищевые добавки, используется как антиоксиданты и консерванты в пищевой промышленности. Получаются синтетическим путем.",
    desclat: "Butylated hydroxyanisole and butylated hydroxytoluene - food additives, used as antioxidants and preservatives in the food industry. Obtained synthetically."
  },
  {
    name: "Отруби",
    descrus: "Отруби - пищевая добавка, получаемая из зерна (обычно пшеницы) при очистке от оболочек. Используется как добавка для улучшения пищевой ценности продуктов и нормализации пищеварения.",
    desclat: "Bran - a food additive, obtained from grains (usually wheat) during the cleaning process of the husks. Used as an additive to improve the nutritional value of products and normalize digestion."
  },
  {
    name: "Экстракт пивных дрожжей",
    descrus: "Экстракт пивных дрожжей - пищевая добавка, извлекаемая из дрожжевых организмов, применяется как источник витаминов группы В и аминокислот. Широко используется в производстве выпечки и некоторых напитков. ",
    desclat: "Brewer's yeast extract - a food additive extracted from yeast organisms, used as a source of B vitamins and amino acids. Widely used in baking and some beverages production."
  },
  {
    name: "Пивные дрожжи",
    descrus: "Пивные дрожжи - пищевая добавка, применяются в качестве закваски для производства пива и других напитков, а также в производстве хлеба, выпечки и дрожжевых продуктов. Получаются с помощью ферментации сахаров.",
    desclat: "Brewer's yeast - a food additive used as a starter culture for beer and other beverages production, as well as in baking and yeast products production. Obtained through fermentation of sugars."
  },
  {
    name: "Булгур",
    descrus: "Булгур - пищевая добавка, представляет собой паровую просушенную, очищенную, слегка предварительно обработанную пшеницу. Широко используется в качестве ингредиента в блюдах азиатской и средиземноморской кухни.",
    desclat: "Bulgur - a food additive, is a steamed, dried, cleaned, slightly pre-processed wheat. Widely used as an ingredient in Asian and Mediterranean cuisine dishes."
  },
  {
    name: "Липолизированный молочный жир",
    descrus: "Липолизированный молочный жир - пищевая добавка, получаемая путем гидролиза молочных жиров. Липолиз - это процесс расщепления жиров на меньшие фрагменты жировых кислот, который происходит при воздействии ферментов. Применяется в пищевой промышленности для придания вкуса и запаха продуктам и некоторых диетических добавках.",
    desclat: "Hydrolyzed milk fat - a food additive obtained by hydrolyzing milk fats. Lipolysis is the process of breaking down fats into smaller fragments of fatty acids that occurs when enzymes act on them. It is used in the food industry to add flavor and aroma to some products and certain dietary supplements."
  },
  {
    name: "Сухие кисломолочные продукты",
    descrus: "Сухие кисломолочные продукты - пищевая добавка, получаемая путем сушки кисломолочных продуктов, таких как йогурт или кефир. Применяется для улучшения пищевой ценности продуктов, а также для улучшения вкуса и текстуры многих продуктов.",
    desclat: "Dried dairy products - a food additive obtained by drying dairy products such as yogurt or kefir. It is used to improve the nutritional value of products, as well as to enhance the taste and texture of many products."
  },
  {
    name: "Кофеин",
    descrus: "Кофеин - пищевая добавка, обладающая возбуждающим действием на центральную нервную систему. Получается из зерен кофе, листьев чая, гуараны и других источников. Широко используется в напитках и некоторых диетических добавках для улучшения внимательности и настроения.",
    desclat: "Caffeine - a food additive that has an stimulating effect on the central nervous system. It is obtained from coffee beans, tea leaves, guarana and other sources. It is widely used in beverages and some dietary supplements to improve alertness and mood."
  },
  {
    name: "Кальций (Карбонат, хлорид, цитрат, сорбат, сульфат)",
    descrus: "Кальций - пищевая добавка, являющаяся источником кальция для организма. Кальций является одним из основных элементов, необходимых для здоровья костей и зубов. Карбонат, хлорид, цитрат, сорбат и сульфат - это формы кальция, используемые в качестве добавок в различных продуктах. Карбонат получается из известняка или мрамора, хлорид получают из природной соли, цитрат - из кальциевых соединений, сорбат - путем химического синтеза, а сульфат - из гипса.",
    desclat: "Calcium (Carbonate, Chloride, Citrate, Sorbate, Sulfate) - a food additive that is a source of calcium for the body. Calcium is one of the essential elements necessary for healthy bones and teeth. Carbonate is obtained from limestone or marble, chloride is obtained from natural salt, citrate is obtained from calcium compounds, sorbate is obtained through chemical synthesis, and sulfate is obtained from gypsum, all used as additives in various products."
  },
  {
    name: "Пропионат кальция",
    descrus: "Пропионат кальция - пищевая добавка, являющаяся консервантом, который используется для сохранения свежести продуктов за счет уничтожения бактерий и грибков. Пропионат кальция получают путем окисления пропионовой кислоты, а затем ее нейтрализации гидроксидом кальция.",
    desclat: "Calcium Propionate - a food additive that is a preservative used to maintain the freshness of products by destroying bacteria and fungi. Calcium propionate is obtained by oxidizing propionic acid and then neutralizing it with calcium hydroxide."
  },
  {
    name: "Стеарат кальция",
    descrus: "Стеарат кальция - пищевая добавка, используемая как антиклейкер и эмульгатор. Стеарат кальция получают путем обработки стеариновой кислоты гидроксидом кальция. Он улучшает текучесть и способствует лучшему перемешиванию ингредиентов при производстве различных продуктов.",
    desclat: "Calcium Stearate - a food additive used as an anti-caking agent and emulsifier. Calcium stearate is obtained by treating stearic acid with calcium hydroxide. It improves flowability and promotes better mixing of ingredients in the production of various products."
  },
  {
    name: "Стеароил-лактилат кальция",
    descrus: "Стеароил-лактилат кальция - пищевая добавка, эмульгатор, используемый для улучшения структуры продуктов и увеличения их срока хранения. Стеароил-лактилат кальция получают путем обработки молочной сыворотки и стеариновой кислоты.",
    desclat: "Calcium stearoyl lactylate - a food additive, emulsifier used to improve the structure of products and increase their shelf life. Calcium stearoyl lactylate is obtained by processing whey and stearic acid."
  },
  {
    name: "Масло канолы",
    descrus: "Масло канолы - пищевая добавка, являющаяся источником мононенасыщенных жирных кислот. Масло канолы получают из семян растения рапса. Оно широко используется в пищевой промышленности, в том числе при производстве выпечки и жареной пищи, благодаря своим вкусовым качествам и высокой температуре дымления.",
    desclat: "Canola oil - a food additive that is a source of monounsaturated fatty acids. Canola oil is obtained from the seeds of the rapeseed plant. It is widely used in the food industry, including in the production of baked goods and fried foods, due to its taste qualities and high smoke point."
  },
  {
    name: "Карамель",
    descrus: "Карамель - пищевая добавка, используемая для придания сладкого вкуса и коричневого цвета продуктам. Карамель производят путем нагрева сахара в присутствии воды и различных кислот. Карамель добавляют в многие продукты, включая конфеты, напитки, супы и соусы.",
    desclat: "Caramel - a food additive used to add sweetness and brown color to products. Caramel is produced by heating sugar in the presence of water and various acids. Caramel is added to many products, including candies, beverages, soups, and sauces."
  },
  {
    name: "Тмин",
    descrus: "Тмин - пищевая добавка, используемая для усиления вкуса и аромата продуктов. Тмин получают из семян растения кумин. Он широко используется в пищевой промышленности, в том числе при производстве хлеба, сыров, колбас и соусов.",
    desclat: "Cumin - a food additive used to enhance the taste and aroma of products. Cumin is obtained from the seeds of the cumin plant. It is widely used in the food industry, including in the production of bread, cheese, sausages, and sauces."
  },
  {
    name: "Карбоксиметилцеллюлоза",
    descrus: "Карбоксиметилцеллюлоза - пищевая добавка, являющаяся стабилизатором и загустителем. Получают путем частичной замены гидроксильных групп в целлюлозе карбоксиметильными группами. Широко применяется в пищевой промышленности, в том числе при производстве сухарей, кондитерских изделий, соусов и диетических продуктов.",
    desclat: "Carboxymethyl cellulose - a food additive that is a stabilizer and thickener. It is obtained by partially replacing the hydroxyl groups in cellulose with carboxymethyl groups. It is widely used in the food industry, including in the production of crackers, confectionery products, sauces, and dietary products."
  },
  {
    name: "Кардамон",
    descrus: "Кардамон - пищевая добавка, используемая для усиления аромата и вкуса продуктов. Кардамон получают из сушеных плодов растения элетарии крупнозернистой. Он часто используется в кулинарии для приготовления десертов, напитков, консервов и мясных блюд.",
    desclat: "Cardamom - a food additive used to enhance the aroma and taste of products. Cardamom is obtained from the dried fruits of the Elettaria cardamomum plant. It is often used in cooking to prepare desserts, drinks, preserves, and meat dishes."
  },
  {
    name: "Воск карнаубский",
    descrus: "Воск карнаубский - пищевая добавка, используемая в качестве глазирующего и консервирующего средства. Воск карнаубы получают из листьев пальмы карнауба. Широко применяется в пищевой промышленности, в том числе при производстве конфет, жвачек, сыров, фруктов и овощей.",
    desclat: "Carnauba wax - a food additive used as a glazing and preservative agent. Carnauba wax is obtained from the leaves of the carnauba palm. It is widely used in the food industry, including in the production of candies, chewing gums, cheeses, fruits, and vegetables."
  },
  {
    name: "Рожковое дерево",
    descrus: "Рожковое дерево - пищевая добавка, получаемая из семян плодов дерева чечевицы, применяющаяся как загуститель и стабилизатор. Рожковый стручок содержит зерна, которые после сборки обжаривают и дробят. После чего массу пропускают через специальный фильтр, получая порошок. Широко используется в пищевой индустрии в качестве загустителя в молочных продуктах, мармеладах, кондитерских изделиях, соусах и десертах.",
    desclat: "Carob tree - a food additive obtained from the seeds of the carob tree fruit, used as a thickener and stabilizer. The carob pod contains seeds, which are roasted and crushed after harvesting. The resulting mixture is passed through a special filter to obtain a powder. It is widely used in the food industry as a thickener in dairy products, jams, confectionery products, sauces, and desserts."
  }
]
