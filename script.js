(() => {
  'use strict';

  /* ============================================================
     Artwork data: the single source of truth for the featured
     slider, the collection grid and the artwork view. Entries are
     carried over unchanged from the original script.js.
     ============================================================ */
  const artworks = [
    {
      id: 'The Sacrifice of the Soldiers',
      title: 'The Sacrifice of the Soldiers',
      artist: 'Historical sculptor',
      name: 'BAGON, MAURISE JEL AGNAS',
      location: ' Fort Santiago Dungeons, Intramuros',
      year: '2016',
      date: '2016-01-01T09:00:00.000Z',
      category: 'Art #1',
      size: 'landscape',
      description: 'The photograph shows life-sized figures of soldiers inside the Fort Santiago Dungeons, depicting wounded and exhausted men during wartime. The scene portrays the suffering and difficult conditions experienced by soldiers during World War II.',
      meaning: 'The artwork represents sacrifice, courage, suffering, and the tragic consequences of war. It reminds us of the lives lost and the hardships endured by Filipino and other soldiers during the war.',
      image: 'artworks/art1_bagon.png',
      reference: 'https://en.wikipedia.org/wiki/Fort_Santiago'
    },
    {
      id: 'Jose Rizal Monument',
      title: 'Jose Rizal Monument',
      artist: 'Guillermo E. Tolentino',
      name: 'BUENAOBRA, ASHLEY NOBELA',
      location: ' Plaza Rizal, 1 P. Burgos Street, Pasig City, Metro Manila',
      year: '1947',
      date: '1947-01-01T09:00:00.000Z',
      category: 'Art #2',
      size: 'square',
      description: 'The Jose Rizal Monument is a statue depicting Dr. Jose Rizal, the national hero of the Philippines. It is located in Plaza Rizal, Pasig City, and serves as a tribute to his contributions to Philippine history and the country.',
      meaning: 'The monument symbolizes Jose Rizal love for the country, courage, knowledge, and patriotism. It reminds Filipinos of his writings, ideas, and contributions to the fight for freedom and the development of the nation.',
      image: 'artworks/art1_buenaobra.png',
      reference: 'https://en.wikipedia.org/wiki/Jos%C3%A9_Rizal'
    },
    {
      id: 'F.B. Copper Bonsai',
      title: 'F.B. Copper Bonsai',
      artist: 'Andy Bondoc',
      name: 'BUENAOBRA, ASHLEY NOBELA',
      location: 'Clark Museum, Pampanga',
      year: '1961',
      date: '1961-01-01T09:00:00.000Z',
      category: 'Art #3',
      size: 'square',
      description: 'handcrafted artwork featuring a detailed copper-wire bonsai tree growing from a rugged, stone-like base. The twisted branches, roots, and leaves show careful craftsmanship.',
      meaning: 'The artwork represents nature, growth, strength, and balance, showing how life can flourish even in challenging environments.',
      image: 'artworks/art2_buenoabra.png',
      reference: 'https://en.wikipedia.org/wiki/Bonsai'
    },
    {
      id: 'Untitled (Pinto Art Museum Collection)',
      title: 'Untitled (Pinto Art Museum Collection)',
      artist: 'Unknown / Contemporary Filipino Artist',
      name: 'BUENO, BENJAMIN UNAHAN',
      location: 'Pinto Art Museum, 1 Sierra Madre St, Grand Heights Subdivision, Antipolo, Rizal',
      year: '1510',
      date: '1510-12-01T09:00:00.000Z',
      category: 'Art #4',
      description: 'A striking contemporary piece displayed within the sprawling, open-air art galleries of the Pinto Art Museum, blending modern artistic expression with the museum signature Mediterranean-inspired architecture and lush surrounding gardens.',
      meaning: 'Open to interpretation, contemporary works at Pinto often explore themes of Filipino identity, human connection, introspection, and the harmonious relationship between art and nature.',
      image: 'artworks/art1_bueno.jpg',
      reference: 'https://en.wikipedia.org/wiki/Pinto_Art_Museum'
    },
    {
      id: 'The Cavalier monument',
      title: 'The Cavalier monument',
      artist: 'Rafael "paeng" Pacheco',
      name: 'CASTANEDA, DEMOSTHENES ALCARAZ',
      location: 'Maybangcal, Morong, Rizal',
      year: '2021',
      date: '2021-01-01T09:00:00.000Z',
      category: 'Art #5',
      size: 'square',
      description: 'the cavalier monument in Barangay Maybancal Cavalier Landmark along C. Francisco Street in Morong, Rizal, Philippines. The monument features an armored warrior mounted on a horse while holding a spear and the Philippine flag.',
      meaning: 'The armored cavalier reflects the long tradition of Filipino warriors—from early anti-colonial resistance against Spanish rule to the revolutionary struggles of the Katipunan in Rizal province—who fought on horseback and on foot to secure local independence .The Cavalier symbolizes strength, readiness, and civic pride for the community of Barangay Maybancal. Positioned along the main road, the statue serves as a welcoming boundary marker that blends traditional Filipino symbolism with modern city infrastructure.',
      image: 'artworks/art1_castaneda.png',
      reference: 'https://en.wikipedia.org/wiki/Morong,_Rizal'
    },
    {
      id: 'Monstrance (Ostensorium)',
      title: 'Monstrance (Ostensorium)',
      artist: 'Unknown Filipino Silversmith / Unknown Artisan',
      name: 'DE RODA, KAROLEEN GRACY NUGUIT',
      location: 'exact museum or collection cannot be determined from the image alone',
      year: '2020',
      date: '2020-06-15T09:00:00.000Z',
      category: 'Art #6',
      description: 'A highly decorated silver religious vessel featuring a sunburst design, a circular center, floral ornaments, and a cross at the top. Monstrances are traditionally used to display the consecrated Eucharist during Catholic religious ceremonies.',
      meaning: ' The sunburst design symbolizes the glory and divine presence of Christ. The central circular section holds the Eucharist, making the monstrance a symbol of Catholic faith, devotion, and reverence.',
      image: 'artworks/art1_deroda.png',
      reference: 'https://en.wikipedia.org/wiki/Monstrance'
    },
    {
      id: 'Ancient Rituals and Jar Burial Practices (Mga Sinaunang Ritwal at Paglilibing sa Banga)',
      title: 'Ancient Rituals and Jar Burial Practices (Mga Sinaunang Ritwal at Paglilibing sa Banga)',
      artist: 'Unknown / Ancient Filipino potters',
      name: 'DE RODA, KAROLEEN GRACY NUGUIT',
      location: 'National Museum of Anthropology, Manila',
      year: '2023',
      date: '2023-03-20T09:00:00.000Z',
      category: 'Art #7',
      size: 'square',
      description: 'Two large ancient earthenware jars used in traditional burial practices are displayed. They show the early Filipinos skill in pottery and their cultural traditions.',
      meaning: ' The jars represent the ancient Filipino belief in honoring and remembering the dead. They also show how pottery was connected to important rituals and beliefs about life and death.',
      image: 'artworks/art2_deroda.png',
      reference: 'https://en.wikipedia.org/wiki/Manunggul_Jar'
    },
    {
      id: 'Ancient Burial Jar',
      title: 'Ancient Burial Jar',
      artist: 'Unknown / Ancient Filipino potters',
      name: 'DE RODA, KAROLEEN GRACY NUGUIT',
      location: 'National Museum of Anthropology, Manila',
      year: '2021',
      date: '2021-08-10T09:00:00.000Z',
      category: 'Art #8',
      description: 'This artwork shows several large earthenware jars used by ancient Filipinos. The jars were made from clay and were part of traditional burial practices.',
      meaning: 'The jars represent the ancient Filipinos’ beliefs about death and the afterlife. They also show the importance of respecting and honoring the dead.',
      image: 'artworks/art3_deroda.png',
      reference: 'https://en.wikipedia.org/wiki/Manunggul_Jar'
    },
    {
      id: 'Traditional Filipino Ethnographic Artifacts',
      title: 'Traditional Filipino Ethnographic Artifacts',
      artist: ' Unknown / Ancient Filipino.',
      name: 'DE RODA, KAROLEEN GRACY NUGUIT',
      location: 'National Museum of Anthropology, Manila',
      year: '1505',
      date: '1505-04-22T09:00:00.000Z',
      category: 'Art #9',
      description: 'A collection of traditional objects including decorated metal vessels, weapons, a board game, wooden carvings, musical or ceremonial objects, and other everyday artifacts. The objects show detailed craftsmanship and traditional decorative patterns.',
      meaning: 'The collection represents the culture, craftsmanship, beliefs, and everyday life of traditional communities. The objects demonstrate how artistic design was incorporated into practical, ceremonial, and recreational items, while preserving cultural traditions and heritage.',
      image: 'artworks/art4_deroda.png',
      reference: 'https://en.wikipedia.org/wiki/Ethnography'
    },
    {
      id: 'Venus',
      title: 'Venus',
      artist: 'Guillermo E. Tolentino',
      name: 'DEANON, JAY DISCAYA',
      location: 'National Museum of Fine Arts, Manila',
      year: '2026',
      date: '2026-01-01T09:00:00.000Z',
      category: 'Art #10',
      size: 'long',
      description: 'A classical marble/plaster sculpture depicting Venus, the Roman goddess of love and beauty, portrayed as a graceful nude female figure.',
      meaning: 'The sculpture represents beauty, grace, and the classical ideal of the human form. It was inspired by classical representations of Venus and reflects Tolentino’s mastery of classical sculpture.',
      image: 'artworks/art2_deanon.png',
      reference: 'https://en.wikipedia.org/wiki/Guillermo_Tolentino'
    },
    {
      id: 'The Assassination of Governor Bustamante and His Son',
      title: 'The Assassination of Governor Bustamante and His Son',
      artist: 'Felix Resurreccion Hidalgo',
      name: 'DEANON, JAY DISCAYA',
      location: 'National Museum of Fine Arts, Manila',
      year: '2019',
      date: '2019-01-01T09:00:00.000Z',
      category: 'Art #11',
      size: 'square',
      description: 'A large oil painting that shows the killing of Governor Fernando Bustamante and his son on the stairs of the palace in Intramuros in 1719. You can see Dominican priests and Spanish soldiers fighting.',
      meaning: ' It shows the conflict between the church and the government during the Spanish period. It is a symbol of corruption and abuse of power, and how even the Spaniards fought each other inside Intramuros.	',
      image: 'artworks/art1_deanon.png',
      reference: 'https://en.wikipedia.org/wiki/Fernando_Manuel_de_Bustamante'
    },
    {
      id: 'El Asesinato del Gobernador Bustamante (The Assassination of Governor Bustamante)',
      title: 'El Asesinato del Gobernador Bustamante (The Assassination of Governor Bustamante)',
      artist: ' Félix Resurrección Hidalgo',
      name: 'DEANON, JAY DISCAYA',
      location: 'National Museum of Fine Arts, Manila',
      year: '1932',
      date: '1932-01-01T09:00:00.000Z',
      category: 'Art #12',
      size: 'square',
      description: 'A large oil-on-canvas historical painting depicting the 1719 assassination of Governor-General Fernando Bustamante and his son inside the old Palacio del Gobernador in Intramuros',
      meaning: 'The artwork represents the conflict between the Church and the State during the Spanish colonial period. It portrays political and religious tensions and reflects issues of power, authority, and injustice in Philippine history.',
      image: 'artworks/art3_deanon.png',
      reference: 'https://en.wikipedia.org/wiki/F%C3%A9lix_Resurrecci%C3%B3n_Hidalgo'
    },
    {
      id: 'Little Heron',
      title: 'Little Heron',
      artist: 'Museum Exhibit / National Museum of the Philippines',
      name: 'DIAZ, JOHNROSS BERNABE',
      location: 'National Museum of Natural History, Manila',
      year: '1972',
      date: '1972-11-05T09:00:00.000Z',
      category: 'Art #13',
      size: 'square',
      description: 'A preserved display of two Little Herons, birds commonly found in coastal areas such as mangroves, tidal mudflats, beaches, and estuaries.',
      meaning: 'The artwork represents the diversity of Philippine bird species and the importance of protecting coastal habitats where these birds live.',
      image: 'artworks/art1_diaz.png',
      reference: 'https://en.wikipedia.org/wiki/Striated_heron'
    },
    {
      id: 'meditation-stone',
      title: 'Meditation Stone',
      artist: 'Renata Voss',
      name: 'DIAZ, JOHNROSS BERNABE',
      location: 'National Museum of Natural History, Manila',
      year: '1950',
      date: '1950-07-12T09:00:00.000Z',
      category: 'Art #14',
      size: 'square',
      description: 'A preserved specimen of the sculptured mitten lobster Parribacus antarcticus, a marine crustacean with a large, flattened body covered with tubercles, hairs, and spines.',
      meaning: 'The artwork represents the diversity of Philippine marine life and highlights the importance of appreciating and protecting marine ecosystems and their natural resources.',
      image: 'artworks/art2_diaz.png',
      reference: 'https://en.wikipedia.org/wiki/Parribacus_antarcticus'
    },
    {
      id: 'Lolong – The Giant Saltwater Crocodile',
      title: 'Lolong – The Giant Saltwater Crocodile',
      artist: 'National Museum of the Philippines / Museum Exhibit',
      name: 'DIAZ, JOHNROSS BERNABE',
      location: 'National Museum of Natural History, Manila',
      year: '2024',
      date: '2024-02-08T09:00:00.000Z',
      category: 'Art #15',
      size: 'landscape',
      description: 'A preserved display of Lolong, a giant saltwater crocodile (Crocodylus porosus) measuring about 6.17 meters long.',
      meaning: 'The artwork represents the richness of Philippine wildlife and the importance of protecting and preserving the country biodiversity and natural heritage.',
      image: 'artworks/art3_diaz.png',
      reference: 'https://en.wikipedia.org/wiki/Lolong'
    },
    {
      id: 'Kulaman Limestone Burial Jars (Limestone Ossuary Jars of Kulaman Plateau)',
      title: 'Kulaman Limestone Burial Jars (Limestone Ossuary Jars of Kulaman Plateau)',
      artist: 'Indigenous artisans/carvers of the early Metal Age in Southern Mindanao',
      name: 'DUQUE, SHINTARO JOSHUA AVENA',
      location: 'National Museum of Anthropology, Manila',
      year: '1501',
      date: '1501-01-01T09:00:00.000Z',
      category: 'Art #16',
      size: 'square',
      description: 'A collection of ancient anthropomorphic burial jars and lids carved out of solid blocks of limestone rather than baked clay. The set features round or quadrangular jars with stylized lids shaped like human heads, torsos, and geometric roofs.',
      meaning: 'These limestone ossuaries served as sacred secondary burial containers to hold human remains and bone fragments. The carved human features (anthropomorphic figures) signify respect for ancestors, guiding the deceased spirit, and honoring their status within the ancient community.',
      image: 'artworks/art1_duque.png',
      reference: 'https://en.wikipedia.org/wiki/Kulaman_Plateau'
    },
    {
      id: 'The Ceramic Heritage of the Philippines (Pre-colonial & Trade Pottery Exhibition)',
      title: 'The Ceramic Heritage of the Philippines (Pre-colonial & Trade Pottery Exhibition)',
      artist: 'Ancient Filipino potters and regional trade partners',
      name: 'DUQUE, SHINTARO JOSHUA AVENA',
      location: 'National Museum of Anthropology, Manila',
      year: '1955',
      date: '1955-01-01T09:00:00.000Z',
      category: 'Art #17',
      description: 'A curated showcase of historical Philippine ceramics featuring low-fired earthenwares (cookware, storage jars, bowls) alongside imported high-fired stoneware and porcelain vessels recovered from terrestrial archaeological sites and shipwrecks.',
      meaning: 'Demonstrates the rich technological craftsmanship of pre-colonial Filipinos, highlighting their daily domestic practices, ritual traditions, and extensive maritime trade networks with neighboring Asian nations prior to foreign colonization.',
      image: 'artworks/art2_duque.png',
      reference: 'https://en.wikipedia.org/wiki/Pottery'
    },
    {
      id: 'Red-Slipped Earthenware Water Jar (Imbaching or traditional Kalinga water pot)',
      title: 'Red-Slipped Earthenware Water Jar (Imbaching or traditional Kalinga water pot)',
      artist: 'Kalinga indigenous potters / artisans',
      name: 'DUQUE, SHINTARO JOSHUA AVENA',
      location: 'National Museum of Anthropology, Manila',
      year: '1966',
      date: '1966-01-01T09:00:00.000Z',
      category: 'Art #18',
      description: 'A smooth, rounded terracotta water jar featuring a distinct red-slip coating and subtle fire-markings on its surface, crafted using traditional open-firing techniques.',
      meaning: 'Represents the rich pottery heritage of the Kalinga people, where hand-molded earthen jars are used for storing cool drinking water, serving as an vital household item and a symbol of indigenous community craftsmanship.',
      image: 'artworks/art3_duque.png',
      reference: 'https://en.wikipedia.org/wiki/Kalinga_people'
    },
    {
      id: 'Saya – Traditional Women’s Wear During Colonial Times',
      title: 'Saya – Traditional Women’s Wear During Colonial Times',
      artist: 'Unknown / Traditional Filipino artisans',
      name: 'FLORES, JOHN CEDRIC TORRES',
      location: 'National Musuem of Fine Arts, Manila',
      year: '2014',
      date: '2014-01-01T09:00:00.000Z',
      category: 'Art #19',
      size: 'landscape',
      description: 'A traditional Filipino women’s dress from the colonial period. The outfit features a delicate upper garment with lace-like details and a colorful skirt, reflecting the clothing style and craftsmanship of Filipino women during the colonial era. The label identifies it as the dress of Tecla San Agustin-Tech, wife of Don Pedro R. Tech.',
      meaning: 'The saya represents the traditional clothing, culture, and social history of Filipino women during the colonial period. It also shows how Filipino clothing combined local traditions with influences from Spanish colonial society.',
      image: 'artworks/art1_flores.png',
      reference: 'https://en.wikipedia.org/wiki/Baro%27t_saya'
    },
    {
      id: 'Simpleng Buhay',
      title: 'Simpleng Buhay',
      artist: 'Burt O. Santiago',
      name: 'GUILLERMO, JANNA ROSE',
      location: 'Clark Museum, Pampanga',
      year: '1510',
      date: '1510-12-01T09:00:00.000Z',
      category: 'Art #20',
      description: ' A miniature diorama that portrays a simple everyday community setting in the Philippines. It features traditional-looking houses, a small neighborhood store, a modern coffee shop, parked vehicles, trees, and people. The artwork combines elements of rural and urban life to show how different aspects of Filipino communities can exist together.',
      meaning: 'Simpleng Buhay represents the beauty and value of ordinary Filipino life. The miniature houses, small store, streets, and community spaces symbolize the daily activities, livelihood, and environment of local communities. It reminds viewers that even simple homes and everyday experiences are an important part of Filipino culture, history, and identity',
      image: 'artworks/art1_guillermo.png',
      reference: 'https://en.wikipedia.org/wiki/Diorama'
    },
    {
      id: 'monreal stones',
      title: 'monreal stones',
      artist: 'Batong monreal',
      name: 'LITAM, QUEENIELIE MARTIN',
      location: 'Clark Museum, Pampanga',
      year: '1958',
      date: '1958-01-01T09:00:00.000Z',
      category: 'Art #21',
      size: 'square',
      description: 'The Monreal Stones are ancient inscribed limestone artifacts that provide evidence of early writing traditions in the Philippines.',
      meaning: 'It represents the intelligence, culture, and writing traditions of early Filipinos.',
      image: 'artworks/art1_litam.png',
      reference: 'https://en.wikipedia.org/wiki/Monreal,_Masbate'
    },
    {
      id: 'Traditional Kapampangan Bamboo and Woven Crafts',
      title: 'Traditional Kapampangan Bamboo and Woven Crafts',
      artist: 'Traditional Filipino artisans / Indigenous craft makers',
      name: 'LITAM, QUEENIELIE MARTIN',
      location: 'Clark Museum, Pampanga',
      year: '1493',
      date: '1493-01-01T09:00:00.000Z',
      category: 'Art #22',
      size: 'square',
      description: 'This exhibit showcases traditional Filipino bamboo, rattan, and woven crafts, including hats, baskets, instruments, and household tools. These pieces demonstrate the skill and creativity of Filipino artisans in using natural materials.',
      meaning: 'The exhibit represents Filipino heritage, craftsmanship, and everyday life, preserving traditional skills and highlighting the cultural value of handmade crafts.',
      image: 'artworks/art2_litam.png',
      reference: 'https://en.wikipedia.org/wiki/Kapampangan_people'
    },
    {
      id: 'Bagobo Swords, Bolo, and Beaded Sheaths (Traditional Weaponry and Regalia of Mindanao)',
      title: 'Bagobo Swords, Bolo, and Beaded Sheaths (Traditional Weaponry and Regalia of Mindanao)',
      artist: 'Traditional Bagobo artisans, ironsmiths, and beadcrafters (Davao, Mindanao)',
      name: 'OLINARES, JULIAN BUENAOBRA',
      location: 'National Museum of Anthropology, Manila',
      year: '2018',
      date: '2018-09-14T09:00:00.000Z',
      category: 'Art #23',
      description: 'An ethnographic display featuring traditional Bagobo blades (Kampilan / Bolo), spearheads, wooden shields (Kalasag), and intricately adorned scabbards decorated with brass, horsehair, abaca fiber, and colorful beadwork.',
      meaning: 'Symbolizes the warrior culture, social status, and spiritual protection of the Bagobo people. Beyond warfare, these ceremonial weapons and ornate sheaths signify leadership, mastery in metallurgy and textile craft, and a deep connection to ancestral identity.',
      image: 'artworks/art1_olinares.png',
      reference: 'https://en.wikipedia.org/wiki/Bagobo'
    },
    {
      id: 'Tabon Cave Secondary Burial Jar (Earthenware Burial Jar from Tabon Caves)',
      title: 'Tabon Cave Secondary Burial Jar (Earthenware Burial Jar from Tabon Caves)',
      artist: 'Ancient Neolithic / Metal Age potters of Palawan',
      name: 'OLINARES, JULIAN BUENAOBRA',
      location: 'National Museum of Anthropology, Manila',
      year: '2022',
      date: '2022-05-19T09:00:00.000Z',
      category: 'Art #24',
      size: 'long',
      description: 'A large, weathered earthenware vessel with a wide neck and cylindrical body, hand-coiled and open-fired by ancient inhabitants of Palawan.',
      meaning: ' Serves as a sacred burial vessel used for secondary burial practices, holding cleaned bones of the deceased to signify honor, ancestor reverence, and safe passage into the afterlife.',
      image: 'artworks/art2_olinares.png',
      reference: 'https://en.wikipedia.org/wiki/Tabon_Caves'
    },
    {
      id: 'Kulintang Ensemble with Carved Kursi (Seat) and Kutyapi (Boat Lute)',
      title: 'Kulintang Ensemble with Carved Kursi (Seat) and Kutyapi (Boat Lute)',
      artist: 'Maranao master artisans and woodcarvers',
      name: 'OLINARES, JULIAN BUENAOBRA',
      location: 'National Museum of Anthropology, Manila',
      year: '1510',
      date: '1510-12-01T09:00:00.000Z',
      category: 'Art #25',
      description: 'A vibrant musical exhibit featuring a set of graduated brass gongs (Kulintang) mounted on an ornately carved wooden frame, paired with an elaborate high-backed chair (Kursi) and traditional two-stringed boat lutes (Kutyapi or Kudlung), all decorated with colorful okir motifs and serpent-like naga figures.',
      meaning: ' Represents the rich musical tradition, royalty, and high aesthetic craftsmanship of the Maranao people. The okir carvings and serpent motifs embody spiritual protection and prestige, while the ensemble as a whole reflects community identity, celebration, and ancestral heritage in Southern Mindanao',
      image: 'artworks/art3_olinares.png',
      reference: 'https://en.wikipedia.org/wiki/Kulintang'
    },
    {
      id: 'Temple of Leah (Fountain and Shrine Complex)',
      title: 'Temple of Leah (Fountain and Shrine Complex)',
      artist: 'Teodorico Soriano Adarna',
      name: 'SAHAGUN, REMWELL JOHN AZOR',
      location: 'Roosevelt Street, Barangay Busay, Cebu City',
      year: '2022',
      date: '2022-01-01T09:00:00.000Z',
      category: 'Art #26',
      size: 'square',
      description: ' Isang napakalaking Greco-Roman style shrine complex na may mga grand columns, granite stairs, brass lions, at isang ornate fountain sa gitna na pinaliligiran ng mga estatwa ng magagandang diyosa at may-pakpak na kabayo.',
      meaning: ' Ginawa ang buong templo bilang simbolo ng walang katapusang pagmamahal at debosyon ni Teodorico Adarna sa kanyang yumaong asawang si Leah. Nagsisilbi rin itong museo kung saan nakatabi ang personal na koleksyon, libro, at mga pagmamay-ari ni Leah para sa kanyang mga susunod na henerasyon.',
      image: 'artworks/art1_sahagun.png',
      reference: 'https://en.wikipedia.org/wiki/Temple_of_Leah'
    }
  ];

  /* ============================================================
     Helpers
     ============================================================ */
  const $  = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const clean = (v) => String(v == null ? '' : v).trim();
  const esc = (v) => clean(v).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  /* Location groups for the collection filter. They are derived only
     from each work's existing location field. */
  const PLACE_GROUPS = [
    { key: 'all',   label: 'All works' },
    { key: 'nm',    label: 'National Museums, Manila' },
    { key: 'clark', label: 'Clark Museum' },
    { key: 'pinto', label: 'Pinto Art Museum' },
    { key: 'other', label: 'Other sites' }
  ];

  function placeGroup(location) {
    const l = clean(location).toLowerCase();
    if (l.includes('national museum')) return 'nm';
    if (l.includes('clark museum')) return 'clark';
    if (l.includes('pinto')) return 'pinto';
    return 'other';
  }
  artworks.forEach((a) => { a.group = placeGroup(a.location); });

  const sizeOf = (a) => (['long', 'landscape', 'square'].includes(a.size) ? a.size : 'square');

  /* ============================================================
     Header: scroll state, progress line, mobile menu, active link
     ============================================================ */
  const header = $('#siteHeader');
  const progress = $('#scrollProgress');
  const menuBtn = $('#menuToggle');
  const nav = $('#mainNav');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 16);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('.nav-link')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  const navLinks = $$('.nav-link');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-current', link.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main > section[id]').forEach((s) => sectionObserver.observe(s));

  /* ============================================================
     Featured slider: every work, one at a time
     ============================================================ */
  const track = $('#featuredTrack');
  track.innerHTML = artworks.map((a, i) => `
    <article class="featured-slide${i === 0 ? ' is-active' : ''}" aria-roledescription="slide" aria-label="${i + 1} of ${artworks.length}">
      <figure class="featured-figure">
        <img src="${esc(a.image)}" alt="${esc(a.title)} by ${esc(a.artist)}" loading="${i < 2 ? 'eager' : 'lazy'}" decoding="async">
      </figure>
      <div class="featured-info">
        <p class="featured-eyebrow">${esc(a.category)}</p>
        <h3 class="featured-title">${esc(a.title)}</h3>
        <dl class="featured-meta">
          <div><dt>Artwork by</dt><dd>${esc(a.artist)}</dd></div>
          <div><dt>Location</dt><dd>${esc(a.location)}</dd></div>
          <div><dt>Photograph by</dt><dd>${esc(a.name)}</dd></div>
        </dl>
        <button type="button" class="btn btn-outline" data-open="${i}">View artwork</button>
      </div>
    </article>`).join('');

  const slides = $$('.featured-slide', track);
  const dotsWrap = $('#featuredDots');
  const countEl = $('#featuredCount');
  const sliderEl = $('#featuredSlider');
  dotsWrap.innerHTML = slides.map((_, i) =>
    `<button type="button" aria-label="Show artwork ${i + 1}"></button>`
  ).join('');
  const dots = $$('button', dotsWrap);

  let fIndex = 0;
  let fTimer = null;
  let sliderPaused = false;

  function showSlide(i) {
    const n = slides.length;
    slides[fIndex].classList.remove('is-active');
    dots[fIndex].classList.remove('is-active');
    dots[fIndex].removeAttribute('aria-current');

    fIndex = (i + n) % n;

    slides[fIndex].classList.add('is-active');
    dots[fIndex].classList.add('is-active');
    dots[fIndex].setAttribute('aria-current', 'true');
    countEl.textContent = `${fIndex + 1} / ${n}`;
  }

  function restartAutoplay() {
    clearInterval(fTimer);
    if (reduceMotion || sliderPaused) return;
    fTimer = setInterval(() => showSlide(fIndex + 1), 7000);
  }

  function goToSlide(i) {
    showSlide(i);
    restartAutoplay();
  }

  $('#featuredPrev').addEventListener('click', () => goToSlide(fIndex - 1));
  $('#featuredNext').addEventListener('click', () => goToSlide(fIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

  sliderEl.addEventListener('mouseenter', () => { sliderPaused = true; clearInterval(fTimer); });
  sliderEl.addEventListener('mouseleave', () => { sliderPaused = false; restartAutoplay(); });
  sliderEl.addEventListener('focusin', () => { sliderPaused = true; clearInterval(fTimer); });
  sliderEl.addEventListener('focusout', (e) => {
    if (!sliderEl.contains(e.relatedTarget)) { sliderPaused = false; restartAutoplay(); }
  });

  let touchStartX = null;
  sliderEl.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  sliderEl.addEventListener('touchend', (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) goToSlide(fIndex + (dx < 0 ? 1 : -1));
    touchStartX = null;
  });

  /* ============================================================
     Collection: filter by location, search, render
     ============================================================ */
  const grid = $('#galleryGrid');
  const filterList = $('#filterList');
  const searchInput = $('#gallerySearch');
  const resultCount = $('#resultCount');
  const emptyMsg = $('#galleryEmpty');
  let activeGroup = 'all';
  let activeQuery = '';

  function countFor(key) {
    return key === 'all' ? artworks.length : artworks.filter((a) => a.group === key).length;
  }

  filterList.innerHTML = PLACE_GROUPS.map((g) => `
    <button type="button" class="filter-chip" data-group="${g.key}" aria-pressed="${g.key === 'all'}">${esc(g.label)}<span class="count">${countFor(g.key)}</span></button>
  `).join('');

  filterList.addEventListener('click', (e) => {
    const chip = e.target.closest('.filter-chip');
    if (!chip) return;
    activeGroup = chip.dataset.group;
    $$('.filter-chip', filterList).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
    renderGallery();
  });

  let searchTimer = null;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      activeQuery = e.target.value;
      renderGallery();
    }, 150);
  });

  function cardHTML(a, i) {
    const sizeClass = a.size === 'long' ? ' is-long'
      : a.size === 'landscape' ? ' is-landscape'
      : a.size === 'square' ? ' is-square'
      : '';
    const label = `${esc(a.title)} by ${esc(a.artist)}`;
    return `
      <article class="art-card${sizeClass}" tabindex="0" data-open="${i}">
        <div class="art-card-image">
          <img src="${esc(a.image)}" alt="${label}" loading="lazy" decoding="async">
          <div class="art-card-overlay">
            <p class="art-card-category">${esc(a.category)}</p>
            <h3 class="art-card-title">${esc(a.title)}</h3>
            <p class="art-card-artist">${esc(a.artist)}</p>
          </div>
        </div>
      </article>`;
  }

  function renderGallery() {
    const q = clean(activeQuery).toLowerCase();
    const matches = [];

    artworks.forEach((a, i) => {
      if (activeGroup !== 'all' && a.group !== activeGroup) return;
      if (q && !(a.title.toLowerCase().includes(q) || a.artist.toLowerCase().includes(q))) return;
      matches.push(i);
    });

    grid.innerHTML = matches.map((i) => cardHTML(artworks[i], i)).join('');
    resultCount.textContent = matches.length === artworks.length
      ? `Showing all ${artworks.length} works`
      : `Showing ${matches.length} of ${artworks.length} works`;
    emptyMsg.hidden = matches.length !== 0;
  }

  /* ============================================================
     Artwork view (modal): one work at a time, with prev/next
     ============================================================ */
  const modal = $('#artworkModal');
  const dialog = $('.modal-dialog', modal);
  const modalBody = $('.modal-info', modal);
  const modalImage = $('#modalImage');
  let modalIndex = -1;
  let lastFocus = null;

  function renderModal() {
    const a = artworks[modalIndex];
    const title = clean(a.title);
    const artist = clean(a.artist);

    modalImage.src = a.image;
    modalImage.alt = `${title} by ${artist}`;
    $('#modalCategory').textContent = a.category;
    $('#modalTitle').textContent = title;
    $('#modalArtist').textContent = artist;
    $('#modalLocation').textContent = clean(a.location);
    $('#modalName').textContent = clean(a.name);
    $('#modalDesc').textContent = clean(a.description);
    $('#modalMeaning').textContent = clean(a.meaning);
    $('#modalReference').href = a.reference;
    $('#modalPos').textContent = `${modalIndex + 1} of ${artworks.length}`;
    modalBody.scrollTop = 0;
  }

  function openModal(i) {
    if (!artworks[i]) return;
    lastFocus = document.activeElement;
    modalIndex = i;
    renderModal();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    $('#modalClose').focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    if (lastFocus) lastFocus.focus({ preventScroll: true });
  }

  function stepModal(dir) {
    modalIndex = (modalIndex + dir + artworks.length) % artworks.length;
    renderModal();
  }

  function trapFocus(e) {
    const focusables = $$('button, a[href]', dialog);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalPrev').addEventListener('click', () => stepModal(-1));
  $('#modalNext').addEventListener('click', () => stepModal(1));
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeModal();
    else if (e.key === 'ArrowLeft') stepModal(-1);
    else if (e.key === 'ArrowRight') stepModal(1);
    else if (e.key === 'Tab') trapFocus(e);
  });

  /* One delegated handler opens the view from any card or slide */
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open]');
    if (trigger) openModal(Number(trigger.dataset.open));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest ? e.target.closest('.art-card[data-open]') : null;
    if (!card || e.target !== card) return;
    e.preventDefault();
    openModal(Number(card.dataset.open));
  });

  /* ============================================================
     Background music: starts quietly when allowed, and can be
     turned on or off from the header
     ============================================================ */
  const audio = $('#bgMusic');
  const soundBtn = $('#soundToggle');
  const soundLabel = $('#soundLabel');
  let userMuted = false;

  function setSoundUI(on) {
    soundBtn.setAttribute('aria-pressed', String(on));
    soundLabel.textContent = on ? 'Music on' : 'Music off';
  }

  function tryPlay() {
    audio.play().then(() => setSoundUI(true)).catch(() => setSoundUI(false));
  }

  audio.volume = 0.3;
  window.addEventListener('load', () => { if (!userMuted) tryPlay(); });

  /* Browsers block autoplay until the first interaction, so try once then */
  const firstGesture = () => { if (!userMuted && audio.paused) tryPlay(); };
  document.addEventListener('click', firstGesture, { once: true });
  document.addEventListener('touchstart', firstGesture, { once: true, passive: true });

  soundBtn.addEventListener('click', () => {
    if (audio.paused) {
      userMuted = false;
      tryPlay();
    } else {
      userMuted = true;
      audio.pause();
      setSoundUI(false);
    }
  });

  /* ============================================================
     Init
     ============================================================ */
  $('#collectionCount').textContent = artworks.length;
  showSlide(0);
  restartAutoplay();
  renderGallery();
})();