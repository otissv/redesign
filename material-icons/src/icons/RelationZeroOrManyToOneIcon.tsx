import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationZeroOrManyToOneIcon: FC<IconInterface> = function RelationZeroOrManyToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationZeroOrManyToOneIcon ${className}`;
      return (
        <Icon alt="RelationZeroOrManyToOne" className={classNames} {...propsRest}>
          <path d="M19 15V13H17V15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5L3 5H2V11H3L5 9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H17V19H19V17H22V15M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z" />

        </Icon>
      );
    };
    RelationZeroOrManyToOneIcon.displayName = 'RelationZeroOrManyToOneIcon';
      