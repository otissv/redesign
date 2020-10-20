import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneToOneOrManyIcon: FC<IconInterface> = function RelationOneToOneOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneToOneOrManyIcon ${className}`;
      return (
        <Icon alt="RelationOneToOneOrMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17V19H17V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H17V13H19V15L21 13Z" />

        </Icon>
      );
    };
    RelationOneToOneOrManyIcon.displayName = 'RelationOneToOneOrManyIcon';
      