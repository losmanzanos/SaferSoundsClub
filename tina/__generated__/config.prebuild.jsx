// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: process.env.GITHUB_BRANCH || process.env.HEAD || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "."
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "."
    }
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => values?.title ? values.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : "new-post"
          },
          defaultItem: () => ({
            date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
            heroImage: "Umbrella"
          })
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "date",
            label: "Date (YYYY-MM-DD)",
            required: true
          },
          {
            type: "string",
            name: "dateDisplay",
            label: "Date Display (e.g. May 5, 2026)",
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Meta Description (SEO)",
            required: true,
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "excerpt",
            label: "Card Excerpt (shown on Blog index \u2014 leave blank to use meta description)",
            ui: { component: "textarea" }
          },
          {
            type: "string",
            name: "heroImage",
            label: "Hero Image",
            options: [
              "Umbrella",
              "Beach",
              "Wave",
              "Palm",
              "Starfish",
              "Sand Dollar",
              "Stand",
              "Chair"
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Body",
            isBody: true
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ Items",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.question }) },
            fields: [
              {
                type: "string",
                name: "question",
                label: "Question",
                required: true
              },
              {
                type: "string",
                name: "answer",
                label: "Answer",
                required: true,
                ui: { component: "textarea" }
              }
            ]
          },
          {
            type: "string",
            name: "prevLabel",
            label: "\u2190 Previous Post Title"
          },
          {
            type: "string",
            name: "prevHref",
            label: "\u2190 Previous Post Filename (e.g. why-coping-strategies.html)"
          },
          {
            type: "string",
            name: "nextLabel",
            label: "Next Post \u2192 Title"
          },
          {
            type: "string",
            name: "nextHref",
            label: "Next Post \u2192 Filename"
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
