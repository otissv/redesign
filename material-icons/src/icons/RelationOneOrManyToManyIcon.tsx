import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneOrManyToManyIcon: FC<IconInterface> = function RelationOneOrManyToManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneOrManyToManyIcon ${className}`;
      return (
        <Icon alt="RelationOneOrManyToMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H19L21 13Z" />

        </Icon>
      );
    };
    RelationOneOrManyToManyIcon.displayName = 'RelationOneOrManyToManyIcon';
      