import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneOrManyToOneIcon: FC<IconInterface> = function RelationOneOrManyToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneOrManyToOneIcon ${className}`;
      return (
        <Icon alt="RelationOneOrManyToOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H19V19H17V17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H17V13H19V15Z" />

        </Icon>
      );
    };
    RelationOneOrManyToOneIcon.displayName = 'RelationOneOrManyToOneIcon';
      