import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const RelationOnlyOneToOnlyOneIcon: FC<IconInterface> = function RelationOnlyOneToOnlyOneIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `RelationOnlyOneToOnlyOneIcon ${className}`;
      return (
        <Icon alt="RelationOnlyOneToOnlyOne" className={classNames} {...propsRest}>
          <path d="M22 15V17H21V19H19V17H18V19H16V17H11V9H8V11H6V9H5V11H3V9H2V7H3V5H5V7H6V5H8V7H13V15H16V13H18V15H19V13H21V15Z" />

        </Icon>
      );
    };
    RelationOnlyOneToOnlyOneIcon.displayName = 'RelationOnlyOneToOnlyOneIcon';
      