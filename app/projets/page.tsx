import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Terminal, FolderSync } from "lucide-react"

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 04 — Projets</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mes projets</h1>
            <p className="text-muted-foreground">Projets réalisés pendant la formation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projet 1 - Routage BGP */}
            <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <Terminal className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg mb-1">Routage BGP</h2>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-500">
                        SISR
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Réseau
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Configuration et mise en place du protocole de routage BGP (Border Gateway Protocol) entre plusieurs
                  routeurs. Utilisation de PuTTY pour la connexion aux équipements réseau et configuration des sessions
                  BGP, des annonces de préfixes et des politiques de routage.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["BGP", "PuTTY", "Routage", "Cisco IOS", "Adressage IP"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Configuration BGP fonctionnelle avec échange de routes entre AS.
                </div>
              </CardContent>
            </Card>

            {/* Projet 2 - FileZilla */}
            <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                    <FolderSync className="w-6 h-6 text-cyan-500" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-lg mb-1">Gestion de dossiers à distance</h2>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-500">
                        SISR
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Services
                      </Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Mise en place d'un serveur FTP/SFTP avec FileZilla Server pour permettre la gestion et le transfert
                  de fichiers à distance. Configuration des utilisateurs, des permissions d'accès aux dossiers et
                  sécurisation des connexions avec le protocole SFTP.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["FileZilla", "FTP", "SFTP", "Gestion des droits", "Transfert de fichiers"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Serveur FTP opérationnel avec accès sécurisé aux dossiers partagés.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
