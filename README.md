# 🚕 RideTaxi Latinos

> Servicio de taxi por WhatsApp para la comunidad latina en Estados Unidos. Sin apps, sin complicaciones.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Tabla de Contenidos

- [Descripcion](#-descripcion)
- [Caracteristicas](#-caracteristicas)
- [Tech Stack](#-tech-stack)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalacion](#-instalacion)
- [Scripts Disponibles](#-scripts-disponibles)
- [Arquitectura](#-arquitectura)
- [Componentes](#-componentes)
- [API Routes](#-api-routes)
- [Despliegue](#-despliegue)

---

## 📖 Descripcion

**RideTaxi Latinos** es una landing page moderna y responsiva para un servicio de taxi orientado a la comunidad latina en Estados Unidos. A diferencia de otras plataformas, el servicio opera 100% a traves de WhatsApp, eliminando la necesidad de descargar aplicaciones adicionales.

### Propuesta de Valor
- 🇪🇸 Atencion 100% en español
- 📱 Sin necesidad de descargar apps - Todo por WhatsApp
- 💵 Pago en efectivo disponible
- 🔒 Conductores verificados
- 🍔 Servicios adicionales: delivery de comida y licores

---

## ✨ Caracteristicas

### Experiencia de Usuario
- **Mobile-First Design**: Diseño optimizado para dispositivos moviles con navegacion tipo app
- **Responsive**: Adaptacion fluida entre movil, tablet y desktop
- **Animaciones suaves**: Transiciones con GSAP para una experiencia premium
- **Dark Theme**: Diseño elegante con paleta navy (#010028) y turquesa (#25d1ab)

### Funcionalidades
- **Calculadora de Precios**: Estimacion de tarifas en tiempo real
- **Autocompletado de direcciones**: Integracion con Nominatim API
- **Integracion WhatsApp**: CTAs directos a WhatsApp para solicitar viajes
- **Vista movil diferenciada**: Componentes especificos para mobile vs desktop

---

## 🛠 Tech Stack

| Tecnologia | Version | Uso |
|------------|---------|-----|
| **Next.js** | 16.0.10 | Framework React con App Router |
| **React** | 19.2.1 | Libreria UI |
| **TypeScript** | 5.x | Tipado estatico |
| **Tailwind CSS** | 4.x | Estilos utility-first |
| **GSAP** | 3.14.2 | Animaciones avanzadas |

---

## 📁 Estructura del Proyecto

```
ride_taxi_latinos/
├── app/
│   ├── api/
│   │   └── calculate-distance/    # API para calculo de distancias
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
│   │   ├── MobileHome.tsx         # Vista movil - Home
│   │   ├── MobileNavBar.tsx       # Navegacion movil (bottom nav)
│   │   ├── MobileRideRequest.tsx  # Vista movil - Solicitar viaje
│   │   ├── MobileTarifas.tsx      # Vista movil - Tarifas
│   │   └── MobileAyuda.tsx        # Vista movil - Ayuda
│   ├── conductores/               # Seccion conductores
│   ├── empresa/                   # Seccion empresa
│   ├── pasajeros/                 # Seccion pasajeros
│   │   ├── ayuda/
│   │   ├── ciudades/
│   │   ├── seguridad/
│   │   ├── solicitar-viaje/
│   │   └── tarifas/
│   ├── legal/                     # Paginas legales
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── img/
└── package.json
```

---

## 🚀 Instalacion

### Prerrequisitos

- Node.js 18.17 o superior
- npm, yarn o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/Devdprivity/RideTaxiLatinos.git

# 2. Navegar al directorio
cd RideTaxiLatinos

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev
```

La aplicacion estara disponible en `http://localhost:3000`

---

## 📜 Scripts Disponibles

| Script | Comando | Descripcion |
|--------|---------|-------------|
| **dev** | `npm run dev` | Inicia servidor de desarrollo |
| **build** | `npm run build` | Genera build de produccion |
| **start** | `npm run start` | Inicia servidor de produccion |
| **lint** | `npm run lint` | Ejecuta ESLint |

---

## 🏗 Arquitectura

### App Router (Next.js 14+)

El proyecto utiliza el App Router de Next.js:

```
app/
├── layout.tsx          # Root layout (fonts, metadata, MobileNavBar)
├── page.tsx            # Renderizado condicional movil/desktop
└── [section]/
    └── [page]/
        └── page.tsx    # Paginas con split movil/desktop
```

### Patron Mobile/Desktop Split

Cada pagina principal implementa renderizado condicional:

```tsx
export default function Page() {
  return (
    <>
      {/* Vista movil - Solo visible en < 1024px */}
      <MobileComponent />
      
      {/* Vista desktop - Solo visible en >= 1024px */}
      <div className="hidden lg:block">
        <DesktopContent />
      </div>
    </>
  );
}
```

---

## 🧩 Componentes

### Componentes Desktop

| Componente | Descripcion |
|------------|-------------|
| `Header` | Navegacion principal |
| `Hero` | Seccion principal con CTA |
| `Features` | Caracteristicas del servicio |
| `HowItWorks` | Pasos para solicitar viaje |
| `PriceCalculator` | Calculadora de tarifas |
| `FAQ` | Preguntas frecuentes |
| `Footer` | Footer con links |

### Componentes Mobile

| Componente | Descripcion |
|------------|-------------|
| `MobileNavBar` | Barra de navegacion inferior (4 items) |
| `MobileHome` | Pantalla principal movil |
| `MobileRideRequest` | Solicitar viaje con PriceCalculator |
| `MobileTarifas` | Visualizacion de tarifas |
| `MobileAyuda` | Centro de ayuda y FAQs |

---

## 🔌 API Routes

### `POST /api/calculate-distance`

Calcula la distancia entre dos puntos geograficos.

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

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Build de Produccion

```bash
npm run build
npm start
```

---

## 📞 Contacto

- **WhatsApp**: [+56 9 3310 1623](https://wa.me/56933101623)
- **Email**: ayuda@ridetaxi.com

---

<div align="center">
  <p>Hecho con amor para la comunidad latina</p>
  <p><strong>RideTaxi Latinos</strong> - Tu taxi de confianza</p>
</div>
