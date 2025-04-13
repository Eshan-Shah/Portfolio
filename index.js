import { Analytics } from "@vercel/analytics/react"

function toProjects() {
    window.location.href = "projects.html"
}

function toContacts() {
    window.location.href = "contact.html"
}

function toAbout() {
    window.location.href = "index.html"
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
