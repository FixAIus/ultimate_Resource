"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface KPICardData {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  bulletPoints: {
    whatToAnalyze: string | string[];
    whyImportant: string | string[];
    whatItReveals: string | string[];
  };
}

const KPICard = ({
  className,
  data,
  isActive = false,
}: {
  className?: string;
  data: KPICardData;
  isActive?: boolean;
}) => {
  return (
    <div
      className={cn(
        "w-[560px] cursor-pointer h-[550px] overflow-hidden bg-gray-900/95 backdrop-blur border border-gray-700/50 rounded-2xl shadow-lg",
        isActive && "ring-2 ring-purple-400 ring-opacity-50",
        className
      )}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="flex items-center mb-6">
          <div className={cn("w-14 h-14 rounded-full flex items-center justify-center mr-4", data.iconBgColor)}>
            <div className={cn("w-7 h-7", data.iconColor)}>
              {data.icon}
            </div>
          </div>
          <h4 className="text-xl font-semibold text-white" style={{ fontSize: "calc(1.25rem + 10px)" }}>{data.title}</h4>
        </div>
        
        <div className="flex-1 space-y-4">
          <div className="space-y-3">
                            <div className="flex items-start">
                  <div>
                    <span className="font-semibold text-white text-xl">Analyze:</span>
                    {Array.isArray(data.bulletPoints.whatToAnalyze) ? (
                      <ul className="arrow-list space-y-1 text-white/85 mt-2">
                        {data.bulletPoints.whatToAnalyze.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/85 mt-1">{data.bulletPoints.whatToAnalyze}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <span className="font-semibold text-white text-xl">Why:</span>
                    {Array.isArray(data.bulletPoints.whyImportant) ? (
                      <ul className="arrow-list space-y-1 text-white/85 mt-2">
                        {data.bulletPoints.whyImportant.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/85 mt-1">{data.bulletPoints.whyImportant}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div>
                    <span className="font-semibold text-white text-xl">Insights Revealed:</span>
                    {Array.isArray(data.bulletPoints.whatItReveals) ? (
                      <ul className="arrow-list space-y-1 text-white/85 mt-2">
                        {data.bulletPoints.whatItReveals.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-white/85 mt-1">{data.bulletPoints.whatItReveals}</p>
                    )}
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KPIStackedCards = ({
  cards,
  stackOffset = 50,
  animationDelay = 0.1,
}: {
  cards: KPICardData[];
  stackOffset?: number;
  animationDelay?: number;
}) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(index);
  };

  const handleDotClick = (index: number) => setActiveCardIndex(index);
  const handlePrevCard = () => setActiveCardIndex((p) => (p - 1 + cards.length) % cards.length);
  const handleNextCard = () => setActiveCardIndex((p) => (p + 1) % cards.length);

  // Create a continuous queue that shows cards in order
  const createContinuousQueue = () => {
    const queueItems = [] as Array<{
      card: KPICardData;
      originalIndex: number;
      queuePosition: number;
      isActive: boolean;
    }>;
    
    // Always show the active card in the center
    queueItems.push({
      card: cards[activeCardIndex],
      originalIndex: activeCardIndex,
      queuePosition: 0, // Center position
      isActive: true
    });
    
    // Add queue cards to the left (cards that will come up next)
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (activeCardIndex + i) % cards.length;
      queueItems.push({
        card: cards[nextIndex],
        originalIndex: nextIndex,
        queuePosition: -i, // Left side queue positions
        isActive: false
      });
    }
    
    return queueItems;
  };

  const queueItems = createContinuousQueue();

  return (
    <div className="relative w-full h-full flex flex-col items-center py-8">
      {/* Cards Container - Wider to show the continuous queue with headroom for glow */}
      <div className="relative w-[1150px] h-[630px] mb-2 overflow-visible">
        {queueItems.map((item) => {
          const { card, originalIndex, queuePosition, isActive } = item;
          
          // Calculate stacking position for the continuous queue effect
          let xOffset = 0;
          let yOffset = 0;
          let zIndex = 0;
          let scale = 1;
          let opacity = 1;

          if (queuePosition === 0) {
            // Active card - center front position
            xOffset = 0;
            yOffset = 0;
            zIndex = 20;
            scale = 1;
            opacity = 1;
          } else {
            // Queue cards - always to the left with decreasing visibility
            const distance = Math.abs(queuePosition);
            xOffset = queuePosition * stackOffset; // Negative positions go left
            yOffset = distance * 15; // Downward offset for depth
            zIndex = 15 - distance;
            scale = 1 - (distance * 0.06); // Scale reduction for depth
            opacity = 1 - (distance * 0.1); // Opacity reduction for queue effect
          }

          return (
            <motion.div
              key={originalIndex}
              className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
              initial={false}
              animate={{
                x: xOffset,
                y: yOffset,
                scale: scale,
                opacity: opacity,
                zIndex: zIndex,
              }}
              transition={{
                duration: 0.55,
                ease: "easeInOut",
                delay: Math.abs(queuePosition) * animationDelay,
                type: "spring",
                stiffness: 70,
              }}
              onClick={() => handleCardClick(originalIndex)}
            >
              {/* Outer glow wrapper so highlights are visible on all sides */}
              <div
                className={cn(isActive ? "rounded-2xl" : undefined)}
                style={isActive ? { filter: "drop-shadow(0 0 22px rgba(168,85,247,0.45)) drop-shadow(0 6px 28px rgba(168,85,247,0.25))" } : undefined}
              >
                <KPICard
                  data={card}
                  isActive={isActive}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Navigation Controls - arrows + dots and index */}
      <div className="relative z-50 flex flex-col items-center space-y-3 pointer-events-auto" style={{ marginTop: '-30px' }}>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={handlePrevCard}
            aria-label="Previous slide"
            className="flex items-center justify-center w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 text-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === activeCardIndex 
                  ? "bg-purple-400 scale-125" 
                  : "bg-white/30 hover:bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <button
            onClick={handleNextCard}
            aria-label="Next slide"
            className="flex items-center justify-center w-7 h-7 rounded-full bg-white/25 hover:bg-white/40 text-white"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-white/70 text-sm">{activeCardIndex + 1} of {cards.length}</span>
      </div>
    </div>
  );
};

export { KPIStackedCards, KPICard };
export type { KPICardData };
