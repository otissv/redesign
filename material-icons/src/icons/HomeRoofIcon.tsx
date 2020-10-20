import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeRoofIcon: FC<IconInterface> = function HomeRoofIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeRoofIcon ${className}`;
      return (
        <Icon alt="HomeRoof" className={classNames} {...propsRest}>
          <path d="M19 16H22L12 7L2 16H5L12 9.69L19 16M7 8.81V7H4V11.5L7 8.81Z" />

        </Icon>
      );
    };
    HomeRoofIcon.displayName = 'HomeRoofIcon';
      