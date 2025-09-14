// app/page.tsx
'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type Product = {
  id: number
  title: string
  subtitle: string
  excerpt: string
  img: string
}

const PRODUCTS: Product[] = [
  { id: 1, title: 'علبة مقوّاة مطبوعة', subtitle: 'كرتون مموج - طباعة كاملة', excerpt: 'علبة مقوّاة بتصميم مخصص للطباعة بوضوح عالي ومتين للشحن.', img: '/pic1.png' },
  { id: 2, title: 'صندوق للتجزئة', subtitle: 'تصميم مضاد للرطوبة', excerpt: 'علب مصممة لتعرض المنتجات بأمان في المتاجر مع نافذة عرض.', img: '/pic1.png' },
  { id: 3, title: 'صواني بيض (Egg trays)', subtitle: 'مخلوط ورقي قوي', excerpt: 'صواني متينة وقابلة لإعادة التدوير، تناسب المنتجات الهشة.', img: '/pic1.png' },
]

export default function Page() {
const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const [selected, setSelected] = useState<Product | null>(null)

  // reveal on scroll
  useScrollReveal()

  return (
    <div className="min-h-screen bg-[#241625] text-slate-50 font-inter antialiased scroll-smooth">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

      <main className="max-w-7xl mx-auto px-5 sm:px-8 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <section className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/6 px-3 py-1 rounded-full text-sm">
            <BadgeIcon />
            <span className="text-xs text-slate-200">خبرة صناعية و طباعة عالية الجودة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight reveal">
            حلول تغليف متكاملة — تصميم، إنتاج، توصيل
          </h2>

          <p className="text-slate-300 max-w-xl reveal" style={{ transitionDelay: '120ms' }}>
            نقدم علب كرتون، صناديق جاهزة، وتغليفات متخصصة تحافظ على منتجاتك أثناء الشحن والعرض. نستخدم خامات
            عالية الجودة وتقنيات طباعة متقدمة لضمان مظهرٍ احترافي وحماية فعّالة.
          </p>

          <div className="flex flex-wrap gap-3 reveal" style={{ transitionDelay: '200ms' }}>
            <a className="px-5 py-3 rounded-lg bg-amber-50 text-[#2b0b2b] font-semibold shadow-sm hover:scale-[1.02] transition-transform" href="#projects">عرض المنتجات</a>
            <a className="px-5 py-3 rounded-lg border border-white/6 hover:bg-white/5 transition" href="#contact">طلب عرض سعر</a>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-4 reveal" style={{ transitionDelay: '280ms' }}>
            <ContactCard />
            <Stats />
          </div>
        </section>

        <section>
          <div className="relative rounded-2xl overflow-hidden border border-white/6 bg-gradient-to-t from-[rgba(255,255,255,0.02)] to-transparent p-3 reveal" style={{ transitionDelay: '340ms' }}>
            <TiltCard className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
              <Image src="/PHOTO-2025-09-09-22-36-42.jpg" alt="SyriaBack" fill sizes="(max-width: 768px) 100vw, 520px" className="object-cover" priority />
            </TiltCard>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white/6 p-3 rounded-lg">
                <h4 className="text-sm font-semibold">خدمة سريعة</h4>
                <p className="text-xs text-slate-300 mt-1">التسليم المحلي والدولي وفق جدول متفق عليه.</p>
              </div>
              <div className="bg-white/6 p-3 rounded-lg">
                <h4 className="text-sm font-semibold">عروض مخصصة</h4>
                <p className="text-xs text-slate-300 mt-1">تصميمات خاصة بطلب العميل وطباعات بألوان ثابتة.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <h3 className="text-2xl font-bold mb-6 reveal">خدماتنا</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ServiceCard title="تصميم مخصص" desc="نماذج أولية وMockups قبل الإنتاج لضمان تطابق الأبعاد وألوان الطباعة." icon={<DesignIcon />} />
          <ServiceCard title="طباعة احترافية" desc="طباعة CMYK مع خيارات لمسات خاصة (Spot UV - طلاء- فويل)." icon={<PrintIcon />} />
          <ServiceCard title="تغليف صناعي" desc="علب مموجة، صواني بيض، مقطوعات داخلية، وتغليف حماية للمنتجات." icon={<BoxIcon />} />
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold reveal">منتجات مميزة</h3>
          <p className="text-sm text-slate-300">عرض أحدث أعمالنا ومنتجات قابلة للتخصيص حسب حاجتك.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <AnimatedProduct key={p.id} product={p} onOpen={() => setSelected(p)} />
          ))}
        </div>
      </section>

      <section id="events" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <h3 className="text-2xl font-bold mb-6 reveal">أحداثنا وآخر التحديثات</h3>
        <ol className="border-l border-white/6 pl-6 space-y-6">
          <li className="relative reveal">
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center text-[#2b0b2b] font-bold">•</span>
            <div className="text-sm">
              <div className="font-semibold">معرض التغليف الدولي</div>
              <div className="text-slate-300 text-xs">شاركنا بأحدث تصاميم التغليف — معرض قادم في 2025/11</div>
            </div>
          </li>
          <li className="relative reveal" style={{ transitionDelay: '80ms' }}>
            <span className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-white/6 flex items-center justify-center text-slate-200 font-bold">•</span>
            <div className="text-sm">
              <div className="font-semibold">شراكة جديدة</div>
              <div className="text-slate-300 text-xs">انطلاق خط إنتاج جديد لتغليف الأغذية.</div>
            </div>
          </li>
        </ol>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
        <div className="bg-white/6 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h4 className="text-xl font-bold">تواصل معنا لطلب عرض أسعار</h4>
            <p className="text-slate-300 mt-2">سنعمل معك على تصميم تغليف يلائم منتجك وميزانيتك مع عين على الحماية والجمالية.</p>

            <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input className="bg-transparent border border-white/6 rounded-md p-3" placeholder="الاسم" />
              <input className="bg-transparent border border-white/6 rounded-md p-3" placeholder="البريد الإلكتروني" />
              <input className="col-span-1 sm:col-span-2 bg-transparent border border-white/6 rounded-md p-3" placeholder="اسم المنتج / ملاحظة" />
              <div className="col-span-1 sm:col-span-2 flex gap-3">
                <button className="flex-1 px-4 py-3 rounded-md bg-amber-50 text-[#2b0b2b] font-semibold">أرسل الطلب</button>
                <a className="px-4 py-3 rounded-md border border-white/6" href="mailto:syria-back@gmail.com">راسلنا</a>
              </div>
            </form>
          </div>

          <aside className="p-4 rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]">
            <h5 className="font-semibold">معلومات الاتصال</h5>
            <ul className="mt-3 text-sm space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><PhoneIcon /> +963 994 572 101</li>
              <li className="flex items-center gap-2"><PhoneIcon /> +90 536 316 2267</li>
              <li className="flex items-center gap-2"><MailIcon /> syria-back@gmail.com</li>
            </ul>
            <div className="mt-4 flex gap-2">
              <a className="flex-1 px-3 py-2 rounded-md bg-amber-50 text-[#2b0b2b] text-center" href="#">واتساب</a>
              <a className="flex-1 px-3 py-2 rounded-md border border-white/6 text-center" href="#">خريطة</a>
            </div>
          </aside>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-400 border-t border-white/6">© {new Date().getFullYear()} SyriaBack — جميع الحقوق محفوظة</footer>

      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      <style jsx>{`
        /* reveal animation */
        .reveal { opacity: 0; transform: translateY(14px); transition: opacity 420ms ease, transform 420ms cubic-bezier(.2,.9,.2,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }

        /* product card 3D styles (preserve-3d) */
        .tilt { transform-style: preserve-3d; will-change: transform; transition: box-shadow 220ms ease, transform 220ms ease; }
        .tilt-inner { transform-style: preserve-3d; }

        /* subtle floating for hero image */
        @keyframes floaty { 0% { transform: translateY(0px); } 50% { transform: translateY(-6px); } 100% { transform: translateY(0px); } }
        .floating { animation: floaty 6s ease-in-out infinite; }

        /* respects reduce motion */
        @media (prefers-reduced-motion: reduce) {
          .floating { animation: none; }
          .reveal { transition: none; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}

/* ------------------ Helpers / small components ------------------ */

function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const els = Array.from(document.querySelectorAll('.reveal')) as HTMLElement[]
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // optional: unobserve to avoid re-trigger
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* Header */
function Header({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (s: boolean) => void }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(10,6,12,0.35)] border-b border-white/6">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <div className="hidden md:block">
            <h1 className="text-lg font-semibold leading-none">SyriaBack للتغليف</h1>
            <p className="text-xs text-slate-300">تصميم، إنتاج وتوريد حلول التغليف</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline hover:underline-offset-4" href="#services">الخدمات</a>
          <a className="hover:underline hover:underline-offset-4" href="#projects">منتجات</a>
          <a className="hover:underline hover:underline-offset-4" href="#events">الأحداث</a>
          <a className="hover:underline hover:underline-offset-4" href="#contact">تواصل</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a className="text-sm px-4 py-2 rounded-lg bg-amber-50/10 hover:bg-amber-50/20 transition" href="#contact" aria-label="WhatsApp">واتساب</a>
          <a className="text-sm px-4 py-2 rounded-lg border border-white/6 hover:bg-white/5 transition" href="#" aria-label="Download catalog">تحميل الكتالوج</a>
        </div>

        <div className="md:hidden">
<button onClick={() => setMobileOpen((s) => !s)} aria-label="Toggle menu" className="p-2 rounded-md bg-white/6">
  <MenuIcon />
</button>
        </div>
      </div>
      {/* mobile (kept simple) */}
    </header>
  )
}

/* TiltCard: applies pointer tilt 3d effect to children */
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let frame = 0
    let px = 0, py = 0, tx = 0, ty = 0

    function handleMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      // target rotation
      tx = x * 12
      ty = -y * 8
      start()
    }

    function handleLeave() {
      tx = 0; ty = 0
      start()
    }

    function animate() {
      px += (tx - px) * 0.12
      py += (ty - py) * 0.12
      if (el) {
        (el as HTMLDivElement).style.transform = `perspective(1200px) rotateX(${py}deg) rotateY(${px}deg) translateZ(2px)`;
        (el as HTMLDivElement).style.boxShadow = `${-px * 6}px ${py * 6}px 36px rgba(0,0,0,0.45)`
      }
      frame = requestAnimationFrame(animate)
    }

    function start() {
      if (!frame) frame = requestAnimationFrame(animate)
    }

    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerleave', handleLeave)
    el.addEventListener('pointercancel', handleLeave)

    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerleave', handleLeave)
      el.removeEventListener('pointercancel', handleLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className={`tilt floating ${className}`}>
      <div className="tilt-inner">{children}</div>
    </div>
  )
}

/* Animated product card with 3D hover and reveal */
function AnimatedProduct({ product, onOpen }: { product: Product; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // add small entrance delay for visual rhythm
    el.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1), box-shadow 280ms ease, opacity 420ms ease'
    el.style.opacity = '0'
    const t = setTimeout(() => {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <article ref={ref} className="group bg-white/6 rounded-2xl overflow-hidden border border-white/6 hover:shadow-lg transition" aria-labelledby={`product-${product.id}`}>
      <div className="relative h-44 sm:h-48">
        <TiltCard className="relative h-full w-full">
          <Image src={product.img} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform" />
        </TiltCard>
      </div>
      <div className="p-4">
        <h4 id={`product-${product.id}`} className="font-semibold">{product.title}</h4>
        <p className="text-sm text-slate-300 mt-1">{product.subtitle}</p>
        <p className="text-sm text-slate-300 mt-2 line-clamp-3">{product.excerpt}</p>
        <div className="mt-4 flex items-center gap-2">
          <button onClick={onOpen} className="px-3 py-2 rounded-md bg-amber-50 text-[#2b0b2b] font-semibold hover:translate-y-[-2px] transition-transform">عرض</button>
          <a className="text-sm px-3 py-2 rounded-md border border-white/6 hover:bg-white/5" href="#">اطلب الآن</a>
        </div>
      </div>
    </article>
  )
}

/* Product Modal */
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl bg-[#121013] rounded-2xl overflow-hidden border border-white/6 shadow-xl transform-gpu">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-auto">
            <Image src={product.img} alt={product.title} fill className="object-cover" />
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold">{product.title}</h4>
            <p className="text-slate-300 mt-2">{product.subtitle}</p>
            <p className="text-slate-300 mt-4">{product.excerpt}</p>
            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 rounded-md bg-amber-50 text-[#2b0b2b]" href="#">اطلب الآن</a>
              <button onClick={onClose} className="px-4 py-2 rounded-md border border-white/6">إغلاق</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Small components & icons (same as before) */

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-md bg-amber-50/10 flex items-center justify-center border border-white/6">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="7" width="18" height="10" rx="1.5" stroke="url(#g)" strokeWidth="1.2" />
          <path d="M3 7l9-4 9 4" stroke="url(#g)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#FFD7B5" />
              <stop offset="1" stopColor="#D7A07A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="leading-none">
        <div className="text-sm font-semibold">SyriaBack</div>
      </div>
    </div>
  )
}

function ContactCard() {
  return (
    <div className="flex-1 bg-white/6 p-3 rounded-lg">
      <div className="text-xs text-slate-300">ساعات العمل</div>
      <div className="font-semibold">السبت - الخميس • 8:00 - 18:00</div>
      <div className="mt-3 text-xs text-slate-300">نحن متاحون للاستشارات الفنية وطلبات العينة.</div>
    </div>
  )
}

function Stats() {
  const [years, setYears] = useState(0)
  const [projects, setProjects] = useState(0)
  const [satisfaction, setSatisfaction] = useState(0)

  useEffect(() => {
    const duration = 1500 // المدة الإجمالية للعد (ms)
    const start = performance.now()

    function animate(time: number) {
      const progress = Math.min((time - start) / duration, 1)
      setYears(Math.floor(progress * 15))
      setProjects(Math.floor(progress * 200))
      setSatisfaction(Math.floor(progress * 100))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])
  return (
    <div className="flex-1 grid grid-cols-3 gap-2">
      <div className="bg-white/6 p-3 rounded-lg text-center">
        <div className="font-bold text-lg">{years}+</div>
        <div className="text-xs text-slate-300">سنوات</div>
      </div>
      <div className="bg-white/6 p-3 rounded-lg text-center">
        <div className="font-bold text-lg">{projects}+</div>
        <div className="text-xs text-slate-300">مشروع</div>
      </div>
      <div className="bg-white/6 p-3 rounded-lg text-center">
        <div className="font-bold text-lg">{satisfaction}%</div>
        <div className="text-xs text-slate-300">رضا العملاء</div>
      </div>
    </div>
  )
}

function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] border border-white/6 reveal" style={{ transitionDelay: '120ms' }}>
      <div className="w-12 h-12 rounded-lg bg-white/6 flex items-center justify-center">{icon}</div>
      <h4 className="mt-4 font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  )
}

/* icons */
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)
const BadgeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M12 2l2.5 5L20 8l-4 3 1 6-5-3-5 3 1-6L4 8l5.5-.9L12 2z" fill="#FFD7B5" />
  </svg>
)
const DesignIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 21v-3l11-11 3 3L9 21H3z" fill="#FFD7B5" /></svg>)
const PrintIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><rect x="4" y="4" width="16" height="10" rx="1.5" fill="#FFD7B5" /><rect x="7" y="14" width="10" height="6" rx="1" fill="#E6BFA7" /></svg>)
const BoxIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" fill="#FFD7B5" /></svg>)
const PhoneIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M22 16.92v3a1 1 0 0 1-1.11 1 19.8 19.8 0 0 1-8.63-3.04 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 3.08 3.11 1 1 0 0 1 4.1 2h3a1 1 0 0 1 1 .75c.12.72.35 1.42.68 2.06a1 1 0 0 1-.24 1.04L8.5 7.91a15.5 15.5 0 0 0 6.59 6.59l1.06-1.06a1 1 0 0 1 1.04-.24c.64.33 1.34.56 2.06.68a1 1 0 0 1 .75 1v3z" fill="#FFD7B5" /></svg>)
const MailIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M3 6.5v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-11" stroke="#FFD7B5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M21 6 12 13 3 6" stroke="#FFD7B5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
