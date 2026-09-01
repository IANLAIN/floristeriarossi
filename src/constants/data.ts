import type { Category, ContactInfo, ContactProfile, Product } from '../types/catalog'

export const CONTACT: ContactInfo = {
  whatsapp: "573205851765",
  whatsappDisplay: "+57 320 5851765",
  instagram: "https://www.instagram.com/floristeriarossi/",
  instagramHandle: "@floristeriarossi",
  address: "Carrera 3 #10-57 Local 2 Cartago, Valle",
  hours: [
    "Lunes a Sábado: 8:00 AM a 12:00 M y 2:00 PM a 6:00 PM",
    "Domingos: 8:30 AM a 12:00 M"
  ],
}

export const CONTACT_PROFILES: ContactProfile[] = [
  {
    name: 'César Cardona Giraldo',
    role: 'Florista',
    photo: '/assets/images/cesar.jpg',
    whatsapp: '573205851765',
    whatsappDisplay: '3205851765',
    instagram: 'https://www.instagram.com/ccgcesarprado/',
    instagramHandle: 'ccgcesarprado',
  },
  {
    name: 'Lucely Cardona Giraldo',
    photo: '/assets/images/lucely.jpg',
    whatsapp: '573136591946',
    whatsappDisplay: '3136591946',
    instagram: 'https://www.instagram.com/cardona_lucely/',
    instagramHandle: 'cardona_lucely',
  },
]

export const CATEGORIES: Category[] = [
  {"id":"bouquets","label":"Bouquets"},
  {"id":"engalanados","label":"Engalanados"},
  {"id":"fruteros","label":"Fruteros"},
  {"id":"funebres","label":"Fúnebres"},
  {"id":"funebres-en-piana","label":"Funebres en Piaña"},
  {"id":"toda-ocasion","label":"Toda Ocasión"}
]

export const PRODUCTS: Product[] = [
  {
    "id": "bouquets-01",
    "name": "Bouquet 01",
    "image": "/assets/images/bouquets/img_20250801_075533_255.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-02",
    "name": "Bouquet 02",
    "image": "/assets/images/bouquets/img_20250924_151348_368.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-03",
    "name": "Bouquet 03",
    "image": "/assets/images/bouquets/img_20251020_100046_152.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-04",
    "name": "Bouquet 04",
    "image": "/assets/images/bouquets/img_20251217_143545_740.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-05",
    "name": "Bouquet 05",
    "image": "/assets/images/bouquets/img_20251219_152219_873_1_.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-06",
    "name": "Bouquet 06",
    "image": "/assets/images/bouquets/img_20251220_100750_974.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-07",
    "name": "Bouquet 07",
    "image": "/assets/images/bouquets/img_20260308_130143_155.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-08",
    "name": "Bouquet 08",
    "image": "/assets/images/bouquets/img_20260308_130202_606.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-09",
    "name": "Bouquet 09",
    "image": "/assets/images/bouquets/img_20260501_113553_974.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-10",
    "name": "Bouquet 10",
    "image": "/assets/images/bouquets/img_20260814_114332_334_1_.jpg",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-11",
    "name": "Bouquet 11",
    "image": "/assets/images/bouquets/img-20250527-wa0066.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-12",
    "name": "Bouquet 12",
    "image": "/assets/images/bouquets/photoroom-20240414_100230.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-13",
    "name": "Bouquet 13",
    "image": "/assets/images/bouquets/photoroom-20240508_162122.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-14",
    "name": "Bouquet 14",
    "image": "/assets/images/bouquets/photoroom-20240624_121909.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-15",
    "name": "Bouquet 15",
    "image": "/assets/images/bouquets/photoroom-20240917_084011.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-16",
    "name": "Bouquet 16",
    "image": "/assets/images/bouquets/photoroom-20241001_110350.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-17",
    "name": "Bouquet 17",
    "image": "/assets/images/bouquets/photoroom-20241106_151157.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-18",
    "name": "Bouquet 18",
    "image": "/assets/images/bouquets/photoroom-20241125_160226.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-19",
    "name": "Bouquet 19",
    "image": "/assets/images/bouquets/photoroom-20241128_153827.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-20",
    "name": "Bouquet 20",
    "image": "/assets/images/bouquets/screenshot_20251223-163244.png",
    "categoryId": "bouquets"
  },
  {
    "id": "bouquets-21",
    "name": "Bouquet 21",
    "image": "/assets/images/bouquets/screenshot_20251223-163345.png",
    "categoryId": "bouquets"
  },
  {
    "id": "engalanados-01",
    "name": "Engalanado 01",
    "image": "/assets/images/engalanados/EN1.png",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-02",
    "name": "Engalanado 02",
    "image": "/assets/images/engalanados/EN2.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-03",
    "name": "Engalanado 03",
    "image": "/assets/images/engalanados/EN3.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-04",
    "name": "Engalanado 04",
    "image": "/assets/images/engalanados/EN4.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-05",
    "name": "Engalanado 05",
    "image": "/assets/images/engalanados/EN5.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-06",
    "name": "Engalanado 06",
    "image": "/assets/images/engalanados/EN6.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-07",
    "name": "Engalanado 07",
    "image": "/assets/images/engalanados/EN7.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-08",
    "name": "Engalanado 08",
    "image": "/assets/images/engalanados/EN8.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-09",
    "name": "Engalanado 09",
    "image": "/assets/images/engalanados/EN9.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-10",
    "name": "Engalanado 10",
    "image": "/assets/images/engalanados/EN10.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-11",
    "name": "Engalanado 11",
    "image": "/assets/images/engalanados/EN11.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-12",
    "name": "Engalanado 12",
    "image": "/assets/images/engalanados/EN12.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-13",
    "name": "Engalanado 13",
    "image": "/assets/images/engalanados/EN13.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-14",
    "name": "Engalanado 14",
    "image": "/assets/images/engalanados/EN14.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "engalanados-15",
    "name": "Engalanado 15",
    "image": "/assets/images/engalanados/EN15.jpg",
    "categoryId": "engalanados"
  },
  {
    "id": "fruteros-01",
    "name": "Frutero 01",
    "image": "/assets/images/fruteros/img_20250618_170053_838.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-02",
    "name": "Frutero 02",
    "image": "/assets/images/fruteros/img_20251028_112742_993.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-03",
    "name": "Frutero 03",
    "image": "/assets/images/fruteros/img_20260107_084026_690.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-04",
    "name": "Frutero 04",
    "image": "/assets/images/fruteros/img_20260215_133803_719.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-05",
    "name": "Frutero 05",
    "image": "/assets/images/fruteros/img_20260406_125121_767.jpg.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-06",
    "name": "Frutero 06",
    "image": "/assets/images/fruteros/img-20250828-wa0039.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-07",
    "name": "Frutero 07",
    "image": "/assets/images/fruteros/photoroom-20240203_140805.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-08",
    "name": "Frutero 08",
    "image": "/assets/images/fruteros/photoroom-20240203_141024.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-09",
    "name": "Frutero 09",
    "image": "/assets/images/fruteros/photoroom-20240329_121405.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-10",
    "name": "Frutero 10",
    "image": "/assets/images/fruteros/photoroom-20240329_192544.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-11",
    "name": "Frutero 11",
    "image": "/assets/images/fruteros/photoroom-20240329_192551.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-12",
    "name": "Frutero 12",
    "image": "/assets/images/fruteros/photoroom-20240331_084954.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-13",
    "name": "Frutero 13",
    "image": "/assets/images/fruteros/photoroom-20240418_170529.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-14",
    "name": "Frutero 14",
    "image": "/assets/images/fruteros/photoroom-20240421_191307.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-15",
    "name": "Frutero 15",
    "image": "/assets/images/fruteros/photoroom-20240730_205840.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-16",
    "name": "Frutero 16",
    "image": "/assets/images/fruteros/photoroom-20241007_202233.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-17",
    "name": "Frutero 17",
    "image": "/assets/images/fruteros/photoroom-20241220_164639.png",
    "categoryId": "fruteros"
  },
  {
    "id": "fruteros-18",
    "name": "Frutero 18",
    "image": "/assets/images/fruteros/screenshot_20251008-180119.png",
    "categoryId": "fruteros"
  },
  {
    "id": "funebres-01",
    "name": "Arreglo Fúnebre 01",
    "image": "/assets/images/funebres/img_20250421_101232_120.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-02",
    "name": "Arreglo Fúnebre 02",
    "image": "/assets/images/funebres/img_20250628_131407_513.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-03",
    "name": "Arreglo Fúnebre 03",
    "image": "/assets/images/funebres/img_20250929_123337_646.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-04",
    "name": "Arreglo Fúnebre 04",
    "image": "/assets/images/funebres/img_20251113_170725_181.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-05",
    "name": "Arreglo Fúnebre 05",
    "image": "/assets/images/funebres/img_20251128_153452_720_1_1.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-06",
    "name": "Arreglo Fúnebre 06",
    "image": "/assets/images/funebres/img_20260114_095539_500_1_.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-07",
    "name": "Arreglo Fúnebre 07",
    "image": "/assets/images/funebres/img_20260124_190545_451.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-08",
    "name": "Arreglo Fúnebre 08",
    "image": "/assets/images/funebres/img-20260806-wa0040.jpg",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-09",
    "name": "Arreglo Fúnebre 09",
    "image": "/assets/images/funebres/photoroom-20240225_171516.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-10",
    "name": "Arreglo Fúnebre 10",
    "image": "/assets/images/funebres/photoroom-20240819_221830.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-11",
    "name": "Arreglo Fúnebre 11",
    "image": "/assets/images/funebres/screenshot_20250319-172119.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-12",
    "name": "Arreglo Fúnebre 12",
    "image": "/assets/images/funebres/screenshot_20250319-172147.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-13",
    "name": "Arreglo Fúnebre 13",
    "image": "/assets/images/funebres/screenshot_20250705-151203.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-14",
    "name": "Arreglo Fúnebre 14",
    "image": "/assets/images/funebres/screenshot_20250705-151309.png",
    "categoryId": "funebres"
  },
  {
    "id": "funebres-en-piana-01",
    "name": "Arreglo en Piña 01",
    "image": "/assets/images/funebres-en-piana/img_20250319_091904_365.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-02",
    "name": "Arreglo en Piña 02",
    "image": "/assets/images/funebres-en-piana/img_20250909_163412_129.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-03",
    "name": "Arreglo en Piña 03",
    "image": "/assets/images/funebres-en-piana/img_20260428_105610_843.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-04",
    "name": "Arreglo en Piña 04",
    "image": "/assets/images/funebres-en-piana/img-20250422-wa0031.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-05",
    "name": "Arreglo en Piña 05",
    "image": "/assets/images/funebres-en-piana/img-20260402-wa0019.jpg.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-06",
    "name": "Arreglo en Piña 06",
    "image": "/assets/images/funebres-en-piana/photoroom-20240226_112514.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-07",
    "name": "Arreglo en Piña 07",
    "image": "/assets/images/funebres-en-piana/photoroom-20240302_193128.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-08",
    "name": "Arreglo en Piña 08",
    "image": "/assets/images/funebres-en-piana/photoroom-20240329_192544.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-09",
    "name": "Arreglo en Piña 09",
    "image": "/assets/images/funebres-en-piana/photoroom-20240412_112904.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-10",
    "name": "Arreglo en Piña 10",
    "image": "/assets/images/funebres-en-piana/photoroom-20240918_083440.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-11",
    "name": "Arreglo en Piña 11",
    "image": "/assets/images/funebres-en-piana/photoroom-20250213_122953.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-12",
    "name": "Arreglo en Piña 12",
    "image": "/assets/images/funebres-en-piana/screenshot_20260119-205416.png",
    "categoryId": "funebres-en-piana"
  },
  {
    "id": "funebres-en-piana-13",
    "name": "Arreglo en Piña 13",
    "image": "/assets/images/funebres-en-piana/screenshot_20260323-203252.jpg.png",
    "categoryId": "funebres-en-piana"
  }
]
