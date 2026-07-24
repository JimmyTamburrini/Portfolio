import { Component, type ErrorInfo, type ReactNode } from 'react';

interface SceneBoundaryProps {
  children: ReactNode;
}

interface SceneBoundaryState {
  failed: boolean;
}

/** Keeps the complete portfolio usable when WebGL is disabled or scene setup fails. */
export class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { failed: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('The 3D scene could not be initialized.', error, info.componentStack);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="scene-fallback" role="img" aria-label="Abstract illuminated energy orb">
          <div className="fallback-orb">
            <i />
            <i />
            <i />
          </div>
          <p>3D rendering is unavailable. All projects remain accessible below.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
