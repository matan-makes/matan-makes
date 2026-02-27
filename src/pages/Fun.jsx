import { useState, useEffect, useCallback, useMemo } from "react";
import funImages from "../data/funImages";

const imageModules = import.meta.glob("/src/assets/fun/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

function resolveImages(metadata) {
  return metadata
    .map((item) => {
      const key = Object.keys(imageModules).find((k) => k.endsWith(`/${item.filename}`));
      if (!key) return null;
      return { ...item, src: imageModules[key] };
    })
    .filter(Boolean);
}

function Fun() {
  const images = useMemo(() => resolveImages(funImages), []);
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">Fun</h1>

      {images.length === 0 ? (
        <p className="text-steel">No images yet — add some to <code>src/assets/fun/</code>!</p>
      ) : (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
          {images.map((img, i) => (
            <button
              key={img.filename}
              type="button"
              onClick={() => setSelected(i)}
              className="mb-4 break-inside-avoid block w-full cursor-pointer bg-transparent border-0 p-0 rounded-lg overflow-hidden group focus-visible:outline-2 focus-visible:outline-rose"
            >
              <img
                src={img.src}
                alt={img.description}
                className="w-full block rounded-lg transition-transform duration-200 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <span className="block mt-1.5 mb-0.5 text-sm text-left text-navy/80">
                {img.description}
              </span>
              <span className="block text-xs text-left text-steel">{img.date}</span>
            </button>
          ))}
        </div>
      )}

      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy/90 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={images[selected].description}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-2 -right-2 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-navy text-cloud text-xl border-0 cursor-pointer hover:bg-steel transition-colors"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={images[selected].src}
              alt={images[selected].description}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
            />
            <p className="mt-3 text-cloud text-sm text-center">
              {images[selected].description}
            </p>
            <p className="mt-1 text-steel text-xs text-center">
              {images[selected].date}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

export default Fun;
