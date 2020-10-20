import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneOrManyToOneOrManyIcon: FC<IconInterface> = function RelationOneOrManyToOneOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneOrManyToOneOrManyIcon ${className}`;
      return (
        <Icon alt="RelationOneOrManyToOneOrMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17V19H17V17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H17V13H19V15L21 13Z" />

        </Icon>
      );
    };
    RelationOneOrManyToOneOrManyIcon.displayName = 'RelationOneOrManyToOneOrManyIcon';
      