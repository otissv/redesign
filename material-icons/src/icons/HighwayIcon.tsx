import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HighwayIcon: FC<IconInterface> = function HighwayIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HighwayIcon ${className}`;
      return (
        <Icon alt="Highway" className={classNames} {...propsRest}>
          <path d="M10,2L8,8H11V2H10M13,2V8H16L14,2H13M2,9V10H4V11H6V10H18L18.06,11H20V10H22V9H2M7,11L3.34,22H11V11H7M13,11V22H20.66L17,11H13Z" />

        </Icon>
      );
    };
    HighwayIcon.displayName = 'HighwayIcon';
      