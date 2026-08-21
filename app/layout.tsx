import type {Metadata} from "next";
import "./globals.css";
export const metadata:Metadata={
 title:"Anna — Creative QA Portfolio",
 description:"The creative web, UX/UI, and QA portfolio of Sureeporn (Anna) Apaikawee.",
 openGraph:{title:"Anna — Creative QA Portfolio",description:"Test. Break. Improve.",images:["/og.png"]},
 twitter:{card:"summary_large_image",title:"Anna — Creative QA Portfolio",description:"Test. Break. Improve.",images:["/og.png"]},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
