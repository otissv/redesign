import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationManyToOneOrManyIcon: FC<IconInterface> = function RelationManyToOneOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationManyToOneOrManyIcon ${className}`;
      return (
        <Icon alt="RelationManyToOneOrMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17V19H17V17H11V9H5L3 11H2V5H3L5 7H13V15H17V13H19V15L21 13Z" />

        </Icon>
      );
    };
    RelationManyToOneOrManyIcon.displayName = 'RelationManyToOneOrManyIcon';
      