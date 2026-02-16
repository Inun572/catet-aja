import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CatetAja",
    short_name: "CatetAja",
    description: "Aplikasi catatan pengeluaran bareng yang simple dan playful.",
    start_url: "/login",
    display: "standalone",
    background_color: "#FFF7ED",
    theme_color: "#00c29f",
    orientation: "portrait",
    lang: "id-ID",
    icons: [
      {
        "src": "/icons/catet-aja-192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icons/catet-aja-512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "any"
      },
      {
        "src": "/icons/catet-aja-512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
      },
    ]
  }
  
}