import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import {
  FolderOpen,
  Mail,
  GraduationCap,
  Target,
  Wrench,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="outline" className="mb-6 border-cyan-500/30 text-cyan-500">
              BTS SIO — Option SISR
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Bonjour, je suis{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Anass JAADAR
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">Étudiant en informatique et réseaux</p>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionné par l'informatique, les systèmes et les réseaux, je suis actuellement étudiant en BTS SIO
              option SISR. Cette formation me permet de développer des compétences en administration systèmes, gestion
              des réseaux et sécurité informatique afin de construire mon avenir dans les métiers de l'infrastructure
              informatique.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                <Link href="/projets">
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Voir mes projets
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-cyan-500/30 hover:bg-cyan-500/10">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Me contacter
                </Link>
              </Button>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {["Linux", "Windows Server", "Cisco", "Virtualisation", "Cybersécurité"].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/50">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <Link href="/formation">
              <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="w-8 h-8 mx-auto mb-4 text-cyan-500" />
                  <h3 className="font-semibold mb-2">Formation</h3>
                  <p className="text-sm text-muted-foreground">
                    BTS SIO option SISR, avec une spécialisation dans les infrastructures réseau et la sécurité.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/projets">
              <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-8 h-8 mx-auto mb-4 text-cyan-500" />
                  <h3 className="font-semibold mb-2">Projets</h3>
                  <p className="text-sm text-muted-foreground">
                    Mise en place d'infrastructures, configuration réseau, routage BGP.
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/contact">
              <Card className="bg-card/50 border-border/50 hover:border-cyan-500/30 transition-colors cursor-pointer h-full">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 mx-auto mb-4 text-cyan-500" />
                  <h3 className="font-semibold mb-2">Objectifs</h3>
                  <p className="text-sm text-muted-foreground">
                    Devenir consultant en cybersécurité, puis évoluer dans les métiers de la cybersécurité.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
