# <img src="https://raw.githubusercontent.com/amus-dev/owine/main/src/assets/logos/footer-logo.webp" alt="Logo Ö-61" width="260" />

# Ö-61 — Landing de Campaña · Formulario de Participación

Landing page desarrollada para la marca **Ö-61 (Estados Unidos)**.  
El objetivo de esta campaña es **captar usuarios**, registrar su información en una base de datos externa del cliente y participar en un **sorteo para ganar una sesión de tatuaje con Ami James**.

---

## 🚀 Tecnologías Utilizadas

- **Astro** — Framework para sitios rápidos, estáticos y orientados al contenido  
- **Tailwind CSS** — Estilos utilitarios para una maquetación consistente y escalable  

No se utilizan variables de entorno ni frameworks adicionales.

---

## 🛠️ Instalación

Clona el repositorio e instala las dependencias con tu gestor favorito:

### Usando PNPM
```bash
pnpm install
```

### Usando NPM
```bash
npm install
```

---

## 💻 Ambiente de Desarrollo

Inicia el entorno de desarrollo local:

### PNPM
```bash
pnpm run dev
```

### NPM
```bash
npm run dev
```

El proyecto estará disponible en:

```
http://localhost:4321
```

---

## 📦 Build para Producción

Para generar la versión optimizada:

```bash
pnpm run build
```

Esto creará la carpeta `dist/` lista para subir al servidor del cliente.

---

## 🎯 Objetivo del Proyecto

Este sitio cumple una única función:

### ➤ *Recibir información de los usuarios para participar en un sorteo oficial de Ö-61.*

Los datos enviados a través del formulario se almacenan en la infraestructura del cliente (Estados Unidos).  
Posteriormente, Ö-61 utilizará esta información para:

- Sorteo de una sesión de tatuaje gratuita  
- Acciones promocionales de marca  
- Contacto con el ganador de la campaña  

---

## 👀 URLs del Proyecto

- **Producción** → https://sessions.o61wine.com  
- **Desarrollo (Simplicity)** → https://simplicity.cl/owine  

---

## 📂 Arquitectura del Proyecto

El proyecto está ordenado con una estructura simple y clara:

```
src/
 ├── assets/       → Imágenes, logos, fuentes y PDFs
 ├── components/   → Componentes .astro reutilizables
 ├── const/        → Datos estáticos (ej: estados)
 ├── layouts/      → Layout base del sitio
 ├── pages/        → Páginas principales (index, form, congrats)
 └── utils/        → Validaciones y utilidades
```

---

## 👤 Autor

**Alexander Urrutia**  
GitHub: https://github.com/mts4  
Portafolio: https://www.codeamus.dev/
