import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Introduction from "./pages/docs/Introduction";
import Installation from "./pages/docs/Installation";
import Quickstart from "./pages/Quickstart";

import Alerts from "./pages/docs/components/Alerts";
import Buttons from "./pages/docs/components/Buttons";
import Badges from "./pages/docs/components/Badges";
import Accordions from "./pages/docs/components/Accordions";
import Modals from "./pages/docs/components/Modals";
import Forms from "./pages/docs/components/Forms";
import Cards from "./pages/docs/components/Cards";
import Breadcrumbs from "@/pages/docs/components/Breadcrumbs";
import Checkboxes from "@/pages/docs/components/Checkboxes";
import ContextMenu from "@/pages/docs/components/ContextMenu";
import DatePickerDoc from "@/pages/docs/components/DatePicker";
import Dropdown from "@/pages/docs/components/Dropdown";
import FileInput from "@/pages/docs/components/FileInput";
import InputDoc from "@/pages/docs/components/Input";
import PaginationDoc from "@/pages/docs/components/Pagination";
import ProgressDoc from "@/pages/docs/components/Progress";
import RadioDoc from "@/pages/docs/components/Radio";
import RangeSliderDoc from "@/pages/docs/components/RangeSlider";
import StepperDoc from "@/pages/docs/components/Stepper";
import TableDoc from "@/pages/docs/components/Table";
import Theming from "./pages/docs/Theming";

import '@true-armor/atoms-ta/styles.css';

const TabsDoc = lazy(() => import("./pages/docs/components/Tabs"));
const ToastDoc = lazy(() => import("./pages/docs/components/Toast"));
const ToggleSwitchDoc = lazy(() => import("./pages/docs/components/ToggleSwitch"));
const TooltipDoc = lazy(() => import("./pages/docs/components/Tooltip"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 🔹 Main pages */}
          <Route path="/" element={<Index />} />
          <Route path="/docs" element={<Introduction />} />
          <Route path="/docs/installation" element={<Installation />} />
          <Route path="/quickstart" element={<Quickstart />} />
          <Route path="/docs/theming" element={<Theming />} />

          {/* 🔹 Component documentation pages (no DocsLayout wrapper) */}
          <Route path="/docs/components/accordions" element={<Accordions />} />
          <Route path="/docs/components/alerts" element={<Alerts />} />
          <Route path="/docs/components/badges" element={<Badges />} />
          <Route path="/docs/components/breadcrumbs" element={<Breadcrumbs />} />
          <Route path="/docs/components/buttons" element={<Buttons />} />
          <Route path="/docs/components/cards" element={<Cards />} />
          <Route path="/docs/components/checkboxes" element={<Checkboxes />} />
          <Route path="/docs/components/context-menu" element={<ContextMenu />} />
          <Route path="/docs/components/date-picker" element={<DatePickerDoc />} />
          <Route path="/docs/components/dropdown" element={<Dropdown />} />
          <Route path="/docs/components/file-input" element={<FileInput />} />
          <Route path="/docs/components/input" element={<InputDoc />} />
          <Route path="/docs/components/modals" element={<Modals />} />
          <Route path="/docs/components/pagination" element={<PaginationDoc />} />
          <Route path="/docs/components/progress" element={<ProgressDoc />} />
          <Route path="/docs/components/radio" element={<RadioDoc />} />
          <Route path="/docs/components/rangeslider" element={<RangeSliderDoc />} />
          <Route path="/docs/components/stepper" element={<StepperDoc />} />
          <Route path="/docs/components/table" element={<TableDoc />} />
          <Route
            path="/docs/components/tabs"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TabsDoc />
              </Suspense>
            }
          />
          <Route
            path="/docs/components/toast"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ToastDoc />
              </Suspense>
            }
          />
          <Route
            path="/docs/components/toggleswitch"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ToggleSwitchDoc />
              </Suspense>
            }
          />
          <Route
            path="/docs/components/tooltip"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TooltipDoc />
              </Suspense>
            }
          />
          <Route path="/docs/components/forms" element={<Forms />} />

          {/* 🔹 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
