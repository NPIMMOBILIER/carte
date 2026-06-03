export function ProfileHeader() {
  return (
    <div className="relative">
      {/* Bannière dégradée crème + liseré or */}
      <div className="h-40 border-b-2 border-accent bg-gradient-to-br from-banner1 to-banner2" />

      {/* Avatar monogramme NP, aligné à gauche, débordant */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-6">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-cream bg-primary shadow-lg">
          <span className="font-serif text-3xl font-bold tracking-tight text-accent">NP</span>
        </div>
      </div>
    </div>
  )
}
