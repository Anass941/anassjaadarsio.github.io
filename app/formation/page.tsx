import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Network,
  Server,
  Shield,
  Monitor,
  Target,
} from "lucide-react"

export default function FormationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 01 — Formation</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">BTS SIO</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Services Informatiques aux Organisations — préparer les techniciens de demain à administrer et sécuriser
              les SI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Badge className="mb-4 bg-cyan-600">Bac +2 Option SISR</Badge>
              <h2 className="text-2xl font-bold mb-4">BTS Services Informatiques aux Organisations</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Le BTS SIO est un diplôme de niveau Bac+2 qui forme des techniciens capables de répondre aux besoins
                informatiques des organisations. Il se divise en deux options : SISR (Solutions d'Infrastructure,
                Systèmes et Réseaux) et SLAM (Solutions Logicielles et Applications Métiers).
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-cyan-500" />
                  Objectifs de la formation
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Assister les utilisateurs et gérer les incidents</li>
                  <li>• Mettre en œuvre des solutions de virtualisation</li>
                  <li>• Gérer des serveurs et des postes de travail</li>
                  <li>• Garantir la disponibilité et la sécurité des SI</li>
                  <li>• Administrer et maintenir des infrastructures réseau</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-500" />
                  Option SISR — Ma spécialisation
                </h3>
                <p className="text-sm text-muted-foreground">
                  L'option SISR est orientée vers les infrastructures réseau et systèmes. Elle forme des techniciens
                  capables de concevoir, déployer et administrer des réseaux d'entreprise, des serveurs, et de gérer la
                  sécurité des systèmes d'information.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6">Domaines étudiés</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Network,
                    title: "Réseaux",
                    desc: "TCP/IP, routage, switching, VLAN, VPN, protocoles réseau et architecture.",
                  },
                  {
                    icon: Server,
                    title: "Systèmes",
                    desc: "Administration Linux et Windows Server, Active Directory, scripting Bash et PowerShell.",
                  },
                  {
                    icon: Monitor,
                    title: "Virtualisation",
                    desc: "VMware, Proxmox, VirtualBox, conteneurisation Docker et infrastructures virtuelles.",
                  },
                  {
                    icon: Shield,
                    title: "Cybersécurité",
                    desc: "Pare-feux, IDS/IPS, gestion des vulnérabilités, conformité et réponse aux incidents.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="bg-card/50 border-border/50">
                    <CardContent className="p-4">
                      <item.icon className="w-6 h-6 text-cyan-500 mb-2" />
                      <h4 className="font-medium mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
