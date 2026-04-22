declare module "lucide-react" {
  import type { FC, SVGProps } from "react";
  type IconProps = SVGProps<SVGSVGElement> & {
    size?: number | string;
    color?: string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
  };
  type Icon = FC<IconProps>;

  export const ArrowDown: Icon;
  export const BookOpen: Icon;
  export const Briefcase: Icon;
  export const Calendar: Icon;
  export const CheckCircle: Icon;
  export const CheckCircle2: Icon;
  export const ChevronDown: Icon;
  export const ChevronUp: Icon;
  export const Clock: Icon;
  export const ExternalLink: Icon;
  export const FlaskConical: Icon;
  export const Github: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const Send: Icon;
  export const Sparkles: Icon;
  export const Target: Icon;
  export const X: Icon;
  export const Zap: Icon;
  export const Building2: Icon;
}
