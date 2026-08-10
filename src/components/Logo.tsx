import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="brand-logo-link">
      <span className="brand-logo-wrap" aria-label="7thbreed Ltd">
        <span className="brand-logo-art" aria-hidden="true">
          <span className="brand-logo-art__cyan" />
          <span className="brand-logo-art__steel" />
          <span className="brand-logo-art__blue" />
          <span className="brand-logo-art__grid" />
          <span className="brand-logo-art__text">TH</span>
          <span className="brand-logo-art__r">®</span>
        </span>
        {!compact && (
          <span className="brand-logo-title">
            <span className="brand-logo-title__accent">7thbreed</span> Ltd
          </span>
        )}
      </span>
    </Link>
  );
}
