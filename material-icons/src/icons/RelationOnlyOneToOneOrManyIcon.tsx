import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOnlyOneToOneOrManyIcon: FC<IconInterface> = function RelationOnlyOneToOneOrManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOnlyOneToOneOrManyIcon ${className}`;
      return (
        <Icon alt="RelationOnlyOneToOneOrMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17V19H17V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H17V13H19V15L21 13Z" />

        </Icon>
      );
    };
    RelationOnlyOneToOneOrManyIcon.displayName = 'RelationOnlyOneToOneOrManyIcon';
      