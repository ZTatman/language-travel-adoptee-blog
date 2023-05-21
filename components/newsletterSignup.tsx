"use client";

import { useEffect, useRef } from "react";

const UID = "c3e601a747";

function NewsletterSignup() {
  const newsletterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://language-travel-adoptee.ck.page/c3e601a747/index.js";
    script.async = true;
    script.type = "text/javascript";
    script.dataset.uid = UID;

    const targetEl = newsletterRef.current;
    if (targetEl) targetEl.appendChild(script);

    // cleanup
    return () => {
      if (targetEl && targetEl.contains(script)) targetEl.removeChild(script);
    };
  }, []);
  return <div ref={newsletterRef}></div>;
}

export default NewsletterSignup;
