import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function VeillePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 05 — Veille</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Veille technologique</h1>
            <p className="text-muted-foreground">
              Suivi des évolutions en cybersécurité et infrastructure réseau.
            </p>
          </div>

          <Card className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-500" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg mb-1">Thème : Cybersécurité et Zero Trust</h2>
                  <p className="text-sm text-muted-foreground">Évolution sur les deux dernières années</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                La cybersécurité est en constante évolution. L'architecture Zero Trust — « ne jamais faire confiance,
                toujours vérifier » — s'est imposée comme le nouveau paradigme face à l'explosion du télétravail et des
                environnements cloud hybrides. Je suis cette technologie depuis le début de ma formation.
              </p>

              <h3 className="font-semibold mb-6">Chronologie des évolutions</h3>
              <div className="space-y-6">
                {[
                  {
                    period: "2023 — T1-T2",
                    title: "Adoption massive du Zero Trust en entreprise",
                    desc: "Les entreprises accélèrent leur migration vers des architectures Zero Trust suite aux cyberattaques majeures. Le NIST publie la mise à jour SP 800-207. Les solutions SASE combinent réseau et sécurité dans le cloud.",
                  },
                  {
                    period: "2023 — T3-T4",
                    title: "IA générative dans la cybersécurité",
                    desc: "L'IA s'intègre dans les outils SIEM/SOAR : détection comportementale améliorée, automatisation de la réponse aux incidents. En parallèle, les cybercriminels exploitent aussi l'IA pour des attaques de phishing plus sophistiquées.",
                  },
                  {
                    period: "2024 — T1-T2",
                    title: "NIS2 et renforcement réglementaire en Europe",
                    desc: "La directive NIS2 entre en vigueur en Europe, étendant les obligations de cybersécurité à de nombreux secteurs. Les entreprises doivent renforcer leur gouvernance et leurs procédures de notification d'incidents.",
                  },
                  {
                    period: "2024 — T3-T4",
                    title: "Cryptographie post-quantique",
                    desc: "Le NIST standardise les premiers algorithmes cryptographiques post-quantiques (CRYSTALS-Kyber, CRYSTALS-Dilithium). Les organisations commencent à planifier leur transition pour protéger leurs données.",
                  },
                  {
                    period: "2025 — Tendances actuelles",
                    title: "IA défensive et détection proactive",
                    desc: "Les plateformes XDR intégrant l'IA deviennent la norme. La sécurité des environnements cloud-native (Kubernetes, microservices) et la protection des identités (ITDR) sont les priorités des RSSI en 2025.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                      {index < 4 && <div className="w-0.5 h-full bg-border mt-2"></div>}
                    </div>
                    <div className="pb-6">
                      <p className="text-cyan-500 text-sm font-medium mb-1">{item.period}</p>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
