import React, { FC } from 'react';
    import { Icon, IconInterface } from "@redesign-system/ui-core";
    export const VuetifyIcon: FC<IconInterface> = function VuetifyIcon({
      className,
      ...propsRest
    }) {
      const classNames =  `VuetifyIcon ${className}`;
      return (
        <Icon alt="Vuetify" className={classNames} {...propsRest}>
          <path d="M12,11.64L7.92,2H16.08L12,11.64M12,21.95L3.27,4.91H7.84L12,14.47L16.16,4.91H20.73L12,21.95Z" />

        </Icon>
      );
    };
    VuetifyIcon.displayName = 'VuetifyIcon';
      