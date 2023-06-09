import "react-tooltip/dist/react-tooltip.css";
import * as React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

interface TooltipProps {
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
}: TooltipProps) {
  return (
    <Tooltip id={id} place={place} className={classNameTooltip}>
      {children}
    </Tooltip>
  );
}
