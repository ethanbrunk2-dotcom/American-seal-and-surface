"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const beforeAfterItems = [
  {
    id: 1,
    title: "Residential Driveway",
    description: "Complete driveway restoration with crack filling and two coats of premium sealer.",
    beforeLabel: "Faded & Cracked",
    afterLabel: "Sealed & Protected",
  },
  {
    id: 2,
    title: "Commercial Parking Lot",
    description: "Full parking lot seal coating with line striping for a local business.",
    beforeLabel: "Weathered Surface",
    afterLabel: "Like New",
  },
  {
    id: 3,
    title: "Large Residential Property",
    description: "Extensive driveway and walkway sealing for a luxury home.",
    beforeLabel: "Gray & Oxidized",
    afterLabel: "Rich Black Finish",
  },
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? beforeAfterItems.length - 1 : prev - 1));
    setSliderPosition(50);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === beforeAfterItems.length - 1 ? 0 : prev + 1));
    setSliderPosition(50);
  };

  const currentItem = beforeAfterItems[currentIndex];

  return (
    <section id="before-after" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            See the Transformation
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Drag the slider to see the dramatic difference our sealing services make.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border">
            <div className="absolute inset-0 flex">
              <div
                className="h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto bg-destructive/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-destructive font-bold text-xl">B</span>
                  </div>
                  <p className="text-foreground font-semibold">{currentItem.beforeLabel}</p>
                  <p className="text-muted-foreground text-sm mt-1">Before Sealing</p>
                </div>
              </div>
              <div
                className="h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center"
                style={{ width: `${100 - sliderPosition}%` }}
              >
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-primary font-bold text-xl">A</span>
                  </div>
                  <p className="text-foreground font-semibold">{currentItem.afterLabel}</p>
                  <p className="text-muted-foreground text-sm mt-1">After Sealing</p>
                </div>
              </div>
            </div>

            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <ChevronLeft className="w-4 h-4 text-primary-foreground" />
                <ChevronRight className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>

            <input
              type="range"
              min="10"
              max="90"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before and after comparison slider"
            />
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-foreground">{currentItem.title}</h3>
            <p className="text-muted-foreground mt-2">{currentItem.description}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {beforeAfterItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-secondary/80 transition-colors"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
