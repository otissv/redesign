import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const FloorLampVariantIcon: FC<IconInterface> = function FloorLampVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `FloorLampVariantIcon ${className}`;
      return (
        <Icon alt="FloorLampVariant" className={classNames} {...propsRest}>
          <path d="M7 2L10 9H14L17 2H7M15.92 22L13 15V22H11V15L8.08 22H5.92L10.92 10H13.08L18.08 22H15.92Z" />

        </Icon>
      );
    };
    FloorLampVariantIcon.displayName = 'FloorLampVariantIcon';
      