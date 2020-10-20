import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneOrManyToOnlyOneIcon: FC<IconInterface> = function RelationOneOrManyToOnlyOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneOrManyToOnlyOneIcon ${className}`;
      return (
        <Icon alt="RelationOneOrManyToOnlyOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H7V11H5V9L3 11H2V5H3L5 7V5H7V7H13V15H16V13H18V15H19V13H21V15Z" />

        </Icon>
      );
    };
    RelationOneOrManyToOnlyOneIcon.displayName = 'RelationOneOrManyToOnlyOneIcon';
      