import BubbleChart from "@material-ui/icons/BubbleChart";
import BlockingContent from "views/BlockingContent/BlockingContent.js";
import BlockedContents from "./views/BlockedContents/BlockedContents";


const dashboardRoutes = [
  {
    path: "/blockingContent",
    name: "Blocking Content",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: BlockingContent,
    layout: "/admin",
  },
  {
    path: "/News",
    name: "News",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: BlockedContents,
    layout: "/admin",
  },
];

export default dashboardRoutes;
