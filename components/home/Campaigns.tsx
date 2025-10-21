import { client } from "@/sanity/lib/client";
import React from "react";
import CampaignsClient from "./CampaignsClient";

type Campaign = {
  id: string;
  name: string;
  year?: string;
  imageUrl?: string;
  description: React.ReactNode;
};

const query = `*[_type == "campaign"] | order(name asc) {
  "id": _id,
  name,
  description,
  "imageUrl": image.asset->url
}`;

export default async function Campaigns() {
  const campaigns = (await client.fetch(query)) as Campaign[];

  return <CampaignsClient campaigns={campaigns} />;
}
