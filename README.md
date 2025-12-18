# 🚕 RideTaxi Latinos

> Servicio de taxi por WhatsApp para la comunidad latina en Estados Unidos. Sin apps, sin complicaciones.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tech Stack](#-tech-stack)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura](#-arquitectura)
- [Componentes](#-componentes)
- [API Routes](#-api-routes)
- [Configuración](#-configuración)
- [Despliegue](#-despliegue)
- [Contribución](#-contribución)

---

## 📖 Descripción

**RideTaxi Latinos** es una landing page moderna y responsiva para un servicio de taxi orientado a la comunidad latina en Estados Unidos. A diferencia de otras plataformas, el servicio opera 100% a través de WhatsApp, eliminando la necesidad de descargar aplicaciones adicionales.

### Propuesta de Valor
- 🇪🇸 Atención 100% en español
- 📱 Sin necesidad de descargar apps - Todo por WhatsApp
- 💵 Pago en efectivo disponible
- 🔒 Conductores verificados
- 🍔 Servicios adicionales: delivery de comida y licores

---

## ✨ Características

### Experiencia de Usuario
- **Mobile-First Design**: Diseño optimizado para dispositivos móviles con navegación tipo app
- **Responsive**: Adaptación fluida entre móvil, tablet y desktop
- **Animaciones suaves**: Transiciones con GSAP para una experiencia premium
- **Dark Theme**: Diseño elegante con paleta navy (#010028) y turquesa (#25d1ab)

### Funcionalidades
- **Calculadora de Precios**: Estimación de tarifas en tiempo real
- **Autocompletado de direcciones**: Integración con Nominatim API
- **Integración WhatsApp**: CTAs directos a WhatsApp para solicitar viajes
- **Vista móvil diferenciada**: Componentes específicos para mobile vs desktop

---

## 🛠 Tech Stack

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **Next.js** | 16.0.10 | Framework React con App Router |
| **React** | 19.2.1 | Librería UI |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **GSAP** | 3.14.2 | Animaciones avanzadas |

---

## 📁 Estructura del Proyecto

```
ride_taxi_latinos/
├── app/
│   ├── api/
│   │   └── calculate-distance/    # API para cálculo de distancias
│   │       └── route.ts
│   ├── components/                # Componentes reutilizables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── PriceCalculator.tsx
│   │   ├── FAQ.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Stats.tsx
│   │   ├── CitiesPreview.tsx
│   │   ├── DriversCTA.tsx
│   │   ├── AppPromo.tsx
│   │   ├── MobileHome.tsx         # Vista móvil - Home
│   │   ├── MobileNavBar.tsx       # Navegación móvil (bottom nav)
│   │   ├── MobileRideRequest.tsx  # Vista móvil - Solicitar viaje
│   │   ├── MobileTarifas.tsx      # Vista móvil - Tarifas
│   │   └── MobileAyuda.tsx        # Vista móvil - Ayuda
│   ├── conductores/               # Sección conductores
│   │   ├── ganancias/
│   │   ├── portal/
│   │   ├── registro/
│   │   ├── requisitos/
│   │   └── soporte/
│   ├── empresa/                   # Sección empresa
│   │   ├── blog/
│   │   ├── business/
│   │   ├── carreras/
│   │   ├── prensa/
│   │   └── sobre-nosotros/
│   ├── pasajeros/                 # Sección pasajeros
│   │   ├── ayuda/
│   │   ├── ciudades/
│   │   ├── seguridad/
│   │   ├── solicitar-viaje/
│   │   └── tarifas/
│   ├── legal/                     # Páginas legales
│   ├── globals.css                # Estilos globales
│   ├── layout.tsx                 # Layout principal
│   └── page.tsx                   # Página principal
├── public/
│   └── img/                       # Assets estáticos
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Instalación

### Prerrequisitos

- Node.js 18.17 o superior
- npm, yarn o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/ride_taxi_latinos.git

# 2. Navegar al directorio
cd ride_taxi_latinos

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

---

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| **dev** | `npm run dev` | Inicia servidor de desarrollo con hot-reload |
| **build** | `npm run build` | Genera build de producción optimizado |
| **start** | `npm run start` | Inicia servidor de producción |
| **lint** | `npm run lint` | Ejecuta ESLint para análisis de código |

---

## 🏗 Arquitectura

### App Router (Next.js 14+)

El proyecto utiliza el App Router de Next.js con la siguiente estructura:

```
app/
├── layout.tsx          # Root layout (fonts, metadata, MobileNavBar)
├── page.tsx            # Renderizado condicional móvil/desktop
└── [section]/
    └── [page]/
        └── page.tsx    # Páginas con split móvil/desktop
```

### Patrón Mobile/Desktop Split

Cada página principal implementa un patrón de renderizado condicional:

```tsx
export default function Page() {
  return (
    <>
      {/* Vista móvil - Solo visible en < 1024px */}
      <MobileComponent />
      
      {/* Vista desktop - Solo visible en >= 1024px */}
      <div className="hidden lg:block">
        <DesktopContent />
      </div>
    </>
  );
}
```

### Responsive Breakpoints

| Breakpoint | Clase Tailwind | Dispositivo |
|------------|----------------|-------------|
| < 640px | `sm:` | Móvil pequeño |
| < 768px | `md:` | Móvil/Tablet |
| < 1024px | `lg:` | Tablet/Desktop |
| >= 1024px | `lg:` | Desktop |

---

## 🧩 Componentes

### Componentes Desktop

| Componente | Descripción |
|------------|-------------|
| `Header` | Navegación principal con menú responsive |
| `Hero` | Sección principal con CTA |
| `Features` | Grid de características del servicio |
| `HowItWorks` | Pasos para solicitar un viaje |
| `PriceCalculator` | Calculadora interactiva de tarifas |
| `FAQ` | Preguntas frecuentes expandibles |
| `Testimonials` | Carousel de testimonios |
| `Stats` | Estadísticas del servicio |
| `Footer` | Footer con links y redes sociales |

### Componentes Mobile

| Componente | Descripción |
|------------|-------------|
| `MobileNavBar` | Barra de navegación inferior (4 items) |
| `MobileHome` | Pantalla principal móvil |
| `MobileRideRequest` | Solicitar viaje con PriceCalculator |
| `MobileTarifas` | Visualización de tarifas |
| `MobileAyuda` | Centro de ayuda y FAQs |

---

## 🔌 API Routes

### `POST /api/calculate-distance`

Calcula la distancia entre dos puntos geográficos.

**Request:**
```json
{
  "origin": { "lat": 40.7128, "lng": -74.0060 },
  "destination": { "lat": 40.7589, "lng": -73.9851 }
}
```

**Response:**
```json
{
  "distance": 3.2,
  "unit": "miles"
}
```

---

## ⚙️ Configuración

### Variables de Entorno

Crear archivo `.env.local` en la raíz:

```env
# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=56933101623

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Personalización de Colores

Los colores principales están definidos en `globals.css`:

```css
:root {
  --navy: #010028;
  --turquoise: #25d1ab;
}
```

Y referenciados en Tailwind como `bg-navy`, `text-turquoise`, etc.

---

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

### Build de Producción

```bash
# Generar build optimizado
npm run build

# Verificar tamaño del bundle
npx @next/bundle-analyzer
```

---

## 🤝 Contribución

### Flujo de Trabajo

1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit con conventional commits: `git commit -m "feat: agregar nueva funcionalidad"`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abrir Pull Request

### Convenciones de Código

- **Commits**: Seguir [Conventional Commits](https://www.conventionalcommits.org/)
- **Componentes**: PascalCase (`MobileNavBar.tsx`)
- **Funciones/Variables**: camelCase
- **Estilos**: Tailwind CSS utility classes

### Checklist PR

- [ ] Código pasa `npm run lint`
- [ ] Build exitoso `npm run build`
- [ ] Componentes responsive probados
- [ ] Sin console.logs en producción

---

## 📄 Licencia

Este proyecto es privado y propietario de RideTaxi Latinos.

---

## 📞 Contacto

- **WhatsApp**: [+56 9 3310 1623](https://wa.me/56933101623)
- **Email**: ayuda@ridetaxi.com
- **Website**: [ridetaxi.com](https://ridetaxi.com)

---

<div align="center">
  <p>Hecho con ❤️ para la comunidad latina</p>
  <p><strong>RideTaxi Latinos</strong> - Tu taxi de confianza</p>
</div>

# Instalar dependencias (si no están instaladas)
npm install
```

### Desarrollo

```bash
# Ejecutar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### Compilar para Producción

```bash
#   R i d e T a x i L a t i n o s  
 