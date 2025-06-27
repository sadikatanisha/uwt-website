import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      rows: 4,
    }),
    defineField({
      name: "icon",
      type: "string",
      title: "Icon Name",
      description: "Lucide icon name (e.g. 'Shield', 'Heart', 'Users')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Category Image",
      options: { hotspot: true },
    }),
  ],
});
