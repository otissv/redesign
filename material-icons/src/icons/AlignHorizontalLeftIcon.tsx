import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlignHorizontalLeftIcon: FC<IconInterface> = function AlignHorizontalLeftIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignHorizontalLeftIcon ${className}`;
      return (
        <Icon alt="AlignHorizontalLeft" className={classNames} {...propsRest}>
          <path d="M22 13V19H6V13H22M6 5V11H16V5H6M2 2V22H4V2H2" />

        </Icon>
      );
    };
    AlignHorizontalLeftIcon.displayName = 'AlignHorizontalLeftIcon';
      