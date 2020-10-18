import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelationManyToOneIcon: FC<IconInterface> = function RelationManyToOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationManyToOneIcon ${className}`;
      return (
        <Icon alt="RelationManyToOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H19V19H17V17H11V9H5L3 11H2V5H3L5 7H13V15H17V13H19V15Z" />

        </Icon>
      );
    };
    RelationManyToOneIcon.displayName = 'RelationManyToOneIcon';
      