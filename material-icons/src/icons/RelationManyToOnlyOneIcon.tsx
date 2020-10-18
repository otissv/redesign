import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign/ui-core";
    export const RelationManyToOnlyOneIcon: FC<IconInterface> = function RelationManyToOnlyOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationManyToOnlyOneIcon ${className}`;
      return (
        <Icon alt="RelationManyToOnlyOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H5L3 11H2V5H3L5 7H13V15H16V13H18V15H19V13H21V15Z" />

        </Icon>
      );
    };
    RelationManyToOnlyOneIcon.displayName = 'RelationManyToOnlyOneIcon';
      