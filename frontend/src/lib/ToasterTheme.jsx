import { Toaster } from 'react-hot-toast';

function ToasterTheme() {
    return (
        <>
            <Toaster
                position="top-center"
                toastOptions={{
                    // Default styling (all toasts)
                    style: {
                        background: "#0d1117",        // deep dark
                        color: "#E2E8F0",             // soft gray text
                        border: "1px solid #1f2a33",  // subtle glass border
                        backdropFilter: "blur(8px)",  // glass effect
                    },

                    // Success toast color (green)
                    success: {
                        style: {
                            background: "#0f2d27",
                            color: "#b4f9c8",
                            border: "1px solid #1a4a3d",
                            boxShadow: "0 0 12px rgba(50, 255, 150, 0.10)",
                        },
                        iconTheme: {
                            primary: "#00D68F",
                            secondary: "#0d1117",
                        },
                    },

                    // Error toast (red)
                    error: {
                        style: {
                            background: "#2a0e0e",
                            color: "#ffb3b3",
                            border: "1px solid #5a1a1a",
                            boxShadow: "0 0 12px rgba(255, 50, 50, 0.10)",
                        },
                        iconTheme: {
                            primary: "#FF4C4C",
                            secondary: "#0d1117",
                        },
                    },

                    // Loading toast (cyan)
                    loading: {
                        style: {
                            background: "#0a1f24",
                            color: "#a5f3fc",
                            border: "1px solid #134e5b",
                            boxShadow: "0 0 12px rgba(0, 200, 255, 0.3)",
                        },
                    },
                }}
            />
        </>
    );
}

export default ToasterTheme;