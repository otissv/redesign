import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const AlertRhombusOutlineIcon: FC<IconInterface> = function AlertRhombusOutlineIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `AlertRhombusOutlineIcon ${className}`;
      return (
        <Icon alt="AlertRhombusOutline" className={classNames} {...propsRest}>
          <path d="M12 2C11.5 2 11 2.19 10.59 2.59L2.59 10.59C1.8 11.37 1.8 12.63 2.59 13.41L10.59 21.41C11.37 22.2 12.63 22.2 13.41 21.41L21.41 13.41C22.2 12.63 22.2 11.37 21.41 10.59L13.41 2.59C13 2.19 12.5 2 12 2M12 4L20 12L12 20L4 12M11 7V13H13V7M11 15V17H13V15Z" />

        </Icon>
      );
    };
    AlertRhombusOutlineIcon.displayName = 'AlertRhombusOutlineIcon';
      