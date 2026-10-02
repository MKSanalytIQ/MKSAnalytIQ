import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/ads")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$service",
      params: { service: "google-ads-management" },
      statusCode: 301,
    });
  },
});
