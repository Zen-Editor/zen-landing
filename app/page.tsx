"use client";

import {useState} from "react";
import {Spotlight} from "@/components/ui/spotlight";
import {GlowingEffect} from "@/components/ui/glowing-effect";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
    NavbarButton
} from "@/components/ui/navbar";
import {
    IconCode,
    IconDownload,
    IconBrandGithub,
    IconRocket,
    IconTopologyRing3,
    IconShield,
    IconCpu,
    IconAdjustmentsPlus
} from "@tabler/icons-react";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        {name: "Features", link: "#features"},
        {name: "Download", link: "#download"},
        {name: "GitHub", link: "https://github.com/zen-editor/zen"}
    ];

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white"/>

            <Navbar>
                <NavBody>
                    <NavbarLogo/>
                    <NavItems items={navItems}/>
                    <NavbarButton href="#download" variant="gradient">
                        Download Zen
                    </NavbarButton>
                </NavBody>
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo/>
                        <MobileNavToggle
                            isOpen={mobileMenuOpen}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        />
                    </MobileNavHeader>
                    <MobileNavMenu
                        isOpen={mobileMenuOpen}
                        onClose={() => setMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <NavbarButton href="#download" variant="gradient" className="mt-4">
                            Download Zen
                        </NavbarButton>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            <main className="relative z-10">
                <section className="min-h-screen flex items-center justify-center px-4 pt-32">
                    <div className="max-w-6xl mx-auto text-center">
                        <div className="relative mb-8">
                            <div className="relative inline-block">
                                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                                    <span
                                        className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                                      Zen
                                    </span>
                                </h1>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A blazingly fast, lightweight code editor built with Rust.<br/>
                            No bloat, no forced AI features—just pure coding performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            <button
                                className="group relative px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-neutral-100 transition-all duration-200 flex items-center gap-2">
                                <IconDownload size={20}/>
                                Download Now
                                <div className="absolute -inset-1">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-lg"
                                        blur={1}
                                        spread={20}
                                        proximity={50}
                                    />
                                </div>
                            </button>

                            <a
                                href="https://github.com/zen-editor/zen"
                                className="px-8 py-4 border border-neutral-600 text-white font-semibold rounded-lg hover:border-neutral-400 transition-all duration-200 flex items-center gap-2"
                            >
                                <IconBrandGithub size={20}/>
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
                            Built for Performance
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconTopologyRing3 className="w-12 h-12 text-yellow-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                                    <p className="text-neutral-400">
                                        Start up instantly and edit large files without lag.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconRocket className="w-12 h-12 text-blue-400"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Lightweight</h3>
                                    <p className="text-neutral-400">
                                        No unnecessary bloat or features you don&#39;t need.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconShield className="w-12 h-12 text-green-400"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Open Source</h3>
                                    <p className="text-neutral-400">
                                        Fully open source. Contribute, customize, and make it your own.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconCpu className="w-12 h-12 text-purple-400"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Rust Powered</h3>
                                    <p className="text-neutral-400">
                                        Built with modern Rust for memory safety, speed, and reliability you can count
                                        on.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconCode className="w-12 h-12 text-red-400"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">No AI Bloat</h3>
                                    <p className="text-neutral-400">
                                        Just a clean, focused coding experience. No AI autocomplete or subscriptions.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>
                            <div className="relative group">
                                <div
                                    className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
                                    <div className="mb-4">
                                        <IconAdjustmentsPlus className="w-12 h-12 text-red-400"/>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">Zen</h3>
                                    <p className="text-neutral-400">
                                        Feeling overwhelmed? Annoyed at AI autocomplete? Zen is here to help.
                                    </p>
                                </div>
                                <div className="absolute -inset-px">
                                    <GlowingEffect
                                        disabled={false}
                                        className="rounded-xl"
                                        blur={0}
                                        spread={15}
                                        proximity={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="download" className="py-20 px-4 bg-gradient-to-b from-transparent to-neutral-950/50">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Ready to Experience Zen?
                        </h2>
                        <p className="text-xl text-neutral-300 mb-12">
                            Make the switch to a faster, cleaner coding experience.
                        </p>

                        <div className="text-center">
                            <p className="text-neutral-400 mb-4">Install via script:</p>
                            <div className="inline-block bg-neutral-900 border border-neutral-700 rounded-lg p-4">
                                <code className="text-green-400 font-mono">
                                    curl -fsSL https://zen.thoq.dev/install | sh
                                </code>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative z-10 py-12 px-4 border-t border-neutral-800">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span className="font-bold text-white text-xl">Zen</span>
                            <span className="text-neutral-400">Editor</span>
                        </div>

                        <div className="flex space-x-6">
                            <a href="https://github.com/zen-editor/zen"
                               className="text-neutral-400 hover:text-white transition-colors">
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
                        <p className="text-neutral-400">
                            © {new Date().getFullYear()} Zen Industries. Open source software built with {"<3"}️
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}