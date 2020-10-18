import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CrosshairsOffIcon: FC<IconInterface> = function CrosshairsOffIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CrosshairsOffIcon ${className}`;
      return (
        <Icon alt="CrosshairsOff" className={classNames} {...propsRest}>
          <path d="M20.94 11C20.5 6.83 17.17 3.5 13 3.06V1H11V3.06C9.87 3.18 8.81 3.5 7.84 4.03L9.34 5.53C10.16 5.19 11.06 5 12 5C15.87 5 19 8.13 19 12C19 12.94 18.81 13.84 18.5 14.65L20 16.15C20.5 15.19 20.82 14.13 20.95 13H23V11H20.94M3 4.27L5.04 6.31C3.97 7.62 3.25 9.23 3.06 11H1V13H3.06C3.5 17.17 6.83 20.5 11 20.94V23H13V20.94C14.77 20.74 16.38 20.03 17.69 18.96L19.73 21L21 19.73L4.27 3L3 4.27M16.27 17.54C15.09 18.45 13.61 19 12 19C8.13 19 5 15.87 5 12C5 10.39 5.55 8.91 6.46 7.73L16.27 17.54Z" />

        </Icon>
      );
    };
    CrosshairsOffIcon.displayName = 'CrosshairsOffIcon';
      