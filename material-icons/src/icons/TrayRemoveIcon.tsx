import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const TrayRemoveIcon: FC<IconInterface> = function TrayRemoveIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `TrayRemoveIcon ${className}`;
      return (
        <Icon alt="TrayRemove" className={classNames} {...propsRest}>
          <path d="M2 17A2 2 0 0 0 4 19H20A2 2 0 0 0 22 17V12H20V17H4V12H2M14.12 5.46L15.54 6.88L13.41 9L15.54 11.12L14.12 12.54L12 10.41L9.88 12.54L8.46 11.12L10.59 9L8.46 6.88L9.88 5.46L12 7.59Z" />

        </Icon>
      );
    };
    TrayRemoveIcon.displayName = 'TrayRemoveIcon';
      