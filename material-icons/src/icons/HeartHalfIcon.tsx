import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const HeartHalfIcon: FC<IconInterface> = function HeartHalfIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HeartHalfIcon ${className}`;
      return (
        <Icon alt="HeartHalf" className={classNames} {...propsRest}>
          <path d="M13,7.2V17.74L13,20.44L12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C10,3 13,5 13,7.2Z" />

        </Icon>
      );
    };
    HeartHalfIcon.displayName = 'HeartHalfIcon';
      