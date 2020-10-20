import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ChipIcon: FC<IconInterface> = function ChipIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ChipIcon ${className}`;
      return (
        <Icon alt="Chip" className={classNames} {...propsRest}>
          <path d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z" />

        </Icon>
      );
    };
    ChipIcon.displayName = 'ChipIcon';
      