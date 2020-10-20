import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationManyToManyIcon: FC<IconInterface> = function RelationManyToManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationManyToManyIcon ${className}`;
      return (
        <Icon alt="RelationManyToMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17H11V9H5L3 11H2V5H3L5 7H13V15H19L21 13Z" />

        </Icon>
      );
    };
    RelationManyToManyIcon.displayName = 'RelationManyToManyIcon';
      