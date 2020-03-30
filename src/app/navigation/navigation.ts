export const navigation = [
    {
        'id': 'notifications',
        'title': 'Notifications',
        'type': 'group',
        'hidden': false,
        'children': [
            {
                'id': 'sms',
                'title': 'Sms',
                'type': 'item',
                'icon': 'message',
                'url': '/notification-jobs/sms',
                'hidden': false
            },
            {
                'id': 'emails',
                'title': 'Emails',
                'type': 'item',
                'icon': 'mail',
                'url': '/notification-jobs/emails',
                'hidden': false
            }
        ]
    },
    {
        'id': 'printing',
        'title': 'Printing',
        'type': 'group',
        'hidden': false,
        'children': [
            {
                'id': 'dashboard',
                'title': 'Dashboard',
                'type': 'item',
                'icon': 'dashboard',
                'url': '/dashboard',
                'hidden': true
            },
            {
                'id': 'print-requests',
                'title': 'Print Requests',
                'type': 'item',
                'icon': 'cloud',
                'url': '/print-requests',
                'hidden': false
            },
            {
                'id': 'printing-jobs',
                'title': 'Printing Jobs',
                'type': 'item',
                'icon': 'flash_on',
                'url': '/printing-jobs',
                'hidden': false
            }
        ]
    }, {
        'id': 'setups',
        'title': 'Setups',
        'type': 'group',
        'hidden': false,
        'children': [
            {
                'id': 'notifications',
                'title': 'Notifications',
                'type': 'item',
                'icon': 'notifications',
                'url': '/setups/notifications',
                'hidden': false
            },
            {
                'id': 'print-documents',
                'title': 'Documents',
                'type': 'item',
                'icon': 'file_copy',
                'url': '/print-documents',
                'hidden': false
            },
            {
                'id': 'printers',
                'title': 'Printers',
                'type': 'item',
                'icon': 'printers',
                'url': '/printers',
                'hidden': false
            }
        ]
    }

];
