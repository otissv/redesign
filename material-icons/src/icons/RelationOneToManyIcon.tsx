import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneToManyIcon: FC<IconInterface> = function RelationOneToManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneToManyIcon ${className}`;
      return (
        <Icon alt="RelationOneToMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H19L21 13Z" />

        </Icon>
      );
    };
    RelationOneToManyIcon.displayName = 'RelationOneToManyIcon';
      