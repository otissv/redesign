import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CameraRearVariantIcon: FC<IconInterface> = function CameraRearVariantIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CameraRearVariantIcon ${className}`;
      return (
        <Icon alt="CameraRearVariant" className={classNames} {...propsRest}>
          <path d="M6,0H18A2,2 0 0,1 20,2V22A2,2 0 0,1 18,24H6A2,2 0 0,1 4,22V2A2,2 0 0,1 6,0M12,2A2,2 0 0,0 10,4A2,2 0 0,0 12,6A2,2 0 0,0 14,4A2,2 0 0,0 12,2M13,18H9V20H13V22L16,19L13,16V18Z" />

        </Icon>
      );
    };
    CameraRearVariantIcon.displayName = 'CameraRearVariantIcon';
      