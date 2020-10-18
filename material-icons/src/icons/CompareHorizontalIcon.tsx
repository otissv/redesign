import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const CompareHorizontalIcon: FC<IconInterface> = function CompareHorizontalIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `CompareHorizontalIcon ${className}`;
      return (
        <Icon alt="CompareHorizontal" className={classNames} {...propsRest}>
          <path d="M9 14H2V16H9V19L13 15L9 11V14M15 13V10H22V8H15V5L11 9L15 13Z" />

        </Icon>
      );
    };
    CompareHorizontalIcon.displayName = 'CompareHorizontalIcon';
      