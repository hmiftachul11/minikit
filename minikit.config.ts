const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

/**
 * MiniApp configuration object. Must follow the mini app manifest specification.
 *
 * @see {@link https://docs.base.org/mini-apps/features/manifest}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "eyJmaWQiOjEzNTYxMjIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgyMDg3NjQ3NzJhYjQ0N0M3MTI0RDk3REJhZkM0NTM4NjI0ZGI4RjQ2In0",
    payload: "eyJkb21haW4iOiJtaW5pa2l0LWJldGEudmVyY2VsLmFwcCJ9",
    signature: "MHgzMDljYzVjNmU1ZWZmZWVlYzBjODYzMTNmN2QxZmUyYzQwYjFiNDc2NjNiNTMzZDM0M2UxM2RlYjY3OGI3N2Y4MzA3MzRhYWE3Zjg1ZmJiY2ViZGE2MDA2NmEwM2VlZmU5MTAwYTRiZTEwMWM4ZjNkNzkxZjIyNzM0MjlkMzFkZjFi",
  },
  baseBuilder: {
    allowedAddresses: [0x4030986A078f97fbdC74d43dAFeb646D6caBb8A9],
  },
  miniapp: {
    version: "1",
    name: "my-minikit-app",
    subtitle: "",
    description: "",
    screenshotUrls: [],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "utility",
    tags: ["example"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
