import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Briefcase, Download } from "lucide-react"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 02 — Expériences</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Parcours professionnel et stages</h1>
            <p className="text-muted-foreground">
              Stages et expériences professionnelles réalisés dans le cadre de ma formation BTS SIO.
            </p>
          </div>

          <div className="space-y-8">
            {/* Expérience 1 */}
            <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-cyan-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h2 className="font-semibold text-lg">Préfecture du Val-de-Marne</h2>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                        Mai – Juin 2025
                      </Badge>
                    </div>
                    <p className="text-cyan-500 text-sm mb-3">Technicien Systèmes et Réseaux (DSI)</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Sauvegarde de PC et installation de postes, migrations vers Windows 11</li>
                      <li>• Aménagement de bureau (décâblage/câblage)</li>
                      <li>• Changement d'outils informatiques</li>
                      <li>• Installation de PC/postes et de visioconférence</li>
                      <li>• Gestion des pannes d'imprimantes</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {["Windows Server 2022-2024", "RJ45", "PowerShell", "Scanner", "GLPI"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Expérience 2 */}
            <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-cyan-500" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h2 className="font-semibold text-lg">CN2C</h2>
                      <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                        Janvier – Février 2026
                      </Badge>
                    </div>
                    <p className="text-cyan-500 text-sm mb-3">Technicien Systèmes et Réseaux</p>
                    <ul className="text-sm text-muted-foreground space-y-1 mb-4">
                      <li>• Gestion de la téléphonie</li>
                      <li>• Inventaire du parc informatique avec OCS Inventory</li>
                      <li>• Participation à la migration de postes vers Windows 11</li>
                      <li>• Câblage réseau et brassage en baie de communication</li>
                      <li>• Assistance aux utilisateurs sur les logiciels métiers (HIS, PACS)</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {["Windows 10/11", "Panne réseau", "RJ45"].map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10" asChild>
              <a href="/cv-anass-jaadar.pdf" download="CV_Anass_JAADAR.pdf">
                <Download className="w-4 h-4 mr-2" />
                Télécharger mon CV en PDF
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
