
import { CSSProperties } from "react";

// const geistSans = Geist({
//     variable: "--font-geist-sans",
//     subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//     variable: "--font-geist-mono",
//     subsets: ["latin"],
// });


// const gloriaHallelujah = Gloria_Hallelujah({
//     subsets: ['latin'],
//     weight: ['400'],
//     variable: "--font-gloria-hallelujah",
// })

const lato = localFont({
  src: [
    {
      path: './lato/lato-v24-latin-100.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './lato/lato-v24-latin-300.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './lato/lato-v24-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './lato/lato-v24-latin-900.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
})

// const alexandria = Alexandria({
//     subsets: ['latin'],
//     weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//     variable: "--font-alexandria",
// })

// const zenTokyoZoo = Zen_Tokyo_Zoo({
//     subsets: ['latin'],
//     weight: ['400'],
//     variable: "--font-zen-tokyo-zoo",
// })

// const cantarell = Cantarell({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     variable: "--font-cantarell",
// })

// const inconsolate = Inconsolata({
//     subsets: ['latin'],
//     weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
//     variable: "--font-inconsolate"
// })


const roboto = localFont({
  src: [
    {
      path: './roboto/roboto-v47-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './roboto/roboto-v47-latin-600.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './roboto/roboto-v47-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './roboto/roboto-v47-latin-700.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})



export {
    lato,
    roboto
}

function localFont(arg0: { src: { path: string; weight: string; style: string; }[]; }) {
    // This is a mock implementation for localFont, similar to next/font/local
    // In a real Next.js app, you would use `import localFont from "next/font/local"`
    // Here, we just return an object with a className and the font-face definitions for demonstration.

    const fontFamily = "LocalFont";
    const fontFaces = arg0.src.map((font, idx) => `
        @font-face {
            font-family: '${fontFamily}';
            src: url('${font.path}') format('woff2');
            font-weight: ${font.weight};
            font-style: ${font.style};
            font-display: swap;
        }
    `).join("\n");

    // Inject font-face into the document (for demo purposes)
    if (typeof window !== "undefined" && !document.getElementById("local-font-style")) {
        const style = document.createElement("style");
        style.id = "local-font-style";
        style.innerHTML = fontFaces;
        document.head.appendChild(style);
    }

    return {
        className: "local-font",
        style: { fontFamily } as CSSProperties,
        variable: "--font-local-font"
    };
}

