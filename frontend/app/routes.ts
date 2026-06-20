import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/dashboard.tsx"),
    route("chart", "routes/chart.tsx"),
    route("patterns", "routes/patterns.tsx"),
  ]),
] satisfies RouteConfig;
