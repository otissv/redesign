import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const CompareVerticalIcon: FC<IconInterface> = function CompareVerticalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompareVerticalIcon ${className}`;
      return (
        <Icon alt="CompareVertical" className={classNames} {...propsRest}>
          <path d="M14 15V22H16V15H19L15 11L11 15H14M13 9H10V2H8V9H5L9 13L13 9Z" />

        </Icon>
      );
    };
    CompareVerticalIcon.displayName = 'CompareVerticalIcon';
      