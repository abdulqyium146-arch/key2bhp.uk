import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { BUSINESS } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Auto Locksmith Blog | Advice & Tips | Key 2 BHP Manchester",
  description:
    "Practical advice from Key 2 BHP — what to do if you're locked out, how to replace lost car keys in Manchester, and more auto locksmith tips.",
  alternates: { canonical: `${BUSINESS.siteUrl}/blog` },
};

const posts = [
  {
    slug: "lost-car-keys-manchester",
    title: "Lost Your Car Keys in Manchester? Here's Exactly What to Do",
    excerpt:
      "Losing your car keys is stressful. This guide walks you through the fastest and most cost-effective options for getting back on the road in Manchester.",
    date: "2024-11-20",
    readTime: "5 min read",
    category: "Car Key Replacement",
    keywords: ["lost car keys Manchester", "replace lost car key Manchester"],
  },
  {
    slug: "locked-keys-in-car-what-to-do",
    title: "Locked Keys in Your Car? What to Do and Who to Call",
    excerpt:
      "Step-by-step guide for when you've locked your keys inside your car. What not to do, how to stay safe, and how to get back in quickly.",
    date: "2024-10-08",
    readTime: "4 min read",
    category: "Emergency Lockout",
    keywords: ["locked keys in car", "keys locked in car Manchester"],
  },
];

export default function BlogPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Blog" }]} />

      <section className="section-padding bg-background">
        <div className="container">
          <div className="max-w-2xl mb-12">
            <h1 className="text-4xl font-extrabold text-foreground mb-4">
              Auto Locksmith <span className="text-accent">Advice & Tips</span>
            </h1>
            <p className="text-lg text-foreground-muted leading-relaxed">
              Practical advice from our Manchester-based auto locksmith team — what to do in an emergency, how to handle lost keys, and how to avoid common car lock problems.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <Card className="h-full transition-all duration-200 hover:border-accent/50 group-hover:-translate-y-0.5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-2.5 py-0.5">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground-muted">{post.readTime}</span>
                    </div>
                    <h2 className="font-semibold text-foreground text-lg mb-3 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-foreground-muted leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-foreground-muted">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <ArrowRight className="h-4 w-4 text-foreground-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
