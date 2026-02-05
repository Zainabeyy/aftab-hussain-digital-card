import { useState } from "react";

export default function ImageLoad({
  src,
  alt,
  className,
}:{src:string, alt:string, className:string}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      {!loaded && (
        <div />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`
          ${className}
          transition-opacity duration-300
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}
