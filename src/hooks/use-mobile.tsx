
import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener
    window.addEventListener("resize", checkMobile);
    
    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return !!isMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const checkTablet = () => {
      const width = window.innerWidth;
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
    };
    
    // Set initial value
    checkTablet();
    
    // Add event listener
    window.addEventListener("resize", checkTablet);
    
    // Clean up
    return () => window.removeEventListener("resize", checkTablet);
  }, []);

  return !!isTablet;
}

export function useDevice() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = !isMobile && !isTablet;
  
  return { isMobile, isTablet, isDesktop };
}
