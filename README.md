# Newgen Prime Hero

Build a single-page hero section for a construction company website called 
NEWGEN TRADERS. The tagline is "Integrated Construction, PEB, Fabrication 
& Building Material Solutions". This should be a standalone React component 
with Three.js / React Three Fiber for 3D animation.

DESIGN DIRECTION:
- Dark industrial theme: deep navy (#0a0f1e) to near-black background
- Accent colors: molten orange (#f97316) and steel blue (#38bdf8)
- Typography: Bold, heavy sans-serif (use Inter or Bebas Neue via Google Fonts)
- Feel: Premium industrial — like a Tesla meets a steel factory

HERO LAYOUT (full viewport height):
- Navbar: Logo "NEWGEN TRADERS" left, nav links right 
  (About, Services, Contact) — glassmorphism style
- Center: Large headline "Building the Future of Industry" with a 
  word-by-word fade-in animation
- Subtext: "Construction • PEB • Steel Fabrication • Material Supply"
  with a typewriter effect cycling through the 4 services
- Two CTA buttons: "Explore Services" (filled orange) and 
  "Contact Us" (ghost/outline)
- Bottom: Scrolling marquee ticker showing: 
  "PEB STRUCTURES • WAREHOUSES • FACTORIES • RCC WORKS • 
   STRUCTURAL STEEL • TMT SUPPLY • INDUSTRIAL SHEDS •"

3D ANIMATION (Three.js / React Three Fiber):
- Render a slowly rotating wireframe industrial building / warehouse 
  frame in the background right side — glowing steel-blue edges
- Add floating particles (like dust/sparks) drifting upward slowly
- Mouse parallax: the 3D object subtly shifts based on cursor position
- On page load: camera slowly zooms out from inside the wireframe structure

ANIMATIONS (use Framer Motion):
- Staggered entrance: logo → nav → headline → subtext → CTAs
- Each word in the headline animates up from below with blur-to-sharp effect
- Buttons have a glow pulse on hover (orange glow for primary)
- Marquee ticker scrolls infinitely left

TECHNICAL NOTES:
- Use Vite + React + Tailwind CSS
- Three.js via @react-three/fiber and @react-three/drei
- Framer Motion for UI animations
- Make it fully responsive (mobile: stack layout, hide 3D or simplify to 
  CSS animation)
- No backend needed — pure frontend hero section
- Export as clean component: <HeroSection />

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3f2a6419-f888-4702-9354-64a394237a7f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
# Newgentraders
# Newgentraders
