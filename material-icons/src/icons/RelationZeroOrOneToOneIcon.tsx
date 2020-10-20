import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationZeroOrOneToOneIcon: FC<IconInterface> = function RelationZeroOrOneToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationZeroOrOneToOneIcon ${className}`;
      return (
        <Icon alt="RelationZeroOrOneToOne" className={classNames} {...propsRest}>
          <path d="M19 15V13H17V15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5V5H3V7H2V9H3V11H5V9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H17V19H19V17H22V15M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z" />

        </Icon>
      );
    };
    RelationZeroOrOneToOneIcon.displayName = 'RelationZeroOrOneToOneIcon';
      