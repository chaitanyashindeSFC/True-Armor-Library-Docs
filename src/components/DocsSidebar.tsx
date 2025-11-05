import { NavLink } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DocsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavSection {
  title: string;
  items: { label: string; path: string }[];
}

const navSections: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", path: "/docs" },
      { label: "Installation", path: "/docs/installation" },
      { label: "Quickstart", path: "/quickstart" },
    ],
  },
  {
    title: "Components",
    items: [
      { label: "Alerts", path: "/docs/components/alerts" },
      { label: "Buttons", path: "/docs/components/buttons" },
      { label: "Cards", path: "/docs/components/cards" },
      { label: "Badges", path: "/docs/components/badges" },
      { label: "Accordions", path: "/docs/components/accordions" },
      { label: "Modals", path: "/docs/components/modals" },
      { label: "Forms", path: "/docs/components/forms" },
      { label: "Breadcrumbs", path: "/docs/components/breadcrumbs" },
      { label: "Checkboxes", path: "/docs/components/checkboxes" },
      { label: "Context Menu", path: "/docs/components/context-menu" },
      { label: "Date Picker", path: "/docs/components/date-picker" },
      { label: "Dropdown", path: "/docs/components/dropdown" },
      { label: "File Input", path: "/docs/components/file-input" },
      { label: "Input", path: "/docs/components/input" },
      { label: "Progress", path: "/docs/components/progress" },
      { label: "Radio", path: "/docs/components/radio" },
      { label: "Range Slider", path: "/docs/components/rangeslider" },
      { label: "Stepper", path: "/docs/components/stepper" },
      { label: "Table", path: "/docs/components/table" },
      { label: "Toast", path: "/docs/components/toast" },
      { label: "Toggle Switch", path: "/docs/components/toggleswitch" },
      { label: "Tooltip", path: "/docs/components/tooltip" },
    ],
  },
];

const SCROLL_KEY = "docsSidebarScrollPosition";

const DocsSidebar = ({ isOpen, onClose }: DocsSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(navSections.map((s) => s.title))
  );

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      localStorage.setItem(SCROLL_KEY, scrollRef.current.scrollTop.toString());
    }
  };

  useEffect(() => {
    const savedScroll = localStorage.getItem(SCROLL_KEY);
    if (scrollRef.current && savedScroll) {
      scrollRef.current.scrollTop = parseInt(savedScroll, 10);
    }
  }, []);

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) newExpanded.delete(title);
    else newExpanded.add(title);
    setExpandedSections(newExpanded);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r bg-background transition-transform md:sticky md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* ✅ Scrollable area with styled thin scrollbar */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex h-full flex-col overflow-y-auto pb-10 custom-scrollbar"
        >
          <div className="flex items-center justify-between p-4 md:hidden">
            <span className="font-semibold">Documentation</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex-1 space-y-1 p-4">
            {navSections.map((section) => (
              <div key={section.title} className="pb-4">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      expandedSections.has(section.title) ? "" : "-rotate-90"
                    )}
                  />
                </button>

                {expandedSections.has(section.title) && (
                  <div className="mt-1 space-y-1 ml-2">
                    {section.items.map((item) => (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        end
                        onClick={() => window.innerWidth < 768 && onClose()}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:bg-muted hover:text-foreground"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default DocsSidebar;
