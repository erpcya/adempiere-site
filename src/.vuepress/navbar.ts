import { navbar } from "vuepress-theme-hope";

export const enNavbarConfig = navbar([
  "/",
  {
    text: "About",
    icon: "code",
    prefix: "/about/",
    children: [
      { text: "About", icon: "software", link: "", activeMatch: "^/about/$" },
      {
        text: "Some History",
        children: ["the-beginning", "branding"],
      },
      {
        text: "Meeting",
        prefix: "meeting/",
        children: ["berlin-2009", "berlin-2014"],
      },
    ],
  },
  {
    text: "Product",
    icon: "code",
    prefix: "/product/",
    children: [
      { text: "Product", icon: "code", link: "", activeMatch: "^/product/$" },
      {
        text: "Technology",
        children: ["technology/", "business-process/", "features/", "demo/"],
      }
    ],
  },
  {
    text: "Community",
    icon: "code",
    prefix: "/community/",
    children: [
      { text: "Community", icon: "code", link: "", activeMatch: "^/community/$" },
      {
        text: "Community",
        children: ["code-of-conduct", "duties-and-rigths"],
      }
    ],
  },
  {
    text: "Support",
    icon: "software",
    prefix: "/support/",
    children: [
      {
        text: "Support",
        icon: "software",
        link: "",
        activeMatch: "^/support/$",
      },
      "community-ask/",
      "professional-services/",
    ],
  },
  {
    text: "Documentation",
    icon: "note",
    prefix: "/docs/",
    children: [
      { text: "Docs", link: "", icon: "note", activeMatch: "^/docs/$" },
      {
        text: "Intro",
        children: ["intro/basic-steps/", "intro/how-to-contribute/", "intro/auto-generated/"],
      },
      {
        text: "ERP Standard Process",
        children: ["standard-procedures/requisition-to-invoice/", "standard-procedures/quote-to-invoice/", "standard-procedures/open-items/", "standard-procedures/scm/", "standard-procedures/performance-analysis/"],
      },
      {
        text: "Material Management",
        children: ["material-management/product/", "material-management/warehouse/"],
      },
      {
        text: "Manufacturing",
        children: ["manufacturing/manufacturing/", "manufacturing/production-light/"],
      },
      {
        text: "Human Resource and Payroll",
        children: ["human-resource/human-resource/", "human-resource/payroll/", "human-resource/time-and-attendance/"],
      },
      {
        text: "Retail",
        children: ["retail/point-of-sales/", "retail/distribution/"],
      },
      {
        text: "Verticals",
        children: ["verticals/investment-and-loan/", "verticals/farmer-assistance-program/"],
      },
      {
        text: "Locations",
        children: ["locations/lve/", "locations/lmx/", "locations/lsv/", "locations/luy/"],
      },
      "videos/",
      "articles/",
      "links/"
    ],
  },
  {
    text: "Downloads",
    icon: "software",
    prefix: "/downloads/",
    children: [
      { text: "Downloads", icon: "software", link: "", activeMatch: "^/downloads/$" },
      {
        text: "Binary Files",
        children: ["docker/", "helm/", "operator/", "binary/", "github/"]
      }
    ],
  },
  {
    text: "Foundation",
    icon: "software",
    prefix: "/foundation/",
    children: [
      { text: "Foundation", icon: "software", link: "", activeMatch: "^/foundation/$" },
      {
        text: "How To",
        children: ["how-to-contribute", "membership", "board", "statutes", "sponsors"]
      }
    ],
  }
]);

export const zhNavbarConfig = navbar([
  "/zh/",
  "/zh/about/",
  "/zh/product/",
  "/zh/community/",
  "/zh/support/",
  "/zh/docs/",
  "/zh/downloads/",
  "/zh/foundation/",
]);

export const esNavbarConfig = navbar([
  "/es/",
  "/es/about/",
  "/es/product/",
  "/es/community/",
  "/es/support/",
  "/es/docs/",
  "/es/downloads/",
  "/es/foundation/",
]);