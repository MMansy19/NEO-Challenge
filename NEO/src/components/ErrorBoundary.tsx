import { Component, ErrorInfo, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="flex justify-center items-center h-screen italic text-center text-red-600">
          Something went wrong. Please try again later.
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
