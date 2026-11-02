import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Globální efekty: odhalení prvků s `data-reveal` při scrollu
 * a světlo sledující kurzor na prvcích s třídou `.spotlight`.
 */
const EffectsProvider = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const reveal = (el: Element) => el.setAttribute("data-revealed", "");
    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const watch = () =>
      document
        .querySelectorAll("[data-reveal]:not([data-revealed])")
        .forEach((el) => observer.observe(el));

    watch();
    const mutations = new MutationObserver(watch);
    mutations.observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
};

export default EffectsProvider;
