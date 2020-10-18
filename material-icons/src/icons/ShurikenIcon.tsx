import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const ShurikenIcon: FC<IconInterface> = function ShurikenIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ShurikenIcon ${className}`;
      return (
        <Icon alt="Shuriken" className={classNames} {...propsRest}>
          <path d="M14.5 9.5L12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5M12 13.7C11.1 13.7 10.3 13 10.3 12C10.3 11.1 11 10.3 12 10.3C12.9 10.3 13.7 11 13.7 12C13.7 12.9 12.9 13.7 12 13.7Z" />

        </Icon>
      );
    };
    ShurikenIcon.displayName = 'ShurikenIcon';
      