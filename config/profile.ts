export const profile = {
  // Identité
  name: 'Damien Pignat',
  title: 'Gérant',
  company: 'NP IMMOBILIER',
  description:
    'Syndic de copropriété — gestion administrative, financière et technique de votre immeuble, au quotidien.',

  // Contact
  phone: '+33978250645',
  email: 'd.pignat@np.immo',
  website: 'https://www.np-immobilier.fr',

  // URL du profil (injectée depuis la variable d'environnement)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  // Contenu entreprise
  aboutCompany:
    'NP IMMOBILIER est un syndic de copropriété à taille humaine. Nous assurons la gestion administrative, financière et technique de votre immeuble avec réactivité et transparence, pour préserver la valeur de votre patrimoine.',
} as const

export type Profile = typeof profile
