import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, HatGlasses, MessageSquareText, ArrowRight } from "lucide-react";

// ---------- Small subcomponents ----------
function TopNavLink({ to, children }) {
    const { pathname } = useLocation();
    const isActive = pathname === to; // exact match; adjust if you want startsWith

    return (
        <NavLink
            to={to}
            className="relative px-1 py-1 rounded-xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60"
            end
        >
            <span className={`font-medium ${isActive ? "text-emerald-900" : "text-black"} transition`}>
                {children}
            </span>

            {isActive && (
                <motion.span
                    layoutId="nav-underline"                // <- shared id makes it slide between links
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-emerald-700"
                    transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.2 }}
                />
            )}
        </NavLink>
    );
}

function SideLink({ to, children, onClick }) {
    const { pathname } = useLocation();
    const isActive = pathname === to;

    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={`w-full block rounded-xl p-3 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 transition
        ${isActive ? "bg-white/15" : "hover:bg-white/10"}`}
            end
        >
            <span className="font-medium text-white">{children}</span>
        </NavLink>
    );
}

// ---------- Main Nav ----------
export default function Nav({ open, panelRef, setOpen }) {
    // Drawer animation variants local to Nav
    const slideVariants = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { type: "spring", stiffness: 320, damping: 30 } },
        exit: { x: "-100%", transition: { duration: 0.2 } },
    };
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    };

    return (
        <>
            <header className="sticky top-0 z-40 backdrop-blur supports-backdrop-filter:bg-white/60 bg-white/70 border-b border-neutral-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img
                            src="/seekico.svg"
                            onError={(e) => {
                                e.currentTarget.src = "seekico.png";
                            }}
                            alt="SeekEasy"
                        />
                        <Link to="/home" className="font-semibold tracking-tight text-xl">
                            SeekEasy
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-6 text-sm relative">

                        <TopNavLink to="/home">Home</TopNavLink>
                        <TopNavLink to="/about">About Us</TopNavLink>
                        <TopNavLink to="/text-line">Text Line</TopNavLink>
                        <TopNavLink to="/privacy">Privacy</TopNavLink>
                        <TopNavLink to="/contact">Contact Us</TopNavLink>

                        <Link
                            to="/text-line"
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-emerald-800/30 hover:bg-emerald-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 transition"
                        >
                            <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                            <span className="font-medium">Text us now</span>
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        <Link
                            to="https://weather.com/"
                            className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-orange-800/30 hover:bg-orange-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-400/60 transition"
                        >
                            <HatGlasses className="h-4 w-4" aria-hidden="true" />
                            <span className="font-medium">QUICK EXIT: Weather</span>
                        </Link>

                    </nav>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setOpen(true)}
                        className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 text-neutral-700 hover:bg-neutral-100 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/60 cursor-pointer transition"
                        aria-label="Open menu"
                        aria-haspopup="dialog"
                        aria-expanded={open}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </header>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        <motion.button
                            key="overlay"
                            className="fixed inset-0 z-40 bg-black/40"
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={overlayVariants}
                            aria-label="Close menu"
                            onClick={() => setOpen(false)}
                        />

                        <motion.aside
                            key="panel"
                            className="fixed left-0 top-0 z-50 h-screen w-[88%] sm:w-[420px] bg-emerald-700 text-white shadow-2xl border-r border-emerald-800"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="menu-title"
                            ref={panelRef}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                        >
                            <div className="flex items-center justify-between p-4 border-b border-white/10">
                                <h2 id="menu-title" className="font-semibold text-lg">
                                    SeekEasy
                                </h2>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="inline-flex items-center justify-center rounded-xl p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <X className="h-6 w-6 text-emerald-900" />
                                </button>
                            </div>

                            <nav className="p-4">
                                <SideLink to="/home" onClick={() => setOpen(false)}>
                                    Home
                                </SideLink>
                                <SideLink to="/about" onClick={() => setOpen(false)}>
                                    About Us
                                </SideLink>
                                <SideLink to="/text-line" onClick={() => setOpen(false)}>
                                    Text Line
                                </SideLink>
                                <SideLink to="/privacy" onClick={() => setOpen(false)}>
                                    Privacy
                                </SideLink>
                                <SideLink to="/contact" onClick={() => setOpen(false)}>
                                    Contact Us
                                </SideLink>

                                <div className="mt-6">
                                    <Link
                                        to="/text-line"
                                        onClick={() => setOpen(false)}
                                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-emerald-800 shadow-sm ring-1 ring-inset ring-white/30 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40 transition"
                                    >
                                        <MessageSquareText className="h-5 w-5 text-black" aria-hidden="true" />
                                        <span className="font-medium text-black">Text us now</span>
                                    </Link>
                                </div>
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
