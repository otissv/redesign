import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const PatreonIcon: FC<IconInterface> = function PatreonIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PatreonIcon ${className}`;
      return (
        <Icon alt="Patreon" className={classNames} {...propsRest}>
          <path d="M14.82 2.41C18.78 2.41 22 5.65 22 9.62C22 13.58 18.78 16.8 14.82 16.8C10.85 16.8 7.61 13.58 7.61 9.62C7.61 5.65 10.85 2.41 14.82 2.41M2 21.6H5.5V2.41H2V21.6Z" />

        </Icon>
      );
    };
    PatreonIcon.displayName = 'PatreonIcon';
      