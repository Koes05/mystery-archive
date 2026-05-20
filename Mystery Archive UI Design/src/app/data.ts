export type RiskLevel = 'Safe' | 'Caution' | 'Dangerous' | 'Unknown' | 'Critical';
export type Category = 'Ghosts' | 'Myths' | 'Creatures' | 'Mysteries' | 'Incidents';

export interface Entry {
  id: string;
  name: string;
  category: Category;
  country: string;
  place: string;
  form: string;
  effect: string;
  riskLevel: RiskLevel;
  shortDescription: string;
  overview: string;
  features: string[];
  cases: string[];
  warnings: string[];
  tags: string[];
  imageUrl: string;
  authorId: string;
  createdAt: string;
}

export const mockEntries: Entry[] = [
  {
    id: 'e-001',
    name: 'The Slender Man',
    category: 'Myths',
    country: 'United States',
    place: 'Forests / Suburban Areas',
    form: 'Tall humanoid, faceless, wearing a suit',
    effect: 'Paranoia, amnesia, disappearance',
    riskLevel: 'Dangerous',
    shortDescription: 'A tall, faceless entity known to stalk, abduct, or traumatize people, particularly children.',
    overview: 'The Slender Man is described as a remarkably tall and thin humanoid figure with a featureless, stark white head and face. It is commonly depicted wearing a black suit with a red or black tie.',
    features: ['Inhuman height', 'Tendrils protruding from back', 'Facelessness', 'Teleportation'],
    cases: ['Stirling City Disappearances (1986)', 'Morgan Geyser Incident (2014)'],
    warnings: ['Do not enter deep woods alone at night', 'Avoid looking directly at the entity if spotted in the distance'],
    tags: ['abduction', 'woods', 'suit', 'faceless'],
    imageUrl: 'https://images.unsplash.com/photo-1518331647614-7a1f04cd34af?q=80&w=2000&auto=format&fit=crop',
    authorId: 'user-1',
    createdAt: '2025-01-15T10:00:00Z'
  },
  {
    id: 'e-002',
    name: 'Mothman',
    category: 'Creatures',
    country: 'United States',
    place: 'Point Pleasant, West Virginia',
    form: 'Large winged humanoid with glowing red eyes',
    effect: 'Harbinger of doom, electromagnetic interference',
    riskLevel: 'Caution',
    shortDescription: 'A legendary winged creature reportedly seen in the Point Pleasant area, often associated with impending disasters.',
    overview: 'Mothman is a humanoid creature reportedly seen in the Point Pleasant area from Nov 15, 1966, to Dec 15, 1967. The creature was described as a large flying man with ten-foot wings and red, glowing eyes.',
    features: ['Glowing red eyes', 'Massive wingspan', 'High-pitched shriek', 'Precognitive presence'],
    cases: ['Silver Bridge Collapse (1967)'],
    warnings: ['Report glowing red eyes immediately', 'Evacuate area if sighting is confirmed'],
    tags: ['winged', 'harbinger', 'red-eyes', 'cryptid'],
    imageUrl: 'https://images.unsplash.com/photo-1484196144865-c7e14bd13dd2?q=80&w=2000&auto=format&fit=crop',
    authorId: 'user-2',
    createdAt: '2025-02-10T14:30:00Z'
  },
  {
    id: 'e-003',
    name: 'Kuchisake-onna',
    category: 'Ghosts',
    country: 'Japan',
    place: 'Urban streets',
    form: 'Woman wearing a surgical mask',
    effect: 'Mutilation, fatal encounters',
    riskLevel: 'Critical',
    shortDescription: 'The malevolent spirit of a woman with a mutilated face who asks potential victims if they think she is beautiful.',
    overview: 'Kuchisake-onna (Slit-Mouthed Woman) is a malevolent figure in Japanese urban legends and folklore. She appears as a woman wearing a surgical mask and carrying a sharp object, often a pair of scissors.',
    features: ['Surgical mask', 'Mutilated mouth', 'Unnatural speed', 'Armed with scissors'],
    cases: ['Nagasaki Panic (1979)'],
    warnings: ['Do not answer her question directly', 'Throw hard candies or pomade to distract her'],
    tags: ['spirit', 'urban-legend', 'scissors'],
    imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop',
    authorId: 'admin',
    createdAt: '2025-03-01T09:15:00Z'
  },
  {
    id: 'e-004',
    name: 'Bermuda Triangle',
    category: 'Mysteries',
    country: 'International Waters',
    place: 'North Atlantic Ocean',
    form: 'Geographical region',
    effect: 'Disappearance of ships and aircraft',
    riskLevel: 'Unknown',
    shortDescription: 'A loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances.',
    overview: 'The Bermuda Triangle, also known as the Devil\'s Triangle, is an urban legend focused on a loosely defined region in the western part of the North Atlantic Ocean where a number of aircraft and ships are said to have disappeared under mysterious circumstances.',
    features: ['Magnetic anomalies', 'Sudden severe weather', 'Electronic failures'],
    cases: ['Flight 19 (1945)', 'USS Cyclops (1918)'],
    warnings: ['Avoid traveling through the coordinates when magnetic storms are predicted'],
    tags: ['ocean', 'disappearance', 'anomaly'],
    imageUrl: 'https://images.unsplash.com/photo-1505672678657-cc70370d5e7b?q=80&w=2000&auto=format&fit=crop',
    authorId: 'user-1',
    createdAt: '2024-11-20T16:45:00Z'
  },
  {
    id: 'e-005',
    name: 'Dyatlov Pass Incident',
    category: 'Incidents',
    country: 'Russia',
    place: 'Ural Mountains',
    form: 'Unexplained event',
    effect: 'Unexplained deaths, severe trauma',
    riskLevel: 'Unknown',
    shortDescription: 'The mysterious deaths of nine Soviet trekkers in the northern Ural Mountains.',
    overview: 'In February 1959, nine experienced hikers died under mysterious circumstances on the slopes of Kholat Syakhl in the Ural Mountains. Their tent was cut open from the inside, and they fled in inadequate clothing in sub-zero temperatures.',
    features: ['Internal trauma without external wounds', 'Radioactive traces on clothing', 'Missing body parts'],
    cases: ['Original 1959 Expedition'],
    warnings: ['Trekking in the northern Urals requires extreme precaution', 'Beware of infrasound phenomena'],
    tags: ['mountains', 'unsolved', 'cold'],
    imageUrl: 'https://images.unsplash.com/photo-1544085448-b3ab96122d26?q=80&w=2000&auto=format&fit=crop',
    authorId: 'admin',
    createdAt: '2025-04-05T11:20:00Z'
  },
  {
    id: 'e-006',
    name: 'Herobrine',
    category: 'Mysteries',
    country: 'Digital',
    place: 'Digital / Game World',
    form: 'Phenomenon',
    effect: 'Glitch, Rumor, Observation',
    riskLevel: 'Safe',
    shortDescription: 'A community-created creepypasta of a mysterious entity haunting a popular block-building game.',
    overview: 'Herobrine is the subject of a community-created creepypasta. He is portrayed as an entity who manipulates game worlds, builds strange structures like perfect pyramids or 2x2 tunnels, and stalks the player.',
    features: ['Blank white eyes', 'Default player skin', 'Teleportation', 'Environmental manipulation'],
    cases: ['Brocraft Stream (2010)'],
    warnings: ['Do not attempt to summon', 'Log off if strange structures appear in single-player'],
    tags: ['digital', 'creepypasta', 'avatar'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop',
    authorId: 'user-3',
    createdAt: '2025-05-12T08:00:00Z'
  }
];

export const currentUser = {
  id: 'admin',
  name: 'Archivist Prime',
  role: 'admin' // 'user' | 'admin'
};
