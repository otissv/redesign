import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelationZeroOrManyToZeroOrManyIcon: FC<IconInterface> = function RelationZeroOrManyToZeroOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationZeroOrManyToZeroOrManyIcon ${className}`;
      return (
        <Icon alt="RelationZeroOrManyToZeroOrMany" className={classNames} {...propsRest}>
          <path d="M21 13L19 15H18.79A2.5 2.5 0 0 0 14.21 15H13V7H9.79A2.5 2.5 0 0 0 5.21 7H5L3 5H2V11H3L5 9H5.21A2.5 2.5 0 0 0 9.79 9H11V17H14.21A2.5 2.5 0 0 0 18.79 17H19L21 19H22V13M7.5 9A1 1 0 1 1 8.5 8A1 1 0 0 1 7.5 9M16.5 17A1 1 0 1 1 17.5 16A1 1 0 0 1 16.5 17Z" />

        </Icon>
      );
    };
    RelationZeroOrManyToZeroOrManyIcon.displayName = 'RelationZeroOrManyToZeroOrManyIcon';
      