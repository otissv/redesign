import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const LongitudeIcon: FC<IconInterface> = function LongitudeIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `LongitudeIcon ${className}`;
      return (
        <Icon alt="Longitude" className={classNames} {...propsRest}>
          <path d="M12 2A10 10 0 1 0 22 12A10.03 10.03 0 0 0 12 2M9.4 19.6A8.05 8.05 0 0 1 9.4 4.4A16.45 16.45 0 0 0 7.5 12A16.45 16.45 0 0 0 9.4 19.6M12 20A13.81 13.81 0 0 1 9.5 12A13.81 13.81 0 0 1 12 4A13.81 13.81 0 0 1 14.5 12A13.81 13.81 0 0 1 12 20M14.6 19.6A16.15 16.15 0 0 0 14.6 4.4A8.03 8.03 0 0 1 20 12A7.9 7.9 0 0 1 14.6 19.6Z" />

        </Icon>
      );
    };
    LongitudeIcon.displayName = 'LongitudeIcon';
      