import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const HomeRemoveOutlineIcon: FC<IconInterface> = function HomeRemoveOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `HomeRemoveOutlineIcon ${className}`;
      return (
        <Icon alt="HomeRemoveOutline" className={classNames} {...propsRest}>
          <path d="M12 2L2 12H4V21H20V12H22M12 5L18 11V19H6V11M14.12 10.46L15.54 11.88L13.41 14L15.54 16.12L14.12 17.54L12 15.41L9.88 17.54L8.47 16.12L10.59 14L8.47 11.88L9.88 10.47L12 12.59L14.12 10.46Z" />

        </Icon>
      );
    };
    HomeRemoveOutlineIcon.displayName = 'HomeRemoveOutlineIcon';
      