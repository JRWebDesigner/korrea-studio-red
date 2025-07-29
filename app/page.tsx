import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Award, Users, Lightbulb, Palette, Camera, Settings } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            KORREA STUDIO
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#servicios" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Servicios
            </Link>
            <Link href="#proyectos" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Proyectos
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Nosotros
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Contacto
            </Link>
          </nav>
          <Button className="bg-white text-black hover:bg-gray-200">Cotizar Proyecto</Button>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/placeholder-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">Instalaciones Creativas & Escenografía</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformamos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Ideas en Experiencias
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Diseño y fabricación de instalaciones creativas, sets, props y piezas únicas que dan vida a proyectos
            artísticos y comerciales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Ver Nuestros Proyectos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Showreel
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Nuestros Servicios</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">Servicios Especializados</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Ofrecemos soluciones integrales desde el concepto inicial hasta la producción final
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <Palette className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Dirección Creativa</h3>
                <p className="text-gray-400">Conceptualización y desarrollo de ideas creativas para proyectos únicos</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Diseño Escenográfico</h3>
                <p className="text-gray-400">Creación de sets, fondos pintados y ambientaciones para producciones</p>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <Settings className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Fabricación</h3>
                <p className="text-gray-400">
                  Producción de props, instalaciones y piezas únicas con acabados profesionales
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors">
              <CardContent className="p-8 text-center">
                <Camera className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Arte Escénico</h3>
                <p className="text-gray-400">
                  Instalaciones creativas para eventos, exposiciones y producciones audiovisuales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Proyectos Destacados</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experiencias únicas que han marcado la diferencia en la industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="bg-white border-gray-800 overflow-hidden hover:border-gray-600 transition-colors group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&query=creative installation project ${i}`}
                    alt={`Proyecto ${i}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <CardContent className="p-6 bg-gray-900">
                  <h3 className="text-xl font-bold mb-2 text-white">Instalación Creativa {i}</h3>
                  <Button variant="ghost" className="text-white hover:text-gray-300 p-0">
                    Ver más detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Ver Todos los Proyectos
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-black/30 border-black/20 text-black">Sobre Nosotros</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
                Expertos en Crear
                <span className="block text-transparent bg-clip-text bg-gradient-to-r bg-black/80">
                  Experiencias Únicas
                </span>
              </h2>
              <p className="text-xl text-black mb-8">
                En Korrea Studio combinamos creatividad, técnica y pasión para transformar ideas en experiencias físicas
                llamativas. Nuestro equipo multidisciplinario trabaja desde el concepto inicial hasta la producción
                final.
              </p>

              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Award className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-gray-400">Proyectos</div>
                </div>
                <div className="text-center">
                  <Users className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">30+</div>
                  <div className="text-gray-400">Clientes</div>
                </div>
                <div className="text-center">
                  <Lightbulb className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-gray-400">Años</div>
                </div>
              </div>

              <Button size="lg" className="bg-black text-white hover:bg-gray-400">
                Conocer Más
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Korrea Studio Workspace"
                width={500}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <Badge className="mb-4 bg-white/10 text-white border-white/20">¿Listo para comenzar?</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hagamos Realidad
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Tu Próximo Proyecto
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Contáctanos para discutir tu proyecto y descubrir cómo podemos transformar tus ideas en experiencias
            extraordinarias.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-transparent"
            >
              Agendar Reunión
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">KORREA STUDIO</h3>
              <p className="text-gray-400 mb-4">
                Transformando ideas en experiencias físicas llamativas desde el concepto hasta la producción.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dirección Creativa</li>
                <li>Diseño Escenográfico</li>
                <li>Fabricación</li>
                <li>Arte Escénico</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre Nosotros</li>
                <li>Proyectos</li>
                <li>Proceso</li>
                <li>Contacto</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@korreastudio.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Ciudad, País</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Korrea Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
