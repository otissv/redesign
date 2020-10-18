import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelationOnlyOneToManyIcon: FC<IconInterface> = function RelationOnlyOneToManyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOnlyOneToManyIcon ${className}`;
      return (
        <Icon alt="RelationOnlyOneToMany" className={classNames} {...propsRest}>
          <path d="M22 13V19H21L19 17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H19L21 13Z" />

        </Icon>
      );
    };
    RelationOnlyOneToManyIcon.displayName = 'RelationOnlyOneToManyIcon';
      