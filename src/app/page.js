import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Head from "next/head";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return (
    <>
      <Head>
        <meta name="theme-color" content="#1D1E20" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-darkGray max-w-screen-2xl mx-auto">
        <SliceZone slices={page.data.slices} components={components} />
      </div>
    </>
  );
}

export async function generateMetadata() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
