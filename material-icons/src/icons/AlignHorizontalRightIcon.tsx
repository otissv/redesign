import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const AlignHorizontalRightIcon: FC<IconInterface> = function AlignHorizontalRightIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlignHorizontalRightIcon ${className}`;
      return (
        <Icon alt="AlignHorizontalRight" className={classNames} {...propsRest}>
          <path d="M18 13V19H2V13H18M8 5V11H18V5H8M20 2V22H22V2H20Z" />

        </Icon>
      );
    };
    AlignHorizontalRightIcon.displayName = 'AlignHorizontalRightIcon';
      