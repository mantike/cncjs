import PropTypes from 'prop-types';
import React from 'react';
import Anchor from '../../components/Anchor';
import { ToastNotification } from '../../components/Notifications';
import i18n from '../../lib/i18n';
import {
    NOTIFICATION_CATEGORY_M0_PROGRAM_PAUSE,
    NOTIFICATION_CATEGORY_M1_PROGRAM_PAUSE,
    NOTIFICATION_CATEGORY_M2_PROGRAM_END,
    NOTIFICATION_CATEGORY_M30_PROGRAM_END,
    NOTIFICATION_CATEGORY_M6_TOOL_CHANGE
} from './constants';

const Notifications = ({ show, category, onDismiss, ...props }) => {
    if (!show || !category) {
        return null;
    }

    return (
        <div {...props}>
            {category === NOTIFICATION_CATEGORY_M0_PROGRAM_PAUSE &&
            <ToastNotification
                type="info"
                onDismiss={onDismiss}
            >
                <div><strong>{i18n._('M0 Program Pause')}</strong></div>
                <div>{i18n._('Click the Resume button to resume program execution.')}</div>
            </ToastNotification>
            }
            {category === NOTIFICATION_CATEGORY_M1_PROGRAM_PAUSE &&
            <ToastNotification
                type="info"
                onDismiss={onDismiss}
            >
                <div><strong>{i18n._('M1 Program Pause')}</strong></div>
                <div>{i18n._('Click the Resume button to resume program execution.')}</div>
            </ToastNotification>
            }
            {category === NOTIFICATION_CATEGORY_M2_PROGRAM_END &&
            <ToastNotification
                type="info"
                onDismiss={onDismiss}
            >
                <div><strong>{i18n._('M2 Program End')}</strong></div>
                <div>{i18n._('Click the Stop button to stop program execution.')}</div>
            </ToastNotification>
            }
            {category === NOTIFICATION_CATEGORY_M30_PROGRAM_END &&
            <ToastNotification
                type="info"
                onDismiss={onDismiss}
            >
                <div><strong>{i18n._('M30 Program End')}</strong></div>
                <div>{i18n._('Click the Stop button to stop program execution.')}</div>
            </ToastNotification>
            }
            {category === NOTIFICATION_CATEGORY_M6_TOOL_CHANGE &&
            <ToastNotification
                type="info"
                onDismiss={onDismiss}
            >
                <div><strong>{i18n._('M6 Tool Change')}</strong></div>
                <div>
                    {i18n._('Run a tool change macro to change the tool and adjust the Z-axis offset. Afterwards, click the Resume button to resume program execution.')}
                    <span className="space space-sm" />
                    <Anchor
                        target="_blank"
                        href="https://github.com/cncjs/cncjs/wiki/M6-Tool-Change"
                    >
                        {i18n._('Learn more')}
                    </Anchor>
                </div>
            </ToastNotification>
            }
        </div>
    );
};

Notifications.propTypes = {
    show: PropTypes.bool,
    category: PropTypes.string,
    onDismiss: PropTypes.func
};

export default Notifications;
