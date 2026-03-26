"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Linkedin,
  Github,
  Shield,
} from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-500 text-sm font-medium mb-2">// 06 — Contact</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Me contacter</h1>
            <p className="text-muted-foreground">
              Une question, une opportunité de stage ? N'hésitez pas à m'envoyer un message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Localisation</p>
                      <p className="text-sm font-medium">Île-de-France, France</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Formation</p>
                      <p className="text-sm font-medium">BTS SIO — Option SISR</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Disponibilité</p>
                      <p className="text-sm font-medium">En alternance — Disponible</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/50 border-border/50">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-cyan-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">LinkedIn</p>
                      <a href="#" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                        /in/anass-jaadar
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-4 flex items-center gap-3">
                  <Github className="w-5 h-5 text-cyan-500" />
                  <div>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                    <a href="#" className="text-sm font-medium hover:text-cyan-500 transition-colors">
                      github.com/anass941
                    </a>
                  </div>
                </CardContent>
              </Card>

              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    <strong>Confidentialité</strong> — Le formulaire ne collecte aucune donnée personnelle sensible.
                    Votre message est utilisé uniquement pour vous répondre.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-6">Envoyer un message</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      placeholder="Ex : Demande de stage, Question technique..."
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact">Moyen de réponse (e-mail ou autre)</Label>
                    <Input id="contact" placeholder="votre@email.com" className="mt-1.5" />
                  </div>
                  <div>
                    <Label htmlFor="message">Votre message</Label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre demande..."
                      className="mt-1.5 min-h-[120px]"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Ce formulaire est à usage démonstratif dans ce portfolio. Pour me contacter directement, privilégiez
                    LinkedIn ou GitHub.
                  </p>
                  <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
