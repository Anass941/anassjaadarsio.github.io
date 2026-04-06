import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Server,
  Shield,
  Users,
  Brain,
  Target,
  Search,
  MessageSquare,
  Clock,
  RefreshCw,
  Wrench,
} from "lucide-react"

export default function CompetencesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 03 — Compétences</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mes compétences</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Systèmes & Infrastructure */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-6 flex items-center gap-2">
                  <Server className="w-5 h-5 text-cyan-500" />
                  Systèmes et Infrastructure
                </h2>
                <ul className="space-y-3">
                  {[
                    "Linux (Debian/Ubuntu)",
                    "Windows Server",
                    "Active Directory",
                    "Virtualisation (VMware/Proxmox)",
                    "Docker et conteneurs",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Réseaux & Sécurité */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-500" />
                  Réseaux et Sécurité
                </h2>
                <ul className="space-y-3">
                  {[
                    "Réseaux TCP/IP",
                    "Cisco IOS (routage/switching)",
                    "Pare-feu et VPN",
                    "Cybersécurité",
                    "Wireshark / Nmap",
                    "Routage",
                    "Putty",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Compétences transversales */}
          <Card className="mt-8 bg-card/50 border-border/50">
            <CardContent className="p-6">
              <h2 className="font-semibold mb-4">Compétences transversales</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: Users, label: "Travail en équipe" },
                  { icon: Brain, label: "Autonomie" },
                  { icon: Target, label: "Rigueur" },
                  { icon: Search, label: "Analyse" },
                  { icon: MessageSquare, label: "Communication" },
                  { icon: Clock, label: "Gestion du temps" },
                  { icon: RefreshCw, label: "Adaptabilité" },
                  { icon: Wrench, label: "Résolution de problèmes" },
                ].map((skill) => (
                  <Badge key={skill.label} variant="secondary" className="py-2 px-3 gap-2">
                    <skill.icon className="w-4 h-4" />
                    {skill.label}
                  </Badge>
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
