"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h2>Something went wrong</h2>
          <p>{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset()}
            style={{
              marginTop: "12px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
