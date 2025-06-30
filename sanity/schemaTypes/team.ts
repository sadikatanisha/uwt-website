import { defineType, defineField } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", title: "Name" }),
    defineField({ name: "role", type: "string", title: "Role" }),
    defineField({ name: "bio", type: "string", title: "Bio" }),
    defineField({
      name: "image",
      type: "image",
      title: "Team Image",
      options: { hotspot: true },
    }),
  ],
});
