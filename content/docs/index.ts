import FadeInConfig from "@/content/docs/animation/fade-in.content";
import RotateInConfig from "@/content/docs/animation/rotate-in.content";
import GradientFlowConfig from "@/content/docs/components/gradient-flow.content";
import BounceConfig from "@/content/docs/animation/bounce.content";
import GravityTextSwapConfig from "@/content/docs/modern-animation/gravity-text-swap.content";
import SmoothRevealConfig from "@/content/docs/animation/smooth-reveal.content";
import TextWriterConfig from "@/content/docs/modern-animation/text-writer.content";
import ScaleInConfig from "@/content/docs/animation/scale-in.content";
import ShimmerEffectConfig from "@/content/docs/components/shimmer-effect.content";
import FlipCardConfig from "@/content/docs/animation/flip-card.content";
import MorphingCardConfig from "@/content/docs/modern-animation/morphing-card.content";
import GlowingCardConfig from "./modern-animation/glowing-card.content";
import SparklingGridConfig from "@/content/docs/components/sparkling-grid.content";
import SubscribeButtonConfig from "@/content/docs/components/subscribe-button.content";
import { DocsConfigType } from "@/types/docs-config.type";
import FadeInUnblurContent from "./animation/fade-in-unblur.content";
import TextShineConfig from "./components/text-shine.content";

const DocsContentConfig: DocsConfigType = {
  animation: {
    "fade-in": FadeInConfig,
    "rotate-in": RotateInConfig,
    bounce: BounceConfig,
    "scale-in": ScaleInConfig,
    "smooth-reveal": SmoothRevealConfig,
    "flip-card": FlipCardConfig,
    "fade-in-unblur": FadeInUnblurContent,
  },
  "modern-animation": {
    "gravity-text-swap": GravityTextSwapConfig,
    "text-writer": TextWriterConfig,
    "morphing-card": MorphingCardConfig,
    "glowing-card": GlowingCardConfig,
  },
  components: {
    "gradient-flow": GradientFlowConfig,
    "shimmer-effect": ShimmerEffectConfig,
    "subscribe-button": SubscribeButtonConfig,
    "sparkling-grid": SparklingGridConfig,
    "text-shine": TextShineConfig,
  },
};

export default DocsContentConfig;
