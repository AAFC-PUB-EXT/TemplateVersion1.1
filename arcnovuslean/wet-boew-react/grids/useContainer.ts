import { computeContainerCssClass } from "../../wet-boew-utils";

import type { ContainerProps } from "../../wet-boew-utils";
import { useMemo } from "react";

export function useContainer(props: ContainerProps) {
  const containerCssClass = useMemo(() => computeContainerCssClass(props), [
    props.variant,
    props.className,
  ]);
  return { containerCssClass };
}

export type { ContainerProps } from "../../wet-boew-utils";
