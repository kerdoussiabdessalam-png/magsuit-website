import React from "react";
// MagSuit Landing Page - Single-file React component
// Uses Tailwind CSS utility classes. Assumes Tailwind and shadcn/ui + lucide-react + framer-motion are available.

import { MotionConfig, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Zap, Smartphone, Box } from "lucide-react";

export default function MagSuitLanding() {
  return (
    <MotionConfig transition={{ duration: 0.45 }}>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
        {/* NAV */}
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-semibold">MS</div>
            <div>
              <div className="font-semibold">MagSuit</div>
              <div className="text-xs text-slate-500">Protection you can feel.</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-sm hover:underline">Features</a>
            <a href="#materials" className="text-sm hover:underline">Materials</a>
            <a href="#buy" className="text-sm hover:underline">Buy</a>
            <Button className="ml-2">Pre-order</Button>
          </div>
        </nav>

        {/* HERO */}
        <header className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              MagSuit
              <br />
              <span className="text-indigo-600">Protection you can feel.</span>
            </motion.h1>
            <p className="mt-6 text-lg text-slate-600">
              A magnetic laptop sleeve that transforms into a cushioned wrist rest — stays attached while you work, protects while you travel.
            </p>

            <div className="mt-8 flex gap-4 items-center">
              <Button className="px-6 py-3">Pre-order Now</Button>
              <a href="#features" className="text-sm text-slate-600 hover:underline">Learn more</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat icon={<ShoppingCart size={18} />} label="Pre-orders" value="Early bird" />
              <Stat icon={<Zap size={18} />} label="Style" value="Minimal / Premium" />
              <Stat icon={<Box size={18} />} label="Ships" value="Worldwide" />
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-[420px] bg-gradient-to-br from-slate-200 to-white rounded-2xl shadow-lg flex items-center justify-center">
              <img alt="MagSuit Product Mockup" src="/assets/magsuit-mockup.png" className="max-h-[360px]" />
            </div>
            <div className="absolute -bottom-8 left-6 w-64">
              <Card>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <img src="/assets/thumb-1.png" alt="thumb" className="w-12 h-8 object-cover rounded-md" />
                    <div>
                      <div className="text-sm font-medium">MagSuit — Space Grey</div>
                      <div className="text-xs text-slate-500">Memory-foam wrist support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </header>

        {/* FEATURES */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Attach & Stay"
              desc="Precision magnets lock the wrist rest to the laptop edge so it doesn't slide while typing."
              icon={<Zap size={22} />}
            />
            <Feature
              title="Ergonomic Comfort"
              desc="Memory-foam padding supports wrists, reduces fatigue and improves typing posture."
              icon={<Smartphone size={22} />}
            />
            <Feature
              title="Travel-ready Protection"
              desc="Durable outer shell absorbs shocks and keeps your laptop safe in transit."
              icon={<Box size={22} />}
            />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold">How it works</h3>
              <ol className="mt-4 space-y-3 text-slate-600">
                <li>1. Slide your laptop into the MagSuit sleeve.</li>
                <li>2. Fold the wrist pad and align it to the front edge.</li>
                <li>3. Strong but safe magnets secure the pad in place — type with comfort.</li>
              </ol>

              <div className="mt-6">
                <Button>Pre-order the MagSuit</Button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-xl p-6 shadow">
                <h4 className="font-medium">Specs</h4>
                <ul className="mt-3 text-sm text-slate-600 space-y-2">
                  <li>Fits laptops 11" — 16" (adjustable fit)</li>
                  <li>Exterior: vegan leather or Alcantara option</li>
                  <li>Core: impact-resistant foam + memory foam wrist rest</li>
                  <li>Magnets: shielded, laptop-safe</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIALS */}
        <section id="materials" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-2xl font-semibold">Materials & Care</h3>
            <p className="mt-3 text-slate-600">Premium materials chosen for durability and comfort. Easy to clean and built to last.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent>
                  <div className="font-medium">Vegan Leather</div>
                  <div className="text-sm mt-2 text-slate-600">Soft, premium finish — easy to wipe clean.</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="font-medium">Alcantara Option</div>
                  <div className="text-sm mt-2 text-slate-600">Luxurious texture for a tactile feel.</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="font-medium">Memory Foam</div>
                  <div className="text-sm mt-2 text-slate-600">Ergonomic support with slow rebound."</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* BUY / CTA */}
        <section id="buy" className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Pre-order MagSuit</h3>
              <p className="mt-2 text-slate-100/90">Get early-bird pricing and free worldwide shipping for a limited time.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm">Starting at</div>
                <div className="text-2xl font-bold">$59</div>
              </div>
              <Button className="bg-white text-indigo-600">Pre-order Now</Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <div className="font-semibold">MagSuit</div>
              <div>Protection you can feel.</div>
            </div>
            <div className="mt-4 md:mt-0">© {new Date().getFullYear()} MagSuit. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-white shadow flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center">{icon}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-slate-600 mt-1">{desc}</div>
        </div>
      </div>
    </div>
  );
}
