import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LabelVariantOutlineIcon: FC<IconInterface> = function LabelVariantOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LabelVariantOutlineIcon ${className}`;
      return (
        <Icon alt="LabelVariantOutline" className={classNames} {...propsRest}>
          <path d="M6.5,17H15L18.5,12L15,7H6.5L10,12L6.5,17M15,19H3L7.5,12L3,5H15C15.69,5 16.23,5.3 16.64,5.86L21,12L16.64,18.14C16.23,18.7 15.69,19 15,19Z" />

        </Icon>
      );
    };
    LabelVariantOutlineIcon.displayName = 'LabelVariantOutlineIcon';
      