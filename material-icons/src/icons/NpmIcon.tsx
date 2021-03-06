import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const NpmIcon: FC<IconInterface> = function NpmIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `NpmIcon ${className}`;
      return (
        <Icon alt="Npm" className={classNames} {...propsRest}>
          <path d="M4,10V14H6V11H7V14H8V10H4M9,10V15H11V14H13V10H9M12,11V13H11V11H12M14,10V14H16V11H17V14H18V11H19V14H20V10H14M3,9H21V15H12V16H8V15H3V9Z" />

        </Icon>
      );
    };
    NpmIcon.displayName = 'NpmIcon';
      