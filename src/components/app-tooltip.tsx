import "react-tooltip/dist/react-tooltip.css";
import * as React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface OneAITooltipProps {
  id?: string;
  children: React.ReactElement;
  place?: PlacesType;
  classNameTooltip?: string;
}

export default function AppTooltip({
  id,
  children,
  place = "bottom",
  classNameTooltip,
  ...props
}: OneAITooltipProps) {
  return (
    <Tooltip id={id} place={place} className={classNameTooltip}>
      {children}
    </Tooltip>
  );
}
