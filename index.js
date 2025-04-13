import { Analytics } from "@vercel/analytics/react"

function toProjects() {
    window.location.href = "projects"
}

function toContacts() {
    window.location.href = "contact"
}

function toAbout() {
    window.location.href = "index"
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* This is where you add Vercel Analytics */}
      <Analytics />
    </>
  );
}

export default MyApp;
