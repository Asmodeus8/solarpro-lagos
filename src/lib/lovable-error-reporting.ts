type RuntimeErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type RuntimeErrorPayload = {
  message: string;
  stack?: string;
  filename?: string;
};

export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {},
  options: RuntimeErrorOptions = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  const payload: RuntimeErrorPayload = {
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  };

  void context;
  void options;
  void payload;
}

