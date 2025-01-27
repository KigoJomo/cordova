// app/collections/[slug]/page.tsx

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <section className="">
      <h1>{slug.replace(/-/g, " ")}</h1>
    </section>
  );
}
