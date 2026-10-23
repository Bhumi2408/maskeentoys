// src/app/llms.txt/route.js
import { blogs } from "../blog/data/blogs";
import { landingPages } from "../data/landingPages";

const BASE_URL = "https://www.playareamanufacturer.com";

export const dynamic = "force-static";

const mainPages = [
  {
    path: "",
    title: "Home",
    desc: "Soft play area manufacturer in Delhi NCR — overview, product collections and FAQs.",
  },
  {
    path: "/about",
    title: "About Us",
    desc: "Company background, legal status and the kinds of spaces we build play areas for.",
  },
  {
    path: "/our-products",
    title: "Our Products",
    desc: "Full catalogue of soft play sets, slides, roll sets, climbers, ball pools and play area equipment.",
  },
  {
    path: "/new-arrival",
    title: "New Arrivals",
    desc: "Latest soft play equipment and indoor playground structures.",
  },
  {
    path: "/children-soft-play-equipment-supplier",
    title: "Children Soft Play Equipment Supplier for Schools",
    desc: "Soft play range for preschools and schools, age-wise equipment guide, materials, safety and supply process.",
  },
  {
    path: "/indoor-play-area-setup-in-delhi",
    title: "Indoor Play Area Setup in Delhi",
    desc: "Indoor play area design and installation for schools, malls, cafés and homes.",
  },
  {
    path: "/our-clients",
    title: "Our Clients",
    desc: "Schools and businesses we have supplied.",
  },
  {
    path: "/contact",
    title: "Contact",
    desc: "Address, phone, email and enquiry form for quotations.",
  },
];

function link(path, title, desc) {
  return `- [${title}](${BASE_URL}${path})${desc ? `: ${desc}` : ""}`;
}

export function GET() {
  const body = `# Maskeen Toys

> Maskeen Toys Pvt. Ltd. is a soft play area and children's play equipment manufacturer based in Kirti Nagar Industrial Area, New Delhi, in business since 1948. It designs, manufactures and installs soft play equipment, indoor playgrounds and custom play areas for preschools, schools, daycares, play cafés, malls and residential societies across India.

- Products: soft slider sets, roll sets, climbers, beam sets, ball pools, soft rockers, role-play and theme sets, and complete custom soft play areas
- Service area: on-site installation in Delhi NCR (Delhi, Noida, Gurugram, Ghaziabad, Faridabad); packed supply with setup guidance across India
- Address: 10/62 S.S.J.M.D. Tower, Kirti Nagar Industrial Area, New Delhi - 110015
- Phone / WhatsApp: +91-98116-44688
- Email: sales@maskeentoy.com

## Main pages

${mainPages.map((p) => link(p.path, p.title, p.desc)).join("\n")}

## Solutions

${landingPages.map((p) => link(`/${p.slug}`, p.metaTitle.trim(), p.metaDescription.trim())).join("\n")}

## Blog

${blogs.map((b) => link(`/blog/${b.slug}`, b.title.trim(), b.metaDescription.trim())).join("\n")}

## Optional

- [Sitemap](${BASE_URL}/sitemap.xml)
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
