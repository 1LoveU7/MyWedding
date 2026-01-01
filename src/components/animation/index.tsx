import { useEffect, useRef } from "react";

export function useRevealItems<T extends HTMLElement>() {
  const refs = useRef<T[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const once = el.dataset.once !== undefined;

          if (entry.isIntersecting) {
            el.classList.add("is-visible");

            // nếu chỉ chạy 1 lần → unobserve luôn
            if (once) {
              observerRef.current?.unobserve(el);
            }
          } else {
            // chỉ remove nếu KHÔNG phải once
            if (!once) {
              el.classList.remove("is-visible");
            }
          }
        });
      },
      { threshold: 0.2 },
    );

    refs.current.forEach((el) => el && observerRef.current!.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (el: T | null) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
      observerRef.current?.observe(el);
    }
  };
}
