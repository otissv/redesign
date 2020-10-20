import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const ZendIcon: FC<IconInterface> = function ZendIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `ZendIcon ${className}`;
      return (
        <Icon alt="Zend" className={classNames} {...propsRest}>
          <path d="M11.28,9.81C11.28,9.81 11.28,7 14.09,7H22.5C22.5,7 22.5,9.81 19.71,9.81H11.28M11.28,13.41C11.28,13.41 11.28,10.6 14.09,10.6H18.31C18.31,10.6 18.31,13.41 15.5,13.41H11.28M11.28,17C11.28,17 11.28,14.19 14.09,14.19H15.5C15.5,14.19 15.5,17 12.68,17H11.28M10.46,14.8V17H1.58L7.3,9.21H2.4V7H11.66L5.96,14.8H10.46Z" />

        </Icon>
      );
    };
    ZendIcon.displayName = 'ZendIcon';
      