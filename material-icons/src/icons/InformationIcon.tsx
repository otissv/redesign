import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const InformationIcon: FC<IconInterface> = function InformationIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `InformationIcon ${className}`;
      return (
        <Icon alt="Information" className={classNames} {...propsRest}>
          <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />

        </Icon>
      );
    };
    InformationIcon.displayName = 'InformationIcon';
      