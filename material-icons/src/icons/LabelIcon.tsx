import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const LabelIcon: FC<IconInterface> = function LabelIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LabelIcon ${className}`;
      return (
        <Icon alt="Label" className={classNames} {...propsRest}>
          <path d="M17.63,5.84C17.27,5.33 16.67,5 16,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z" />

        </Icon>
      );
    };
    LabelIcon.displayName = 'LabelIcon';
      