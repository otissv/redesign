import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOneToOnlyOneIcon: FC<IconInterface> = function RelationOneToOnlyOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOneToOnlyOneIcon ${className}`;
      return (
        <Icon alt="RelationOneToOnlyOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H7V11H5V9H2V7H5V5H7V7H13V15H16V13H18V15H19V13H21V15Z" />

        </Icon>
      );
    };
    RelationOneToOnlyOneIcon.displayName = 'RelationOneToOnlyOneIcon';
      