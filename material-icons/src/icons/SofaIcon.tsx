import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const SofaIcon: FC<IconInterface> = function SofaIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `SofaIcon ${className}`;
      return (
        <Icon alt="Sofa" className={classNames} {...propsRest}>
          <path d="M7,6H9A2,2 0 0,1 11,8V12H5V8A2,2 0 0,1 7,6M15,6H17A2,2 0 0,1 19,8V12H13V8A2,2 0 0,1 15,6M1,9H2A1,1 0 0,1 3,10V12A2,2 0 0,0 5,14H19A2,2 0 0,0 21,12V11L21,10A1,1 0 0,1 22,9H23A1,1 0 0,1 24,10V19H21V17H3V19H0V10A1,1 0 0,1 1,9Z" />

        </Icon>
      );
    };
    SofaIcon.displayName = 'SofaIcon';
      