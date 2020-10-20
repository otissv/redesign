import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationZeroOrManyToManyIcon: FC<IconInterface> = function RelationZeroOrManyToManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationZeroOrManyToManyIcon ${className}`;
      return (
        <Icon alt="RelationZeroOrManyToMany" className={classNames} {...propsRest}>
          <path d="M21 13L19 15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5L3 5H2V11H3L5 9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H19L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9Z" />

        </Icon>
      );
    };
    RelationZeroOrManyToManyIcon.displayName = 'RelationZeroOrManyToManyIcon';
      