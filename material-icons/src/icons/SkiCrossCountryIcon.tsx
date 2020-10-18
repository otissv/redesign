import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SkiCrossCountryIcon: FC<IconInterface> = function SkiCrossCountryIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SkiCrossCountryIcon ${className}`;
      return (
        <Icon alt="SkiCrossCountry" className={classNames} {...propsRest}>
          <path d="M15 1.2C16 1.2 16.8 2 16.8 3S16 4.8 15 4.8 13.2 4 13.2 3 14 1.2 15 1.2M11 23V21.7H9.3L11.7 14.9L14 18V21.7H13V23H20V21.7H15.8V16.5L13.3 12L14 9.2L15.1 11H20V9.1H16.4L14.4 5.8C14.1 5.3 13.5 5 12.9 5C12.7 5 12.6 5.1 12.4 5.1L7 6.8V12H8.8V8.3L11 7.7L7.4 21.7H4V23" />

        </Icon>
      );
    };
    SkiCrossCountryIcon.displayName = 'SkiCrossCountryIcon';
      