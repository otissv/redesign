import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const PandoraIcon: FC<IconInterface> = function PandoraIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `PandoraIcon ${className}`;
      return (
        <Icon alt="Pandora" className={classNames} {...propsRest}>
          <path d="M10,20A1,1 0 0,1 9,21H4V3H13.71A6.75,6.75 0 0,1 20.46,9.75C20.46,13.5 17.44,16.5 13.71,16.5H10V20Z" />

        </Icon>
      );
    };
    PandoraIcon.displayName = 'PandoraIcon';
      