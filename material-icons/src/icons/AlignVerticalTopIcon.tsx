import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlignVerticalTopIcon: FC<IconInterface> = function AlignVerticalTopIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignVerticalTopIcon ${className}`;
      return (
        <Icon alt="AlignVerticalTop" className={classNames} {...propsRest}>
          <path d="M11 22H5V6H11V22M19 6H13V16H19V6M22 2H2V4H22V2Z" />

        </Icon>
      );
    };
    AlignVerticalTopIcon.displayName = 'AlignVerticalTopIcon';
      