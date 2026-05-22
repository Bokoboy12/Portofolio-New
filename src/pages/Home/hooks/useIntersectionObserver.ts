import { useEffect } from "react";

interface UseIntersectionObserverProps {
  ref: React.RefObject<Element | null>;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function useIntersectionObserver({
  ref,
  className = "show",
  threshold = 0.3,
  once = true,
}: UseIntersectionObserverProps) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(className);

            if (once) observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [ref, className, threshold, once]);
}
