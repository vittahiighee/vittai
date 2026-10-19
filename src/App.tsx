import { Component, lazy, Suspense, type ErrorInfo, type ReactNode } from "react";
import { HeaderHero } from "@/components/vittahii/HeaderHero";
import { reportLovableError } from "@/lib/lovable-error-reporting";

const BelowFold = lazy(() =>
  import("@/components/vittahii/BelowFold").then(({ BelowFold: Component }) => ({
    default: Component,
  })),
);

type ErrorBoundaryState = { hasError: boolean };

class ErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  override state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
    reportLovableError(error, { boundary: "react_error_boundary" });
  }

  override render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <div>
            <h1>This page didn&apos;t load</h1>
            <p>Something went wrong. Please try refreshing the page.</p>
            <button type="button" onClick={() => window.location.reload()}>
              Try again
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export function App() {
  return (
    <ErrorBoundary>
      <main className="vittahii-page">
        <HeaderHero />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}
